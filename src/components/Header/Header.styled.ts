import styled from 'styled-components';

export const Header = styled.header<{ headercolor: string }>`
  width: 100%;
  height: 11vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props: any) =>
    props.headercolor === 'red' ? props.theme.redNormalColor : props.theme.whiteColor};
`;

export const Logo = styled.div<{ headercolor: string }>`
  color: ${(props: any) => (props.headercolor === 'red' ? props.theme.whiteColor : props.theme.redNormalColor)};
  font-size: 23px;
  margin-top: 30px;
  margin-left: 10px;
  font-weight: 800;
`;

export const SearchIcon = styled.div`
  color: ${(props) => props.theme.whiteColor};
  font-size: 18px;
  margin-top: 30px;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;
