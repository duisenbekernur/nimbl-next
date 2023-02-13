import Blobs from '@/components/Layout/Blobs'
import { ReactNode } from 'react'

type LoginLayoutProps = {
    children: ReactNode
}


const LoginLayout = ({children}: LoginLayoutProps) => {
    return(
        <div className="layout login_video">
            <Blobs />
            <main className="content">
                {children}
            </main>
        </div>
    )
}

export default LoginLayout