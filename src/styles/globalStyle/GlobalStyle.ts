import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        transition: 0.5s;
    }

    body {
        background-image: ${({theme}) => theme.COLORS.GRADIENT};
        font-family: ${({theme}) => theme.FONT.PRIMARY};
    }
    
    h1 {
        font-family: ${({theme}) => theme.FONT.SECONDARY};
    }

    main {
        max-width: 70rem;
        min-height: 90vh;
        display: flex;
        margin: auto;
        margin-block: 3rem;
    }

    a {
        text-decoration: none;
        font-size: 1.5rem;
    }
`

export const Error = styled.p`
    color: red;
    font-size: 15px;
    padding-block: 5px;
`