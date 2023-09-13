import { HTMLProps } from 'react';
import * as Style from './InputField.styles';
import SelectGenre from './components/SelectGenre';
import { UseFormRegister, FieldValues } from "react-hook-form";

export interface InputFieldProps extends HTMLProps<HTMLInputElement> {
    label: string,
    register: UseFormRegister<FieldValues>,
    errors: string | undefined,
}

function InputField({label, register, errors, ...props}: InputFieldProps) {
    if(props.id == "comentario"){
        return(
            <Style.InputField>
                <label htmlFor="comentario">Comentário</label>
                <textarea id="comentario" rows={7}/>
            </Style.InputField>
        )
    } else if(props.id == "favGenre"){
        return (
            <Style.InputField>
                <div>
                    <label htmlFor="favGenre">{label}</label>
                    <div>
                        <SelectGenre register={register} id={1}/>
                        <SelectGenre register={register} id={2}/>
                        <SelectGenre register={register} id={3}/>
                    </div>
                    {errors && <p>{errors}</p>}
                </div>     
            </Style.InputField>    
        )     
    } else if(props.id){
        return (
            <Style.InputField>
                <label htmlFor={props.id}>{label}</label>
                <input {...register(props.id)} {...props}/>
                {errors && <Style.Error>{errors}</Style.Error>}
            </Style.InputField>    
        )   
    }
}

export default InputField;