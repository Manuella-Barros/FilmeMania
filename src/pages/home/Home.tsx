import MovieContainer from "../../components/movieContainer/MovieContainer";
import * as Style from "./Home.styles";

function Home() {
    return (
        <main>

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
        </main>
    );
}

export default Home;