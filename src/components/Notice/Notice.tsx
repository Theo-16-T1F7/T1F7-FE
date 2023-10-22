import * as S from './Notice.styled';

const Notice: React.FC<any> = () => {
  const dummydata = [
    {
      id: '1',
      content:
        '안녕하세요 쁘디입니다. 10월 22일 00시 ~ 03시까지 내부 서버 점검이 있을 예정으로 부분 기능이 사용 불가할 수 있을을 미리 알려드립니다.',
      date: '2023/10/22'
    },
    {
      id: '2',
      content: '안녕하세요2 쁘디입니다.',
      date: '2023/10/23'
    },
    {
      id: '3',
      content: '안녕하세요3 쁘디입니다.',
      date: '2023/10/24'
    }
  ];
  return (
    <>
      <S.TextCard>
        <S.NoticeCard>
          {dummydata
            .filter((notice) => notice.id === '1')
            .map((notice, idx) => {
              return (
                <div key={notice.id}>
                  <div>{notice.content}</div>
                  <div>{notice.date}</div>
                </div>
              );
            })}
        </S.NoticeCard>
      </S.TextCard>
    </>
  );
};

export default Notice;
