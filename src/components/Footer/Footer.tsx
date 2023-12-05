import React, { useState, useEffect } from 'react';
import * as S from './Footer.styled';
import { useNavigate, useLocation } from 'react-router-dom';
import { PostIcon } from '../../styles/icons/SvgIcons';
import { ActivedFeed } from '../../styles/icons/SvgIcons';
import { InactivedFeed } from '../../styles/icons/SvgIcons';
import { ActivedContent } from '../../styles/icons/SvgIcons';
import { InactivedContent } from '../../styles/icons/SvgIcons';

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

  const handleContentClick = () => {
    navigate('/content');
  };

  return (
    <>
      <S.FooterContainer>
        <S.PostIconPosition onClick={handlePostClick}>
          <PostIcon />
        </S.PostIconPosition>
        <S.FeedPosition onClick={handleFeedClick}>
          {activeFeed ? <ActivedFeed /> : <InactivedFeed />}
          <p style={{ color: activeFeed ? '#EA464A' : '#B7B7B7' }}>피드</p>
        </S.FeedPosition>
        <S.ContentPosition onClick={handleContentClick}>
          {activeFeed ? <InactivedContent /> : <ActivedContent />}
          <p style={{ color: activeFeed ? '#B7B7B7' : '#EA464A', marginLeft: '-8px' }}>콘텐츠</p>
        </S.ContentPosition>
      </S.FooterContainer>
    </>
  );
};

export default Footer;
