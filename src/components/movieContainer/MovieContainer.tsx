import { Star } from "@phosphor-icons/react";
import * as Style from "./MovieContainer.styles";

function MovieContainer() {
    return (
        <Style.Container>
            <picture>
                <img src="./images/accountBanner.jpg" alt="" />
            </picture>

            <section>
                <Style.MovieInfo>
                    <h2>O predestinado</h2>
                    <span>
                        <Star size={22} weight="fill"/>
                        <Star size={22} weight="fill"/>
                        <Star size={22} weight="fill"/>
                        <Star size={22} />
                        <Star size={22} />
                    </span>
                    <h3>Drama / Suspense</h3>
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