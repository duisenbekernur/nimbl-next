import { RootState } from '@/store/store'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './Navbar.module.scss'

const Navbar: FC = () => {
    const [activeNav, setActiveNav] = useState(1)
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
                const { id, name, link } = item
                return (
                    <Link href={link} key={id}>
                        <li
                            className={id === activeNav ? styles.active : ''}
                            onClick={() => setActiveNav(id)}
                        >
                            {name}
                        </li>
                    </Link>
                )
            })}
        </ul>
    )
}

export default Navbar
