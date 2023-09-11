import { Link } from "react-router-dom";
import Form, { InputInterface } from "../../../components/form/Form";
import * as Style from "../Account.styles";

const inputs: InputInterface[] = [
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
        <Style.AccountContent>

            <h1>FilmeMania</h1>

            <Form inputs={inputs} buttonContent={"Entrar"}/>

            <Style.OptionsContainer>
                <p>Não possui conta?</p>
                <Link to={"/account/signup"}>Cadastre-se</Link>
            </Style.OptionsContainer>
        </Style.AccountContent>
    );
}

export default Login;