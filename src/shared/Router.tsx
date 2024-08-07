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
import LoginPage from '../pages/LoginPage/LoginPage';
import Redirection from '../pages/Redirection/Redirection';
import MyPage from '../pages/MyPage/MyPage';
import ProfileEditPage from '../pages/ProfileEditPage/ProfileEditPage';
import NicknameSettingPage from '../pages/SignUpPage/NicknameSettingPage';
import MbtiSettingPage from '../pages/SignUpPage/MbtiSettingPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/developing" element={<Developing />} />
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/article" element={<ArticleListPage />} /> */}
        <Route path="/article/:id" element={<ArticleDetailPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/hotboard" element={<HotBoardPage />} />
        <Route path="/empathy" element={<NeedEmpathyPage />} />
        <Route path="/solution" element={<NeedSolutionPage />} />
        <Route path="/oauth2/kakao/callback" element={<Redirection />} />
        
        {/* <Route path="/kakao/oauth" element={<Redirection />} /> */}
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/mypage/" element={<MyPage />} /> */}
        <Route path="/mypage/:userId" element={<MyPage />} />
        <Route path="/profileedit" element={<ProfileEditPage />} />
        <Route path="/nicknameset" element={<NicknameSettingPage />} />
        <Route path="/mbtiset" element={<MbtiSettingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
