import styled from 'styled-components';

export const Container = styled.div`
  justify-content: space-between;
  align-items: center;
  padding: 16px;
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
`;

export const CancelButton = styled.div`
  color: #d2d2d2;
`;
export const Button = styled.div`
  color: ${(props) => props.theme.redNormalColor};
  border: round;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  padding: 10px;
  font-size: 16px;
  margin: 10px 0;
  color: #878787;
  font-size: 14px;
  font-weight: 700;
  line-height: 28px; /* 200% */
  letter-spacing: -0.42px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  border: none;
  height: 200px;
  padding: 10px;
  font-size: 16px;
  margin: 10px 0;
`;
