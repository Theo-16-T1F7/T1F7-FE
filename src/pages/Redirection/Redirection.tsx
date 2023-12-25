import { useEffect, useState } from 'react';
// import jwt from 'jsonwebtoken';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { accessTokenState, userState } from '../../atoms/atoms';

const Redirection = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

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
          console.log('서버 응답:', response);
          const token = response.data;
          sessionStorage.setItem('accessToken', token);
          setAccessToken(token);
          navigate('/');
        })
        .catch((error) => {
          console.error('오류 발생:', error);
        });
    }
  }, [code, navigate, setAccessToken]);

  return <div>로그인 중입니다.</div>;
};
export default Redirection;
