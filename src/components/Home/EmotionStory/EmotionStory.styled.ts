import styled from 'styled-components';

export const Subheading = styled.h2`
  display: flex;
  margin-left: 20px;
  margin-top: 30px;
  margin-right: 20px;
  justify-content: space-between;
  font-weight: 900;
  font-size: 20px;
`;

export const EmotionWrapper = styled.div`
  margin: 10px auto 0px; // 위 가로 아래
  padding: 5px 0px; // 세로 가로
  justify-content: center;
`;

export const EmotionButtonBox = styled.div`
  display: 'block';
  /* height: 32px; */
`;

export const EmotionButtonWrapper = styled.div`
  height: 33px;
  padding: 0px 20px;
  gap: 8px;
  overflow-x: scroll;
  overflow-y: hidden;
  overflow: hidden;
`;

export const EmotionButton = styled.span`
  display: inline-block;
  padding: 5px 10px;
  text-align: center;
  border-radius: 14px;
  border: 1px solid #292828;
  margin: 5px 5px;

  color: #292828;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0.12px;

  &:hover {
    border: 1px solid #bd2024;
    background-color: ${(props) => props.theme.redNormalColor};
    color: white;
  }
`;

export const EmtoionCardBox = styled.div`
  padding-bottom: 60px;
`;

export const EmotionCardLayout = styled.div`
  display: flex;
  padding: 17px 18px;
  margin: 17px 18px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 11px;
  background-color: #f3f3f3;
  box-shadow: 4px 5px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const EmotionCardBottomLayout = styled.div`
  display: flex;
  padding-top: 18px;
  align-items: center;
  gap: 1px;
`;

export const EmotionContentStyle = styled.div`
  color: #414b5a;
  font-size: 14px;
  font-weight: 400;
  line-height: 134.688%;
`;

export const UserLayout = styled.div`
  color: #414b5a;
  font-size: 12px;
  font-weight: 700;
`;

export const TendencyLayout = styled.div`
  display: flex;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #fffb95;
  font-size: 10px;
  font-weight: 700;
`;

export const DateLayout = styled.div`
  color: #414b5a;
  font-size: 12px;
  font-weight: 500;
`;
