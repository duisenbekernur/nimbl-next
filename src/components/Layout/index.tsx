import { navbarType } from '@/types'
import { FC, ReactNode, useEffect } from 'react'
import Header from '../Header'
import Navbar from '../Navbar'
import { UseShoppingCart } from '@/context/AuthContext'
import { useRouter } from 'next/router'

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
