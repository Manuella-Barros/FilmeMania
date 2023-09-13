import { useForm } from "react-hook-form";
import Button from "../button/Button";
import InputField from "../inputField/InputField";
import * as Style from "./Form.styles";
import { zodResolver } from "@hookform/resolvers/zod";
import {z} from "zod";

export interface InputInterface {
    label: string,
    type?: string, 
    id: string,
    placeholder?: string,
}

interface FormProps<T> {
    buttonContent: string,
    inputs: InputInterface[],
    handleFormSubmit: () => void,
    schema: z.ZodSchema<T>;
}

function Form<T>({buttonContent, inputs, handleFormSubmit, schema}: FormProps<T>) {
    const { handleSubmit, register, formState:{errors}} = useForm({
        resolver: zodResolver(schema)
    });

    return (
        <Style.Form onSubmit={handleSubmit(handleFormSubmit)}>
            {
                inputs.map((input: InputInterface, i) => {
                    return <InputField
                            key={i}
                            label={input.label} 
                            type={input.type} 
                            id={input.id}
                            placeholder={input?.placeholder}
                            register={register}
                            errors={ errors[input.id]?.message as string | undefined}
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