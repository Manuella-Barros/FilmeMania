import { styled } from "styled-components";

export const Main = styled.main`
    background-color: white;

    picture, article {
        width: 50%;
    }

    picture {
        overflow: hidden;
        clip-path: polygon(0 0, 96% 0, 100% 100%, 0% 100%);

        img{
            height: 100%;
        }
    }
`

export const AccountContent = styled.article`
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h1{
        font-size: 3rem;
        font-weight: 400;
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
    }
`
