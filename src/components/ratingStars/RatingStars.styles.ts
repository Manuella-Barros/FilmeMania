import styled from "styled-components";

export const ContainerSelectedStar = styled.label`
    color: ${({theme}) => theme.COLORS.STARS_COLOR};

    & + input{
        appearance: none;
    }
`
export const ContainerStar = styled.span`
    color: ${({theme}) => theme.COLORS.STARS_COLOR};
`