import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #333;
    font-family: 'Quicksand', sans-serif;
  }

  html {
    font-size: 16px;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }
`;
