import { styled } from "styled-components";

export const AllMovies = styled.article`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
`

export const Main = styled.main`
    display: block;
`

export const CommentContainer = styled.article`
    display: flex;
    background-color: white;
    border-radius: 10px;
    width: calc(1120px - 64px);
    margin: auto;
    margin-bottom: 2rem;
    border: 2px solid white;
    gap: 2rem;
    min-height: 18rem;
    height: 18rem;
    
    picture{
        width: 40%;
        img{
            object-fit: cover;
            border-radius: 10px 0px 0px 10px;
            width: 100%;
            height: 100%;
            clip-path: polygon(0 0, 88% 0, 100% 100%, 0% 100%);
        }
    }
`

export const CommentForm = styled.form`
    display: flex;
    width: 60%;
    gap: 1.5rem;
    padding: 2rem 2rem 2rem 0;

    section{
        width: 100%;
        
        div button{
            width: 50%;
        }
    }
`

export const RatingContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div{
        position: relative;
        & + svg{
            position: absolute;
            top: 31%;
            right: 3%;
        }
    }
`

export const SelectMovie = styled.section`
    select{
        border: none;
        font-weight: bold;
        padding: 0.5rem;
        border-radius: 5px;
        width: 80%;
        background-color: ${({theme}) => theme.COLORS.PRIMARY};
        color: white;
        opacity: 0.8;
    
        &:hover{
            box-shadow: 0px 0px 5px ${({theme}) => theme.COLORS.PRIMARY};
        }
        &:focus{
            box-shadow: 0px 0px 5px ${({theme}) => theme.COLORS.PRIMARY};
            outline: 0;
        }

        option{
            padding: 1rem;
            color: black;
            background-color: white;
        }
    }
`
