import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    gap: 2rem;
    justify-content: space-between;
`

export const Profile = styled.section`
    width: 35%;
    
    h1{
        color: white;
        font-family: ${({theme}) => theme.FONT.SECONDARY};
        font-size: 2rem;
        position: relative;

        &::after{
            position: absolute;
            top: 40px;
            left: 0;
            content: '';
            background-color: white;
            width: 50px;
            height: 5px;
        }

        &:first-child{
            text-transform: capitalize;
        }
    }

`

export const Movies = styled.section`
    width: 50%; 
    display: flex;
    flex-direction: column;
    gap: 1rem;
    

    h1 {
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
    width: 50%;
`

export const PainelModerador = styled.article`
    background-color: white;
    margin-top: 1rem;
    padding: 2rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2{
        color: black;
    }
`