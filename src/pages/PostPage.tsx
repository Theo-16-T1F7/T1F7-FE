import { useMutation, useQueryClient } from '@tanstack/react-query';
import useInput from '../hooks/useInput';
import { BackArrowButton } from '../styles/icons/SvgIcons';
import { createPost } from '../api/post';
import { useNavigate } from 'react-router';

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
    <>
      <div>
        <BackArrowButton />
        <h2>글쓰기</h2>
      </div>
      <div>
        <div>카테고리선택</div>
        <button onClick={handleSubmitButtonClick}>게시하기</button>
      </div>
      <div>
        <input value={title} onChange={handleOnChangeTitle} placeholder="제목" />
        <textarea value={contents} onChange={handleOnChangeContents} placeholder="내용" />
      </div>
    </>
  );
};

export default PostPage;
