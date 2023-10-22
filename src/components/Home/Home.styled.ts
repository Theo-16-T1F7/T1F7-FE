import styled from 'styled-components';

export const StyledWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  background-color: rgba(241, 241, 241, 0.5);
`;
export const Header = styled.div`
  width: 100%;
  height: 11vh;
  background: #ea464a;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Body = styled.div``;

export const Logo = styled.div`
  color: #ffffff;
  font-size: 30px;
  margin-top: 30px;
  margin-left: 10px;
`;

export const SearchIcon = styled.div`
  color: #ffffff;
  font-size: 18px;
  margin-top: 30px;
  margin-right: 10px;
`;

export const Subheading = styled.h2`
  display: flex;
  margin-left: 20px;
  margin-top: 30px;
  margin-right: 20px;
  justify-content: space-between;
  font-weight: 900;
  font-size: 20px;
`;

export const TextCard = styled.div`
  display: flex;
  height: 20vh;
  justify-content: space-between;
`;

export const SeeMore = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
`;
export const HotPostCard = styled.div`
  display: flex;
  height: 20vh;
  margin-left: 20px;
  margin-top: 20px;
`;

export const NoticeCard = styled.div`
  width: 100%;
  height: 80%;
  background-color: #ea464a;
  margin-top: 10px;
`;
