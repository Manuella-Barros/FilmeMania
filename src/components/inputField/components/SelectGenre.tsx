import { useEffect, useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { FieldValues, Path } from "react-hook-form";
import { selectGenres } from "../../../db/supabaseActions";
import { SelectGenresReturn } from "../../../db/supabaseActionsInterface";

interface SelectGenreProps<T extends FieldValues> {
    register: UseFormRegister<T>, 
    id: number
}

function SelectGenre<T extends FieldValues> ({register, id}: SelectGenreProps<T>) {
    const [ allGenres, setAllGenres ] = useState<SelectGenresReturn[] | null>(null);

    useEffect(() => {
        selectGenres().then(res => {
            if(res){
                setAllGenres(res)
            }
        });
    }, [])


    if(allGenres){
        return (
            <select className="favGenre" {...register(`favGenre${id}` as Path<T>)}>
            <option value=''>Selecionar</option>    
                {
                    allGenres.map((genre, i) => {
                        return <option key={i} value={genre.name}> {genre.name} </option>
                    })
                }
            </select>
        );
    }
    
}

export default SelectGenre;