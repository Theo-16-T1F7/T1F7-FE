import styled from 'styled-components';
import { DivideTitle } from '../ArticleList/ArticleHeader.styled';

export const CommentHeader = styled.div`
  display: flex;
  padding: 10px 20px 0px 20px;
  justify-content: space-between;
  align-items: center;
`;

export const CommentWriter = styled.div`
  color: #595959;
  font-size: 12px;
  font-weight: 510;
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
