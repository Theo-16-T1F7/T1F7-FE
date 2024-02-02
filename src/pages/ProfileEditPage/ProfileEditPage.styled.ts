import styled from 'styled-components';
export const Subheading = styled.h2`
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-right: 100px;
  font-weight: 600;
  font-size: 20px;
`;

export const SubheadingText = styled.div`
  margin-left: 10px;
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh; /* 화면 전체 높이를 차지하도록 설정 */
`;
export const FirstContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 2vw;
  background-color: #ffffff;
  height: 100%;
`;
export const SecondContainer = styled.div`
`;

export const UserNickname = styled.div`
  size: 7vw;
  font-weight: 700;
  color: #424242;
  padding-bottom: 4vw;
`;

export const EditNicknameInputContainer = styled.div`
  width: 85%;
`;

export const EditNicknameInput = styled.input`
  width: 100%;
  height: 2.5rem;
  border-radius: 10px;
  ::placeholder {
    color: #c8c8c8;
  }
`;

export const SubmitNicknameEdit = styled.button`
  width: 88%;
  height: 2.5rem;
  border-radius: 10px;
  font-weight: 700;
  background-color: #ea464a;
  color: #ffffff;
  border: none;
  cursor: pointer;
  margin-left: 8vw;
`;
