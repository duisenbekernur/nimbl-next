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
   const valueA = '0xd47c4cc3e19e39fa6dddb9f5e97202c76b9533ae';
    const valueB = '0x0fC6BECfDED29A8373782BF5Ee37CE14A8dc7e38';
    const valueC = '0x0491b35d98D6Fa384F8FE67DB5644766B9eFC632';

    const Auth = (authAddress:string | null) => {
        if(authAddress === valueA.toLowerCase() || authAddress === valueB.toLowerCase() || authAddress === valueC.toLowerCase())
        {
            setIsAuth(true)
        }
    }

    return <AuthContext.Provider value={{
        Auth,
        isAuth
    }}>
        {children}
    </AuthContext.Provider>
}