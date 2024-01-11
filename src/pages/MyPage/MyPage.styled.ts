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
export const FirstContainer = styled.div`
  display: flex;
  padding-left: 6vw;
  padding-top: 8vw;
  background-color: #f9f9f9;
`;
export const SecondContainer = styled.div`
  display: flex;
  background-color: #f9f9f9;
`;
export const ThirdContainer = styled.div`
  display: flex;
  padding-left: 6vw;
  padding-top: 8vw;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 6vw;
`;

export const LoginButtonWrapper = styled.div`
  padding-top: 2.5vw;
  &:hover {
    cursor: pointer;
  }
`;

export const PostWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  color: gray;
  border-top: 6px solid #efefef;
  border-right: none;
  border-left: none;
  border-bottom: 3px solid #efefef;
  margin-top: 20px;
`;

export const PostContainer = styled.div<{ isloggedin?: boolean; clicked?: boolean }>`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  color: ${({ isloggedin }) => (isloggedin ? '#000000' : '#00000066')};
  cursor: pointer;
  transition: color 0.3s, border 0.3s;
  border-bottom: ${({ clicked }) => (clicked ? '2px solid #ea464a' : 'none')};
  &:hover {
    color: #ea464a;
  }
`;

export const AnswerContainer = styled.div<{ isloggedin?: boolean; clicked?: boolean }>`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  color: ${({ isloggedin }) => (isloggedin ? '#000000' : '#00000066')};
  cursor: pointer;
  transition: color 0.3s, border 0.3s;
  border-bottom: ${({ clicked }) => (clicked ? '2px solid #ea464a' : 'none')};
  &:hover {
    color: #ea464a;
  }
`;
