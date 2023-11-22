import { useParams } from 'react-router-dom';
import { NoticeDetailContent, NoticeDetailTitle, NoticeWriter } from './NoticeDetailPage.styled';
import { useQuery } from '@tanstack/react-query';
import { getNoticeDetail } from '../../api/notice';
import { PostDetail } from '../../types/type';

const NoticeDetailPage = () => {
  const { id } = useParams();
  const { isLoading, isError, data } = useQuery<PostDetail>({
    queryKey: ['notice', `${id}`],
    queryFn: () => getNoticeDetail(id!)
  });

  if (isLoading) {
    return <h1>로딩중</h1>;
  }

  if (isError) {
    return <h1>오류</h1>;
  }

  return (
    <>
      <NoticeDetailTitle>{data?.title}</NoticeDetailTitle>
      <div>
        <NoticeWriter>
          {data?.nickname} • {data?.updatedAt}
        </NoticeWriter>
        <NoticeDetailContent>{data?.content}</NoticeDetailContent>
      </div>
    </>
  );
};

export default NoticeDetailPage;
