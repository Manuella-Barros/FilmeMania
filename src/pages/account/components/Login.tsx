import { Link } from "react-router-dom";
import Form, { InputInterface } from "../../../components/form/Form";
import * as Style from "../Account.styles";
import {z} from "zod";
import { loginUser } from "../../../db/supabaseActions";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

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

const schema = z.object({
    name: z.string().min(3, {message: "Minimo de 3 caracteres"}),
    password: z.string().nonempty("Campo obrigatório")
        .regex(new RegExp(/(?=.*\d)/), "deve conter ao menos um dígito")
        .regex(new RegExp(/(?=.*[a-z])/), "deve conter ao menos uma letra minúscula")
        .regex(new RegExp(/(?=.*[A-Z])/), "deve conter ao menos uma letra maiúscula")
        .regex(new RegExp(/(?=.*[$*&@#])/), "deve conter ao menos um caractere especial")
})

export type LoginData = z.infer<typeof schema>;

function Login() {
    const navigate = useNavigate();
    const { handleSetLoggedUser } = useContext(GlobalContext);

    function handleFormSubmit(data: LoginData){
        loginUser(data).then((userInfo) => {
            if(userInfo){
                handleSetLoggedUser(userInfo)
                navigate("/")
            }
        });
    }

    return (
        <Style.AccountContent>

            <h1>FilmeMania</h1>
            <Form <LoginData>
                inputs={inputs} 
                buttonContent={"Entrar"}
                handleFormSubmit={handleFormSubmit} 
                schema={schema}
            />

            <Style.OptionsContainer>
                <p>Não possui conta?</p>
                <Link to={"/account/signup"}>Cadastre-se</Link>
            </Style.OptionsContainer>
        </Style.AccountContent>
    );
}

export default Login;