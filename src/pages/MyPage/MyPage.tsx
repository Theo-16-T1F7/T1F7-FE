import * as S from './MyPage.styled';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { LoginButton, LogoutButton, MyImage, LoginText, ProfileEditButton } from '../../styles/icons/SvgIcons';
import { BackButton } from '../../shared/BackButton';
import Footer from '../../components/Footer/Footer';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { accessTokenState, userState, userNicknameState } from '../../atoms/atoms';

const dummydata = [
  {
    id: '1',
    nickname: '숩',
    title: '내가 쓴 글 미리보기1',
    answer: '내가 쓴 댓글 미리보기1',
    createdAt: '2023/10/22 08:21'
  },
  {
    id: '2',
    nickname: '숩',
    title: '내가 쓴 글 미리보기2',
    answer: '내가 쓴 댓글 미리보기2',
    createdAt: '2023/10/23 08:22'
  },
  {
    id: '3',
    nickname: '숩',
    title: '내가 쓴 글 미리보기3',
    answer: '내가 쓴 댓글 미리보기3',
    createdAt: '2023/10/24 08:23'
  }
];

const MyPage = () => {
  const navigate = useNavigate();
  const accessToken = useRecoilValue(accessTokenState);
  const user = useRecoilValue(userState);
  const setUser = useSetRecoilState(userState);
  const userNickname = useRecoilValue(userNicknameState);
  const [isPostClicked, setIsPostClicked] = useState(false);
  const [isAnswerClicked, setIsAnswerClicked] = useState(false);

  const handlePostClick = () => {
    setIsPostClicked(true);
    setIsAnswerClicked(false);
  };

  const handleAnswerClick = () => {
    setIsAnswerClicked(true);
    setIsPostClicked(false);
  };

  const handleLogout = async () => {
    try {
      // 로그아웃 요청 보내기
      const url = `${process.env.REACT_APP_SERVER_BASE_URL}/logout/kakao`;
      await axios.post(
        url,
        {},
        {
          headers: {
            'X-BBEUDDE-TOKEN': accessToken
          }
        }
      );
      // 세션 스토리지의 토큰 제거
      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('userNickname');
      setUser(false);
      navigate('/');
    } catch (error) {
      console.error('로그아웃 오류:', error);
    }
  };

  const handleButtonClick = () => {
    if (user) {
      // 로그아웃
      handleLogout();
    } else {
      // 로그인 페이지로 이동
      navigate('/login');
    }
  };

  return (
    <>
      <S.Subheading>
        <BackButton />
        <S.SubheadingText>My Page</S.SubheadingText>
      </S.Subheading>
      <S.FirstContainer>
        <MyImage />
        <S.LoginContainer>
          <S.LoginButtonWrapper onClick={handleButtonClick}>
            {user ? (
              <>
                <S.UserNickname>{userNickname}</S.UserNickname>
                <ProfileEditButton />
                <LogoutButton />
              </>
            ) : (
              <>
                <LoginText />
                <div style={{ marginTop: '10px' }}>
                  <LoginButton />
                </div>
              </>
            )}
          </S.LoginButtonWrapper>
        </S.LoginContainer>
      </S.FirstContainer>
      <Footer />
      <S.SecondContainer>
        <S.PostWrapper>
          {user ? (
            <>
              <S.PostContainer $isloggedin={user ? true : false} onClick={handlePostClick} $Clicked={isPostClicked}>
                내가 쓴 글
              </S.PostContainer>
              <S.AnswerContainer
                $isloggedin={user ? true : false}
                onClick={handleAnswerClick}
                $Clicked={isAnswerClicked}
              >
                내가 쓴 댓글
              </S.AnswerContainer>
            </>
          ) : (
            <>
              <S.PostContainer>내가 쓴 글</S.PostContainer>
              <S.AnswerContainer>내가 쓴 댓글</S.AnswerContainer>
            </>
          )}
        </S.PostWrapper>
      </S.SecondContainer>
      <S.ThirdContainer>
        {user ? (
          <>
            {dummydata?.map((data, idx) => (
              <S.MyListContainer key={idx}>
                <S.MyListTitle>{data.title}</S.MyListTitle>
                <S.MyListName>{data.nickname}</S.MyListName>
                <S.MyListCreateAt>{data.createdAt}</S.MyListCreateAt>
              </S.MyListContainer>
            ))}
          </>
        ) : (
          <></>
        )}
      </S.ThirdContainer>
    </>
  );
};

export default MyPage;
