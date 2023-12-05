import styled from 'styled-components';
import { NoticeListTitleLine } from '../../shared/ClampLines';

export const SolutionWrapper = styled.div`
  display: flex;
  padding: 12px 36px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const TitleStyle = styled.div`
  color: #424242;
  font-size: 14px;
  font-weight: 900;
  line-height: 120%; /* 16.8px */
  letter-spacing: -0.42px;
  ${NoticeListTitleLine};
`;

export const DateStyle = styled.div`
  color: #959595;
  font-size: 12px;
  font-weight: 274;
  line-height: 100%; /* 12px */
  letter-spacing: -0.36px;
`;
