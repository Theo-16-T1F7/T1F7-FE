import * as S from './Header.styled';
import { WhiteHeaderIcon } from '../../styles/icons/SvgIcons';
import { RedHeaderIcon, Notification } from '../../styles/icons/SvgIcons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
// import { accessTokenState } from '../../atoms/atoms';

export interface HeaderProps {
  headercolor?: string;
}

const Header: React.FC<HeaderProps> = (props: any) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <>
      <S.Header color={props.headercolor}>
        <S.Logo color={props.headercolor} onClick={handleLogoClick}>
          {props.headercolor === 'red' ? <WhiteHeaderIcon /> : <RedHeaderIcon />}
        </S.Logo>
        <S.Notification>
          <Notification></Notification>
        </S.Notification>
      </S.Header>
    </>
  );
};
export default Header;
