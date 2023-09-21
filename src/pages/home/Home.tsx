import { useEffect, useState } from "react";
import MovieContainer from "../../components/movieContainer/MovieContainer";
import { selectAllPosts } from "../../db/supabaseActions";
import * as Style from "./Home.styles";
import CommentContainer, { CommentContainerData } from "./components/CommentContainer";

interface IMovie {
    comment: string,
    created_at: string,
    fk_user_id: string,
    id: string,
    movie_id: string,
    rating: string,
}

function Home() {
    const [ movies, setmovies ] = useState<IMovie[] | null>(null);
    const [ isNewPost, SetIsNewPost ] = useState<boolean>(false);

    useEffect(() => {
        selectAllPosts().then(res => {
            console.log(res)
            if(res){
                setmovies(res);
                SetIsNewPost(false)
            }
        });
    }, [isNewPost])

    return (
        <Style.Main>
            <CommentContainer SetIsNewPost={SetIsNewPost}/>

            <Style.AllMovies>
                {
                    movies?.map(movie => {
                        return <MovieContainer
                            key={movie.fk_user_id}
                            comment={movie.comment}
                            userID={movie.fk_user_id}
                            movieID={movie.movie_id}
                            rating={movie.rating}
                        />
                    }).reverse()
                }

            </Style.AllMovies>
        </Style.Main>
    );
}

export default Home;