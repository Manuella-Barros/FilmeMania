import Form from "../../../components/form/Form";
import * as Style from "../Account.styles";
import { InputFieldProps } from "../../../components/inputField/InputField";
import { Link } from "react-router-dom";

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

function Signup() {
    return (
        <>
            <h1>Cadastro</h1>

            <Form inputs={inputs} buttonContent={"Cadastrar"}/>

            <Style.OptionsContainer>
                <p>Já possui conta?</p>
                <Link to={"/account/login"}>Entre</Link>
            </Style.OptionsContainer>
        </>
    );
}

export default Signup;