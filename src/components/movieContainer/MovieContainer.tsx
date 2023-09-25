import * as Style from "./MovieContainer.styles";
import RatingStars from "../ratingStars/RatingStars";
import { selectUserById } from "../../db/supabaseActions";
import { useState, useEffect } from "react";
import { ISelectUserByIdReturn } from "../../db/supabaseActionsInterface";
import { getMovieDetails } from "../../fetch/API_TMDB";

interface IMovieCOntainer {
    comment: string,
    userID: string,
    movieID: string,
    rating: string,
}

function MovieContainer(data: IMovieCOntainer) {
    const [ userData, setUserData ] = useState<ISelectUserByIdReturn | null>(null);
    const [ movieData, setMovieData ] = useState<IGetMovieDetailsReturn | null>(null);

    useEffect(() => {
        selectUserById(data.userID).then((res) => {
            if(res){ setUserData(res) }
        });
        getMovieDetails(data.movieID).then(res => setMovieData(res))
    }, [])
    return userData != null && movieData != null?
        <Style.Container>
            <picture>
                <img src={`${import.meta.env.VITE_IMG}${movieData.poster_path}`} alt="" />
            </picture>

            <section>
                <Style.MovieInfo>
                    <h2>{movieData.title}</h2>
                    <div>
                        {
                            movieData?.genres[0]?.name && <h3>{movieData.genres[0].name}</h3>
                        }
                        {
                            movieData?.genres[1]?.name && <h3>{movieData.genres[1].name}</h3>
                        }
                    </div>
                    <RatingStars stars={data.rating}/>

                </Style.MovieInfo>

                <Style.Comment>

                    <p>{data.comment}</p>
                </Style.Comment>

                <Style.UserInfo>
                    <p>{userData?.username}</p>

                    <div>
                        {
                            userData.genres.map((genre, i) => {
                                return <span key={i}>{genre.genres.name}</span>
                            })
                        }                   
                    </div>
                </Style.UserInfo>
            </section>
        </Style.Container>
    : <></>
}

export default MovieContainer;