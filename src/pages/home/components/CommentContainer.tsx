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
    movieName: z.string().nonempty("Pesquise por um filme"),
    comment: z.string(),
    stars: z.string(),
    movieSelected: z.string().refine(value => value != "", {message: "Escolha um filme"}),
})

export type CommentContainerData = z.infer<typeof schema>;

interface ICommentContainerProps {
    SetIsNewPost: Dispatch<SetStateAction<boolean>>;
}
function CommentContainer({SetIsNewPost}: ICommentContainerProps) {
    const { register, handleSubmit, formState:{errors}, watch, reset,setValue} = useForm<CommentContainerData>({
        resolver: zodResolver(schema),
        defaultValues:{
            movieName: "",
            comment: "",
            stars: "1",
            movieSelected: "",
        }
    });
    const { loggedUser } = useContext(GlobalContext);
    const [ searchedMovies, setSearchedMovies ] = useState<IGetMoviesByNameReturn[] | null>(null);
    const [ movieImage, setMovieImage ] = useState<string | null>(null);
    const [ starsChanged, setStarsChanged ] = useState<number>(1);

    function handleFormSubmit(data: CommentContainerData){
        console.log(data)
        if(loggedUser){
            insertPost(data, loggedUser?.user_id);
            SetIsNewPost(true)
            reset();
            setMovieImage(null)
        }

        setSearchedMovies(null);
    }

    function handleSearchMovie(){
        if(watch("movieName") != ''){
            getMoviesByName(watch("movieName")).then(res => setSearchedMovies(res))
        }
    }

    useEffect(() => {
        setValue("stars", starsChanged.toString());
    }, [starsChanged])
    
    useEffect(() => {
        if(watch("movieSelected")){
            getMoviesByName(watch("movieSelected")).then(res => setMovieImage(res[0].poster_path))
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

            <Style.CommentForm onSubmit={handleSubmit(handleFormSubmit)} /*onKeyDown={handleKeyDown}*/>
                <Style.RatingContainer>
                    <div>
                        <InputField <CommentContainerData>
                            label="Nome do filme"
                            id="movieName"
                            placeholder="Insira o nome do filme"
                            register={register}
                            errors={errors}
                        />
                        <article>
                            <button type="button" onClick={handleSearchMovie}>
                                <MagnifyingGlass size={23} />
                            </button>
                        </article>

                        <Style.SelectMovie>
                            <select id="selectMovie" {...register("movieSelected")}>

                                {
                                    !searchedMovies &&
                                    <option value=""> Pesquise por um filme </option>
                                }
                                
                                {
                                    searchedMovies && 
                                    <>
                                        <option value=''>Selecionar</option>
                                        {
                                            searchedMovies.map(movie => {
                                                return <option key={movie.id} value={movie.title}>{movie.title}</option>
                                            })
                                        }
                                    
                                    </>
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
                            setStarsChanged={setStarsChanged}
                        />
                    </div>
                </Style.RatingContainer>

                <section>
                    <InputField <CommentContainerData>
                        label="Comentário"
                        id="comment"
                        register={register}
                        errors={errors}
                        placeholder="insira um comentário (opcional)"
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