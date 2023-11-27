import React, { useState } from 'react';
import * as S from './NoticePage.styled';
import Header from '../../components/Header/Header';
import { useQuery, QueryFunction } from '@tanstack/react-query';
import { getNotice } from '../../api/notice';
import { formatNoticeDate } from '../../shared/dateUtils';
import { BackButton } from '../../shared/BackButton';

interface NoticeItem {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

const NoticePage = () => {
  const { data, error, isLoading } = useQuery<NoticeItem[]>({
    queryKey: ['getNotice'],
    queryFn: getNotice as QueryFunction<NoticeItem[]>
  });

  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const handleItemClick = (id: number) => {
    if (expandedItem === id) {
      setExpandedItem(null);
    } else {
      setExpandedItem(id);
    }
  };

  if (isLoading) {
    return <div>로딩중...</div>;
  }
  if (error) {
    return <div>에러!: {error.message}</div>;
  }

  return (
    <>
      <Header />
      <S.Subheading>
        <BackButton />
        <S.SubheadingText>공지사항</S.SubheadingText>
      </S.Subheading>
      {data && data.length > 0 ? (
        <ul>
          {data.map((notice: NoticeItem) => (
            <div key={notice.id}>
              <S.NoticeList onClick={() => handleItemClick(notice.id)}>
                {!expandedItem || expandedItem !== notice.id ? (
                  <S.NoticeListTitle>{notice.title}</S.NoticeListTitle>
                ) : (
                  <>
                    <S.NoticeListToggleTitle>{notice.title}</S.NoticeListToggleTitle>
                    <S.NoticeListToggleContent>{notice.content}</S.NoticeListToggleContent>
                  </>
                )}
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
