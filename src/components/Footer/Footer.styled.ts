import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 95%;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 30px 30px 0px 0px;
  height: 40px;
  
`;
export const PostIconPosition = styled.div`
  position: absolute;
  top: -30px;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`;
export const FeedPosition = styled.div`
  position: absolute;
  left: 10vw;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`;
export const SearchPosition = styled.div`
  position: absolute;
  left: 30vw;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`;
export const ContentPosition = styled.div`
  position: absolute;
  right: 30vw;
  z-index: 1;
  line-height: 1.3;
  &:hover {
    cursor: pointer;
  }
`;
export const MyPosition = styled.div`
  position: absolute;
  right: 10vw;
  z-index: 1;
  line-height: 1.3;
  &:hover {
    cursor: pointer;
  }
`;
