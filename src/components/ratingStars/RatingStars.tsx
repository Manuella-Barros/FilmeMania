import { Star } from "@phosphor-icons/react";
import * as Style from "./RatingStars.styles";
import { useState } from "react";

function RatingStars() {
    const [rating, setRating] = useState(1);


    return (
        <Style.Container>
            <Star onClick={() => setRating(1)} size={22} weight={rating >= 1 ? "fill" : undefined}/>
            <Star onClick={() => setRating(2)} size={22} weight={rating >= 2 ? "fill" : undefined}/>
            <Star onClick={() => setRating(3)} size={22} weight={rating >= 3 ? "fill" : undefined}/>
            <Star onClick={() => setRating(4)} size={22} weight={rating >= 4 ? "fill" : undefined}/>
            <Star onClick={() => setRating(5)} size={22} weight={rating == 5 ? "fill" : undefined}/>
        </Style.Container>
    );
}

export default RatingStars;