import { useMutation, useQueryClient } from '@tanstack/react-query';
import useInput from '../../hooks/useInput';
import { createPost } from '../../api/post';
import { useNavigate } from 'react-router';
import { DivideTitle } from '../../components/ArticleList/ArticleHeader.styled';
import * as S from './PostPage.styled';
import { DropDownIcon } from '../../styles/icons/SvgIcons';

const PostPage = () => {
  const [title, handleOnChangeTitle, setTitle] = useInput();
  const [contents, handleOnChangeContents, setContents] = useInput();

  const navigate = useNavigate();
  const currentDate = new Date();

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    }
  });

  const handleSubmitButtonClick = () => {
    // 유효성 검사
    // 제목, 내용 모두 입력되어야 한다.
    if (!title.trim()) {
      return alert('제목이 입력되지 않았습니다!');
    } else if (!contents.trim()) {
      return alert('내용이 입력되지 않았습니다!');
    }

    const newPost = {
      id: Math.random(),
      title,
      category: '카테고리',
      content: contents,
      mbti: 'ENFP',
      memberSeq: 123,
      nickname: '사용자_닉네임',
      postImageSeq: 456,
      isDeleted: false,
      createdAt: currentDate.toISOString(),
      updatedAt: currentDate.toISOString()
    };

    mutation.mutate(newPost);

    setTitle('');
    setContents('');
    alert('저장되었습니다!');
    navigate('/article');
  };

  return (
    <S.Container>
      <S.PostNavBox>
        <S.CancelButton onClick={() => navigate(-1)}>취소</S.CancelButton>
        <div>
          <S.Button onClick={handleSubmitButtonClick}>게시</S.Button>
        </div>
      </S.PostNavBox>
      <S.CategorySelect>카테고리선택</S.CategorySelect>
      {/* <DropDownIcon /> */}
      <DivideTitle />
      <div>
        <S.Input value={title} onChange={handleOnChangeTitle} placeholder="제목" />
        <DivideTitle />
        <S.Textarea value={contents} onChange={handleOnChangeContents} placeholder="내용" />
      </div>
    </S.Container>
  );
};

export default PostPage;