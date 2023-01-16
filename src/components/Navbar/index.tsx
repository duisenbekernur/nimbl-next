import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './Navbar.module.scss'

const Navbar = () => {
    const router = useRouter()

    const [activeNav, setActiveNav] = useState(0)
    const navbarMainItems = ['Content', 'Community', 'Marketplace', 'Settings']
    const navbarMarketItems = [
        'Rankings',
        'Launchpad',
        'Opportunities',
        'Gainers & Losers',
    ]

    const getPathName = (name: String) => {}

    return (
        <ul className={styles.navbar}>
            {navbarMainItems.map((item, idx) => (
                <Link
                    href={
                        item !== 'Marketplace'
                            ? item.toLowerCase()
                            : '/market/rankings'
                    }
                >
                    <li
                        key={idx}
                        className={idx === activeNav ? styles.active : ''}
                        onClick={() => setActiveNav(idx)}
                    >
                        {item}
                    </li>
                </Link>
            ))}
        </ul>
    )
}

export default Navbar
