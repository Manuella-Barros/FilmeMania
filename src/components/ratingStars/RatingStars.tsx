import { Star } from "@phosphor-icons/react";
import * as Style from "./RatingStars.styles";
import React, { useState } from "react";
import { CommentContainerData } from "../../pages/home/components/CommentContainer";
import { UseFormRegister } from "react-hook-form"

interface RatingStars {
    styleType?: "selectedString",
    id: string,
    register: UseFormRegister<CommentContainerData>,
}

function RatingStars({styleType, register, id}: RatingStars) {
    const [rating, setRating] = useState(1);

    return styleType == "selectedString" 
    ? 
        <Style.Container {...register(id as keyof CommentContainerData)}>
            <Star onClick={() => setRating(1)} size={22} weight={rating >= 1 ? "fill" : undefined}/>
            <Star onClick={() => setRating(2)} size={22} weight={rating >= 2 ? "fill" : undefined}/>
            <Star onClick={() => setRating(3)} size={22} weight={rating >= 3 ? "fill" : undefined}/>
            <Star onClick={() => setRating(4)} size={22} weight={rating >= 4 ? "fill" : undefined}/>
            <Star onClick={() => setRating(5)} size={22} weight={rating == 5 ? "fill" : undefined}/>
        </Style.Container>
    : 
        <Style.Container>
            <Star size={22}/>
            <Star size={22}/>
            <Star size={22}/>
            <Star size={22}/>
            <Star size={22}/>
        </Style.Container>
}

export default RatingStars;