import { useParams } from 'react-router-dom';
import { DivideTitle } from '../ArticleList/ArticleHeader.styled';
import * as S from './ArticleComment.styled';

const ArticleComment = () => {
  // id 기반으로 데이터 가져올 예정
  const { id } = useParams();
  const sampleData = [
    {
      id: '1',
      author: '메나',
      reaction: 'T',
      comment: '회사 다니신지는 얼마나 되셨나요?',
      time: '2023-09-15 10:30 AM'
    },
    {
      id: '2',
      author: '밤비',
      reaction: 'F',
      comment: '워라벨 없으면 진짜 힘들죠 ㅠㅠ',
      time: '2023-09-15 11:15 AM'
    },
    {
      id: '3',
      author: '에린',
      reaction: 'F',
      comment: '동료분들은 어떤가요?',
      time: '2023-09-15 11:45 AM'
    }
  ];

  const commentTagButtons = ['전체', 'T반응', 'F반응'];
  return (
    <>
      <S.CommentMainTitle>
        <S.CommentMain>댓글</S.CommentMain>
        <S.CommentCount>n개</S.CommentCount>
      </S.CommentMainTitle>
      <S.CommentTagButtonBox>
        {commentTagButtons.map((title, idx) => {
          return (
            <>
              <S.CommentTagButton>
                <S.CommentButtonText>{title}</S.CommentButtonText>
              </S.CommentTagButton>
            </>
          );
        })}
      </S.CommentTagButtonBox>
      <DivideTitle />
      {sampleData.map((data, idx) => {
        return (
          <>
            <S.CommentHeader>
              <S.CommentWriter>{data.author}</S.CommentWriter>
              <S.CommentTime>{data.time}</S.CommentTime>
            </S.CommentHeader>
            <S.CommentContent>{data.comment}</S.CommentContent>
            {idx < sampleData.length - 1 && <S.CommentDivider />}
          </>
        );
      })}
    </>
  );
};

export default ArticleComment;
