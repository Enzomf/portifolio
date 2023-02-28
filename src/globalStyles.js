import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
     box-sizing: border-box;
     padding:0;
     margin:0;
     font-family: 'Fira Code', monospace;
     scroll-behavior: smooth;
   }

   a {
    color: unset;
    text-decoration:none; 
   }

   body, html {
    background: ${props => props.theme.background };
   }

   main {
    width:100%;
   }

   h2 {
    color: ${props => props.theme.hightligth};
    font-size: 2em;
  }
   
`;

export default GlobalStyle;
