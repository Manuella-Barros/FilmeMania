import React, { useEffect, useState } from "react";
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

    useEffect(() => {
        const userInfo = localStorage.getItem("loggedUserInfo");
        if(userInfo){
            setLoggedUser(JSON.parse(userInfo))
        }
    }, [])

    useEffect(() => {
        if(loggedUser){
            localStorage.setItem("loggedUserInfo", JSON.stringify(loggedUser))
        }
    }, [loggedUser])
    
    function handleLogoutUser(){
        setLoggedUser(null);
    }
    
    return(
        <GlobalContext.Provider value={{ loggedUser, handleSetLoggedUser, handleLogoutUser }}>{children}</GlobalContext.Provider>
    )
}