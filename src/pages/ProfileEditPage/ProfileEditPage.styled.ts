import styled from 'styled-components';

interface RadioButtonProps {
  buttoncolor: string;
}
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
export const SecondContainer = styled.div``;

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

export const EditMbtiContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 50px;
  padding-top: 20px;
  // padding: 0px 20px;
`;
export const RadioButtonLabel = styled.label``;

interface RadioButtonProps {
  buttoncolor: string;
  $clicked?: boolean; // 선택적 속성으로 변경
}

export const MbtiTButton = styled.span<RadioButtonProps>`
  padding: 5px 10px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #292828;
  margin: 5px 5px;
  color: #292828;
  font-size: 15px;
  font-weight: 700;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0.12px;

  &:hover {
    border: 1px solid #bd2024;
    background-color: ${(props) => props.theme.redNormalColor};
    color: white;
  }
  background-color: ${(props) => (props.$clicked ? props.theme.redNormalColor : '')};
  // color: ${(props) => (props.$clicked ? 'white' : '#292828')};
`;

export const MbtiFButton = styled.span<RadioButtonProps>`
  padding: 5px 10px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #292828;
  margin: 5px 5px;
  color: #292828;
  font-size: 15px;
  font-weight: 700;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0.12px;

  &:hover {
    border: 1px solid #bd2024;
    background-color: ${(props) => props.theme.redNormalColor};
    color: white;
  }
  background-color: ${(props) => (props.$clicked ? props.theme.redNormalColor : '')};
  // color: ${(props) => (props.$clicked ? 'white' : '#292828')};
`;
