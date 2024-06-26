import React from 'react';
import styled from 'styled-components';

const BarContainer = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  height: 30px; /* 기본 높이 설정 */
  position: relative; /* 상대 위치 설정 */
`;

const BarSegment = styled.div<{ width: number; color: string }>`
  height: 100%; /* 부모 요소의 높이를 상속 */
  width: ${(props) => props.width}%;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
`;

const CenteredText = styled.div`
  position: absolute; /* 절대 위치 설정 */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center; /* 중앙 정렬 */
  align-items: center; /* 중앙 정렬 */
  color: black;
  font-weight: bold;
`;

interface SimpleBarChartProps {
  choiceAPercent: number | null;
  choiceBPercent: number;
}

const SimpleBarChart: React.FC<SimpleBarChartProps> = ({ choiceAPercent, choiceBPercent }) => {
  const choiceAPercentOrDefault = choiceAPercent ?? 0;

  if (choiceAPercentOrDefault === 0 && choiceBPercent === 0) {
    return (
      <BarContainer>
        <CenteredText>0%</CenteredText>
      </BarContainer>
    );
  }

  return (
    <BarContainer>
      {choiceAPercentOrDefault !== 0 && (
        <BarSegment width={choiceAPercentOrDefault} color="red">
          {choiceAPercentOrDefault}%
        </BarSegment>
      )}
      {choiceBPercent !== 0 && (
        <BarSegment width={choiceBPercent} color="blue">
          {choiceBPercent}%
        </BarSegment>
      )}
    </BarContainer>
  );
};

export default SimpleBarChart;
