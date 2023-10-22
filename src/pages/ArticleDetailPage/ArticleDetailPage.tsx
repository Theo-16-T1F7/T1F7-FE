import { useParams } from 'react-router-dom';
import ArticleHeader from '../../components/ArticleList/ArticleHeader';
import { ArticleDivider } from '../../components/ArticleList/Article.styled';
import { ArticleDetailContent, ArticleDetailTitle, ArticleWriter } from './ArticleDetailPage.styled';

const ArticleDetailPage = () => {
  const { id } = useParams();
  return (
    <>
      <ArticleHeader />
      <ArticleDetailTitle>제목{id}</ArticleDetailTitle>
      <ArticleDivider />
      <ArticleWriter>작성자 • 2023.10.21.21:27</ArticleWriter>
      <ArticleDetailContent>
        내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
      </ArticleDetailContent>
      <ArticleDivider style={{ height: '6px' }} />
    </>
  );
};

export default ArticleDetailPage;
