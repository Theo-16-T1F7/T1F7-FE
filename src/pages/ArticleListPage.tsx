import React from 'react';
import * as S from '../styles/StArticleList';
import { BackArrowButton } from '../styles/icons/SvgIcons';

const ArticleListPage = () => {
  return (
    <>
      <S.ArticleNav>
        <div>쁘띠</div>
      </S.ArticleNav>
      <S.ArticleHeader>
        <div>
          <BackArrowButton />
        </div>
      </S.ArticleHeader>
    </>
  );
};

export default ArticleListPage;
