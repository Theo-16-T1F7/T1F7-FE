import React, { useEffect, useRef } from 'react';
import { useQuery, QueryFunction } from '@tanstack/react-query';
import EmblaCarousel from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import * as S from './HotBoard.styled';
import { getHotboard } from '../../api/hotboard';
import { HotBoardGet } from '../../types/type';
import { formatNoticeDate } from '../../shared/dateUtils';

const HotBoard = () => {
  const { data: HotBoardData } = useQuery<HotBoardGet[]>({
    queryKey: ['getHotboard'],
    queryFn: getHotboard as QueryFunction<HotBoardGet[]>
  });

  const carouselRef = useRef(null);
  const autoplayOptions = {
    delay: 3000,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement
  };
  useEffect(() => {
    if (carouselRef.current && HotBoardData && HotBoardData.length > 0) {
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
  }, [HotBoardData]);

  return (
    <S.Container>
      <S.EmblaContainer ref={carouselRef}>
        <S.EmblaInnerContainer>
          {HotBoardData && HotBoardData.length > 0 ? (
            HotBoardData.map((item: HotBoardGet, index: number) => (
              <S.EmblaSlide key={item.postId}>
                <S.HotBoardCard>
                  <S.Name>
                    {item.title}
                    <S.CreatedAt>{formatNoticeDate(item.createdAt)}</S.CreatedAt>
                  </S.Name>
                  <S.Content>
                    <div>{item.content}</div>
                  </S.Content>
                </S.HotBoardCard>
              </S.EmblaSlide>
            ))
          ) : (
            <p>업데이트 중입니다!</p>
          )}
        </S.EmblaInnerContainer>
      </S.EmblaContainer>
    </S.Container>
  );
};

export default HotBoard;
