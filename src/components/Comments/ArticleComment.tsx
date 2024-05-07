import { useQuery, useMutation, useQueryClient, QueryFunction } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { DivideTitle } from '../ArticleList/ArticleHeader.styled';
import * as S from './ArticleComment.styled';
import { CommentPost, CommentGet } from '../../types/type';
import { getComment, createComment } from '../../api/commentpost';
import { useRecoilValue } from 'recoil';
import { userNicknameState } from '../../atoms/atoms';
import { getElapsedTime } from '../../shared/dateUtils';

const ArticleComment = () => {
  const token = sessionStorage.getItem('accessToken');
  const [contents, handleOnChangeContents, setContents] = useInput();
  // postId 기반으로 데이터 가져올 예정
  const { id } = useParams();
  let postId = parseInt(id!);
  if (isNaN(postId)) {
    // postId가 NaN인 경우 처리
    postId = -1;
  }
  const queryClient = useQueryClient();

  const {
    data: commentData,
    isLoading,
    isError
  } = useQuery<CommentGet[]>({
    queryKey: ['getComment', `${postId}`],
    queryFn: getComment as QueryFunction<CommentGet[]>
    // queryFn: getComment as QueryFunction<RequestPost[]>
  });

  const commentTagButtons = ['전체', 'T반응', 'F반응'];
  const mbtiTest = 'T';
  const mutation = useMutation({
    mutationFn: (newComment: CommentPost) => createComment(newComment, token, postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getComment'] });
    }
  });

  if (isLoading) {
    return <div>Loading...</div>; // 데이터 로딩 중일 때
  }

  if (isError) {
    return <div>데이터가 안불러와져</div>; // 데이터를 가져오는 동안 오류가 발생한 경우
  }


  const handleSubmitButtonClick = () => {
    if (!token) {
      return alert('로그인 해주세요!');
    }
    // 유효성 검사
    // 내용 모두 입력되어야 한다.
    if (!contents.trim()) {
      return alert('제목이 입력되지 않았습니다!');
    }

    mutation.mutate(newComment);
    setContents('');
    alert('저장되었습니다!');
  };

  const newComment: CommentPost = {
    postId: postId,
    parentId: null,
    content: contents,
    // nickname: userNickname || null,
    mbti: mbtiTest,
    // createdAt: nowTime.toISOString()
  };

  return (
    <>
      <S.CommentMainTitle>
        <S.CommentMain>댓글</S.CommentMain>
        <S.CommentCount>{commentData?.length}</S.CommentCount>
      </S.CommentMainTitle>
      <S.CommentTagButtonBox>
        {commentTagButtons.map((title, idx) => (
          <S.CommentTagButton key={idx}>
            <S.CommentButtonText>{title}</S.CommentButtonText>
          </S.CommentTagButton>
        ))}
      </S.CommentTagButtonBox>
      {commentData &&
        commentData.map((comment, idx) => (
          <div key={idx}>
            <DivideTitle />
            <S.CommentHeader>
              <S.CommentMbti mbti={comment.mbti}>
                <S.CommentButtonText>{comment.mbti}</S.CommentButtonText>
              </S.CommentMbti>
              <S.CommentWriter>{comment.nickName}</S.CommentWriter>
              <S.CommentTime>{getElapsedTime(comment.createdAt)}</S.CommentTime>
            </S.CommentHeader>
            <S.CommentContent>{comment.content}</S.CommentContent>
            {/* {idx < commentData.length - 1 && <S.CommentDivider />} */}
          </div>
        ))}
      <DivideTitle />
      <S.CommentPostWrapper>
        <S.CommentPostInput value={contents} onChange={handleOnChangeContents} placeholder="내용"></S.CommentPostInput>
        <S.CommentPostButton onClick={handleSubmitButtonClick}>입력</S.CommentPostButton>
      </S.CommentPostWrapper>
    </>
  );
};

export default ArticleComment;
