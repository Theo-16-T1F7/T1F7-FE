import * as S from './LoginPage.styled';
import { LoginScreenIcon, KakaoLogin } from '../../styles/icons/SvgIcons';

const LoginPage = () => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = 'http://localhost:3000/kakao/oauth';
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = KAKAO_AUTH_URI;
  };

  return (
    <>
      <S.StyledBody>
        <S.LogoPosition>
          <LoginScreenIcon />
          <S.MainText>우리만의 커뮤니티</S.MainText>
        </S.LogoPosition>
        <div onClick={loginHandler}>
          <KakaoLogin />
        </div>
      </S.StyledBody>
    </>
  );
};

export default LoginPage;
