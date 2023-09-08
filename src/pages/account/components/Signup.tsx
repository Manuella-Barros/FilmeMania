import Form from "../../../components/form/Form";

import * as Style from "../Account.styles";
import { styled } from "styled-components";

import InputField, { InputFieldProps } from "../../../components/inputField/InputField";

const inputs: InputFieldProps[] = [
    {
        label: "Nome",
        type: "text", 
        id: "name",
        placeholder: "Insira o nome",
    },
    {
        label: "Senha",
        type: "password", 
        id: "password",
        placeholder: "Insira a senha",
    },
    {
        label: "Generos Favoritos",
        type: "radio", 
        name: "favGender",
        radioInfo: [
            { value: "terror", label: "Terror", },
            { value: "suspense", label: "Suspense", },
            { value: "drama", label: "Drama", },
        ],
    },
]

export const FormWrapper = styled.form`
    margin-block: 2rem;
    background-color: red !important;
    width: 76%;
    
`

function Signup() {
    return (
        <>
            <h1>Cadastro</h1>

            {/* <Form inputs={inputs} buttonContent={"Cadastrar"}/> */}

            <FormWrapper>
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
            </FormWrapper>

            <Style.OptionsContainer>
                <p>Não possui conta?</p>
                <span>Cadastre-se</span>
            </Style.OptionsContainer>
        </>
    );
}

export default Signup;