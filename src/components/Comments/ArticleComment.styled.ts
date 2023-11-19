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
  padding: 10px 20px 0px 20px;
  justify-content: space-between;
  align-items: center;
`;

export const CommentWriter = styled.div`
  color: #595959;
  font-size: 12px;
  font-weight: 550;
  letter-spacing: -0.36px;
`;

export const CommentTime = styled.div`
  color: #999;
  font-size: 12px;
  font-weight: 510;
  letter-spacing: -0.36px;
`;

export const CommentContent = styled.div`
  display: flex;
  padding: 8px 20px;
  align-items: center;
`;

export const CommentDivider = styled(DivideTitle)`
  height: 1px;
  margin-bottom: 0px;
`;
