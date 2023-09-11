import Button from "../../components/button/Button";
import MovieContainer from "../../components/movieContainer/MovieContainer";
import * as Style from "./Profile.styles";

function Profile() {
    return (
        <Style.Main>
            <Style.Profile>
                <h2>Manuzinha</h2>

                <Style.FavGenres>
                    <p>Drama</p>
                    <p>Suspense</p>
                    <p>Terror</p>
                </Style.FavGenres>
                
                <Style.ButtonContainer>
                    <Button color="white">Atualiza Perfil</Button>
                </Style.ButtonContainer>

                <Style.PainelModerador>
                    <h2>Painel do Moderador</h2>
                </Style.PainelModerador>
            </Style.Profile>

            <Style.Movies>
                <h2>Suas postagens</h2>
                <MovieContainer/>
                <MovieContainer/>
                <MovieContainer/>
            </Style.Movies>
        </Style.Main>
    );
}

export default Profile;