import { MagnifyingGlass } from "@phosphor-icons/react";
import InputField from "../../../components/inputField/InputField";
import * as Style from "../Home.styles";
import RatingStars from "../../../components/ratingStars/RatingStars";
import Button from "../../../components/button/Button";
//import { getMoviesByName } from "../../../fetch/API_TMDB";

function CommentContainer() {
    //getMoviesByName();

    return (
        <Style.CommentContainer>
            <picture>
                <img src="./images/accountBanner.jpg" alt="" />
            </picture>

            <Style.CommentForm>
                <Style.RatingContainer>
                    <div>
                        <InputField
                            label="Nome do filme"
                            id="nomeFilme"
                            placeholder="Insira o nome do filme"
                        />
                        <MagnifyingGlass size={20} />

                        <Style.SelectMovie>
                            <select id="selectMovie">
                                <option> Selecionar </option>
                            </select>
                        </Style.SelectMovie>
                    </div>

                    <div>
                        <p>Avaliação</p>
                        <RatingStars styleType={"selectedString"}/>
                    </div>
                </Style.RatingContainer>

                <section>
                    <InputField
                        label="Comentário"
                        id="comentario"
                    />  
                    <div>
                        <Button>Postar</Button>
                    </div>
                </section>
            </Style.CommentForm>

        </Style.CommentContainer>
    );
}

export default CommentContainer;