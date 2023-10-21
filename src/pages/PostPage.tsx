import useInput from '../hooks/useInput';
import { BackArrowButton } from '../styles/icons/SvgIcons';

const PostPage = () => {
  const [title, handleOnChangeTitle, setTitle] = useInput();
  const [contents, handleOnChangeContents, setContents] = useInput();

  return (
    <>
      <div>
        <BackArrowButton />
        <h2>글쓰기</h2>
      </div>
      <div>
        <div>카테고리선택</div>
        <button>게시하기</button>
      </div>
      <div>
        <input value={title} onChange={handleOnChangeTitle} placeholder="제목" />
        <textarea value={contents} onChange={handleOnChangeContents} placeholder="내용" />
      </div>
    </>
  );
};

export default PostPage;
