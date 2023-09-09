import * as Style from './Navbar.styles';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <Style.Nav>
                <section>
                    <Link to={'/'}>
                        <h1>FilmeMania</h1>
                    </Link>
                    <div>
                        <Link to={'/'}>Home</Link>
                        <Link to={'./account/login'}>Perfil</Link>
                    </div>
                </section>
        </Style.Nav>
    );
}

export default Navbar;