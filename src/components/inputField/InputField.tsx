import { HTMLProps } from 'react';
import * as Style from './InputField.styles';
import SelectGenre from './components/SelectGenre';
import { UseFormRegister } from "react-hook-form";
import { FieldValues, Path, FieldErrors } from "react-hook-form";
import { Error } from '../../styles/globalStyle/GlobalStyle';

export interface InputFieldProps<T extends FieldValues> extends HTMLProps<HTMLInputElement> {
    label: string,
    register: UseFormRegister<T>,
    errors: FieldErrors<T>,
}

function InputField<T extends FieldValues>({label, register, errors, ...props}: InputFieldProps<T>) {
    if(props.id == "comment"){
        return(
            <Style.InputField>
                <label htmlFor="comment">Comentário</label>
                <textarea {...register(props.id as Path<T> )} id="comment" rows={7}/>
            </Style.InputField>
        )
    } else if(props.id == "favGenre"){
        return (
            <Style.InputField>
                <div>
                    <label htmlFor="favGenre">{label}</label>
                    <div>
                        <SelectGenre <T> register={register} id={1}/>
                        <SelectGenre <T> register={register} id={2}/>
                        <SelectGenre <T> register={register} id={3}/> 
                    </div>
                    {errors.favGenre1 && <Error>{errors.favGenre1?.message as string}</Error>}
                </div>
            </Style.InputField>
        )     
    } else if(props.id){
        return (
            <Style.InputField>
                <label htmlFor={props.id}>{label}</label>
                <input {...register(props.id as Path<T>)} {...props}/>
                {errors && <Error>{errors[props.id as Path<T>]?.message  as string}</Error>}
            </Style.InputField>    
        )   
    }
}

export default InputField;