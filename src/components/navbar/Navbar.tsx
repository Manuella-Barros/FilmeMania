import { GlobalContext } from '../../context/GlobalContext';
import * as Style from './Navbar.styles';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from "react";

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
                </section>
        </Style.Nav>
    );
}

export default Navbar;