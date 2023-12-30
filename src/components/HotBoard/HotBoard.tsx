import React, { useEffect, useRef } from 'react';
import EmblaCarousel from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import * as S from './HotBoard.styled';

const HotBoard = () => {
  const carouselRef = useRef(null);
  const autoplayOptions = {
    delay: 3000,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement
  };
  useEffect(() => {
    if (carouselRef.current) {
      const embla = EmblaCarousel(
        carouselRef.current,
        {
          align: 'center', // 슬라이드 정렬을 시작으로 설정
          containScroll: 'trimSnaps', // 스크롤이 가장 가까운 스냅 지점에서 끝나도록 설정
          slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 수를 설정
          dragFree: true,
          loop: false
        },
        [Autoplay(autoplayOptions)]
      );
    }
  });

  const dummydata = [
    {
      id: '1',
      name: '익명1',
      content:
        '첫번째 mbti별 궁합 알려드립니다!!! 이게 최고 잘맞아요 따붕따봉dㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ',
      date: '2023/10/22'
    },
    {
      id: '2',
      name: '익명2',
      content: '두번째 mbti별 궁합 알려드립니다!!! 이게 최고 잘맞아요 따붕따봉',
      date: '2023/10/23'
    },
    {
      id: '3',
      name: '익명3',
      content: '세번째 mbti별 궁합 알려드립니다!!! 이게 최고 잘맞아요 따붕따봉',
      date: '2023/10/24'
    },
    {
      id: '4',
      name: '익명4',
      content: '네번째 mbti별 궁합 알려드립니다!!! 이게 최고 잘맞아요 따붕따봉',
      date: '2023/10/24'
    },
    {
      id: '5',
      name: '익명5',
      content: '다섯번째 mbti별 궁합 알려드립니다!!! 이게 최고 잘맞아요 따붕따봉',
      date: '2023/10/24'
    }
  ];

  return (
    <S.Container>
      <S.EmblaContainer ref={carouselRef}>
        <S.EmblaInnerContainer>
          {dummydata.map((item, index) => (
            <S.EmblaSlide key={index}>
              <S.HotBoardCard>
                <S.Name>
                  {item.name}
                  <S.CreatedAt>{item.date}</S.CreatedAt>
                </S.Name>
                <S.Content>
                  <div>{item.content}</div>
                </S.Content>
              </S.HotBoardCard>
            </S.EmblaSlide>
          ))}
        </S.EmblaInnerContainer>
      </S.EmblaContainer>
    </S.Container>
  );
};

export default HotBoard;
