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
      nickname: 'f테스트 닉네임', //게시글 작성자
      title: title, //게시글 제목
      content: contents, //게시글 내용
      mbti: 'T', //게시글 카테고리
      password: 'test', //게시글 비밀번호(수정, 삭제에 사용)
      hashList: [3, 4]
    };

    mutation.mutate(newPost);

    setTitle('');
    setContents('');
    alert('저장되었습니다!');
    navigate('/');
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
      <DropDownIcon />
      <div>
        <S.Input value={title} onChange={handleOnChangeTitle} placeholder="제목" />
        <DivideTitle />
        <S.Writer>작성자: </S.Writer>
        <S.Textarea value={contents} onChange={handleOnChangeContents} placeholder="내용" />
      </div>
    </S.Container>
  );
};

export default PostPage;
