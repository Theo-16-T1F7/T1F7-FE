import React, { useState, useEffect } from 'react';
import * as S from './NeedSolutionPage.styled';
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../shared/BackButton';
import { useQuery } from '@tanstack/react-query';
import { getNeedSolution } from '../../api/mainpagelist';
import { PostDetail } from '../../types/type';
import { formatVoteDate } from '../../shared/dateUtils';

const NeedSolutionPage: React.FC<any> = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState<PostDetail[]>([]);
  const { data, error, isLoading } = useQuery<any>({
    queryKey: ['mainNeedSolution', page],
    queryFn: () => getNeedSolution(page)
  });

  useEffect(() => {
    if (data) {
      setPosts((prevPosts) => [...prevPosts, ...data.data.content]);
    }
  }, [data]);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 20) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleArticleClick = (id: number | string) => {
    navigate(`/article/${id}`);
  };

  if (isLoading && posts.length === 0) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Header />
      <S.Subheading>
        <BackButton />
        <S.SubheadingText> 해결이 필요해👩‍⚖️</S.SubheadingText>
      </S.Subheading>
      {posts.length > 0 ? (
        <>
          <ul>
            {posts.map((post: PostDetail, index: number) => (
              // key 값 오류
              <li key={`${post.id}-${index}`}>
                <S.SolutionList onClick={() => handleArticleClick(post.id)}>
                  <S.SolutionListTitle>{post.title}</S.SolutionListTitle>
                  <S.SolutionListCreateAt>{formatVoteDate(post.createdAt)}</S.SolutionListCreateAt>
                </S.SolutionList>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>등록된 글이 없습니다.</p>
      )}
    </>
  );
};

export default NeedSolutionPage;
