import React from 'react';
import * as S from './Footer.styled';
import { useNavigate } from 'react-router-dom';
import { PostIcon } from '../../styles/icons/PostIcon';

const Footer = () => {
  const navigate = useNavigate();
  const handlePostClick = () => {
    navigate('/post');
  };
  return (
    <>
      <S.FooterContainer>
        <div onClick={handlePostClick}>
          <PostIcon />
        </div>
      </S.FooterContainer>
    </>
  );
};
export default Footer;
