import styled from 'styled-components';
import ArticleHeader from '../components/ArticleList/ArticleHeader';
import { CautionIcon } from '../styles/icons/SvgIcons';

const Developing = () => {
  return (
    <>
      <ArticleHeader>돌아가기</ArticleHeader>
      <Wrap>
        <CautionIcon />
        <Message>
          <Message1>앗! 아직 개발 중인 기능이에요</Message1>
          <Message2>빠르게 만들어서 선보이도록 할게요. 조금만 더 기다려주세요💦</Message2>
        </Message>
      </Wrap>
    </>
  );
};

export default Developing;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: 10px;
`;

const Message = styled.div`
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;
const Message1 = styled.h2`
  padding-bottom: 10px;
`;
const Message2 = styled.div`
`;