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
    input[type="radio"] + label{
        border: none;
        background-color: #EEEEEE;
        padding: 0.5rem;
        border-radius: 5px;
    }

    input[type="radio"] {
        display: none;
    }

`