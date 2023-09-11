import { keyframes, styled } from "styled-components";

export const Main = styled.main`
    background-color: white;
    border-radius: 12px;

    picture, article {
        width: 50%;
    }

    picture {
        border-radius: 12px;
        border-bottom-right-radius: 0;
        overflow: hidden;
        clip-path: polygon(0 0, 96% 0, 100% 100%, 0% 100%);

        img{
            height: 100%;
        }
    }
`
const show = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`
export const AccountContent = styled.article`
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    opacity: 0;
    animation: ${show} 1s forwards;

    h1{
        font-size: 3rem;
        font-weight: bold;
    }

    form{
        width: 70%;
    }
`

export const OptionsContainer = styled.section`
    text-align: center;
    display: inline;

    a{
        color: ${({theme}) => theme.COLORS.PRIMARY};
        font-size: 1rem;
        font-weight: bold;

        &:hover{
            opacity: 0.8;
        }
    }
`
