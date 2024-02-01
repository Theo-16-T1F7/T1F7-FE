import * as S from './ProfileEditPage.styled';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { updateUserNickname } from '../../api/profile';
import Footer from '../../components/Footer/Footer';
import { BackButton } from '../../shared/BackButton';
import { ProfileImage2 } from '../../styles/icons/SvgIcons';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userNicknameState } from '../../atoms/atoms';

const ProfileEditPage = () => {
  const navigate = useNavigate();
  const setNickname = useSetRecoilState(userNicknameState); // useSetRecoilState 훅 사용
  const userNickname = useRecoilValue(userNicknameState);
  const [newNickname, setNewNickname] = useState(''); // 변경된 닉네임을 저장하는 상태
  const handleNicknameInputChange = (event: any) => {
    setNewNickname(event.target.value);
  };

  const handleNicknameChange = async () => {
    try {
      await updateUserNickname(newNickname);
      setNickname(newNickname);
      alert('닉네임이 성공적으로 변경되었습니다!');
      navigate('/mypage');
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
