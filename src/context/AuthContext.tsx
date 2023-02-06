import { createContext, useContext, ReactNode, useState, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import Router from 'next/router'

type AuthProviderContext = {
    children: ReactNode
}

type Login = {
    login: string,
    password: string
}

type AuthContext = {
    Auth: (isAuth?: string | null, login?: Login) => void
    isAuth: boolean
}
type LoginLocal = {
    address?: string,
    login?: string,
    password?: string
}

const AuthContext = createContext({} as AuthContext)

export const UseShoppingCart = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }: AuthProviderContext) => {
    const [isAuth, setIsAuth] = useState(false)

    // what backend will done this should change to token
    const [loginLocal, setLoginLocal] =  useLocalStorage<LoginLocal>("login", {address:'', login:'', password:''});
    const addresses = [
        '0xd47c4cc3e19e39fa6dddb9f5e97202c76b9533ae',
        '0xd47c4cc3e19e39fa6dddb9f5e97202c76b9533ae',
        '0x0491b35d98D6Fa384F8FE67DB5644766B9eFC632',
        '0xC1977Ca1DDA9E1477BFB153a68FdbE6b96ba0d0A',
        '0x79Ced8845cB931Be51366818D82eED1adcf8717B',
        '0x5C9873034aD0FA64Cc43617398737E9B92e7d77A'
    ]
    const valueA = '0xd47c4cc3e19e39fa6dddb9f5e97202c76b9533ae'
    const valueB = '0x0fC6BECfDED29A8373782BF5Ee37CE14A8dc7e38'
    const valueC = '0x0491b35d98D6Fa384F8FE67DB5644766B9eFC632'
    const valueD = '0xC1977Ca1DDA9E1477BFB153a68FdbE6b96ba0d0A'
    const valueE = '0x79Ced8845cB931Be51366818D82eED1adcf8717B'
    const valueF = '0x5C9873034aD0FA64Cc43617398737E9B92e7d77A'

    useEffect(() => {
        addresses.filter((address) => address.toLowerCase() === loginLocal?.address ? setIsAuth(true) : null)
        if (loginLocal?.login === 'Nimbl123!@#' && loginLocal?.password === 'qwerty123*()') {
            setIsAuth(true)
        }
    }, [])

    useEffect(() => {
        if(isAuth){
            setTimeout(() =>{
                Router.push('/')
            }, 7000)
        }
    }, [isAuth])



    const Auth = (authAddress?: string | null, login?: Login, ) => {
        if (
            authAddress === valueA.toLowerCase() ||
            authAddress === valueB.toLowerCase() ||
            authAddress === valueC.toLowerCase() ||
            authAddress === valueD.toLowerCase() ||
            authAddress === valueE.toLowerCase() ||
            authAddress === valueF.toLowerCase()
        ) {
            setLoginLocal({address:authAddress})
            setIsAuth(true)
        }
        if(login?.login === 'Nimbl123!@#' && login?.password === 'qwerty123*()'){
            setLoginLocal({login:login?.login, password:login?.password})
            setIsAuth(true)
        }
    }

    return (
        <AuthContext.Provider
            value={{
                Auth,
                isAuth,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
