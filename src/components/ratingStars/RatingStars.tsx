import { Star } from "@phosphor-icons/react";
import * as Style from "./RatingStars.styles";
import React, { useEffect, useState } from "react";
import { CommentContainerData } from "../../pages/home/components/CommentContainer";
import { UseFormRegister } from "react-hook-form"

interface RatingStars {
    styleType?: "selectedString",
    id?: string,
    register?: UseFormRegister<CommentContainerData>,
    stars?: string,
}

function RatingStars({styleType, register, id, stars}: RatingStars) {
    const [rating, setRating] = useState<number>(1);

    useEffect(() => {
        if(stars){
            setRating(Number(stars));
        }
    }, [])

    return styleType == "selectedString" && register
    ? 
        <>
            <Style.ContainerSelectedStar htmlFor="stars">
                <Star onClick={() => setRating(1)} size={22} weight={rating >= 1 ? "fill" : undefined}/>
                <Star onClick={() => setRating(2)} size={22} weight={rating >= 2 ? "fill" : undefined}/>
                <Star onClick={() => setRating(3)} size={22} weight={rating >= 3 ? "fill" : undefined}/>
                <Star onClick={() => setRating(4)} size={22} weight={rating >= 4 ? "fill" : undefined}/>
                <Star onClick={() => setRating(5)} size={22} weight={rating == 5 ? "fill" : undefined}/>
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