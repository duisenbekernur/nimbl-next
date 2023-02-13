import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import Header from '../Header'
import Navbar from '../Navbar'
import { Transition } from 'react-transition-group';
import { UseAuth } from '@/context/AuthContext'

type LayoutProps = {
    children: ReactNode
}

const duration = 300

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles:any = {
    entering: { opacity: 0 },
    entered:  { opacity: 0 },
    exiting:  { opacity: 1 },
    exited:  { opacity: 1 },
};

const Layout: FC<LayoutProps> = ({ children }) => {
    const [isHeaderShow, setIsHeaderShow] = useState(true)
    const { isAuth } = UseAuth()

    useEffect(() =>{
        setTimeout(() => {
            setIsHeaderShow(oldState => false)
        }, duration)
    }, [])

    const headerRef = useRef(null)

    return (
        <div className="layout">
            <Transition timeout={duration} nodeRef={headerRef} in={isHeaderShow}>
                {state => (
                    <>
                        <Header style={{...defaultStyle, ...transitionStyles[state]}} />
                    </>

                )}
            </Transition>
            <main className="content">{isAuth? children: null}</main>
            <Transition timeout={duration} nodeRef={headerRef} in={isHeaderShow}>
                {state => (
                    <>
                        <Navbar style={{...defaultStyle, ...transitionStyles[state]}}/>
                    </>

                )}
            </Transition>
        </div>
    )
}

export default Layout
