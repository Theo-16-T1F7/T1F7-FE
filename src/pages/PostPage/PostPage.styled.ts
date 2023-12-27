import styled from 'styled-components';

export const Container = styled.div`
  justify-content: space-between;
  align-items: center;
  padding: 16px 0px;
`;

export const PostNavBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CategorySelect = styled.div`
  font-size: 16px;
  padding: 10px 20px;
  font-weight: 700;
  line-height: 28px;
  border-bottom: 2px solid ${(props) => props.theme.dividerColor};
`;

export const CancelButton = styled.div`
  color: #d2d2d2;
  padding: 10px 20px;
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
  width: 100vh;
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
  width: 100vh;
  border: none;
  resize: none;
  outline: none;
  height: 200px;
  padding: 10px;
  font-size: 16px;
  margin: 10px;
`;
