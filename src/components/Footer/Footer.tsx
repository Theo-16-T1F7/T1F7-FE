import React, { useState, useEffect } from 'react';
import * as S from './Footer.styled';
import { useNavigate, useLocation } from 'react-router-dom';
import { PostIcon } from '../../styles/icons/SvgIcons';
import { ActivedFeed, InactivedFeed } from '../../styles/icons/SvgIcons';
import { ActivedContent, InactivedContent } from '../../styles/icons/SvgIcons';
import { ActivedSearch, InactivedSearch } from '../../styles/icons/SvgIcons';
import { ActivedMyPage, InactivedMyPage } from '../../styles/icons/SvgIcons';
import { useRecoilValue } from 'recoil';
import { userState, userIdState } from '../../atoms/atoms';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeFeed, setActiveFeed] = useState(true);
  const [activeContent, setActiveContent] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeMyPage, setActiveMyPage] = useState(false);
  const user = useRecoilValue(userState);
  const userId = useRecoilValue(userIdState);

  useEffect(() => {
    setActiveFeed(location.pathname === '/');
    setActiveContent(location.pathname === '/content');
    setActiveMyPage(location.pathname === `/mypage/${userId}`);
    setActiveSearch(location.pathname === '/search');
  }, [location.pathname]);

  const handlePostClick = () => {
    if (!user) {
      alert('로그인 후 이용해주세요.');
    } else {
      navigate('/post');
    }
  };

  const handleFeedClick = () => {
    navigate('/');
    setActiveFeed(true);
    setActiveContent(false);
    setActiveMyPage(false);
  };

  const handleSearchClick = () => {
    navigate('/search');
    setActiveSearch(true);
    setActiveContent(false);
    setActiveMyPage(false);
  };

  const handleContentClick = () => {
    navigate('/content');
    setActiveContent(true);
    setActiveFeed(false);
    setActiveMyPage(false);
  };

  const handleMyClick = () => {
    if (!activeMyPage) {
      navigate(`/mypage/${userId}`);
      setActiveMyPage(true);
      setActiveContent(false);
      setActiveFeed(false);
    }
  };

  return (
    <>
      <S.FooterContainer>
        <S.PostIconPosition onClick={handlePostClick}>
          <PostIcon />
        </S.PostIconPosition>
        <S.FeedPosition onClick={handleFeedClick}>{activeFeed ? <ActivedFeed /> : <InactivedFeed />}</S.FeedPosition>
        <S.SearchPosition onClick={handleSearchClick}>
          {activeSearch ? <ActivedSearch /> : <InactivedSearch />}
        </S.SearchPosition>
        <S.ContentPosition onClick={handleContentClick}>
          {activeContent ? <ActivedContent /> : <InactivedContent />}
        </S.ContentPosition>
        <S.MyPosition onClick={handleMyClick}>{activeMyPage ? <ActivedMyPage /> : <InactivedMyPage />}</S.MyPosition>
      </S.FooterContainer>
    </>
  );
};

export default Footer;
