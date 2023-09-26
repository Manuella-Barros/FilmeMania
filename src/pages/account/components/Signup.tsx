import { useState } from "react";
import Form, { InputInterface } from "../../../components/form/Form";
import { createUser, insertUserFavGenres } from "../../../db/supabaseActions";
import * as Style from "../Account.styles";
import { Link, useNavigate } from "react-router-dom";
import {z} from "zod";
import { Error } from "../../../styles/globalStyle/GlobalStyle";

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

const schema = z.object({
    name: z.string().min(3, {message: "Minimo de 3 caracteres"}),
    password: z.string().nonempty("Campo obrigatório"),
        // .regex(new RegExp(/(?=.*\d)/), "deve conter ao menos um dígito")
        // .regex(new RegExp(/(?=.*[a-z])/), "deve conter ao menos uma letra minúscula")
        // .regex(new RegExp(/(?=.*[A-Z])/), "deve conter ao menos uma letra maiúscula")
        // .regex(new RegExp(/(?=.*[$*&@#])/), "deve conter ao menos um caractere especial"),
    favGenre1: z.string(),
    favGenre2: z.string(),
    favGenre3: z.string(),

}).refine((values) => values.favGenre1 != '' && values.favGenre2 != '' && values.favGenre3 != '', {
    path: ["favGenre1"],
    message: "Escolher as três opções"

}).refine((values) => values.favGenre1 != values.favGenre2 && values.favGenre1 != values.favGenre3 && values.favGenre2 != values.favGenre3, {
    path: ["favGenre1"],
    message: "Os generos devem ser diferentes",
})

export type SignupData = z.infer<typeof schema>;

function Signup() {
    const [ error, setError ] = useState<string | null>(null);
    const navigate = useNavigate();

    function handleFormSubmit(data: SignupData){
        createUser(data.name, data.password)
            .then(userId => {
                if(userId){
                    insertUserFavGenres(userId[0].id, data.favGenre1);
                    insertUserFavGenres(userId[0].id, data.favGenre2);
                    insertUserFavGenres(userId[0].id, data.favGenre3);
                }

                navigate("/account/login");
            }).catch((res) => setError(res.message));
    }

    console.log(error)

    return (
        <Style.AccountContent>
            <h1>Cadastro</h1>

            <Form <SignupData>
                inputs={inputs} 
                handleFormSubmit={handleFormSubmit} 
                buttonContent={"Cadastrar"}
                schema={schema}
            /> 

            <Style.OptionsContainer>
                <p>Já possui conta?</p>
                <Link to={"/account/login"}>Entre</Link>
            </Style.OptionsContainer>
            {
                error && <Error>{error}</Error>
            }
        </Style.AccountContent>
    );
}

export default Signup;