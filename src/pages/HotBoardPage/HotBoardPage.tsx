import React from 'react';
import * as S from './HotBoardPage.styled';
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../shared/BackButton';
import { useQuery, QueryFunction } from '@tanstack/react-query';
import { formatNoticeDate } from '../../shared/dateUtils';
import { HotBoardGet } from '../../types/type';
import { getHotboard } from '../../api/hotboard';

const HotBoardPage: React.FC<any> = () => {
  const navigate = useNavigate();

  const handleDetailClick = (postId: number) => {
    navigate(`/article/${postId}`);
  };

  const { data: HotBoardData } = useQuery<HotBoardGet[]>({
    queryKey: ['getHotboard'],
    queryFn: getHotboard as QueryFunction<HotBoardGet[]>
  });

  return (
    <>
      <Header />
      <S.Subheading>
        <BackButton />
        <S.SubheadingText>Hot한 게시글</S.SubheadingText>
      </S.Subheading>
      {HotBoardData && HotBoardData.length > 0 ? (
        <ul>
          {HotBoardData.map((post: any) => (
            <div key={post.postId}>
              <S.SolutionList onClick={() => handleDetailClick(post.postId)}>
                <S.SolutionListTitle>{post.title}</S.SolutionListTitle>
                <S.SolutionListCreateAt>{formatNoticeDate(post.createdAt)}</S.SolutionListCreateAt>
              </S.SolutionList>
            </div>
          ))}
        </ul>
      ) : (
        <p>등록된 글이 없습니다.</p>
      )}
    </>
  );
};
export default HotBoardPage;
