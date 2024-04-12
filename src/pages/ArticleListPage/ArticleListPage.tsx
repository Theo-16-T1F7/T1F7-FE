import ArticleList from '../../components/ArticleList/ArticleList';
import ArticleHeader from '../../components/ArticleList/ArticleHeader';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../../api/post';
import Header from '../../components/Header/Header';

const ArticleListPage = () => {
  const { isLoading, isError, data } = useQuery<any>({
    queryKey: ['posts'],
    queryFn: () => getPosts()
  });


  if (isLoading) {
    return <h1>로딩중입니다~~~~</h1>;
  }

  if (isError) {
    return <h1>오류가 발생하였습니다....!!!</h1>;
  }

  return (
    <>
      <Header headercolor={'white'} />
      <ArticleHeader>게시판 목록</ArticleHeader>
      <ArticleList data={data} />
    </>
  );
};

export default ArticleListPage;
