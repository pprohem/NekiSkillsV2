import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle `

    * {
        margin: 0; 
        padding: 0;
        box-sizing: border-box;
        font-family : Helvetica, sans-serif;
    }
    
    p { 
        text-decoration: none;
        list-style: none;
    }

    body {
        background: ${props => props.theme.colors.background};
        height: 100vh;
    }

`