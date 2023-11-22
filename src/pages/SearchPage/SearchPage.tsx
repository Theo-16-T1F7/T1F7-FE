import React from 'react';
import { Subheading } from './SearchPage.styled';
import { SearchBar } from './SearchPage.styled';
import { SearchBackButton } from '../../shared/BackButton';
const SearchPage = () => {
  return (
    <Subheading>
      <SearchBackButton />
      <SearchBar placeholder="검색어를 입력하세요" />
    </Subheading>
  );
};

export default SearchPage;
