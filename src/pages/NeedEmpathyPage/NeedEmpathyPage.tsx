import React from 'react';
import * as S from './NeedEmpathyPage.styled';
import Header from '../../components/Header/Header';
import { BackButton } from '../../shared/BackButton';
import { useQuery } from '@tanstack/react-query';
import { getNeedEmpathy } from '../../api/mainpagelist';
import { PostDetail } from '../../types/type';
import { formatNoticeDate } from '../../shared/dateUtils';

const NeedEmpathyPage: React.FC<any> = () => {
  const { data, error, isLoading } = useQuery<any>({
    queryKey: ['mainNeedEmpathy'],
    queryFn: () => getNeedEmpathy()
  });
  const getData: PostDetail[] = data?.data?.content;

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
      {getData && getData.length >= 0 ? (
        <ul>
          {getData.map((post: any) => (
            <div key={post.createdAt}>
              <S.EmpathyList>
                <S.EmpathyListTitle>{post.title}</S.EmpathyListTitle>
                <S.EmpathyListCreateAt>{formatNoticeDate(post.createdAt)}</S.EmpathyListCreateAt>
              </S.EmpathyList>
            </div>
          ))}
        </ul>
      ) : (
        <p>No List found</p>
      )}
    </>
  );
};
export default NeedEmpathyPage;
