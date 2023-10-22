import styled from 'styled-components';

export const TextCard = styled.div`
  display: flex;
  height: 20vh;
  justify-content: space-between;
`;
export const NoticeCard = styled.div`
  width: 100%;
  height: 80%;
  background-color: ${(props) => props.theme.redNormalColorColor}
  margin-top: 10px;
`;
