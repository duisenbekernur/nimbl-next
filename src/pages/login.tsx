import React, { useState, useEffect,useRef } from 'react'
import { MetaMaskInpageProvider } from '@metamask/providers'
import { UseAuth } from '../context/AuthContext'
import styles from '../styles/Login.module.scss'
import Script from 'next/script'
import MetaLogo from '@/components/AnimatedLogo'
import Router from 'next/router'
import purple from '@/components/AnimatedLogo/beta-fox.json'
import { SubmitHandler, useForm } from 'react-hook-form'
import Layout from '@/components/Layout'
import LoginLayout from '@/components/Layout/LoginLayout'
import screenfull from 'screenfull'
declare global {
    interface Window {
        ethereum?: MetaMaskInpageProvider
    }
}

type Inputs = {
    login: string,
    password: string,
};

const LoginPage = () => {
    const [account, setAccount] = useState<string | null>(null)
    const { Auth, isAuth, isRouting } = UseAuth()
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit } = useForm<Inputs>();

    const handleLogin = async () => {
        setIsLoading(true)
        try {
            if (typeof window.ethereum !== 'undefined') {
                const accounts = await window.ethereum.enable()
                if (screenfull.isEnabled) {
                    await screenfull.request();
                }
                Auth(accounts[0])
            }
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }
    const handleLogout = async () => {
        return await setAccount(null)
    }

    const onSubmit: SubmitHandler<Inputs> = async data => {
        if (screenfull.isEnabled) {
            await screenfull.request();
        }
        if(data?.login && data?.password){
            Auth(account, data)
        }
    };

    return (
        isAuth ? <>
            <LoginLayout >
                <video autoPlay muted playsInline className={`${isRouting? 'exiting' : null}`}>
                    <source src="login_video.mp4" />
                </video>
            </LoginLayout>
            </>:
        <>
            <Script src="../components/AnimatedLogo/index.js" />
            <LoginLayout >
                <div className={styles.metaLogo}>
                    <MetaLogo meshJson={purple} />
                </div>
                <form className="login_form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="input_wrapper">
                        <label>Login</label>
                        <input type="text" placeholder="Login" {...register("login")}/>
                    </div>
                    <div className="input_wrapper">
                        <label>Password</label>
                        <input type="password" placeholder="Password" {...register("password")}/>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
                {account === null ? (
                    <button
                        onClick={handleLogin}
                        disabled={isLoading}
                        className="btn_meta"
                    >
                        {isLoading ? 'Loading...' : 'Log in with MetaMask'}
                    </button>
                ) : (
                    <button className="btn_meta" onClick={handleLogout} disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Log out'}
                    </button>
                )}
            </LoginLayout>
        </>
    )
}

export default LoginPage
