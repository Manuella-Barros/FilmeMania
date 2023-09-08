import Form from "../../../components/form/Form";
import { InputFieldProps } from "../../../components/inputField/InputField";
import * as Style from "../Account.styles";

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
]

function Login() {
    return (
        <>
            <h1>FilmeMania</h1>

            <Form inputs={inputs} buttonContent={"Entrar"}/>

            <Style.OptionsContainer>
                <p>Não possui conta?</p>
                <span>Cadastre-se</span>
            </Style.OptionsContainer>
        </>
    );
}

export default Login;