import * as S from './NicknameSettingPage.styled';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { updateUserNickname } from '../../api/profile';
import Footer from '../../components/Footer/Footer';
import { BackButton } from '../../shared/BackButton';
import { ProfileImage2 } from '../../styles/icons/SvgIcons';
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import { userNicknameState } from '../../atoms/atoms';
import { nicknameState, userMbtiState } from '../../atoms/atoms';

export const NicknameSettingPage = () => {
  const navigate = useNavigate();
  // const setNickname = useSetRecoilState(userNicknameState); // useSetRecoilState 훅 사용
  // const userNickname = useRecoilValue(userNicknameState);
  const [nickname, setNickname] = useRecoilState(nicknameState);

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };
  const nextPage = () => {
    navigate('/mbti');
  };

  return (
    <>
      <S.Subheading>
        <BackButton />
        <S.SubheadingText>내 닉네임</S.SubheadingText>
      </S.Subheading>
      <S.MainContainer>
        <S.FirstContainer>
          <ProfileImage2 />
          {/* <S.UserNickname>{userNickname}</S.UserNickname> */}
          <S.EditNicknameInputContainer>
            <S.EditNicknameInput
              placeholder="사용할 닉네임을 입력해주세요"
              value={nickname}
              onChange={handleNicknameChange}
            />
          </S.EditNicknameInputContainer>
        </S.FirstContainer>
        <S.SecondContainer>
          <S.SubmitNicknameEdit onClick={nextPage}>다음</S.SubmitNicknameEdit>
        </S.SecondContainer>
      </S.MainContainer>
      <Footer />
    </>
  );
};
export default NicknameSettingPage;
