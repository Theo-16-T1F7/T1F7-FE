import React from 'react';
import * as S from './NeedSolution.styled';
import { useQuery } from '@tanstack/react-query';
import { getNeedSolution } from '../../api/mainpagelist';
import { PostDetail } from '../../types/type';
import { formatVoteDate } from '../../shared/dateUtils';

const NeedSolution: React.FC<any> = () => {
  const { data, error, isLoading } = useQuery<any>({
    queryKey: ['mainNeedSolution'],
    queryFn: () => getNeedSolution()
  });
  const getData: PostDetail[] = data?.data?.content?.slice(0, 3) || [];
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {getData?.map((data, idx) => {
        return (
          <S.SolutionWrapper key={idx}>
            <S.TitleStyle>{data.title}</S.TitleStyle>
            <S.DateStyle>{formatVoteDate(data.createdAt)}</S.DateStyle>
          </S.SolutionWrapper>
        );
      })}
    </>
  );
};
export default NeedSolution;
