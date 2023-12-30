import styled from 'styled-components';

export const Container = styled.div`
  justify-content: space-between;
  align-items: center;
  padding: 16px 0px;
  overflow: hidden;
`;

export const PostNavBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;

export const CategorySelectBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-top: 2px solid ${(props) => props.theme.dividerColor};
  border-bottom: 2px solid ${(props) => props.theme.dividerColor};
  cursor: pointer;
`;

export const CategorySelect = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 28px;
`;

export const CategoryOptionListBox = styled.div`
  position: absolute;
  top: 100%;
  left: 18px;
  z-index: 100px;
  width: 90%;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(221, 221, 221);
  color: black;
  list-style-type: none;
  padding: 0;
  border-radius: 6px;
  align-items: center;
  transition: 0.3s ease-in;
  &:active {
    max-height: 500px;
  }
`;

export const CategoryOptionListDetail = styled.div`
  font-size: 12px;
  padding: 10px;
  &:hover {
    background-color: #c0c0c0;
  }
`;

export const CancelButton = styled.div`
  color: #d2d2d2;
  padding: 10px 20px;
  cursor: pointer;
`;
export const Button = styled.div`
  color: ${(props) => props.theme.redNormalColor};
  border: round;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 80%;
  padding: 10px;
  font-size: 16px;
  margin: 10px;
  color: #878787;
  font-size: 14px;
  font-weight: 700;
  line-height: 28px; /* 200% */
  letter-spacing: -0.42px;
`;

export const Writer = styled.div`
  color: ${(props) => props.theme.greyColor};
  padding: 0px 20px;
  font-size: 12px;
  font-weight: 510;
`;

export const Textarea = styled.textarea`
  width: 90%;
  border: none;
  resize: none;
  outline: none;
  height: 200px;
  padding: 10px;
  font-size: 16px;
  margin: 10px;
`;
