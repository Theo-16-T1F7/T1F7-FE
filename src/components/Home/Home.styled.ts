import styled from 'styled-components';

export const StyledWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  position: fixed;
  /* background-color: rgba(241, 241, 241, 0.5); */
`;

export const Body = styled.div``;

export const Subheading = styled.h2`
  display: flex;
  margin-left: 20px;
  margin-top: 30px;
  margin-right: 20px;
  justify-content: space-between;
  font-weight: 900;
  font-size: 20px;
`;

export const NeedMoreWrapper = styled.div`
  background-color: #f5f5f5;
  margin: 10px auto 0px; // 위 가로 아래
  padding: 5px 0px; // 세로 가로
  justify-content: center;
`;

export const SeeMore = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  &:hover {
    cursor: pointer;
  }
`;
export const HotPostCard = styled.div`
  display: flex;
  height: 20vh;
  margin-left: 20px;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
  }
`;
