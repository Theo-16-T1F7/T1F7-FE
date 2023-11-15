import React from 'react';
import * as S from './NeedSolutionPage.styled';
import Header from '../../components/Header/Header';
import { BackButton } from '../../shared/BackButton';
import { useQuery } from '@tanstack/react-query';
import { getNeedSolution } from '../../api/mainpagelist';
import { PostDetail } from '../../types/type';
import { formatNoticeDate } from '../../shared/dateUtils';

const NeedSolutionPage: React.FC<any> = () => {
  const { data, error, isLoading } = useQuery<any>({
    queryKey: ['mainNeedSolution'],
    queryFn: () => getNeedSolution()
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
        <S.SubheadingText> 해결이 필요해👩‍⚖️</S.SubheadingText>
      </S.Subheading>
      {getData && getData.length > 0 ? (
        <ul>
          {getData.map((post: any) => (
            <div key={post.createdAt}>
              <S.SolutionList>
                <S.SolutionListTitle>{post.title}</S.SolutionListTitle>
                <S.SolutionListCreateAt>{formatNoticeDate(post.createdAt)}</S.SolutionListCreateAt>
              </S.SolutionList>
            </div>
          ))}
        </ul>
      ) : (
        <p>No List found</p>
      )}
    </>
  );
};
export default NeedSolutionPage;
