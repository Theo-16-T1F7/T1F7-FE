import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import ArticleListPage from '../pages/ArticleListPage/ArticleListPage';
import ArticleDetailPage from '../pages/ArticleDetailPage/ArticleDetailPage';
import PostPage from '../pages/PostPage/PostPage';
import NoticePage from '../pages/NoticePage/NoticePage';
import SearchPage from '../pages/SearchPage/SearchPage';
import Developing from './Developing';
import HotBoardPage from '../pages/HotBoardPage/HotBoardPage';
import ContentPage from '../pages/ContentPage/ContentPage';
import NeedEmpathyPage from '../pages/NeedEmpathyPage/NeedEmpathyPage';
import NeedSolutionPage from '../pages/NeedSolutionPage/NeedSolutionPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/developing" element={<Developing />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/article" element={<ArticleListPage />} />
        <Route path="/article/:id" element={<ArticleDetailPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/hotboard" element={<HotBoardPage />} />
        <Route path="/empathy" element={<NeedEmpathyPage />} />
        <Route path="/solution" element={<NeedSolutionPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
