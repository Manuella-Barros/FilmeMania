import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({theme}) => theme.COLORS.SECONDARY};
        font-family: ${({theme}) => theme.FONT.PRIMARY};
    }
    
    h1 {
        font-family: ${({theme}) => theme.FONT.SECONDARY};
    }

    main {
        width: 80vw;
        min-height: 90vh;
        display: flex;
        margin: auto;
        margin-block: 5rem;
    }

    a {
        text-decoration: none;
        font-size: 1.5rem;
    }
`