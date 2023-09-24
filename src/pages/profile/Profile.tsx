import { useContext, useEffect, useState, useRef } from "react";
import Button from "../../components/button/Button";
import MovieContainer from "../../components/movieContainer/MovieContainer";
import * as Style from "./Profile.styles";
import { GlobalContext } from "../../context/GlobalContext";
import { selectAllPosts } from "../../db/supabaseActions";
import { IMovie } from "../home/Home";
import { InputField } from "../../components/inputField/InputField.styles";

function Profile() {
    const { loggedUser } = useContext(GlobalContext);
    const [ posts, setPosts ] = useState<IMovie[] | null>(null);
    const searchMovies = useRef(null);

    useEffect(() => {
        selectAllPosts().then(res => {
            if(res){
                setPosts(res); 
            }
        });
    }, [])

    function handlePesquisarFilme(){
        console.log(searchMovies?.current?.value);
    }


    return (
        <Style.Main>
            <Style.Profile>
                <h1>{loggedUser?.username}</h1>

                <Style.FavGenres>
                    {
                        loggedUser?.favGenres.map(genre => <p>{genre.genres.name}</p>)
                    }
                </Style.FavGenres>
                
                <Style.ButtonContainer>
                    <Button color="white">Atualiza Perfil</Button>
                </Style.ButtonContainer>

                <Style.PainelModerador>
                    <h2>Pesquisar Filme</h2>

                    <InputField>
                        <input ref={searchMovies} type="text" placeholder="Digite o nome do filme" />
                    </InputField>
                    <Button onClick={handlePesquisarFilme}>Pesquisar</Button>
                    <Button>Limpar filtro</Button>
                </Style.PainelModerador>
            </Style.Profile>

            <Style.Movies>
                <h1>Suas postagens</h1>
                {
                    posts && posts?.map(post => {
                        if(post.fk_user_id == loggedUser?.user_id){
                            return <MovieContainer 
                                key={post.id}
                                comment={post.comment}
                                movieID={post.movie_id}
                                rating={post.rating}
                                userID={post.fk_user_id}
                            />
                        }
                    }).reverse()
                }

            </Style.Movies>
        </Style.Main>
    );
}

export default Profile;