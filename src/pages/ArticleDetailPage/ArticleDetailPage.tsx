import { useParams } from 'react-router-dom';
import ArticleHeader from '../../components/ArticleList/ArticleHeader';
import { ArticleDivider } from '../../components/ArticleList/Article.styled';
import { ArticleDetailContent, ArticleDetailTitle, ArticleWriter } from './ArticleDetailPage.styled';
import ArticleComment from '../../components/Comments/ArticleComment';
import { useQuery } from '@tanstack/react-query';
import { getPostDetail } from '../../api/post';
import { PostDetail } from '../../types/type';
import { formatDetailDate } from '../../shared/dateUtils';

const ArticleDetailPage = () => {
  const { id } = useParams();
  const { isLoading, isError, data } = useQuery<PostDetail>({
    queryKey: ['post', `${id}`],
    queryFn: () => getPostDetail(id!)
  });

  if (isLoading) {
    return <h1>로딩중입니다~~~~</h1>;
  }

  if (isError) {
    return <h1>오류가 발생하였습니다....!!!</h1>;
  }
  return (
    <>
      {/* <Header /> */}
      <ArticleHeader />
      <ArticleDetailTitle>{data?.title}</ArticleDetailTitle>
      <ArticleDivider />
      <div>
        <ArticleWriter>
          {data?.nickname || '익명'} • {data?.updatedAt ? formatDetailDate(data.updatedAt) : '날짜 없음'}
        </ArticleWriter>
        <ArticleDetailContent>{data?.content}</ArticleDetailContent>
        <ArticleDivider style={{ height: '6px' }} />
      </div>
      <ArticleComment />
    </>
  );
};

export default ArticleDetailPage;
