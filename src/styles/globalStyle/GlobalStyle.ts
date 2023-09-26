import styled, { createGlobalStyle, keyframes } from "styled-components";

const show = keyframes`
    100%{
        opacity: 1
    }
`
export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        transition: 0.5s;
    }

    div[data-radix-popper-content-wrapper]{
        transition: none !important;
    }

    body {
        background-image: ${({theme}) => theme.COLORS.GRADIENT};
        font-family: ${({theme}) => theme.FONT.PRIMARY};
    }

    body:has(div[data-radix-popper-content-wrapper]) main{
        &:before{
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,.4);
            z-index: 1;
            opacity: 0;
            animation: ${show} 400ms forwards;
        }
    }

    #root{
        overflow-x: hidden;
    }
    
    h1 {
        font-family: ${({theme}) => theme.FONT.SECONDARY};
    }

    main {
        max-width: 70rem;
        min-height: 90vh;
        display: flex !important;
        margin: auto;
        margin-block: 3rem;
    }

    a {
        text-decoration: none;
        font-size: 1.5rem;
    }

    @media(max-width: 520px){
        main{
            width: 100%;
            height: 100%;
        }
    }
`

export const Error = styled.p`
    color: red;
    font-size: 15px;
    padding-block: 5px;
`