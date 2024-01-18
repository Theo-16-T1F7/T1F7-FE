import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getUserId } from '../../api/profile';
import { useQuery } from '@tanstack/react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { accessTokenState, userState } from '../../atoms/atoms';
import SplashScreen from '../../components/SplashScreen/SplashScreen';

const Redirection = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [user, setUser] = useRecoilState(userState);
  const [userId, setUserId] = useState(null);

  const { data, error, isLoading } = useQuery<any>({
    queryKey: ['getUserId'],
    queryFn: () => getUserId()
  });

  // URL 인가코드 저장
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
      const bodycode = { code: code };
      axios
        .post(url, bodycode)
        .then((response) => {
          const token = response.headers['x-bbeudde-token'];
          sessionStorage.setItem('accessToken', token);
          setAccessToken(token);
          setUser(true);
          navigate('/');
        })
        .catch((error) => {
          console.error('오류 발생:', error);
        });
    }
  }, [code, navigate, setAccessToken, setUser]);

  useEffect(() => {
    if (data) {
      setUserId(data);
    }
  }, [data]);
  console.log(userId);

  return (
    <>
      <SplashScreen />
    </>
  );
};
export default Redirection;
