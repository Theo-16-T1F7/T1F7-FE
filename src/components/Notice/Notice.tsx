import React from 'react';
// import * as S from './Notice.styled';
import { getNotice } from '../../api/notice';
import { useQuery } from '@tanstack/react-query';

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
  console.log(data);
  return (
    <div>
      {Array.isArray(data) &&
        data.map((notice: any, index: number) => (
          <div key={index}>
            <div>{notice.title}</div>
            <div>{notice.content}</div>
            <div>{notice.createdAt}</div>
          </div>
        ))}
    </div>
  );
};

export default Notice;
