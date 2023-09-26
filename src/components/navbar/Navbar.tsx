import { GlobalContext } from '../../context/GlobalContext';
import * as Style from './Navbar.styles';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from "react";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { List } from '@phosphor-icons/react';

function Navbar() {
    const { loggedUser, handleLogoutUser } = useContext(GlobalContext);
    const navigate = useNavigate();

    // pego o caminho 
    const {pathname} = useLocation()

    // verifico se eh para sair
    useEffect(()=>{
        if(pathname === '/logout'){
            handleLogoutUser();
            navigate("account/login");
            localStorage.removeItem("loggedUserInfo");
        }

   }, [pathname])


    return (
        <DropdownMenu.Root>
            <Style.Nav>
                <section>
                    <Link to={'/'}>
                        <h1>FilmeMania</h1>
                    </Link>
                    <div>
                        <Link to={'/'}>Home</Link>
                        {
                            loggedUser != null
                            ? 
                                <>
                                    <Link to={'profile'} >Perfil</Link>
                                    <Link to={'/logout'} >Sair</Link>
                                </>
                            : <Link to={'account/login'}>Logar/ Cadastrar</Link>
                        }
                    </div>

                    <Style.DropdownMenuTrigger  asChild>
                        <List size={33} color='white' weight='bold'/>
                    </Style.DropdownMenuTrigger>

                    <DropdownMenu.Portal>
                        <Style.DropdownMenuContent sideOffset={20} align='end'>
                            <Style.DropdownMenuDropdownMenuItem onClick={() => navigate("/")}>
                                Home
                            </Style.DropdownMenuDropdownMenuItem>
                            <Style.DropdownMenuSeparator/>

                            {
                                loggedUser != null && 
                                <>
                                    <Style.DropdownMenuDropdownMenuItem onClick={() => navigate("profile")}>
                                        Perfil
                                    </Style.DropdownMenuDropdownMenuItem>
                                    <Style.DropdownMenuSeparator/>

                                    <Style.DropdownMenuDropdownMenuItem onClick={() => navigate("/logout")}>
                                        Sair
                                    </Style.DropdownMenuDropdownMenuItem>
                                </>
                            }

                            {
                                loggedUser == null && 
                                <>
                                    <Style.DropdownMenuDropdownMenuItem onClick={() => navigate("account/login")}> 
                                        Logar/ Cadastrar
                                    </Style.DropdownMenuDropdownMenuItem>
                                </>
                            }

                        </Style.DropdownMenuContent>
                    </DropdownMenu.Portal>
                </section>
            </Style.Nav>
        </DropdownMenu.Root>
    );
}

export default Navbar;