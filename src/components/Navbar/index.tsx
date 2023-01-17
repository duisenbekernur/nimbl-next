import {
    setMarketActive,
    setNavbarActive,
} from '@/store/features/navbar/navbarSlice'
import { RootState } from '@/store/store'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Navbar.module.scss'

const Navbar: FC = () => {
    const dispatch = useDispatch()
    const { navbarItems, marketPlaceNavbar } = useSelector(
        (store: RootState) => store.navbar
    )
    const router = useRouter()
    const currentPath = router.asPath
    let navItems = navbarItems
    if (currentPath.startsWith('/marketplace')) {
        navItems = marketPlaceNavbar
    }
    return (
        <ul className={styles.navbar}>
            {navItems.map((item) => {
                const { id, name, link, isActive } = item
                return (
                    <Link
                        href={link}
                        key={id}
                        onClick={() => {
                            if (currentPath.startsWith('/marketplace')) {
                                dispatch(setMarketActive(id))
                            } else if (id === 3) {
                                dispatch(setMarketActive(1))
                            } else {
                                dispatch(setNavbarActive(id))
                            }
                        }}
                    >
                        <li className={isActive ? styles.active : ''}>
                            {name}
                        </li>
                    </Link>
                )
            })}
        </ul>
    )
}

export default Navbar
