import * as S from './ProfileEditPage.styled';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { updateUserNickname } from '../../api/profile';
import Footer from '../../components/Footer/Footer';
import { BackButton } from '../../shared/BackButton';
import { ProfileImage2 } from '../../styles/icons/SvgIcons';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userNicknameState, userIdState, userMbtiState } from '../../atoms/atoms';

const ProfileEditPage = () => {
  const navigate = useNavigate();
  const setNickname = useSetRecoilState(userNicknameState); // useSetRecoilState 훅 사용
  const setMbti = useSetRecoilState(userMbtiState); // useSetRecoilState 훅 사용
  const userNickname = useRecoilValue(userNicknameState);
  const userId = useRecoilValue(userIdState);
  const [newNickname, setNewNickname] = useState(''); // 변경된 닉네임을 저장하는 상태
  const [selectedMbti, setSelectedMbti] = useState(''); // 선택된 MBTI 값을 저장하는 상태
  const [isTClicked, setIsTClicked] = useState(false); // T 버튼 클릭 상태
  const [isFClicked, setIsFClicked] = useState(false); // F 버튼 클릭 상태

  const handleNicknameInputChange = (event: any) => {
    setNewNickname(event.target.value);
  };

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
      setNickname(newNickname);
      setMbti(selectedMbti);
      alert('닉네임이 성공적으로 변경되었습니다!');
      navigate(`/mypage/${userId}`);
    } catch (error) {
      console.error('닉네임 변경 실패: ', error);
      alert('닉네임 변경에 실패했습니다.');
    }
  };

  return (
    <>
      <S.Subheading>
        <BackButton />
        <S.SubheadingText>내 정보 수정</S.SubheadingText>
      </S.Subheading>
      <S.MainContainer>
        <S.FirstContainer>
          <ProfileImage2 />
          <S.UserNickname>{userNickname}</S.UserNickname>
          <S.EditNicknameInputContainer>
            <S.EditNicknameInput
              placeholder="수정할 닉네임을 입력해주세요"
              value={newNickname}
              onChange={handleNicknameInputChange}
            />
          </S.EditNicknameInputContainer>
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
          <S.SubmitNicknameEdit onClick={handleNicknameChange}>변경하기</S.SubmitNicknameEdit>
        </S.SecondContainer>
      </S.MainContainer>
      <Footer />
    </>
  );
};
export default ProfileEditPage;
