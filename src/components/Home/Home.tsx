import React from 'react';
import * as S from './Home.styled';
import { useNavigate } from 'react-router-dom';
import { SeeMore } from '../../styles/icons/SvgIcons';
import Header from '../Header/Header';
import Notice from '../Notice/Notice';
import NeedEmpathy from '../NeedEmpathy/NeedEmpathy';
import NeedSolution from '../NeedSolution/NeedSolution';
import HotBoard from '../HotBoard/HotBoard';
import Footer from '../Footer/Footer';
import EmotionStory from './EmotionStory/EmotionStory';

const Home: React.FC<any> = () => {
  const navigate = useNavigate();

  const handleHotboardClick = () => {
    navigate('/hotboard');
  };
  const handleNoticeClick = () => {
    navigate('/notice');
  };
  const handleNeedEmpathyClick = () => {
    navigate('/empathy');
  };
  const handleNeedSolutionClick = () => {
    navigate('/solution');
  };

  return (
    <>
      <S.StyledWrapper>
        <Header headercolor={'red'} />
        <S.Body>
          <S.Subheading>
            Hot한 게시글
            <S.SeeMoreWrapper onClick={handleHotboardClick}>
              <SeeMore />
            </S.SeeMoreWrapper>
          </S.Subheading>
          <HotBoard />
          <S.Subheading>
            공지사항
            <S.SeeMoreWrapper onClick={handleNoticeClick}>
              <SeeMore />
            </S.SeeMoreWrapper>
          </S.Subheading>
          <Notice />
          <S.NeedMoreWrapper>
            <S.Subheading>
              공감이 필요해🥹
              <S.SeeMoreWrapper onClick={handleNeedEmpathyClick}>
                <SeeMore />
              </S.SeeMoreWrapper>
            </S.Subheading>
            <NeedEmpathy />
          </S.NeedMoreWrapper>
          <S.NeedMoreWrapper>
            <S.Subheading>
              해결이 필요해👩‍⚖️
              <S.SeeMoreWrapper onClick={handleNeedSolutionClick}>
                <SeeMore />
              </S.SeeMoreWrapper>
            </S.Subheading>
            <NeedSolution />
          </S.NeedMoreWrapper>
          <EmotionStory />
        </S.Body>
        <Footer />
      </S.StyledWrapper>
    </>
  );
};

export default Home;
