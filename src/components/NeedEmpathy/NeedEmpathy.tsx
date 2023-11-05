import React from 'react';
import * as S from '../NeedSolution/NeedSolution.styled';

const NeedEmpathy: React.FC<any> = () => {
  const dummydata = [
    {
      id: '1',
      title: '여자친구랑 싸웠는데 제 잘못인가요?1',
      content: '안녕하세요1 쁘디입니다.',
      date: '2023/10/22 08:24'
    },
    {
      id: '2',
      title: '여자친구랑 싸웠는데 제 잘못인가요?2',

      content: '안녕하세요2 쁘디입니다.',
      date: '2023/10/23 08:24'
    },
    {
      id: '3',
      title: '여자친구랑 싸웠는데 제 잘못인가요?3',
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
export default NeedEmpathy;
