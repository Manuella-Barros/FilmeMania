import Button from "../button/Button";
import InputField from "../inputField/InputField";
import * as Style from "./Form.styles";

export interface InputInterface {
    label: string,
    type?: string, 
    id?: string,
    placeholder?: string,
}

interface FormProps {
    buttonContent: string,
    inputs: InputInterface[];
}


function Form({buttonContent, inputs}: FormProps) {
    return (
        <Style.Form>
            
            {
                inputs.map((input, i) => {
                    return <InputField
                            key={i}
                            label={input.label} 
                            type={input.type} 
                            id={input.id}
                            placeholder={input?.placeholder}
                        />  
                })
            }

            <Style.ButtonContainer>
                <Button type={"submit"}>{buttonContent}</Button>
            </Style.ButtonContainer>
        </Style.Form>
    );
}

export default Form;