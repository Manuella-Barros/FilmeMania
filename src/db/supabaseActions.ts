import { LoginData } from "../pages/account/components/Login";
import { SignupData } from "../pages/account/components/Signup";
import { supabase } from "./supabase.config";

export async function createUser(userInfo: SignupData){
    const { error } = await supabase.from("users").insert({
        username: userInfo.name,
        password: userInfo.password,
        fav_gen_1: userInfo.favGenre1,
        fav_gen_2: userInfo.favGenre2,
        fav_gen_3: userInfo.favGenre3,
    });

    if(error){
        console.log("erro")
        console.log(error)
    }else{
        console.log("tudo certo")
    }
}

export interface LoginUserReturn{
    created_at: string,
    password: string,
    user_id: string,
    username: string,
    fav_gen_1: string,
    fav_gen_2: string,
    fav_gen_3: string,
}

export async function loginUser(userInfo: LoginData): Promise<LoginUserReturn | false> {
    const { data, error } = await supabase.from("users").select("*")
                                .match({
                                    username: userInfo.name,
                                    password: userInfo.password,
                                })
                                
    if(error || data.length == 0){
        return false;
    }

    return data[0];
}