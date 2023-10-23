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
        <S.Title>쁘띠 업데이트⚒️</S.Title>
        <S.CreatedAt>{firstNotice.createdAt}</S.CreatedAt>
        <S.Content>{firstNotice.content}</S.Content>
      </S.NoticeCard>
    </>
  );
};

export default Notice;
