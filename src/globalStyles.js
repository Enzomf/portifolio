import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
     box-sizing: border-box;
     padding:0;
     margin:0;
     font-family: 'Fira Code', monospace;
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
   
`;

export default GlobalStyle;
