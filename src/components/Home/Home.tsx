import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Home.styled';
import { SearchIcon } from '../../styles/icons/SearchIcon';
import { HotPost } from '../../styles/icons/HotPost';
import { Notice } from '../../styles/icons/Notice';
import { NeedSympathy } from '../../styles/icons/NeedSympathy';
import { SeeMore } from '../../styles/icons/SeeMore';
import { MainLogo } from '../../styles/icons/MainLogo';

function Home() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/search');
  };

  return (
    <>
      <S.StyledWrapper>
        <S.Header>
          <S.Logo>쁘띠.</S.Logo>
          <S.SearchIcon onClick={handleSearchClick}>
            <SearchIcon />
          </S.SearchIcon>
        </S.Header>
        
        <S.Body>
          <S.Subheading>
            Hot한 게시글
            <SeeMore />
          </S.Subheading>
          <S.Subheading>
            공지사항🥹
            <SeeMore />
          </S.Subheading>
          <S.TextCard>
            <S.NoticeCard />
          </S.TextCard>
          <S.Subheading>
            공감이 필요해👩‍⚖️
            <SeeMore />
          </S.Subheading>
        </S.Body>
      </S.StyledWrapper>
    </>
  );
}

export default Home;
