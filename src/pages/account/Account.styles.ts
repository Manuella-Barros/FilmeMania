import { styled } from "styled-components";

export const Main = styled.main`
    background-color: white;

    picture, article {
        width: 50%;
    }

    picture {
        overflow: hidden;

        img{
            height: 100%;
            //transform: rotate(10deg);
        }
        background-color: red;
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

    /* form{
        width: 70%;
        background-color: red;
    } */
`

export const OptionsContainer = styled.section`
    text-align: center;

    span{
        color: ${({theme}) => theme.COLORS.PRIMARY}
    }
`
