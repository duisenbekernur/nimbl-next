import { navbarType } from '@/types'
import { FC, ReactNode } from 'react'
import Header from '../Header'
import Navbar from '../Navbar'

type LayoutProps = {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main className="content">{children}</main>
            <Navbar />
        </div>
    )
}

export default Layout
