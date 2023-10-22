import * as S from './ArticleHeader.styled';
import { useNavigate } from 'react-router-dom';
import { BackArrowButton } from '../../styles/icons/SvgIcons';

interface Props {
  children: string;
}

const ArticleHeader = (props: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <S.ArticleHeader>
        <div
          onClick={() => {
            navigate('/');
          }}
        >
          <BackArrowButton />
        </div>
        <h2>{props.children}</h2>
      </S.ArticleHeader>
      <S.DivideTitle />
    </>
  );
};

export default ArticleHeader;
