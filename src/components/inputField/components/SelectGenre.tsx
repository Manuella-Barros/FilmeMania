import { UseFormRegister } from "react-hook-form";
import { FieldValues, Path } from "react-hook-form";

interface SelectGenreProps<T extends FieldValues> {
    register: UseFormRegister<T>, 
    id: number
}

function SelectGenre<T extends FieldValues> ({register, id}: SelectGenreProps<T>) {
    return (
        <select className="favGenre" {...register(`favGenre${id}` as Path<T>)}>
            <option value=""> Selecionar </option>
            <option value="terror"> Terror </option>
            <option value="acao"> Ação </option>
            <option value="suspense"> Suspense </option>
            <option value="drama"> Drama </option>
            <option value="comedia"> Comédia </option>
            <option value="romance"> Romance </option>
            <option value="infantil"> Infantil </option>
        </select>
    );
}

export default SelectGenre;