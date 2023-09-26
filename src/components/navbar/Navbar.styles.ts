import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { keyframes, styled } from 'styled-components';

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

    @media(max-width: 520px){
        section{
            width: 90vw;

            h1 {
                font-size: 2.2rem;
            }

            div{
                display: none;
            }
        }
    }
`

export const DropdownMenuTrigger = styled(DropdownMenu.Trigger)`
    @media(min-width: 521px){
        display: none;
    }
`


export const DropdownMenuContent = styled(DropdownMenu.Content)`
    width: 10rem;
    inset: 0 !important;
    right: 10%;
    border-radius: 10px;
    font-size: 1rem;
    text-align: center;
    color: ${({theme}) => theme.COLORS.SECONDARY};
    position: relative;
    z-index: 10 !important;

`

const animatenavitens = keyframes`
    100%{
        opacity: 1;
        transform: translateY(0);
    }
`
export const DropdownMenuDropdownMenuItem = styled(DropdownMenu.DropdownMenuItem)`
    padding-block: 0.9rem;
    opacity: 0;
    animation: ${animatenavitens} 400ms forwards;
    background-color: white;
    transform: translateY(-10px);




    &:hover{
        background-color: ${({theme}) => theme.COLORS.SECONDARY};
        color: white;
    }

    &:first-child{
        border-top-right-radius: 7px;
        border-top-left-radius: 7px;
    }
    &:last-child{
        border-bottom-right-radius: 7px;
        border-bottom-left-radius: 7px;
    }
`
export const DropdownMenuSeparator = styled(DropdownMenu.Separator)`
    height: 2px;
    background-color: ${({theme}) => theme.COLORS.SECONDARY};
`