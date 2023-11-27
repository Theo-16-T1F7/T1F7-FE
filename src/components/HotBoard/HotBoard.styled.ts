import styled from 'styled-components';
import { PostCardLine } from '../../shared/ClampLines';

export const Container = styled.p``;
export const TextCard = styled.div`
  display: flex;
  height: 0vh;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
`;
export const HotBoardCard = styled.div`
  width: 60vw;
  height: 20vw;
  background-color: #ffffff;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 10px;
  padding-left: 20px;
  padding-top: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 그림자 효과 추가 */
`;
export const Name = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;
  color: ${(props) => props.theme.blackColor};
  margin-bottom: 10px;
`;

export const Content = styled.div`
  margin-top: 3px;
  font-size: 10px;
  color: ${(props) => props.theme.blackColor};
  padding-right: 30px;
  line-height: 1.3;
  ${PostCardLine}
`;

export const CreatedAt = styled.div`
  opacity: 0.5;
  font-size: 8px;
  color: ${(props) => props.theme.blackColor};
  padding-right: 30px;
  padding-top: 5px;
`;

export const EmblaContainer = styled.div`
  overflow: hidden;
`;

export const EmblaInnerContainer = styled.div`
  display: flex;
`;

export const EmblaSlide = styled.div`
  flex: 0 0 auto;
  min-width: 0;
  width: 70%;
`;
