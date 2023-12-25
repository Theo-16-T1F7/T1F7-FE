import React, { useState, useEffect } from 'react';
import * as S from './MainPage.styled';
import SplashScreen from '../../components/SplashScreen/SplashScreen';
import Home from '../../components/Home/Home';

const MainPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <S.StyledWrapper>
          <Home />
        </S.StyledWrapper>
      )}
    </>
  );
};
export default MainPage;
