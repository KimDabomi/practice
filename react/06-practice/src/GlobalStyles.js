import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  *{
    font-family: 'Noto Sans KR';
  }
  body {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyles;