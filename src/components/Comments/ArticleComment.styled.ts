import styled from 'styled-components';
import { DivideTitle } from '../ArticleList/ArticleHeader.styled';


export const CommentMainTitle = styled.div`
  display: flex;
  padding: 10px;
  align-items: end;
`;

export const CommentMain = styled.div`
  color: var(--black-grey, #757575);
  font-family: SF Pro;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 110% */
  letter-spacing: -0.6px;
`;

export const CommentCount = styled.div`
  color: var(--black-grey, #757575);
  font-family: SF Pro Display;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 12px */
  letter-spacing: -0.36px;
  padding-left: 5px;
`;

export const CommentTagButtonBox = styled.div`
  display: flex;
  gap: 1px;
  padding: 10px 10px;
`;

export const CommentTagButton = styled.div`
  display: flex;
  height: 21px;
  padding: 0px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  opacity: 0.7;
  background: var(--Grey, #dfdfdf);
`;

export const CommentMbti = styled.div<{ mbti: string }>`
  display: flex;
  height: 21px;
  padding: 0px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  opacity: 0.7;
  background: var(--Grey, #dfdfdf);
  // background-color: #ff5c00;
  background-color: ${({ mbti }) => (mbti === 'F' ? '#ff5c00' : '#0C5CD3')};
`;

export const CommentButtonText = styled.div`
  color: var(--Black, #070707);
  font-family: SF Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 12px */
  letter-spacing: 0.12px;
`;

export const CommentHeader = styled.div`
  display: flex;
  padding: 0px 10px 0px 10px;
  justify-content: space-between;
  align-items: center;
`;

export const CommentWriter = styled.div`
  color: #595959;
  font-size: 12px;
  font-weight: 550;
  letter-spacing: -0.36px;
  margin-right: 53vw;
`;

export const CommentTime = styled.div`
  color: #999;
  font-size: 12px;
  font-weight: 510;
  letter-spacing: -0.36px;
`;

export const CommentContent = styled.div`
  display: flex;
  padding: 18px 10px 20px 10px;
  align-items: center;
`;

export const CommentDivider = styled(DivideTitle)`
  height: 1px;
  margin-bottom: 0px;
`;

export const DivideLine = styled.div`
  background-color: ${(props) => props.theme.dividerColor};
  height: 3px;
  margin-bottom: 15px;
  position: absolute;
  width: 100%;
  bottom: calc(100%);
`;

export const CommentPostWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  z-index: 999; /* 다른 요소들 위에 표시되도록 z-index 설정 */
`;

export const CommentPostInput = styled.input`
  height: 2em;
  width: 70%;
  padding: 8px;
  border: 10px;
  border-radius: 5px;
  background-color: #e4e4e4;
`;

export const CommentPostButton = styled.button`
  height: 3em;
  width: 12%;
  margin-left: 10px;
  border: 10px;
  border-radius: 5px;
  background-color: ##dfdfdf;
  transition: background-color 0.3s ease, color 0.3s ease; /* 배경색 및 텍스트 색상 변화에 대한 전환 효과 */

  &:hover {
    background-color: #fdeded; /* 호버 시 배경색 변경 */
    color: #ea464a;
  }

  &:active {
    background-color: #fdeded; /* 클릭 시 배경색 변경 */
    color: #ea464a;
  }
`;
