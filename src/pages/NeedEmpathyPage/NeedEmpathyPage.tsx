import React, { useState, useEffect } from 'react';
import * as S from './NeedEmpathyPage.styled';
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../shared/BackButton';
import { useQuery } from '@tanstack/react-query';
import { getNeedEmpathy } from '../../api/mainpagelist';
import { PostDetail } from '../../types/type';
import { formatNoticeDate } from '../../shared/dateUtils';

const NeedEmpathyPage: React.FC<any> = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState<PostDetail[]>([]);
  const { data, error, isLoading } = useQuery<any>({
    queryKey: ['mainNeedEmpathy', page],
    queryFn: () => getNeedEmpathy(page)
  });
  const getData: PostDetail[] = data?.data?.content;
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
        <S.SubheadingText> 공감이 필요해🥹</S.SubheadingText>
      </S.Subheading>
      {posts.length > 0 ? (
        <>
          <ul>
            {posts.map((post: PostDetail, index: number) => (
              // key 값 오류
              <li key={`${post.id}-${index}`}>
                <S.EmpathyList onClick={() => handleArticleClick(post.id)}>
                  <S.EmpathyListTitle>{post.title}</S.EmpathyListTitle>
                  <S.EmpathyListCreateAt>{formatNoticeDate(post.createdAt)}</S.EmpathyListCreateAt>
                </S.EmpathyList>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No List found</p>
      )}
    </>
  );
};
export default NeedEmpathyPage;
