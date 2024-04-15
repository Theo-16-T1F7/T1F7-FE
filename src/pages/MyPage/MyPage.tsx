import * as S from './MyPage.styled';
import axios from 'axios';
import { useQuery, QueryFunction } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { LoginButton, LogoutButton, LoginText, ProfileEditButton, ProfileImage } from '../../styles/icons/SvgIcons';
import { BackButton } from '../../shared/BackButton';
import Footer from '../../components/Footer/Footer';
import { getMyPost, getMyAnswer } from '../../api/profile';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userState, userNicknameState, userMbtiState } from '../../atoms/atoms';
import { formatNoticeDate } from '../../shared/dateUtils';

interface PostItem {
  id: number;
  title: string;
  nickname: string;
  createdAt: string;
  content: string;
}

const MyPage = () => {
  const navigate = useNavigate();
  const accessToken = sessionStorage.getItem('accessToken');
  const user = useRecoilValue(userState);
  const setUser = useSetRecoilState(userState);
  const userNickname = useRecoilValue(userNicknameState);
  const myMbti = useRecoilValue(userMbtiState);
  const [isPostClicked, setIsPostClicked] = useState(true);
  const [isAnswerClicked, setIsAnswerClicked] = useState(false);

  const { data: myPostData } = useQuery<PostItem[]>({
    queryKey: ['getMyPost'],
    queryFn: getMyPost as QueryFunction<PostItem[]>,
    enabled: user // 로그인되어 있을 때만 API 호출하도록 설정
  });
  const { data: myAnswerData } = useQuery<PostItem[]>({
    queryKey: ['getMyAnswer'],
    queryFn: getMyAnswer as QueryFunction<PostItem[]>,
    enabled: user // 로그인되어 있을 때만 API 호출하도록 설정
  });

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
      // 세션 스토리지의 토큰, 닉네임 제거
      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('userNickname');
      sessionStorage.removeItem('userId');
      sessionStorage.removeItem('userMbti');
      setUser(false);
      navigate('/');
    } catch (error) {
      console.error('로그아웃 오류:', error);
    }
  };

  const onClickLogoutButton = () => {
    if (user) {
      // 로그아웃
      handleLogout();
    }
  };

  const onClickLoginButton = () => {
    if (!user) {
      // 로그인 페이지로 이동
      navigate('/login');
    }
  };

  const onClickProfileEditButton = () => {
    navigate('/profileedit');
  };

  return (
    <>
      <S.Subheading>
        <BackButton />
        <S.SubheadingText>My Page</S.SubheadingText>
      </S.Subheading>
      <S.FirstContainer>
        <ProfileImage />
        <S.LoginContainer>
          <S.LoginButtonWrapper>
            {user ? (
              <>
                <S.UserNickname> {userNickname}</S.UserNickname>
                <S.UserMbti $mbti={myMbti}>{myMbti}성향</S.UserMbti>
                <span onClick={onClickProfileEditButton}>
                  <ProfileEditButton />
                </span>
                <span onClick={onClickLogoutButton}>
                  <LogoutButton />
                </span>
              </>
            ) : (
              <>
                <LoginText />
                <div style={{ marginTop: '10px' }} onClick={onClickLoginButton}>
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
              <S.DisabledContainer>
                <S.PostContainer>내가 쓴 글</S.PostContainer>
              </S.DisabledContainer>
              <S.DisabledContainer>
                <S.AnswerContainer>내가 쓴 댓글</S.AnswerContainer>
              </S.DisabledContainer>
            </>
          )}
        </S.PostWrapper>
      </S.SecondContainer>
      <S.ThirdContainer>
        {user && isAnswerClicked ? (
          <>
            {user && myAnswerData && myAnswerData.length > 0 ? (
              <>
                {myAnswerData.map((myAnswer: PostItem) => (
                  <S.MyListContainer key={myAnswer?.id}>
                    <S.MyListTitle>{myAnswer?.content}</S.MyListTitle>
                    <S.MyListName>{myAnswer?.nickname}</S.MyListName>
                    <S.MyListCreateAt>{formatNoticeDate(myAnswer?.createdAt)}</S.MyListCreateAt>
                  </S.MyListContainer>
                ))}
              </>
            ) : (
              <></>
            )}
          </>
        ) : (
          <>
            {user && myPostData && myPostData.length > 0 ? (
              <>
                {myPostData.map((myPost: PostItem) => (
                  <S.MyListContainer key={myPost?.id}>
                    <S.MyListTitle>{myPost?.title}</S.MyListTitle>
                    <S.MyListName>{myPost?.nickname}</S.MyListName>
                    <S.MyListCreateAt>{formatNoticeDate(myPost?.createdAt)}</S.MyListCreateAt>
                  </S.MyListContainer>
                ))}
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </S.ThirdContainer>
    </>
  );
};

export default MyPage;
