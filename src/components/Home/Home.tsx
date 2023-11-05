import React from 'react';
import * as S from './Home.styled';
import { useNavigate } from 'react-router-dom';
import { SeeMore } from '../../styles/icons/SeeMore';
import Header from '../Header/Header';
import Notice from '../Notice/Notice';
import NeedEmpathy from '../NeedEmpathy/NeedEmpathy';
import NeedSolution from '../NeedSolution/NeedSolution';
import HotBoard from '../HotBoard/HotBoard';
import Footer from '../Footer/Footer';

const Home: React.FC<any> = () => {
  const navigate = useNavigate();
  const handleHotboardClick = () => {
    navigate('/hotboard');
  };
  const handleNoticeClick = () => {
    navigate('/notice');
  };
  // const NeedEmpathy = () => {
  //   navigate('/hotboard');
  // };
  // const handleNeedSolutionClick = () => {
  //   navigate('/hotboard');
  // };
  const hashtags = ['기뻐요', '슬퍼요', '화가나', '억울해', '궁금해', '고민돼', '답답해'];
  return (
    <>
      <S.StyledWrapper>
        <Header headercolor={'red'} />
        <S.Body>
          <S.Subheading>
            Hot한 게시글
            <div onClick={handleHotboardClick}>
              <SeeMore />
            </div>
          </S.Subheading>
          <HotBoard />
          <S.Subheading>
            공지사항
            <div onClick={handleNoticeClick}>
              <SeeMore />
            </div>
          </S.Subheading>
          <Notice />
          <S.NeedMoreWrapper>
            <S.Subheading>
              공감이 필요해🥹
              <SeeMore />
            </S.Subheading>
            <NeedEmpathy />
          </S.NeedMoreWrapper>
          <S.NeedMoreWrapper>
            <S.Subheading>
              해결이 필요해👩‍⚖️
              <SeeMore />
            </S.Subheading>
            <NeedSolution />
          </S.NeedMoreWrapper>
          <S.EmotionWrapper>
            <S.Subheading>감정별 이야기</S.Subheading>
            <S.EmotionButtonWrapper>
              {hashtags.map((item, idx) => {
                return <S.EmotionButton>{item}</S.EmotionButton>;
              })}
            </S.EmotionButtonWrapper>
            <div>
              <div>카드1</div>
              <div>카드2</div>
            </div>
          </S.EmotionWrapper>
        </S.Body>
        <Footer />
      </S.StyledWrapper>
    </>
  );
};

export default Home;
