import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import ArticleListPage from '../pages/ArticleListPage/ArticleListPage';
import ArticleDetailPage from '../pages/ArticleDetailPage/ArticleDetailPage';
import PostPage from '../pages/PostPage';
import ContentsPage from '../pages/ContentsPage';
import NoticeListPage from '../pages/NoticeListPage';
import SearchPage from '../pages/SearchPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/article" element={<ArticleListPage />} />
        <Route path="/article/:id" element={<ArticleDetailPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/contents" element={<ContentsPage />} />
        <Route path="/notice" element={<NoticeListPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
