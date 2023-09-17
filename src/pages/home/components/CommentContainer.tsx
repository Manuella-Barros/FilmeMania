import { MagnifyingGlass } from "@phosphor-icons/react";
import InputField from "../../../components/inputField/InputField";
import * as Style from "../Home.styles";
import RatingStars from "../../../components/ratingStars/RatingStars";
import Button from "../../../components/button/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
//import { getMoviesByName } from "../../../fetch/API_TMDB";

const schema = z.object({
    movieName: z.string().min(3, {message: "Minimo de 3 caracteres"}),
    comment: z.string().min(3, {message: "Minimo de 3 caracteres"}),
    stars: z.string(),
})

export type CommentContainerData = z.infer<typeof schema>;

function CommentContainer() {
    //getMoviesByName();
    const { register, handleSubmit, formState:{errors} } = useForm<CommentContainerData>({
        resolver: zodResolver(schema),
    });

    function handleFormSubmit(data: CommentContainerData){
        console.log(data);
    }

    return (
        <Style.CommentContainer>
            <picture>
                <img src="./images/accountBanner.jpg" alt="" />
            </picture>

            <Style.CommentForm onSubmit={handleSubmit(handleFormSubmit)}>
                <Style.RatingContainer>
                    <div>
                        <InputField <CommentContainerData>
                            label="Nome do filme"
                            id="movieName"
                            placeholder="Insira o nome do filme"
                            register={register}
                            errors={errors?.movieName?.message}
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
                        <RatingStars 
                            styleType={"selectedString"}
                            id={"stars"}
                            register={register}
                        />
                    </div>
                </Style.RatingContainer>

                <section>
                    <InputField <CommentContainerData>
                        label="Comentário"
                        id="comment"
                        register={register}
                        errors={errors?.comment?.message}
                    /> 
                    <div>
                        <Button type="submit">Postar</Button>
                    </div>
                </section>
            </Style.CommentForm>

        </Style.CommentContainer>
    );
}

export default CommentContainer;