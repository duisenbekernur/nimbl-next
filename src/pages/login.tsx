import React, { useState, useEffect } from 'react'
import { MetaMaskInpageProvider } from '@metamask/providers'
import { UseShoppingCart } from '../context/AuthContext'
import styles from '../styles/Login.module.scss'
import Script from 'next/script'
import MetaLogo from '@/components/AnimatedLogo'
import Router from 'next/router'
import purple from '@/components/AnimatedLogo/beta-fox.json'
import PrevVideo from '@/components/PrevVideo'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { closePlaying } from '@/store/features/prevVideo/prevVideoSlice'
declare global {
    interface Window {
        ethereum?: MetaMaskInpageProvider
    }
}

const LoginPage = () => {
    const [account, setAccount] = useState<string | null>(null)
    const { Auth } = UseShoppingCart()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        if (account) {
            Auth(account)
            Router.push('/')
        }
    }, [account])

    const handleLogin = async () => {
        setIsLoading(true)
        try {
            if (typeof window.ethereum !== 'undefined') {
                const accounts = await window.ethereum.enable()
                setAccount(accounts[0])
            }
            if (document.fullscreenEnabled) {
                document.documentElement.requestFullscreen()
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
                    <MetaLogo meshJson={purple} />
                </div>
                <form className="login_form">
                    <div className="input_wrapper">
                        <label>Login</label>
                        <input type="text" placeholder="Login" />
                    </div>
                    <div className="input_wrapper">
                        <label>Password</label>
                        <input type="password" placeholder="Password" />
                    </div>
                    <button>Submit</button>
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
