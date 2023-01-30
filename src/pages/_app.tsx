import Layout from '@/components/Layout'
import store, { RootState } from '@/store/store'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider, useSelector } from 'react-redux'
import { AuthProvider } from '@/context/AuthContext'
import { useEffect, useState } from 'react'
import Router from 'next/router'
import LoginPage from '@/pages/login'

export default function AppWrapper({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <Provider store={store}>
                <App pageProps={pageProps} Component={Component} />
            </Provider>
        </AuthProvider>
    )
}
function App({ Component, pageProps }: any) {
    const { isPlaying } = useSelector((store: RootState) => store.prevVideo)
    if (isPlaying) {
        return <Component {...pageProps} />
    } else {
        return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
        )
    }
}
