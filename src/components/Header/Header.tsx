import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Header.styled';
import { SearchWhiteIcon } from '../../styles/icons/SvgIcons';
import { SearchRedIcon } from '../../styles/icons/SvgIcons';

export interface HeaderProps {
  headercolor?: string;
}

const Header: React.FC<HeaderProps> = (props: any) => {
  const navigate = useNavigate();
  const handleSearchClick = () => {
    navigate('/search');
  };
  return (
    <>
      <S.Header headercolor={props.headercolor}>
        <S.Logo headercolor={props.headercolor}>쁘띠.</S.Logo>
        <S.SearchIcon onClick={handleSearchClick}>
          {props.headercolor === 'red' ? <SearchWhiteIcon /> : <SearchRedIcon />}
        </S.SearchIcon>
      </S.Header>
    </>
  );
};
export default Header;
