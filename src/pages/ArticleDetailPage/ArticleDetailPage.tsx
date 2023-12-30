import { useParams } from 'react-router-dom';
import ArticleHeader from '../../components/ArticleList/ArticleHeader';
import { ArticleDivider } from '../../components/ArticleList/Article.styled';
import { ArticleDetailContent, ArticleDetailTitle, ArticleWriter } from './ArticleDetailPage.styled';
import ArticleComment from '../../components/Comments/ArticleComment';
import { useQuery } from '@tanstack/react-query';
import { getPostDetail } from '../../api/post';
import { PostDetail } from '../../types/type';

const ArticleDetailPage = () => {
  // const { id } = useParams();
  // const { isLoading, isError, data } = useQuery<PostDetail>({
  //   queryKey: ['post', `${id}`],
  //   queryFn: () => getPostDetail(id!)
  // });

  // if (isLoading) {
  //   return <h1>로딩중입니다~~~~</h1>;
  // }

  // if (isError) {
  //   return <h1>오류가 발생하였습니다....!!!</h1>;
  // }
  const data = {
    id: 12, //해당 게시글Id
    title: '수정테스트3', //게시글 제목
    content: '수정입니다3', //게시글 내용
    mbti: 'F', //게시글 카테고리
    nickname: '누군가요', //게시글 작성자
    createdAt: '2023-11-05T21:26:10.719654', //게시글 생성일자
    updatedAt: '2023-11-06T21:46:29.561676', //게시글 수정일자
    //해당 게시글의 해시태그
    //Key값은 나중에 수정시에 사용 value만 사용하면됌.
    hashInfo: {
      '23': '우울',
      '24': '기쁨'
    }
  };
  return (
    <>
      <ArticleHeader />
      <ArticleDetailTitle>{data?.title}</ArticleDetailTitle>
      <ArticleDivider />
      <div>
        <ArticleWriter>
          {data?.nickname} • {data?.updatedAt}
        </ArticleWriter>
        <ArticleDetailContent>{data?.content}</ArticleDetailContent>
        <ArticleDivider style={{ height: '6px' }} />
      </div>
      <ArticleComment />
    </>
  );
};

export default ArticleDetailPage;
