import { styled } from "styled-components";

export const InputField = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;

    label, p{
        padding-bottom: 8px;
        font-size: 1rem;
        font-family: ${({theme}) => theme.FONT.PRIMARY};
    }

    input,
    div div #favGenre,
    textarea {
        border: none;
        background-color: #EEEEEE;
        padding: 0.5rem;
        border-radius: 5px;

        &:hover{
            box-shadow: 0px 0px 5px ${({theme}) => theme.COLORS.PRIMARY};
        }
        &:focus{
            box-shadow: 0px 0px 5px ${({theme}) => theme.COLORS.PRIMARY};
            outline: 0;
        }
    }

    textarea {
        resize: none;
    }

    input[type="radio"] {
        display: none;
    }

    section{
        display: flex;
        justify-content: space-between;

        div{
            display: flex;
            width: 30%;
        }
    }

    div {
        margin-top: 0.5rem;

        div{
            display: flex;
            justify-content: space-between;
        }
    }

    #comentario{
        height: 100%;
    }
`