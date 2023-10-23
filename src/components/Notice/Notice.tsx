import React from 'react';
import * as S from './Notice.styled';
import { getNotice } from '../../api/notice';
import { useQuery } from '@tanstack/react-query';
import { theme } from '../../styles/theme';

const Notice = () => {
  const { data, error, isLoading } = useQuery<any>({
    queryKey: ['getNotice'],
    queryFn: () => getNotice()
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const firstNotice = data[0];

  return (
    <>
      <S.NoticeCard>
        <div>{firstNotice.title}</div>
        <div>{firstNotice.content}</div>
        <div>{firstNotice.createdAt}</div>
      </S.NoticeCard>
    </>
  );
};

export default Notice;
