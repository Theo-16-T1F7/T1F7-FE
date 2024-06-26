import React, { useState } from 'react';
import * as S from './MbtiSettingPage.styled';
import { useQuery } from '@tanstack/react-query';
import { getUserMbti } from '../../api/profile';
import { useNavigate } from 'react-router-dom';
import { updateUserNickname } from '../../api/profile';
import Footer from '../../components/Footer/Footer';
import { BackButton } from '../../shared/BackButton';
import { ProfileImage2 } from '../../styles/icons/SvgIcons';
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import { userNicknameState } from '../../atoms/atoms';
import { nicknameState, userMbtiState } from '../../atoms/atoms';

const MbtiSettingPage = () => {
  const navigate = useNavigate();
  const setNickname = useSetRecoilState(userNicknameState); // useSetRecoilState 훅 사용
  const newNickname = useRecoilValue(nicknameState);
  const [selectedMbti, setSelectedMbti] = useRecoilState(userMbtiState); // 선택된 MBTI 값을 저장하는 상태
  const [isTClicked, setIsTClicked] = useState(false); // T 버튼 클릭 상태
  const [isFClicked, setIsFClicked] = useState(false); // F 버튼 클릭 상태

  // const { data: myMbti } = useQuery<string>({
  //   queryKey: ['getUserMbti'],
  //   queryFn: getUserMbti
  // });

  const handleMbtiChange = (mbtiValue: string) => {
    setSelectedMbti(mbtiValue);
    // 클릭된 버튼에 따라 상태 업데이트
    if (mbtiValue === 'T') {
      setIsTClicked(true);
      setIsFClicked(false);
    } else {
      setIsTClicked(false);
      setIsFClicked(true);
    }
  };

  const handleNicknameChange = async () => {
    try {
      await updateUserNickname(newNickname, selectedMbti);
      navigate('/');
    } catch (error) {
      console.error('닉네임 변경 실패: ', error);
      alert('닉네임 변경에 실패했습니다.');
    }
  };

  return (
    <>
      <S.Subheading>
        <BackButton />
        <S.SubheadingText>내 MBTI</S.SubheadingText>
      </S.Subheading>
      <S.MainContainer>
        <S.FirstContainer>
          <ProfileImage2 />
          <S.EditMbtiContainer>
            <S.RadioButtonLabel>
              <S.MbtiTButton buttoncolor="white" onClick={() => handleMbtiChange('T')} $clicked={isTClicked}>
                뇌가 먼저 반응하는 T
              </S.MbtiTButton>
            </S.RadioButtonLabel>
            <S.RadioButtonLabel>
              <S.MbtiFButton buttoncolor="white" onClick={() => handleMbtiChange('F')} $clicked={isFClicked}>
                심장이 먼저 반응하는 F
              </S.MbtiFButton>
            </S.RadioButtonLabel>
          </S.EditMbtiContainer>
        </S.FirstContainer>
        <S.SecondContainer>
          <S.SubmitNicknameEdit onClick={handleNicknameChange}>다음</S.SubmitNicknameEdit>
        </S.SecondContainer>
      </S.MainContainer>
      <Footer />
    </>
  );
};
export default MbtiSettingPage;
