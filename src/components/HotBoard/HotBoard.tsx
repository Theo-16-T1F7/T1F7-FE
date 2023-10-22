import React from 'react';
import * as S from './HotBoard.styled';

const HotBoard: React.FC<any> = () => {
  const dummydata = [
    {
      id: '1',
      title: '핫한 게시글인가요?1',
      content: '안녕하세요1 쁘디입니다.',
      date: '2023/10/22'
    },
    {
      id: '2',
      title: '핫한 게시글인가요?2',

      content: '안녕하세요2 쁘디입니다.',
      date: '2023/10/23'
    },
    {
      id: '3',
      title: '핫한 게시글인가요?3',
      content: '안녕하세요3 쁘디입니다.',
      date: '2023/10/24'
    }
  ];

  return (
    <>
      {dummydata
        .filter((notice) => notice.id <= '3')
        .map((notice, idx) => {
          return (
            <div key={notice.id}>
              <div>{notice.title}</div>
              <div>{notice.date}</div>
            </div>
          );
        })}
    </>
  );
};
export default HotBoard;
