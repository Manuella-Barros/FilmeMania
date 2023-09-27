import { Star } from "@phosphor-icons/react";
import * as Style from "./RatingStars.styles";
import {Dispatch, SetStateAction, useEffect, useState } from "react";
import { CommentContainerData } from "../../pages/home/components/CommentContainer";
import { UseFormRegister } from "react-hook-form"

interface RatingStars {
    styleType?: "selectedString",
    id?: string,
    register?: UseFormRegister<CommentContainerData>,
    stars?: string,
    setStarsChanged?: Dispatch<SetStateAction<number>>,
}

function RatingStars({styleType, register, id, stars, setStarsChanged}: RatingStars) {
    const [rating, setRating] = useState<number>(1);

    useEffect(() => {
        if(stars){
            setRating(Number(stars));
        }
    }, [])

    function handleStarsClick(starsNum: number){
        setRating(starsNum);
    }

    useEffect(() => {
        if(setStarsChanged){
            setStarsChanged(rating)
        }
    }, [rating])

    return styleType == "selectedString" && register
    ? 
        <>
            <Style.ContainerSelectedStar htmlFor="stars">
                <Star values="1" onClick={() => handleStarsClick(1)} size={22} weight={rating >= 1 ? "fill" : undefined}/>
                <Star values="2" onClick={() => handleStarsClick(2)} size={22} weight={rating >= 2 ? "fill" : undefined}/>
                <Star values="3" onClick={() => handleStarsClick(3)} size={22} weight={rating >= 3 ? "fill" : undefined}/>
                <Star values="4" onClick={() => handleStarsClick(4)} size={22} weight={rating >= 4 ? "fill" : undefined}/>
                <Star values="1" onClick={() => handleStarsClick(5)} size={22} weight={rating == 5 ? "fill" : undefined}/>
            </Style.ContainerSelectedStar>
            <input type="radio" value={rating} id="stars" {...register(id as keyof CommentContainerData)}/>
        </>    
    : 
        <Style.ContainerStar>
            <Star size={22}  weight={rating >= 1 ? "fill" : undefined}/>
            <Star size={22}  weight={rating >= 2 ? "fill" : undefined}/>
            <Star size={22}  weight={rating >= 3 ? "fill" : undefined}/>
            <Star size={22}  weight={rating >= 4 ? "fill" : undefined}/>
            <Star size={22}  weight={rating >= 5 ? "fill" : undefined}/>
        </Style.ContainerStar>
}

export default RatingStars;