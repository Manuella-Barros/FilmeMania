import { styled } from "styled-components";

export const Button = styled.button`
    border: none;
    background-color: ${({theme}) => theme.COLORS.PRIMARY};
    width: 100%;
    padding: 0.5rem;
    color: white;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;

    &:hover{
        cursor: pointer;
        opacity: 0.85;
        transform: scale(1.02);
        transition: 0.2s;
    }
`