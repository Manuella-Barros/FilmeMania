import { useContext } from "react";
import Button from "../../components/button/Button";
import InputField from "../../components/inputField/InputField";
import MovieContainer from "../../components/movieContainer/MovieContainer";
import * as Style from "./Profile.styles";
import { GlobalContext } from "../../context/GlobalContext";

function Profile() {
    const { loggedUser } = useContext(GlobalContext);
    return (
        <Style.Main>
            <Style.Profile>
                <h1>{loggedUser?.username}</h1>

                <Style.FavGenres>
                    <p>{loggedUser?.fav_gen_1}</p>
                    <p>{loggedUser?.fav_gen_2}</p>
                    <p>{loggedUser?.fav_gen_3}</p>
                </Style.FavGenres>
                
                <Style.ButtonContainer>
                    <Button color="white">Atualiza Perfil</Button>
                </Style.ButtonContainer>

                <Style.PainelModerador>
                    <h2>Painel do Moderador</h2>

                    <InputField label="Pesquisar usuário" placeholder="Insira o nome do usuario"/>
                    <Button>Excluir</Button>
                    <Button>Limpar Postagens</Button>
                    <Button>Promover a MOD</Button>
                </Style.PainelModerador>
            </Style.Profile>

            <Style.Movies>
                <h1>Suas postagens</h1>
                <MovieContainer/>
                <MovieContainer/>
                <MovieContainer/>
            </Style.Movies>
        </Style.Main>
    );
}

export default Profile;