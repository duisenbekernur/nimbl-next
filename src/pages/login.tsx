import React, { useState, useEffect } from 'react'
import { MetaMaskInpageProvider } from '@metamask/providers'
import { UseShoppingCart } from "../context/AuthContext";
import styles from '../styles/Login.module.scss'
import Script from 'next/script'
import MetaLogo from '@/components/AnimatedLogo'
import Router from 'next/router'
declare global {
    interface Window {
        ethereum?: MetaMaskInpageProvider
    }
}

const LoginPage = () => {
    const [account, setAccount] = useState<string | null>(null)
    const {Auth} = UseShoppingCart()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() =>{
        if (account){
            Auth(account)
            Router.push('/');
        }
    }, [account])

    const handleLogin = async () => {
        setIsLoading(true)
        try {
            if (typeof window.ethereum !== 'undefined') {
                const accounts = await window.ethereum.enable()
                setAccount(accounts[0])
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


    return (
        <>
            <Script src="../components/AnimatedLogo/index.js" />
            <div className={styles.loginContainer}>
                <div className={styles.metaLogo}>
                    <MetaLogo />
                </div>
                {account === null ? (
                    <button onClick={handleLogin} disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Log in with MetaMask'}
                    </button>
                ) : (
                    <button onClick={handleLogout} disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Log out'}
                    </button>
                )}
                {account !== null && <p>Your Ethereum address: {account}</p>}
            </div>
        </>
    )
}

export default LoginPage
