import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    margin: 0 auto;
    padding: 0;
    font-family: 'Nunito Sans', sans-serif;
    background: ${({ theme }) => theme.colors.background};
    transition: 1s ease-out;
  }
`;

export const Container = styled.div`
  margin: 10px 80px;
`;
