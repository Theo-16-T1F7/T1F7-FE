import styled from 'styled-components';

// 프로필 사진, 로그인, 내 정보 수정, 로그아웃 버튼 레이아웃
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

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginButtonWrapper = styled.div`
  padding-top: 2.5vw;
  &:hover {
    cursor: pointer;
  }
`;

export const UserNickname = styled.div`
  size: 7vw;
  font-weight: 700;
  color: #424242;
  padding-bottom: 4vw;
`;

// 내가 쓴 글, 댓글 버튼 레이아웃
export const SecondContainer = styled.div`
  display: flex;
  background-color: #f9f9f9;
`;

export const PostWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  color: gray;
  border-top: 6px solid #efefef;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid #efefef;
  margin-top: 20px;
`;

export const PostContainer = styled.div<{ $isloggedin?: boolean; $Clicked?: boolean }>`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  color: ${({ $isloggedin, $Clicked }) => ($isloggedin && $Clicked ? '#ea464a' : '#000000')};
  cursor: pointer;
  transition: color 0.3s, border 0.3s;
  border-bottom: ${({ $Clicked }) => ($Clicked ? '2px solid #ea464a' : 'none')};
  &:hover {
    color: #ea464a;
  }
`;

export const AnswerContainer = styled.div<{ $isloggedin?: boolean; $Clicked?: boolean }>`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  color: ${({ $isloggedin }) => ($isloggedin ? '#000000' : '#000000')};
  cursor: pointer;
  transition: color 0.3s, border 0.3s;
  border-bottom: ${({ $Clicked }) => ($Clicked ? '2px solid #ea464a' : 'none')};
  &:hover {
    color: #ea464a;
  }
`;
export const DisabledContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  opacity: 0.6; /* optional: to visually indicate the disabled state */
`;

// 내가 쓴 글, 댓글 리스트 레이아웃
export const ThirdContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5vw;
  margin-top: 3vw;
`;

export const MyListContainer = styled.div`
  padding-bottom: 2vw;
  border-bottom: 1px solid #efefef;
`;

export const MyListTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #424242;
  margin-top: 10px;
`;

export const MyListName = styled.div`
  font-size: 10px;
  color: #424242;
  margin-top: 10px;
`;

export const MyListCreateAt = styled.div`
  font-size: 10px;
  color: #959595;
  margin-top: 5px;
`;
