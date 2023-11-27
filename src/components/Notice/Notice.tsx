import React from 'react';
import * as S from './Notice.styled';
import { getNotice } from '../../api/notice';
import { useQuery } from '@tanstack/react-query';
import { formatNoticeDate } from '../../shared/dateUtils';

interface NoticeItem {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

const Notice = () => {
  const { data, error, isLoading } = useQuery<NoticeItem[]>({
    queryKey: ['getNotice'],
    queryFn: () => getNotice()
  });
  if (isLoading) {
    return <div>로딩중...</div>;
  }
  if (error) {
    return <div>에러!: {error.message}</div>;
  }
  // data의 값이 'undefined'일때 데이터 오류 
  if (error || !data || data.length === 0 || !data[0]?.createdAt) {
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
