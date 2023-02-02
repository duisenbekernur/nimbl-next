import store from '@/store/store'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { AuthProvider } from '@/context/AuthContext'

import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {

    return (
        <AuthProvider>
            <Provider store={store}>
                {/* <Layout> */}
                    <Component {...pageProps} />
                {/* </Layout> */}
            </Provider>
        </AuthProvider>
    )
}
