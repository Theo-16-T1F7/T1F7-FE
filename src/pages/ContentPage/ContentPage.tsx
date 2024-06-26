import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import Footer from '../../components/Footer/Footer';
import * as S from './ContentPage.Styled';
import { BackButton } from '../../shared/BackButton';
import { ContentNextButton, ContentPreviousButton, ContentCheckButton } from '../../styles/icons/SvgIcons';
import { BalanceGameGet, Choice } from '../../types/type';
import { getBalanceGame } from '../../api/content';
import { useRecoilValue } from 'recoil';
import { postSubmitVote } from '../../api/content';
import { BalanceGameVotePost, BalanceGameResGet } from '../../types/type';
import { userState, userMbtiState } from '../../atoms/atoms';
import SimpleBarChart from '../../components/SimpleBar/SimpleBar';
import { formatVoteDate } from '../../shared/dateUtils';

const ContentPage: React.FC<any> = () => {
  const token = sessionStorage.getItem('accessToken');
  const user = useRecoilValue(userState);
  const mbti = useRecoilValue(userMbtiState);
  const [currentIndexF, setCurrentIndexF] = useState(0);
  const [currentIndexT, setCurrentIndexT] = useState(0);
  const [selectedAF, setSelectedAF] = useState(false);
  const [selectedBF, setSelectedBF] = useState(false);
  const [selectedAT, setSelectedAT] = useState(false);
  const [selectedBT, setSelectedBT] = useState(false);
  const [showGraphF, setShowGraphF] = useState(false);
  const [showGraphT, setShowGraphT] = useState(false);

  const queryClient = useQueryClient();
  useEffect(() => {
    setShowGraphF(false);
    setShowGraphT(false);
  }, [currentIndexF, currentIndexT]);

  const {
    data: gameContentF,
    isLoading: isLoadingF,
    refetch: refetchF
  } = useQuery<BalanceGameGet[]>({
    queryKey: ['getBalanceGame', 'F'],
    queryFn: () => getBalanceGame('F')
  });
  const {
    data: gameContentT,
    isLoading: isLoadingT,
    refetch: refetchT
  } = useQuery<BalanceGameGet[]>({
    queryKey: ['getBalanceGame', 'T'],
    queryFn: () => getBalanceGame('T')
  });

  const currentGameContentF = gameContentF && gameContentF[currentIndexF];
  const questionIdF = currentGameContentF ? currentGameContentF.questionId : null;
  const currentGameContentT = gameContentT && gameContentT[currentIndexT];
  const questionIdT = currentGameContentT ? currentGameContentT.questionId : null;

  const mutationF = useMutation({
    mutationFn: (voteResF: BalanceGameVotePost) => postSubmitVote(voteResF, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['postSubmitVote'] });
      setSelectedAF(false);
      setSelectedBF(false);
      refetchF();
      setShowGraphF(true);
    }
  });

  const mutationT = useMutation({
    mutationFn: (voteResT: BalanceGameVotePost) => postSubmitVote(voteResT, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['postSubmitVote'] });
      setSelectedAT(false);
      setSelectedBT(false);
      refetchT();
      setShowGraphT(true);
    }
  });

  const handleSubmitF = () => {
    if (!user) {
      alert('로그인 후 이용 가능합니다.');
      return;
    } else if (mbti !== 'F') {
      alert('Mbti F만 참여에 가능합니다.');
      return;
    }
    if (questionIdF !== null) {
      const voteResF: BalanceGameVotePost = {
        questionId: questionIdF,
        isChoiceA: selectedAF,
        isChoiceB: selectedBF
      };
      mutationF.mutate(voteResF);
    } else {
      alert('질문을 선택해 주세요.');
    }
  };

  const handleSubmitT = () => {
    if (!user) {
      alert('로그인 후 이용 가능합니다.');
      return;
    } else if (mbti !== 'T') {
      alert('Mbti T만 참여에 가능합니다.');
      return;
    }

    if (questionIdT !== null) {
      const voteResT: BalanceGameVotePost = {
        questionId: questionIdT,
        isChoiceA: selectedAT,
        isChoiceB: selectedBT
      };
      mutationT.mutate(voteResT);
    } else {
      alert('질문을 선택해 주세요.');
    }
  };

  const handleResultClickF = () => {
    setShowGraphF(true);
  };

  const handleResultClickT = () => {
    setShowGraphT(true);
  };

  const handleNextF = () => {
    if (Array.isArray(gameContentF) && gameContentF.length) {
      setCurrentIndexF((prevIndex) => (prevIndex + 1) % gameContentF.length);
      setSelectedAF(false);
      setSelectedBF(false);
      setShowGraphF(false);
    }
  };

  const handlePreviousF = () => {
    if (Array.isArray(gameContentF) && gameContentF.length) {
      setCurrentIndexF((prevIndex) => (prevIndex - 1 + gameContentF.length) % gameContentF.length);
      setSelectedAF(false);
      setSelectedBF(false);
      setShowGraphF(false);
    }
  };

  const handleNextT = () => {
    if (Array.isArray(gameContentT) && gameContentT.length) {
      setCurrentIndexT((prevIndex) => (prevIndex + 1) % gameContentT.length);
      setSelectedAT(false);
      setSelectedBT(false);
      setShowGraphT(false);
    }
  };

  const handlePreviousT = () => {
    if (Array.isArray(gameContentT) && gameContentT.length) {
      setCurrentIndexT((prevIndex) => (prevIndex - 1 + gameContentT.length) % gameContentT.length);
      setSelectedAT(false);
      setSelectedBT(false);
      setShowGraphT(false);
    }
  };

  const handleAClickF = () => {
    setSelectedAF(true);
    setSelectedBF(false);
  };

  const handleBClickF = () => {
    setSelectedAF(false);
    setSelectedBF(true);
  };

  const handleAClickT = () => {
    setSelectedAT(true);
    setSelectedBT(false);
  };

  const handleBClickT = () => {
    setSelectedAT(false);
    setSelectedBT(true);
  };

  return (
    <S.StyledWrapper>
      <S.Subheading1>
        <BackButton />
        <S.SubheadingText>Contents</S.SubheadingText>
      </S.Subheading1>
      <S.MainContainer>
        <S.SubheadingF>F에게 물어봅니다.</S.SubheadingF>
        <S.FirstContainer>
          {isLoadingF ? (
            <p>Loading...</p>
          ) : (
            currentGameContentF && (
              <div key={currentGameContentF.questionId}>
                <S.BalanceGameName>
                  <S.BalanceGameText>{currentGameContentF.title}</S.BalanceGameText>
                </S.BalanceGameName>
                <S.SecondContainer>
                  <S.SelectGame onClick={handleAClickF} $Clicked={selectedAF}>
                    <S.BalanceGameImage src={currentGameContentF.choiceA.choiceImageUrl || ''} />
                    {currentGameContentF.choiceA.choiceContent}
                    {selectedAF && <ContentCheckButton />}
                  </S.SelectGame>
                  <S.SelectGame onClick={handleBClickF} $Clicked={selectedBF}>
                    <S.BalanceGameImage src={currentGameContentF.choiceB.choiceImageUrl || ''} />
                    {currentGameContentF.choiceB.choiceContent}
                    {selectedBF && <ContentCheckButton />}
                  </S.SelectGame>
                </S.SecondContainer>
                <S.BarChartWrapper>
                  {showGraphF && (
                    <SimpleBarChart
                      choiceAPercent={currentGameContentF.choiceA.choicePercent}
                      choiceBPercent={currentGameContentF.choiceB.choicePercent}
                    />
                  )}
                </S.BarChartWrapper>
              </div>
            )
          )}
          <S.ThirdContainer>
            <S.MoveButton onClick={handlePreviousF}>
              <ContentPreviousButton />
            </S.MoveButton>
            {mbti === 'F' ? (
              <S.ContentSubmitButton onClick={handleSubmitF}>제출/결과보기</S.ContentSubmitButton>
            ) : (
              <S.ContentSubmitButton onClick={handleResultClickF}>결과보기</S.ContentSubmitButton>
            )}
            <S.MoveButton onClick={handleNextF}>
              <ContentNextButton />
            </S.MoveButton>
          </S.ThirdContainer>
        </S.FirstContainer>
        <S.SubheadingT>T에게 물어봅니다.</S.SubheadingT>
        <S.FirstContainer>
          {isLoadingT ? (
            <p>Loading...</p>
          ) : (
            currentGameContentT && (
              <div key={currentGameContentT.questionId}>
                <S.BalanceGameName>
                  <S.BalanceGameText>{currentGameContentT.title}</S.BalanceGameText>
                </S.BalanceGameName>
                <S.SecondContainer>
                  <S.SelectGame onClick={handleAClickT} $Clicked={selectedAT}>
                    <S.BalanceGameImage src={currentGameContentT.choiceA.choiceImageUrl || ''} />
                    {currentGameContentT.choiceA.choiceContent}
                    {selectedAT && <ContentCheckButton />}
                  </S.SelectGame>
                  <S.SelectGame onClick={handleBClickT} $Clicked={selectedBT}>
                    <S.BalanceGameImage src={currentGameContentT.choiceB.choiceImageUrl || ''} />
                    {currentGameContentT.choiceB.choiceContent}
                    {selectedBT && <ContentCheckButton />}
                  </S.SelectGame>
                </S.SecondContainer>
                <S.BarChartWrapper>
                  {showGraphT && (
                    <SimpleBarChart
                      choiceAPercent={currentGameContentT.choiceA.choicePercent}
                      choiceBPercent={currentGameContentT.choiceB.choicePercent}
                    />
                  )}
                </S.BarChartWrapper>
              </div>
            )
          )}

          <S.ThirdContainer>
            <S.MoveButton onClick={handlePreviousT}>
              <ContentPreviousButton />
            </S.MoveButton>
            {mbti === 'T' ? (
              <S.ContentSubmitButton onClick={handleSubmitT}>제출/결과보기</S.ContentSubmitButton>
            ) : (
              <S.ContentSubmitButton onClick={handleResultClickT}>결과보기</S.ContentSubmitButton>
            )}
            <S.MoveButton onClick={handleNextT}>
              <ContentNextButton />
            </S.MoveButton>
          </S.ThirdContainer>
        </S.FirstContainer>
      </S.MainContainer>
      <Footer />
    </S.StyledWrapper>
  );
};

export default ContentPage;
