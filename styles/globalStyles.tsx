import { createGlobalStyle, css, CSSProperties } from 'styled-components';

const theme = {};

const GlobalStyle = createGlobalStyle`${css`
  html {
    /* colors */
    --primary: #166cd7;
    --white: #fff;
    --black: #24292f;
    --gray: #6f7781;
    --lightGray: #d0d7de;
    --bg-gray: #c4c4c4;
    /* font-weight */
    --fw-bold: 700;
    --fw-semiBold: 600;
    --fw-medium: 500;
    --fw-normal: 400;
    --fw-light: 300;
    --fw-extraLight: 200;
    /* screens */
    --maxWidth: 950px;
    box-sizing: border-box;
    font-size: 62.5%;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
  * {
    box-sizing: border-box;
  }
`}`;

export default GlobalStyle;
