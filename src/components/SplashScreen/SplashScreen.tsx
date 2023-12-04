import React from 'react';
import * as S from './SplashScreen.styled';
import { SplashScreenIcon } from '../../styles/icons/SvgIcons';

function SplashScreen() {
  return (
    <S.StyledBody>
      <S.SubText>F와 T사이</S.SubText>
      <S.MainText>
        <SplashScreenIcon />
      </S.MainText>
    </S.StyledBody>
  );
}

export default SplashScreen;
