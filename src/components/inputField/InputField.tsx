import * as Style from './InputField.styles';

interface RadioInfo {
    value: string,
    label: string,
}

export interface InputFieldProps {
    label: string,
    type: React.HTMLInputTypeAttribute;
    id?: string,
    placeholder?: string,
    name?: string,
    radioInfo?: RadioInfo[],
}

function InputField({label, id, type, name, radioInfo, ...props}: InputFieldProps) {
    if(id == "favGender" || name == "favGender"){
        return (
            <Style.InputField>
                <p>Generos Favoritos</p>

                <div>
                {
                    radioInfo?.map(radio => {
                        return(
                            <>
                                <input value={radio.value} id={radio.value} name={name} type={type}/>
                                <label htmlFor={radio.value}>{radio.label}</label>
                            </>
                        )
                    })
                }
                </div>
            </Style.InputField>    
        );

    } else{
        return (
            <Style.InputField>
                <label htmlFor={id}>{label}</label>
                <input id={id} {...props}/>
            </Style.InputField>    
        );
    }
}

export default InputField;