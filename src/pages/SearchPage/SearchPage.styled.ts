import styled from 'styled-components';

export const Subheading = styled.h2`
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const SearchBar = styled.input`
  margin-left: 20px;
  width: 280px;
  height: 20px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.dividerColor};

`;
