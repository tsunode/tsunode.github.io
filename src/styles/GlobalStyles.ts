import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
  }

  body,
  html {
    background-color: var(--primary);
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    color: var(--white);

    transition: 0.6s;
  }

  h1 {
    font-size: 4rem
  }

  h2 {
    font-size: 2.4rem
  }

  h3 {
    font-size: 1.8rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  :root {
    --primary: #0c0c09;
    --white: #FFF;
  }
`;
