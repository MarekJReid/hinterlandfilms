import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 
  }

  html, body {
    font-size: 16px;
    font-family: 'CentraNo2', sans-serif;
    background:  var(--color-primary);
  
  }
  a {
    color: #333333;
  }
  h1 {
    font-weight: normal;
  }
`

export default GlobalStyles