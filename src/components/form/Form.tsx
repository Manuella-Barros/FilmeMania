
import { useForm, FieldValues, Path } from "react-hook-form";
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

interface FormProps<T extends FieldValues> {
    buttonContent: string,
    inputs: InputInterface[],
    handleFormSubmit: (data: T) => void,
    schema: z.ZodSchema<T>,
    onChange?: () => void,
}

function Form<T extends FieldValues>({buttonContent, inputs, handleFormSubmit, schema, onChange = undefined}: FormProps<T>) {
    const { handleSubmit, register, formState:{errors}} = useForm<T>({
        resolver: zodResolver(schema)
    });

    return (
        <Style.Form onSubmit={handleSubmit(handleFormSubmit)} onChange={onChange}>
            {
                inputs.map((input: InputInterface, i) => {
                    return <InputField <T>
                            key={i}
                            label={input.label} 
                            type={input.type} 
                            id={input.id}
                            placeholder={input?.placeholder}
                            register={register}
                            errors={errors}
                            // errors={ errors[input.id as Path<T>]?.message as string | undefined}
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