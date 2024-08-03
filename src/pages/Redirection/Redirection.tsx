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

  const { data: userIdData, isLoading: isUserIdLoading } = useQuery({
    queryKey: ['getUserId'],
    queryFn: getUserId,
    enabled: !!accessToken // accessToken이 있을 때만 실행
  });

  const { data: mbtiData } = useQuery({
    queryKey: ['getUserMbti'],
    queryFn: getUserMbti,
    enabled: !!userIdData // userIdData가 있을 때만 실행
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const codeFromURL = urlParams.get('code');
    if (codeFromURL) {
      setCode(codeFromURL);
    }
  }, []);

  useEffect(() => {
    if (code) {
      const url = `${process.env.REACT_APP_SERVER_BASE_URL}/oauth2/kakao/callback?code=${code}`;
      axios
        .post(url, { code })
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

  useEffect(() => {
    if (userIdData) {
      setUserId(userIdData);
    }
  }, [userIdData, setUserId]);

  useEffect(() => {
    if (userIdData) {
      getUserInfo()
        .then((userInfoData) => {
          setUserNickname(userInfoData.nickname);
          getUserMbti()
            .then((mbtiData) => {
              setUserMbti(mbtiData);
              if (mbtiData === 'T' || mbtiData === 'F') {
                setTimeout(() => {
                  navigate('/');
                }, 1000);
              } else {
                setTimeout(() => {
                  navigate('/nicknameset');
                }, 1000);
              }
            })
            .catch((error) => {
              console.error('MBTI 정보를 불러오는 중 오류 발생:', error);
            });
        })
        .catch((error) => {
          console.error('유저 정보를 불러오는 중 오류 발생:', error);
        });
    }
  }, [userIdData, setUserNickname, setUserMbti, navigate]);

  useEffect(() => {
    if (userIdData && mbtiData) {
      setUserMbti(mbtiData);
      if (!user && !mbtiData) {
        navigate('/nicknameset');
      }
    }
  }, [userIdData, mbtiData, setUserMbti, navigate, user]);

  if (isUserIdLoading) {
    return <SplashScreen />;
  }

  return <>{user && <SplashScreen />}</>;
};

export default Redirection;
