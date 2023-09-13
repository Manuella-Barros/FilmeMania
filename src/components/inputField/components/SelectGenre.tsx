import { UseFormRegister, FieldValues } from "react-hook-form";

function SelectGenre({register, id}:{register: UseFormRegister<FieldValues>, id: number}) {
    return (
        <select className="favGenre" {...register(`favGenre${id}`)}>
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