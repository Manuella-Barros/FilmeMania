import { MagnifyingGlass } from "@phosphor-icons/react";
import InputField from "../../../components/inputField/InputField";
import * as Style from "../Home.styles";
import RatingStars from "../../../components/ratingStars/RatingStars";
import Button from "../../../components/button/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getMoviesByName } from "../../../fetch/API_TMDB";
import { useState, useContext, useEffect, SetStateAction, Dispatch } from "react";
import { Error } from "../../../styles/globalStyle/GlobalStyle";
import { GlobalContext } from "../../../context/GlobalContext";
import { insertPost } from "../../../db/supabaseActions";

const schema = z.object({
    movieName: z.string().min(3, {message: "Minimo de 3 caracteres"}),
    comment: z.string().min(3, {message: "Minimo de 3 caracteres"}),
    stars: z.string(),
    movieSelected: z.string().refine(value => value != "", {message: "Escolha um filme"}),
})

export type CommentContainerData = z.infer<typeof schema>;

interface ICommentContainerProps {
    SetIsNewPost: Dispatch<SetStateAction<boolean>>;
}
function CommentContainer({SetIsNewPost}: ICommentContainerProps) {
    const { register, handleSubmit, formState:{errors}, watch } = useForm<CommentContainerData>({
        resolver: zodResolver(schema),
    });
    const { loggedUser } = useContext(GlobalContext);
    
    const [ searchedMovies, setSearchedMovies ] = useState<IGetMoviesByNameReturn[] | null>(null);
    const [ movieImage, setMovieImage ] = useState<string | null>(null);

    function handleFormSubmit(data: CommentContainerData){
        if(loggedUser){
            insertPost(data, loggedUser?.user_id);
            SetIsNewPost(true)
        }
    }

    function handleKeyDown(e: React.KeyboardEvent){
        if(e.key == "Enter" && watch("movieName").length >= 3){
            getMoviesByName(watch("movieName")).then(res => setSearchedMovies(res));
        }
    }

    useEffect(() => {
        if(watch("movieSelected")){
            getMoviesByName(watch("movieSelected")).then(res => setMovieImage(res[0].backdrop_path))
        }
    }, [watch("movieSelected")])

    return (
        <Style.CommentContainer>
            <picture>
                {
                    !movieImage && <img src="./images/accountBanner.jpg" alt="" />
                }
                {
                    movieImage && <img src={`${import.meta.env.VITE_IMG}${movieImage}`} alt="" />
                }
                
            </picture>

            <Style.CommentForm onSubmit={handleSubmit(handleFormSubmit)} onKeyDown={handleKeyDown}>
                <Style.RatingContainer>
                    <div>
                        <InputField <CommentContainerData>
                            label="Nome do filme"
                            id="movieName"
                            placeholder="Insira o nome do filme"
                            register={register}
                            errors={errors}
                        />
                        <MagnifyingGlass size={20} />

                        <Style.SelectMovie>
                            <select id="selectMovie" {...register("movieSelected")}>

                                {
                                    !searchedMovies &&
                                    <option value=""> Pesquise por um filme </option>
                                }
                                
                                {
                                    searchedMovies && 
                                    searchedMovies.map(movie => {
                                        return <option key={movie.id} value={movie.title}>{movie.title}</option>
                                    })
                                }
                            </select>
                            {
                                errors.movieSelected &&
                                <Error>{errors.movieSelected.message?.toString()}</Error>
                            }
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
                        errors={errors}
                    /> 
                    {
                        errors.comment &&
                        <Error>{errors.comment.message?.toString()}</Error>
                    }
                    <div>
                        <Button type="submit">Postar</Button>
                    </div>
                </section>
            </Style.CommentForm>

        </Style.CommentContainer>
    );
}

export default CommentContainer;