import React from 'react';
import * as S from './NeedSolution.styled';

const NeedSolution: React.FC<any> = () => {
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
      {dummydata
        .filter((notice) => notice.id <= '3')
        .map((notice, idx) => {
          return (
            <S.SolutionWrapper key={notice.id}>
              <S.TitleStyle>{notice.title}</S.TitleStyle>
              <S.DateStyle>{notice.date}</S.DateStyle>
            </S.SolutionWrapper>
          );
        })}
    </>
  );
};
export default NeedSolution;
