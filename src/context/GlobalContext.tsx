import React, { useState } from "react";
import { IUserFavGenres, LoginUserReturn } from "../db/supabaseActionsInterface";

export interface GlobalContextProps {
    loggedUser: ILoggedUser | null,
    handleSetLoggedUser: (a: LoginUserReturn, b: IUserFavGenres[]) => void,
    handleLogoutUser: () => void,
}

export interface ILoggedUser {
    user_id: string,
    username: string,
    favGenres: IUserFavGenres[],
}

export const GlobalContext = React.createContext({} as GlobalContextProps);

export function GlobalProvider ({children}: {children: React.ReactNode}) {
    const [ loggedUser, setLoggedUser ] = useState< ILoggedUser | null>(null);

    function handleSetLoggedUser(userInfo: LoginUserReturn, userFavGenres: IUserFavGenres[]){
        setLoggedUser({
            user_id: userInfo.id,
            username: userInfo.username,
            favGenres: userFavGenres,
        })
    }
    
    function handleLogoutUser(){
        setLoggedUser(null);
    }
    
    return(
        <GlobalContext.Provider value={{ loggedUser, handleSetLoggedUser, handleLogoutUser }}>{children}</GlobalContext.Provider>
    )
}