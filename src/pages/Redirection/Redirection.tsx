import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getUserId } from '../../api/profile';
import { getUserInfo } from '../../api/profile';
import { useQuery } from '@tanstack/react-query';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { accessTokenState, userState, userNicknameState, userIdState } from '../../atoms/atoms';
import SplashScreen from '../../components/SplashScreen/SplashScreen';

const Redirection = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [user, setUser] = useRecoilState(userState);
  // const [userId, setUserId] = useState(null);
  const setUserNickname = useSetRecoilState(userNicknameState);
  const setUserId = useSetRecoilState(userIdState);

  // userId 불러오는 API
  const { data: userIdData } = useQuery<any>({
    queryKey: ['getUserId'],
    queryFn: () => getUserId()
  });

  // userNickname 불러오는 API
  const { data: userInfoData } = useQuery<any>({
    queryKey: ['getUserInfo'],
    queryFn: () => getUserInfo()
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

  // userId
  useEffect(() => {
    if (userIdData) {
      setUserId(userIdData);
    }
  }, [userIdData]);

  // userNickname
  useEffect(() => {
    if (userIdData) {
      getUserInfo()
        .then((userInfoData) => {
          setUserNickname(userInfoData);
          navigate(`/mypage/${userIdData}`);
        })
        .catch((error) => {
          console.error('유저 정보를 불러오는 중 오류 발생:', error);
        });
    }
  }, [userIdData, setUserNickname, navigate]);

  return (
    <>
      <SplashScreen />
    </>
  );
};
export default Redirection;
