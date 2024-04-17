// import React from 'react';
// import { Subheading } from './SearchPage.styled';
// import { SearchBar } from './SearchPage.styled';
// import { SearchBackButton } from '../../shared/BackButton';
// const SearchPage = () => {
//   return (
//     <Subheading>
//       <SearchBackButton />
//       <SearchBar placeholder="검색어를 입력하세요" />
//     </Subheading>
//   );
// };

// export default SearchPage;

import React from 'react';
import Footer from '../../components/Footer/Footer';
import * as S from './SearchPage';
import Developing from '../../shared/Developing';
const SearchPage: React.FC<any> = () => {
  return (
    <>
      <Developing />
      <Footer />
    </>
  );
};

export default SearchPage;
