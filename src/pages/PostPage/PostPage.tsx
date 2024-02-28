import { useMutation, useQueryClient } from '@tanstack/react-query';
import useInput from '../../hooks/useInput';
import { createPost } from '../../api/post';
import { useNavigate } from 'react-router';
import { DivideTitle } from '../../components/ArticleList/ArticleHeader.styled';
import * as S from './PostPage.styled';
import { DropDownIcon } from '../../styles/icons/SvgIcons';
import { useRef, useState } from 'react';
import { atom, useRecoilValue } from 'recoil';
import { RequestPost } from '../../types/type';

const PostPage = () => {
  const [title, handleOnChangeTitle, setTitle] = useInput();
  const [contents, handleOnChangeContents, setContents] = useInput();
  const [isVisible, setIsVisible] = useState(false);
  const [selectValue, setselectValue] = useState('카테고리를 선택하세요');
  const [hashList, setHashList] = useState<number[]>([]);
  const [buttonColors, setButtonColors] = useState<{ [key: number]: string }>({});

  const selectRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

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
  // const token = useRecoilValue(accessTokenState);
  const token = sessionStorage.getItem('accessToken');

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (newPost: RequestPost) => createPost(newPost, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    }
  });

  const showCategoryButtonClickVisability = () => {
    setIsVisible(true);
  };

  const hideSelect = () => {
    setIsVisible(false);
  };

  const selectedValue = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    setselectValue(target.innerText);
    setIsVisible(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (Boolean(selectRef.current) && event.target !== selectRef.current) {
      hideSelect();
    }
  };

  const handleHashtagButtonClick = (tag: number) => {
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

  const handleSubmitButtonClick = () => {
    if (!token) {
      return alert('로그인 해주세요!');
    }
    // 유효성 검사
    // 제목, 내용 모두 입력되어야 한다.
    if (!title.trim()) {
      return alert('제목이 입력되지 않았습니다!');
    } else if (!contents.trim()) {
      return alert('내용이 입력되지 않았습니다!');
    }
    let category;
    if (selectValue === '카테고리를 선택하세요') {
      category = '';
    } else {
      category = Array.from(selectValue)[0];
    }

    const newPost = {
      // nickname: 'f테스트 닉네임', //게시글 작성자
      title: title, //게시글 제목
      content: contents, //게시글 내용
      mbti: category, //게시글 카테고리
      // password: 'test', //게시글 비밀번호(수정, 삭제에 사용)
      hashList: hashList.sort()
    };

    mutation.mutate(newPost);
    setTitle('');
    setContents('');
    alert('저장되었습니다!');
    navigate('/');
  };

  return (
    <S.Container onClick={handleClick}>
      <S.PostNavBox>
        <S.CancelButton onClick={() => navigate(-1)}>취소</S.CancelButton>
        <div>
          <S.Button onClick={handleSubmitButtonClick}>게시</S.Button>
        </div>
      </S.PostNavBox>
      <S.CategorySelectBox onClick={showCategoryButtonClickVisability}>
        <S.CategorySelect>{selectValue}</S.CategorySelect>
        <DropDownIcon />
        {isVisible && (
          <S.CategoryOptionListBox ref={selectRef}>
            <S.CategoryOptionListDetail onClick={selectedValue}>T/해결이 필요해</S.CategoryOptionListDetail>
            <S.CategoryOptionListDetail onClick={selectedValue}>F/공감이 필요해</S.CategoryOptionListDetail>
          </S.CategoryOptionListBox>
        )}
      </S.CategorySelectBox>
      <div>
        <S.Input value={title} onChange={handleOnChangeTitle} placeholder="제목" />
        <DivideTitle />
        <S.Writer>작성자: </S.Writer>
        <S.Textarea value={contents} onChange={handleOnChangeContents} placeholder="내용" />
      </div>
      <S.HashtagButtonTitle>해시태그 선택</S.HashtagButtonTitle>
      <S.HashtagButtonBox>
        <S.HashtagButtonWrapper>
          {hashtags?.map((item, idx) => {
            return (
              <S.HashtagButton
                key={idx}
                $buttonColor={buttonColors[item.tag] || ''}
                onClick={() => handleHashtagButtonClick(item.tag)}
              >
                {item.name}
              </S.HashtagButton>
            );
          })}
        </S.HashtagButtonWrapper>
      </S.HashtagButtonBox>
    </S.Container>
  );
};

export default PostPage;
