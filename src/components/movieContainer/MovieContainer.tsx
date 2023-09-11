import * as Style from "./MovieContainer.styles";
import RatingStars from "../ratingStars/RatingStars";

function MovieContainer() {
    return (
        <Style.Container>
            <picture>
                <img src="./images/accountBanner.jpg" alt="" />
            </picture>

            <section>
                <Style.MovieInfo>
                    <h2>O Homem aranha: de volta a home</h2>
                    <h3>Drama / Suspense</h3>
                    <RatingStars/>
                </Style.MovieInfo>

                <Style.Comment>
                    <p>O filme fala coisas muito interessantes eu gostei muito achei top muito maneiro, se nao viu vejam que voce vai ficar tipo que isso ual</p>
                </Style.Comment>

                <Style.UserInfo>
                    <p>Itallo Vidal</p>
                    <span>Drama - Suspense - Terror</span>
                </Style.UserInfo>
            </section>
        </Style.Container>
    );
}

export default MovieContainer;