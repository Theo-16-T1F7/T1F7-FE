import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/variable/woff2/SUIT-Variable.css');

  :root {
    --foreground-rgb: #222222;
    --background-start-rgb: 214, 219, 220;
    --background-end-rgb: 255, 255, 255;
    --base-font: 'SUIT', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }


`;
export default GlobalStyle;
