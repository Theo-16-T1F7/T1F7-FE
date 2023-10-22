import styled from 'styled-components';

export const ArticleHeader = styled.header`
  display: flex;
  padding: 9px 20px;
`;

export const DivideTitle = styled.div`
  background-color: ${(props) => props.theme.dividerColor};
  display: flex;
  height: 3px;
  margin-bottom: 15px;
`;
