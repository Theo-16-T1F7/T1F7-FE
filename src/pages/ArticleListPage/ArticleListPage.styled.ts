import styled from 'styled-components';

export const ArticleNav = styled.nav`
  display: flex;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const ArticleHeader = styled.header`
  display: flex;
  padding: 9px 20px;
`;

export const ArticleMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
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

export const DivideTitle = styled.div`
  background-color: #efefef;
  display: flex;
  height: 3px;
  margin-bottom: 15px;
`;

export const ArticleDivider = styled(DivideTitle)`
  height: 1px;
  margin-bottom: 0px;
`;
