import styled from 'styled-components';
import { DivideTitle } from './ArticleHeader.styled';

export const ArticleMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

export const ArticleDivider = styled(DivideTitle)`
  height: 1px;
  margin-bottom: 0px;
`;

export const ArticleElement = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 36px 12px;
  align-items: center;
  gap: 12px;
  &:hover {
    cursor: pointer;
  }
`;
