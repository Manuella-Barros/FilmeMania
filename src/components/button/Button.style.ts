import { styled } from "styled-components";

export const Button = styled.button`
    border: none;
    background-color: ${({theme}) => theme.COLORS.PRIMARY};
    width: 100%;
    padding: 0.5rem;
    color: white;
    border-radius: 5px;
    font-size: 1rem;
`