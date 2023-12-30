import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}
@font-face {
    font-family: 'SF Pro';
    src: url('path-to-sf-pro.woff2') format('font-woff2'),
         url('path-to-sf-pro.woff') format('font-woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'SF Pro', sans-serif;
  }
    h2 {
  color: #ffffff;
  font-size: 18px;
  font-weight: 900;
  font-size: 20px;
  color: black;
  }
`;

export default GlobalStyle;
