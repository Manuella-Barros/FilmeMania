import { useEffect, useState, useContext } from "react";
import MovieContainer from "../../components/movieContainer/MovieContainer";
import { selectAllPosts } from "../../db/supabaseActions";
import * as Style from "./Home.styles";
import CommentContainer from "./components/CommentContainer";
import { GlobalContext } from "../../context/GlobalContext";

export interface IMovie {
    id: string,
    created_at: string,
    fk_user_id: string,
    comment: string,
    movie_id: string,
    rating: string,
    movie_title: string,
}

function Home() {
    const [ movies, setmovies ] = useState<IMovie[] | null>(null);
    const [ isNewPost, SetIsNewPost ] = useState<boolean>(true);
    const {loggedUser} = useContext(GlobalContext)

    useEffect(() => {
        if(isNewPost){
            selectAllPosts().then(res => {
                if(res){
                    setmovies(res); 
                    SetIsNewPost(false)
                }
            });
        }
    }, [isNewPost])

    if(!movies){
        return null
    }

    return (
        <Style.Main>
            {loggedUser && <CommentContainer SetIsNewPost={SetIsNewPost}/> }

            <Style.AllMovies>
                {
                    movies.map(movie => {
                        return <MovieContainer
                            key={movie.id}
                            comment={movie.comment}
                            userID={movie.fk_user_id}
                            movieID={movie.movie_id}
                            rating={movie.rating}
                        />
                    })//.reverse()
                }
            </Style.AllMovies>
        </Style.Main>
    );
}

export default Home;