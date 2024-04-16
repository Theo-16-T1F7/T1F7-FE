import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getUserId, getUserInfo, getUserMbti } from '../../api/profile';
import { useQuery } from '@tanstack/react-query';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { accessTokenState, userState, userNicknameState, userIdState, userMbtiState } from '../../atoms/atoms';
import SplashScreen from '../../components/SplashScreen/SplashScreen';

const Redirection = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [user, setUser] = useRecoilState(userState);
  const setUserNickname = useSetRecoilState(userNicknameState);
  const setUserId = useSetRecoilState(userIdState);
  const setUserMbti = useSetRecoilState(userMbtiState);

  // userId 불러오는 API
  const { data: userIdData } = useQuery<any>({
    queryKey: ['getUserId'],
    queryFn: () => getUserId()
  });
  const { data: mbtiData } = useQuery<any>({
    queryKey: ['getUserMbti'],
    queryFn: () => getUserMbti()
  });

  // URL 인가코드 저장
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const codeFromURL = urlParams.get('code');
    if (codeFromURL) {
      setCode(codeFromURL);
    }
  }, []);

  // 로그인
  useEffect(() => {
    if (code) {
      const url = `${process.env.REACT_APP_SERVER_BASE_URL}/oauth2/kakao/callback?code=${code}`;
      const bodycode = { code: code };
      axios
        .post(url, bodycode)
        .then((response) => {
          const token = response.headers['x-bbeudde-token'];
          sessionStorage.setItem('accessToken', token);
          setAccessToken(token);
          setUser(true);
        })
        .catch((error) => {
          console.error('오류 발생:', error);
        });
    }
  }, [code, setAccessToken, setUser]);

  // userId가 로그인 후에 받아졌을 때만 실행
  useEffect(() => {
    if (userIdData) {
      setUserId(userIdData);
    }
  }, [userIdData, setUserId]);

  // userNickname
  useEffect(() => {
    if (userIdData && user) {
      // 사용자가 로그인되어 있고, userIdData가 존재할 때만 실행
      getUserInfo()
        .then((userInfoData) => {
          setUserNickname(userInfoData);
          navigate(`/mypage/${userIdData}`);
        })
        .catch((error) => {
          console.error('유저 정보를 불러오는 중 오류 발생:', error);
        });
    }
  }, [userIdData, setUserNickname, navigate, user]);

  useEffect(() => {
    if (mbtiData) {
      setUserMbti(mbtiData);
    }
  }, [mbtiData, setUserMbti]);

  // userIdData가 존재하지 않으면 로그인이 아직 완료되지 않았으므로 Splash 화면만 표시
  if (!userIdData) {
    return <SplashScreen />;
  }

  return (
    <>
      {/* 로그인이 완료된 경우에만 마이페이지로 이동 */}
      {user && <SplashScreen />}
    </>
  );
};

export default Redirection;
