import React, { useState } from 'react';
import * as S from './Footer.styled';
import { useNavigate } from 'react-router-dom';
import { PostIcon } from '../../styles/icons/PostIcon';
import { Feed } from '../../styles/icons/Feed';
import { Content } from '../../styles/icons/Content';

const Footer = () => {
  const navigate = useNavigate();

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
          <Feed />
          <p style={{ color: 'red' }}>피드</p>
        </S.FeedPosition>
        <S.ContentPosition onClick={handleContentClick}>
          <Content />
          <p style={{ color: 'gray', marginLeft: '-8px' }}>콘텐츠</p>
        </S.ContentPosition>
      </S.FooterContainer>
    </>
  );
};

export default Footer;
