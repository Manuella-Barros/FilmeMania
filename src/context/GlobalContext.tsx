import React, { useState } from "react";
import { LoginUserReturn } from "../db/supabaseActions";

interface GlobalContextProps {
    loggedUser: ILoggedUser | null,
    handleSetLoggedUser: (a: LoginUserReturn) => void,
}

interface ILoggedUser {
    user_id: string,
    username: string,
    fav_gen_1: string,
    fav_gen_2: string,
    fav_gen_3: string,
}

export const GlobalContext = React.createContext({} as GlobalContextProps);

export function GlobalProvider ({children}: {children: React.ReactNode}) {
    const [ loggedUser, setLoggedUser ] = useState< ILoggedUser | null>(null);

    function handleSetLoggedUser(userInfo: LoginUserReturn){
        setLoggedUser({
            user_id: userInfo.user_id,
            username: userInfo.username,
            fav_gen_1: userInfo.fav_gen_1,
            fav_gen_2: userInfo.fav_gen_2,
            fav_gen_3: userInfo.fav_gen_3,
        })
    }

    return(
        <GlobalContext.Provider value={{ loggedUser, handleSetLoggedUser }}>{children}</GlobalContext.Provider>
    )
}