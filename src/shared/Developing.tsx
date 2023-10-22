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
          <h2>앗! 아직 개발 중인 기능이에요</h2>
          <div>빠르게 만들어서 선보이도록 할게요. 조금만 더 기다려주세요💦</div>
        </Message>
      </Wrap>
    </>
  );
};

export default Developing;

const Wrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: 10px;
`;

const Message = styled.div``;
