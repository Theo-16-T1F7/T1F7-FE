import styled from 'styled-components';

export const TextCard = styled.div`
  display: flex;
  height: 0vh;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
`;
export const NoticeCard = styled.div`
  width: 80%;
  height: 20vw;
  background-color: #ea464a;
  margin-top: 10px;
  margin: 0 auto;
  border-radius: 5px;
  padding-left: 20px;
  padding-top: 10px;
`;
export const Title = styled.div`
  font-weight: bold;
  font-size: 9px;
  color: ${(props) => props.theme.whiteColor};
  margin-bottom: 10px;
`;

export const Content = styled.div`
  margin-top: 3px;
  font-size: 6px;
  color: ${(props) => props.theme.whiteColor};
`;

export const CreatedAt = styled.div`
  font-size: 6px;
  color: ${(props) => props.theme.whiteColor};
`;
