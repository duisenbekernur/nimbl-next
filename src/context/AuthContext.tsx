import {createContext, useContext, ReactNode, useState} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Router from 'next/router'

type AuthProviderContext = {
    children: ReactNode
}


type AuthContext = {
    Auth: (isAuth:string | null) => void,
    isAuth: boolean
}



const AuthContext = createContext({} as AuthContext)

export const UseShoppingCart = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}: AuthProviderContext) => {
   const [isAuth, setIsAuth] = useState(false)

    const Auth = (authAddress:string | null) => {
       authAddress ? setIsAuth(true) : setIsAuth(false)

    }

    return <AuthContext.Provider value={{
        Auth,
        isAuth
    }}>
        {children}
    </AuthContext.Provider>
}