import React from 'react';
import * as S from './NeedSolution.styled';
import { useQuery } from '@tanstack/react-query';
import { getNeedSolution } from '../../api/mainpagelist';
import { PostDetail } from '../../types/type';

const NeedSolution: React.FC<any> = () => {
  const { data, error, isLoading } = useQuery<any>({
    queryKey: ['mainNeedSolution'],
    queryFn: () => getNeedSolution()
  });
  const getData: PostDetail[] = data?.data?.content?.slice(0, 3) || [];
  console.log('res', getData);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const dummydata = [
    {
      id: '1',
      title: '해결이 필요해요?1',
      content: '안녕하세요1 쁘디입니다.',
      date: '2023/10/22 08:24'
    },
    {
      id: '2',
      title: '해결이 필요해요?2',

      content: '안녕하세요2 쁘디입니다.',
      date: '2023/10/23 08:24'
    },
    {
      id: '3',
      title: '해결이 필요해요?3',
      content: '안녕하세요3 쁘디입니다.',
      date: '2023/10/24 08:24'
    }
  ];
  return (
    <>
      {getData?.map((data, idx) => {
        return (
          <S.SolutionWrapper key={idx}>
            <S.TitleStyle>{data.title}</S.TitleStyle>
            <S.DateStyle>{data.createdAt}</S.DateStyle>
          </S.SolutionWrapper>
        );
      })}
    </>
  );
};
export default NeedSolution;
