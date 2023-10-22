import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ArticleListPage from './pages/ArticleListPage';
import ContentsPage from './pages/ContentsPage';
import NoticeListPage from './pages/NoticeListPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/article" element={<ArticleListPage />} />
          <Route path="/contents" element={<ContentsPage />} />
          <Route path="/notice" element={<NoticeListPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
