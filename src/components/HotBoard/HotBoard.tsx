import React from 'react';
// import * as S from './HotBoard.styled';
import { getHotboard } from '../../api/get';
import { useQuery } from '@tanstack/react-query';

const HotBoard: React.FC<any> = () => {
  const { data, error, isLoading } = useQuery<any>({
    queryKey: ['get'],
    queryFn: () => getHotboard()
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(data);
  return (
    <div>
      {Array.isArray(data) &&
        data.map((hotboard: any) => (
          <div key={hotboard.seq}>
            <div>{hotboard.title}</div>
            <div>{hotboard.category}</div>
            <div>{hotboard.content}</div>
            <div>{hotboard.createdAt}</div>
          </div>
        ))}
    </div>
  );
};

export default HotBoard;
