import { useState } from 'react'
import styles from './Navbar.module.scss'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(0)
    const navbarItems = ['Content', 'Community', 'Marketplace', 'Settings']

    return (
        <ul className={styles.navbar}>
            {navbarItems.map((item, idx) => (
              <li key={idx} className={idx === activeNav ? styles.active : ''} onClick={() => setActiveNav(idx)}>{item}</li>
            ))}
        </ul>
    )
}

export default Navbar
