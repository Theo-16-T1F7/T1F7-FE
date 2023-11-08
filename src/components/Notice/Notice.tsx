// import React from 'react';
// import * as S from './Notice.styled';
// import { getNotice } from '../../api/notice';
// import { useQuery } from '@tanstack/react-query';

// const Notice = () => {
//   const { data, error, isLoading } = useQuery<any>({
//     queryKey: ['getNotice'],
//     queryFn: () => getNotice()
//   });
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }
//   const firstNotice = data[0];

//   return (
//     <>
//       <S.NoticeCard>
//         <S.Title>쁘띠 업데이트⚒️</S.Title>
//         <S.CreatedAt>{firstNotice.createdAt}</S.CreatedAt>
//         <S.Content>{firstNotice.content}</S.Content>
//       </S.NoticeCard>
//     </>
//   );
// };

// export default Notice;
import React from 'react';
import * as S from './Notice.styled';
import { getNotice } from '../../api/notice';
import { useQuery } from '@tanstack/react-query';

const Notice = () => {
  const dummydata = [
    {
      id: '1',
      title: '안녕하세요 쁘띠입니다.',
      content:
        '            10월 22일 00시 ~ 03시까지 내부 서버 점검이 있을 예정으로 부분 기능이 사용 불가할 수 있음을 미리알려드립니다.',
      date: '2023/10/22'
    },
    {
      id: '2',
      title: '안녕하세요 쁘띠입니다.2',
      content:
        '            10월 22일 00시 ~ 03시까지 내부 서버 점검이 있을 예정으로 부분 기능이 사용 불가할 수 있음을 미리알려드립니다.',
      date: '2023/10/23 08:24'
    },
    {
      id: '3',
      title: '안녕하세요 쁘띠입니다.3',
      content:
        '            10월 22일 00시 ~ 03시까지 내부 서버 점검이 있을 예정으로 부분 기능이 사용 불가할 수 있음을 미리알려드립니다.',
      date: '2023/10/24 08:24'
    }
  ];
  const noticeWithId1 = dummydata.find((notice) => notice.id === '1');

  if (!noticeWithId1) {
    return null;
  }
  return (
    <>
      <S.NoticeCard key={noticeWithId1.id}>
        <S.Title>
          {noticeWithId1.title}
          <S.CreatedAt>{noticeWithId1.date}</S.CreatedAt>
        </S.Title>
        <S.Content>
          <p>{noticeWithId1.content}</p>
        </S.Content>
      </S.NoticeCard>
    </>
  );
};

export default Notice;
