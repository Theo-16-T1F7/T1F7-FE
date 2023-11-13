import React from 'react';
import * as S from './NeedEmpathyPage.styled';
import Header from '../../components/Header/Header';
import { BackArrowButton } from '../../styles/icons/BackArrowButton';
import { useQuery, QueryFunction } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getNotice } from '../../api/notice';
import { formatNoticeDate } from '../../shared/dateUtils';
import { BackButton } from '../../shared/BackButton';

interface Notice {
  id: number;
  title: string;
  createdAt: string;
}

const NoticePage: React.FC<any> = () => {

  const { data, error, isLoading } = useQuery<Notice[], AxiosError>({
    queryKey: ['getNotice'],
    queryFn: getNotice as QueryFunction<Notice[]>
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <>
      <Header />
      <S.Subheading>
        <BackButton />
        <S.SubheadingText> 공감이 필요해🥹</S.SubheadingText>
      </S.Subheading>
      {data && data.length > 0 ? (
        <ul>
          {data.map((notice: any) => (
            <div key={notice.id}>
              <S.NoticeList>
                <S.NoticeListTitle>{notice.title}</S.NoticeListTitle>
                <S.NoticeListCreateAt>{formatNoticeDate(notice.createdAt)}</S.NoticeListCreateAt>
              </S.NoticeList>
            </div>
          ))}
        </ul>
      ) : (
        <p>No notices found</p>
      )}
    </>
  );
};
export default NoticePage;
