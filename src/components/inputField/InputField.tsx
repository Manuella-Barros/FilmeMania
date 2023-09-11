import { HTMLProps } from 'react';
import * as Style from './InputField.styles';
import SelectGenre from './components/SelectGenre';

export interface InputFieldProps extends HTMLProps<HTMLInputElement> {
    label: string,
}

function InputField({label, ...props}: InputFieldProps) {

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
                        <SelectGenre/>
                        <SelectGenre/>
                        <SelectGenre/>
                    </div>
                </div>     
            </Style.InputField>    
        )     
    } else{
        return (
            <Style.InputField>
                <label htmlFor={props.id}>{label}</label>
                <input {...props}/>
            </Style.InputField>    
        )   
    }
}

export default InputField;