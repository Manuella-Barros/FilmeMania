import { styled } from 'styled-components';

export const Nav = styled.nav`
    background-image: ${({theme}) => theme.COLORS.DARK_GRADIENT};

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

            a, button{
                padding: 0;
                margin: 0;
                box-sizing: border-box;
                /* line-height: 3rem; é isso mesmo, a formatação do link */
            }

            a {
                padding-inline: 1rem;
                color: white;
            }
            button{
                background-color: transparent;
                border: none;
                padding-inline: 1rem;
                color: white;
                font-size: 1.5rem;
                display: flex;
                align-items: center;
            }
        }
    }
`