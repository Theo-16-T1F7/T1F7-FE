import { useNavigate } from 'react-router-dom';
import * as S from './Article.styled';

// 임시 데이터 type
interface DataItem {
  seq: number;
  title: string;
  date: string;
  category: string;
  content: string;
  mbti: string;
  memberSeq: number;
  nickname: string;
  postImageSeq: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Props {
  data: DataItem[];
}

interface Props {}

const ArticleList = (props: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <S.ArticleMain>
        {props.data.map((article, idx) => {
          return (
            <>
              <div key={article.seq}>
                <S.ArticleElement
                  onClick={() => {
                    navigate(`${article.seq}`);
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
