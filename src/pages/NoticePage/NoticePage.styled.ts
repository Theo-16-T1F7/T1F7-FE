import styled from 'styled-components';
import { NoticeListTitleLine } from '../../shared/ClampLines';
import { NoticeListContentLine } from '../../shared/ClampLines';
export const Subheading = styled.h2`
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-right: 100px;
  font-weight: 900;
  font-size: 20px;
`;
export const SubheadingText = styled.div`
  margin-left: 10px;
`;
export const NoticeList = styled.div`
  border-top: 2px solid ${(props) => props.theme.dividerColor};
  border-bottom: 1px solid ${(props) => props.theme.dividerColor};
`;

export const NoticeListTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #424242;
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
  ${NoticeListTitleLine}
`;

export const NoticeListContent = styled.div`
  font-size: 10px;
  font-weight: 700;
  color: #424242;
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
  ${NoticeListContentLine}
`;

export const NoticeListCreateAt = styled.div`
  font-size: 10px;
  color: #959595;
  margin-top: 5px;
  margin-left: 30px;
  margin-bottom: 10px;
`;

export const NoticeListToggleTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #424242;
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
`;

export const NoticeListToggleContent = styled.div`
  font-size: 10px;
  font-weight: 700;
  color: #424242;
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
`;