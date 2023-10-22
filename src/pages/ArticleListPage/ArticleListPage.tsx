import * as S from './ArticleListPage.styled';
import { SearchButtonIcon } from '../../styles/icons/SvgIcons';
import ArticleList from '../../components/ArticleList/ArticleList';
import ArticleHeader from '../../components/ArticleList/ArticleHeader';

const ArticleListPage = () => {
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
      <ArticleHeader>게시판 목록</ArticleHeader>
      <ArticleList data={sampleData} />
    </>
  );
};

export default ArticleListPage;
