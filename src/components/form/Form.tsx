import Button from "../button/Button";
import InputField, { InputFieldProps } from "../inputField/InputField";
import * as Style from "./Form.styles";

interface FormProps {
    inputs: InputFieldProps[],
    buttonContent: string,
}

function Form({inputs, buttonContent}: FormProps) {
    return (
        <Style.FormWrapper>
                {
                    inputs.map((input, i) => {
                        return <InputField 
                                    key={i}
                                    label={input.label} 
                                    type={input.type} 
                                    id={input.id}
                                    placeholder={input?.placeholder}
                                    name={input?.name}
                                    radioInfo={input?.radioInfo}
                                />
                    })
                }

            <Style.ButtonContainer>
                <Button>{buttonContent}</Button>
            </Style.ButtonContainer>
        </Style.FormWrapper>
    );
}

export default Form;