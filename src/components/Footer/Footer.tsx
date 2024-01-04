import React, { useState, useEffect } from 'react';
import * as S from './Footer.styled';
import { useNavigate, useLocation } from 'react-router-dom';
import { PostIcon } from '../../styles/icons/SvgIcons';
import { ActivedFeed } from '../../styles/icons/SvgIcons';
import { InactivedFeed } from '../../styles/icons/SvgIcons';
import { ActivedContent } from '../../styles/icons/SvgIcons';
import { InactivedContent } from '../../styles/icons/SvgIcons';
import { SearchWhiteIcon } from '../../styles/icons/SvgIcons';
import { MyIcon } from '../../styles/icons/SvgIcons';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeFeed, setActiveFeed] = useState(true);

  useEffect(() => {
    setActiveFeed(location.pathname === '/');
  }, [location.pathname]);

  const handlePostClick = () => {
    navigate('/post');
  };

  const handleFeedClick = () => {
    navigate('/');
  };
  const handleSearchClick = () => {
    navigate('/search');
  };
  const handleContentClick = () => {
    navigate('/content');
  };
  const handleMyClick = () => {
    navigate('/mypage');
  };

  return (
    <>
      <S.FooterContainer>
        <S.PostIconPosition onClick={handlePostClick}>
          <PostIcon />
        </S.PostIconPosition>
        <S.FeedPosition onClick={handleFeedClick}>
          {activeFeed ? <ActivedFeed /> : <InactivedFeed />}
          <div style={{ color: activeFeed ? '#EA464A' : '#B7B7B7' }}>피드</div>
        </S.FeedPosition>
        <S.SearchPosition onClick={handleSearchClick}>
          <SearchWhiteIcon></SearchWhiteIcon>
          <div style={{ color: '#B7B7B7' }}>검색</div>
        </S.SearchPosition>
        <S.ContentPosition onClick={handleContentClick}>
          {activeFeed ? <InactivedContent /> : <ActivedContent />}
          <div style={{ color: activeFeed ? '#B7B7B7' : '#EA464A', marginLeft: '-8px' }}>콘텐츠</div>
        </S.ContentPosition>
        <S.MyPosition onClick={handleMyClick}>
          <MyIcon></MyIcon>
          <div style={{ color: '#B7B7B7' }}>MY</div>
        </S.MyPosition>
      </S.FooterContainer>
    </>
  );
};

export default Footer;
