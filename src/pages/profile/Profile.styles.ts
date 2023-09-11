import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    gap: 2rem;
`

export const Profile = styled.section`
    width: 50%;
    
    h2 {
        font-family: ${({theme}) => theme.FONT.SECONDARY};
        font-size: 2rem;

        /* &::after{
            content: " ";
            background-color: white;
            width: 100px;
            height: 100px;
        } */
    }

`

export const Movies = styled.section`
    width: 50%; 
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
        color: white;
        font-family: ${({theme}) => theme.FONT.SECONDARY};
        font-size: 2rem;
    }
`

export const FavGenres = styled.article`
    color: white;
    margin-block: 2rem;

    p{
        padding-block: 5px;
    }
`

export const ButtonContainer = styled.article`
    width: 33%;
`

export const PainelModerador = styled.article`
    background-color: white;
    margin-top: 1rem;

    h1{
        color: black;

    }
`