import { GlobalContext } from '../../context/GlobalContext';
import * as Style from './Navbar.styles';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from "react";

function Navbar() {
    const { loggedUser, handleLogoutUser } = useContext(GlobalContext);
    const navigate = useNavigate();
    
    function handleLogout(){
        handleLogoutUser();
        navigate("account/login")
    }

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
                                    <button onClick={handleLogout}>Sair</button>
                                </>
                            : <Link to={'account/login'}>Logar/ Cadastrar</Link>
                        }
                    </div>
                </section>
        </Style.Nav>
    );
}

export default Navbar;