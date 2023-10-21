import { useNavigate } from 'react-router-dom';
import * as S from '../styles/StArticleList';
import { BackArrowButton, SearchButtonIcon } from '../styles/icons/SvgIcons';

const ArticleListPage = () => {
  const navigate = useNavigate();
  const sampleData = [
    { id: '1', title: '첫 번째 글', date: '2023-09-15' },
    { id: '2', title: '두 번째 글', date: '2023-09-16' },
    { id: '3', title: '세 번째 글', date: '2023-09-17' },
    { id: '4', title: '네 번째 글', date: '2023-09-18' },
    { id: '5', title: '다섯 번째 글', date: '2023-09-19' }
  ];

  return (
    <>
      <S.ArticleNav>
        <div>쁘띠</div>
        <SearchButtonIcon />
      </S.ArticleNav>
      <S.ArticleHeader>
        <div
          onClick={() => {
            navigate('/');
          }}
        >
          <BackArrowButton />
        </div>
        <h2>게시판 목록</h2>
      </S.ArticleHeader>
      <S.DivideTitle />
      <S.ArticleMain>
        {sampleData.map((article, idx) => {
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
                {idx < sampleData.length - 1 && <S.ArticleDivider />}
              </div>
            </>
          );
        })}
      </S.ArticleMain>
    </>
  );
};

export default ArticleListPage;
