import Form, { InputInterface } from "../../../components/form/Form";
import * as Style from "../Account.styles";
import { Link } from "react-router-dom";

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
    {
        label: "Generos Favoritos",
        id: "favGenre",
    },
]

function Signup() {
    return (
        <Style.AccountContent>
            <h1>Cadastro</h1>

            <Form inputs={inputs} buttonContent={"Cadastrar"}/>

            <Style.OptionsContainer>
                <p>Já possui conta?</p>
                <Link to={"/account/login"}>Entre</Link>
            </Style.OptionsContainer>
        </Style.AccountContent>
    );
}

export default Signup;