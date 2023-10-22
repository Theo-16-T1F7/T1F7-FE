import { useNavigate } from 'react-router-dom';
import * as S from './Article.styled';

// 임시 데이터 type
interface DataItem {
  id: string;
  title: string;
  date: string;
}

interface Props {
  data: DataItem[];
}

const ArticleList = (props: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <S.ArticleMain>
        {props.data.map((article, idx) => {
          return (
            <>
              <div key={article.id}>
                <S.ArticleElement
                  onClick={() => {
                    navigate(`${article.id}`);
                  }}
                >
                  <div>{article.title}</div>
                  <div> {article.date}</div>
                </S.ArticleElement>
                {idx < props.data.length - 1 && <S.ArticleDivider />}
              </div>
            </>
          );
        })}
      </S.ArticleMain>
    </>
  );
};

export default ArticleList;
