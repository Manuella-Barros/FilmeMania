import { styled } from 'styled-components';

export const Nav = styled.nav`
    background-color: ${({theme}) => theme.COLORS.PRIMARY};

    section {
        width: 80vw;
        margin: auto;
        display: flex;
        justify-content: space-between;
        padding-block: 2rem;

        h1 {
            font-size: 2.5rem; //40px
            font-weight: 600;
            color: white;
        }

        div {
            display: flex;
            align-items: center;

            a {
                padding-inline: 1rem;
                color: white;
            }
        }
    }
`