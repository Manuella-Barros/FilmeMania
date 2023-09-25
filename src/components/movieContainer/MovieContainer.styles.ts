import { styled } from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    min-width: 320px;
    height: 20rem;
    width: 32rem;
    background-color: white;
    border-radius: 10px;
    border: 2px solid white;

    section{
        width: 60%;
        height: 100%;
        padding: 1rem 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    picture{
        width: 40%;
        height: 100%;
        img{
            border-radius: 10px 0px 0px 10px;
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
`

export const MovieInfo = styled.div`
    text-align: left;
    h2{
        color: ${({theme}) => theme.COLORS.PRIMARY};
        padding-bottom: 0.5rem;
        font-size: 1.25rem;
    }
    
    div{
        display: flex;
        justify-content: left;
        flex-direction: row;
        column-gap: 10px;
        flex-wrap: wrap;

        h3{
            font-size: 0.9rem;
            background-color: ${({theme}) => theme.COLORS.PRIMARY};
            color: white;
            padding: 0.3rem;
            border-radius: 5px;
            margin-bottom: 0.5rem;
        }
    }
`

export const Comment = styled.div`
    //height: 7.5rem;
    height: 50%;
    overflow: scroll;

    &::-webkit-scrollbar {
        width: 7px;               /* width of the entire scrollbar */
    }

    &::-webkit-scrollbar-track {
        background: transparent;        /* color of the tracking area */
    }

    &:hover{
        &::-webkit-scrollbar-thumb {
            background-color: ${({theme}) => theme.COLORS.PRIMARY};    /* color of the scroll thumb */
            border-radius: 20px;       /* roundness of the scroll thumb */
        }
    }

    padding-block: 1rem;
    p{
        font-size: 1rem;
    }
`

export const UserInfo = styled.div`
    p{
        font-size: 1rem;
        opacity: 0.7;
        font: bolder;

        &:first-child{
            text-transform: capitalize;
        }
    }

    span{
        font-size: 0.85rem;

        &:not(:first-child):before{
            content: " | ";
            position: relative;
            right: 5px;
        }
    }

    div{
        display: flex;
        gap: 10px;

    }
`
// import { styled } from "styled-components";

// export const Container = styled.section`
//     display: flex;
//     flex-wrap: wrap;
//     min-width: 320px;
//     width: 32rem;
//     background-color: white;
//     border-radius: 10px;
//     border: 2px solid white;

//     section{
//         width: 60%;
//         padding: 1.5rem;
//         display: flex;
//         flex-direction: column;
//         justify-content: space-between;
//     }

//     picture{
//         width: 40%;
//         img{
//             border-radius: 10px 0px 0px 10px;
//             object-fit: cover;
//             width: 100%;
//             height: 100%;
//         }
//     }
// `

// export const MovieInfo = styled.div`
//     text-align: center;
//     h2, h3{
//         color: ${({theme}) => theme.COLORS.PRIMARY};
//         padding-bottom: 0.5rem;
//     }

//     h3{
//         font-size: 1rem;
//         font-weight: 400;
//     }
    
//     div{
//         display: flex;
//         justify-content: center;
//         flex-direction: row;
//         column-gap: 10px;
//         flex-wrap: wrap;
//     }
// `

// export const Comment = styled.div`
//     padding-block: 1rem;
//     p{
//         font-size: 0.875rem;
//     }
// `

// export const UserInfo = styled.div`
//     p{
//         font-size: 1rem;
//     }

//     span{
//         font-size: 0.85rem;
//         opacity: 0.7;

//         &:not(:first-child):before{
//             content: " - ";
//             position: relative;
//             right: 5px;
//         }
//     }

//     div{
//         display: flex;
//         gap: 10px;

//     }
// `