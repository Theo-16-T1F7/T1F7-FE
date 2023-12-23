import { useState } from 'react';
import * as S from './EmotionStory.styled';
import { getEmotionStory } from '../../../api/mainpagelist';
import { useQuery } from '@tanstack/react-query';
import { MainPost } from '../../../types/type';

const EmotionStory = () => {
  // const hashtags = ['기뻐요', '슬퍼요', '화가나', '억울해', '궁금해', '고민돼', '답답해'];
  const [hashList, setHashList] = useState<number[]>([]);
  const [buttonColors, setButtonColors] = useState<{ [key: number]: string }>({});

  const { data, error, isLoading } = useQuery<any>({
    queryKey: ['emotionStory', hashList],
    queryFn: () => getEmotionStory(hashList)
  });

  const hashtags = [
    {
      name: '기뻐요',
      tag: 1
    },
    {
      name: '슬퍼요',
      tag: 2
    },
    {
      name: '화가나',
      tag: 3
    },
    {
      name: '억울해',
      tag: 4
    },
    {
      name: '궁금해',
      tag: 5
    },
    {
      name: '고민돼',
      tag: 6
    },
    {
      name: '답답해',
      tag: 7
    }
  ];

  const getData: MainPost[] = data?.data?.content?.slice(0, 2) || [];

  const handleEmotionButtonClick = (tag: number) => {
    setButtonColors((prevColors) => {
      // 클릭된 버튼의 태그를 기반으로 해당 버튼의 색상 상태를 변경
      const newColors = { ...prevColors };
      if (newColors[tag] !== 'red') {
        newColors[tag] = 'red';
        if (!hashList.includes(tag)) {
          setHashList((prevHashList) => [...prevHashList, tag]);
        }
      } else {
        newColors[tag] = '';
        if (hashList.includes(tag)) {
          setHashList((prevHashList) => prevHashList.filter((item) => item !== tag));
        }
      }
      return newColors;
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <S.EmotionWrapper>
        <S.Subheading>감정별 이야기</S.Subheading>
        <S.EmotionButtonBox>
          <S.EmotionButtonWrapper>
            {hashtags?.map((item, idx) => {
              return (
                <S.EmotionButton
                  key={idx}
                  buttoncolor={buttonColors[item.tag] || ''}
                  onClick={() => handleEmotionButtonClick(item.tag)}
                >
                  {item.name}
                </S.EmotionButton>
              );
            })}
          </S.EmotionButtonWrapper>
        </S.EmotionButtonBox>

        <S.EmtoionCardBox>
          {getData?.map((item, idx) => {
            const date = new Date(item.createdAt);
            const formattedDate = `${date.getFullYear().toString().slice(-2)}/${date.getMonth() + 1}/${date.getDate()}`;
            // const formattedDate = `${item?.createdAt[0]}/${item?.createdAt[1]}/${item?.createdAt[2]}`;
            return (
              <S.EmotionCardLayout key={item.postId}>
                <S.EmotionContentStyle>{item.content}</S.EmotionContentStyle>
                <S.EmotionCardBottomLayout>
                  <div
                    style={{ width: '18px', height: '18px', borderRadius: '67.5px', backgroundColor: '#1A1A1A' }}
                  ></div>
                  <S.UserLayout>{item.nickname}</S.UserLayout>
                  <S.TendencyLayout>나는 {item.mbti}성향</S.TendencyLayout>
                  <S.DateLayout>{formattedDate}</S.DateLayout>
                </S.EmotionCardBottomLayout>
              </S.EmotionCardLayout>
            );
          })}
        </S.EmtoionCardBox>
      </S.EmotionWrapper>
    </>
  );
};

export default EmotionStory;
