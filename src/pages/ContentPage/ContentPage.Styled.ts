import styled from 'styled-components';
export const StyledWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  position: fixed;
`;
export const MainContainer = styled.main`
`;
export const Subheading1 = styled.h2`
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-right: 100px;
  font-weight: 600;
  font-size: 20px;
`;
export const SubheadingText = styled.div`
  margin-left: 10px;
`;
export const ResSection1 = styled.div`
  background-color: #f0f0f0;
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const ResSection2 = styled.h2`
  display: flex;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 20px;
  justify-content: space-between;
  font-weight: 700;
  font-size: 25px;
`;
export const Subheading2 = styled.div`
  display: flex;
  margin-left: 22px;
  margin-right: 20px;
  margin-top: 20px;
  justify-content: space-between;
  font-weight: 900;
  font-size: 15px;
  color: #a4a4a4;
`;
export const Subheading = styled.h2`
  display: flex;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 20px;
  justify-content: space-between;
  font-weight: 900;
  font-size: 30px;
`;
export const SubheadingF = styled.h3`
  display: flex;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 20px;
  justify-content: space-between;
  font-weight: 700;
  font-size: 25px;
  color: #ea464a;
`;
export const SubheadingT = styled.h3`
  display: flex;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 20px;
  justify-content: space-between;
  font-weight: 700;
  font-size: 25px;
  color: blue;
`;
export const FirstContainer = styled.div`
  width: 80%;
  height: 50%;
  background-color: #FFFFFF
  margin-top: 10px;
  margin: 0 auto;
  border-radius: 20px;
  border: 1px solid #ea464a;
  padding-left: 30px;
  padding-top: 30px;
  padding-right: 30px;
  padding-bottom: 10px;
  margin-bottom: 80px;
`;

export const BalanceGameName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 3rem;
  border-radius: 10px;
  font-weight: 500;
  font-size: 20px;
  background-color: #ea464a;
  color: #ffffff;
  border: none;
  margin-left: 10%;
`;

export const BalanceGameText = styled.span`
  margin-right: 10px;
  margin-left: 10px;
  text-align: center;
`;

export const SecondContainer = styled.article`
  display: flex;
  width: 70vw;
  height: 30vw;
  margin: 0 auto;
  border-radius: 20px;
  border: 1px solid #FFFFFF
  padding-left: 30px;
  padding-top: 10px;
  marign-bottom: 10px;
`;
export const BarChartWrapper = styled.div`
  margin-top: 40px;
`;

export const SelectGame = styled.button<{ $Clicked?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  background-color: ${({ $Clicked }) => ($Clicked ? '#FDEDED' : 'rgba(255, 255, 255, 0.9)')};
  box-shadow: 0px 4px 20px 0px #0000001a;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
  /* 클릭 시 스타일 변경 */
  &:active {
    border: 2px solid ${({ $Clicked }) => ($Clicked ? 'pink' : 'none')};
    background-color: ${({ $Clicked }) => ($Clicked ? 'pink' : 'none')};
  }
`;
export const BalanceGameImage = styled.img`
  margin-top: 10px;
  margin-bottom: 5px;
  width: 90%;
  max-height: 60%;
`;
export const ThirdContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
export const MoveButton = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const ContentSubmitButton = styled.button`
  background-color: #ffffff;
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: 600;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: #fdeded;
  }
`;

export const voteRate = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const votePeriod = styled.div`
  display: flex;
  // color: #ea464a;
  margin-bottom: 10px;
  justify-content: flex-end;
  align-items: center;
  font-size: 15px;
`;

export const votePeriodText = styled.div`
  display: flex;
  border-radius: 3px;
  border: 2px solid black;
  font-size: 25px;
  margin-right: 15px;
`;
