import React from 'react';
import * as S from './Notice.styled';
import { getNotice } from '../../api/notice';
import { useQuery } from '@tanstack/react-query';

const Notice = () => {
  const formatNoticeDate = (createdAt: string) => {
    const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = (1 + date.getMonth()).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}/${month}/${day} `;
    return formattedDate;
  };

  const { data, error, isLoading } = useQuery<any>({
    queryKey: ['getNotice'],
    queryFn: () => getNotice()
  });
  if (isLoading) {
    return <div>로딩중...</div>;
  }
  if (error) {
    return <div>에러!: {error.message}</div>;
  }
  if (!data || data.length === 0 || !data[0].createdAt) {
    return <div>데이터 오류</div>;
  }
  const firstNotice = data[0];

  return (
    <>
      <S.NoticeCard>
        <S.Title>
          쁘띠 업데이트⚒️
          <S.CreatedAt>{formatNoticeDate(firstNotice.createdAt)}</S.CreatedAt>
        </S.Title>
        <S.Content>{firstNotice.content}</S.Content>
      </S.NoticeCard>
    </>
  );
};

export default Notice;
