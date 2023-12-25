import * as S from './Header.styled';
import { WhiteHeaderIcon } from '../../styles/icons/SvgIcons';
import { RedHeaderIcon, Notification } from '../../styles/icons/SvgIcons';

export interface HeaderProps {
  headercolor?: string;
}

const Header: React.FC<HeaderProps> = (props: any) => {
  
  return (
    <>
      <S.Header color={props.headercolor}>
        <S.Logo color={props.headercolor}>
          {props.headercolor === 'red' ? <WhiteHeaderIcon /> : <RedHeaderIcon />}
        </S.Logo>
        <S.Notification>
          <Notification></Notification>
        </S.Notification>
      </S.Header>
    </>
  );
};
export default Header;
