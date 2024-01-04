import * as S from './MyPage.styled';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoginButton, LogoutButton, MyImage, LoginText, ProfileEditButton } from '../../styles/icons/SvgIcons';
import { BackButton } from '../../shared/BackButton';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { accessTokenState, userState } from '../../atoms/atoms';
import Footer from '../../components/Footer/Footer';

const MyPage = () => {
  const navigate = useNavigate();
  const accessToken = useRecoilValue(accessTokenState);
  const user = useRecoilValue(userState);
  const setUser = useSetRecoilState(userState);

  const handleLogout = async () => {
    try {
      // 로그아웃 요청 보내기
      const url = `${process.env.REACT_APP_SERVER_BASE_URL}/logout/kakao`;
      console.log(accessToken);
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
                {/* < 로그인 시 회원 닉네임/> */}
                <ProfileEditButton />
                <LogoutButton />
              </>
            ) : (
              <>
                <LoginText />
                <LoginButton />
              </>
            )}
          </S.LoginButtonWrapper>
        </S.LoginContainer>
      </S.FirstContainer>
      <Footer />
    </>
  );
};

export default MyPage;
