import React from 'react';
import * as S from './EmotionStory.styled';

const EmotionStory = () => {
  const hashtags = ['기뻐요', '슬퍼요', '화가나', '억울해', '궁금해', '고민돼', '답답해'];
  return (
    <>
      <S.EmotionWrapper>
        <S.Subheading>감정별 이야기</S.Subheading>
        <S.EmotionButtonWrapper>
          {hashtags.map((item, idx) => {
            return <S.EmotionButton>{item}</S.EmotionButton>;
          })}
        </S.EmotionButtonWrapper>
        <div>
          <S.EmotionCardLayout>
            <div>오늘 사랑니 발치했는데 진짜 너무 아파서 스스로 선물로 옷 쇼핑했음요~ ㅠㅠ 발치한곳 완전 아파</div>
            <S.EmotionCardBottomLayout>
              <div>익명</div>
              <S.TendencyLayout>나는 F성향</S.TendencyLayout>
              <div>23/10/21</div>
            </S.EmotionCardBottomLayout>
          </S.EmotionCardLayout>
          <div>카드2</div>
        </div>
      </S.EmotionWrapper>
    </>
  );
};

export default EmotionStory;
