import Image from 'next/image'
import styles from './Header.module.scss'

import logoImg from '@/assets/icons/logo.svg'
import chatImg from '@/assets/icons/chat.svg'
import arrowImg from '@/assets/icons/arrow-down.svg'
import avatarImg from '@/assets/icons/profile.svg'
import Link from 'next/link'
import {useDispatch} from 'react-redux'
import {setNavbarActive} from '@/store/features/navbar/navbarSlice'
import {useLocalStorage} from '@/hooks/useLocalStorage'
// import arrowLeftImg from '@/assets/icons/back.svg'

const Header = ({...rest}) => {
    const dropdownItems = ['WALLET', 'WLS', 'AIRDROP']
    const dispatch = useDispatch()

    const wallet = useLocalStorage<any>('login')

    return (
        <div className={styles.header} {...rest}>
            <div className={styles.header__logo}>
                <Link href="/" onClick={() => dispatch(setNavbarActive(1))}>
                    <Image width={150} height={50} src={logoImg} alt="logo" />
                </Link>
            </div>
            {/* <div className={styles.navigation}>
                <Image width={25} height={50} src={arrowLeftImg} alt="back" />
                <Image width={25} height={50} src={arrowLeftImg} alt="back" />
            </div> */}
            <div className={styles.header__search}>
                <input type="text" placeholder="Search Channels, Videos or NFTs" />
            </div>
            <div className={styles.header__right}>
                <ul className={styles.header__right_dropdowns}>
                    {dropdownItems.map((item, idx) => (
                        <li key={idx} className={styles.header__right_dropdowns_item}>
                            {item}
                            <Image width={20} height={20} src={arrowImg} alt="arrow" />
                        </li>
                    ))}
                </ul>
                <div className={styles.header__right_icons}>
                    <Image width={30} height={30} src={chatImg} alt="chat" />

                    <p className={styles.header__right_icons}>{wallet[0].address.substr(0, 6)}...</p>
                </div>
            </div>
        </div>
    )
}

export default Header
