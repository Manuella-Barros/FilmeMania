import MovieContainer from "../../components/movieContainer/MovieContainer";
import * as Style from "./Home.styles";
import CommentContainer from "./components/CommentContainer";

function Home() {
    return (
        <Style.Main>
            <CommentContainer/>

            <Style.AllMovies>
                <MovieContainer/>
                <MovieContainer/>
                <MovieContainer/>
                <MovieContainer/>
                <MovieContainer/>
                <MovieContainer/>
                <MovieContainer/>
                <MovieContainer/>
            </Style.AllMovies>
        </Style.Main>
    );
}

export default Home;