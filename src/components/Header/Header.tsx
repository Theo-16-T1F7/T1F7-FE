import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Header.styled';
import { SearchIcon } from '../../styles/icons/SearchIcon';

export interface HeaderProps {
  headercolor?: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  const navigate = useNavigate();
  const handleSearchClick = () => {
    navigate('/search');
  };

  return (
    <>
      <S.Header headercolor={'red'}>
        <S.Logo>쁘띠.</S.Logo>
        <S.SearchIcon onClick={handleSearchClick}>
          <SearchIcon />
        </S.SearchIcon>
      </S.Header>
    </>
  );
};
export default Header;
