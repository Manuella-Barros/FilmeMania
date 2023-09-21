import { styled } from "styled-components";

export const Container = styled.section`
    min-width: 320px;
    width: 32rem;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    border-radius: 10px;
    border: 2px solid white;

    section{
        width: 60%;
        padding: 1.5rem;
    }

    picture{
        width: 40%;
        img{
            border-radius: 10px 0px 0px 10px;
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
`

export const MovieInfo = styled.div`
    text-align: center;
    h2, h3{
        color: ${({theme}) => theme.COLORS.PRIMARY};
        padding-bottom: 0.5rem;
    }

    h3{
        font-size: 1rem;
        font-weight: 400;
    }
    
    div{
        display: flex;
        justify-content: center;
        flex-direction: row;
        column-gap: 10px;
        flex-wrap: wrap;
    }
`

export const Comment = styled.div`
    padding-block: 1rem;
    p{
        font-size: 0.875rem;
    }
`

export const UserInfo = styled.div`
    p{
        font-size: 1rem;
    }

    span{
        font-size: 0.85rem;
        opacity: 0.7;

        &:not(:first-child):before{
            content: " - ";
            position: relative;
            right: 5px;
        }
    }

    div{
        display: flex;
        gap: 10px;

    }
`