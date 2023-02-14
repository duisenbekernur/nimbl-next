import Image from 'next/image'
import styles from './Header.module.scss'

import logoImg from '@/assets/icons/logo.svg'
import chatImg from '@/assets/icons/chat.svg'
import arrowImg from '@/assets/icons/arrow-down.svg'
import avatarImg from '@/assets/icons/profile.svg'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { setNavbarActive } from '@/store/features/navbar/navbarSlice'
import PreferencesDropdown from '../PreferencesDropdown'
import { useState } from 'react'
import useTheme from '@/hooks/useTheme'
// import arrowLeftImg from '@/assets/icons/back.svg'

const Header = ({...rest}) => {
    const [theme , setTheme] = useTheme()
    const [isOpenPreferences, setIsOpenPreferences] = useState<boolean>(false)
    const dropdownItems = ['WALLET', 'WLS', 'AIRDROP']
    const dispatch = useDispatch()
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
                <input
                    type="text"
                    placeholder="Search Channels, Videos or NFTs"
                />
            </div>
            <div className={styles.header__right}>
                <ul className={styles.header__right_dropdowns}>
                    {dropdownItems.map((item, idx) => (
                        <li
                            key={idx}
                            className={styles.header__right_dropdowns_item}
                        >
                            {item}
                            <Image
                                width={20}
                                height={20}
                                src={arrowImg}
                                alt="arrow"
                            />
                        </li>
                    ))}
                </ul>
                <div className={styles.header__right_icons}>
                    <Image width={30} height={30} src={chatImg} alt="chat" />
                    <Image
                        onClick={() => setIsOpenPreferences(!isOpenPreferences)}
                        width={45}
                        height={45}
                        src={avatarImg}
                        alt="avatar"
                    />
                    {isOpenPreferences && <PreferencesDropdown theme={theme} setTheme={setTheme} />}
                </div>
            </div>
        </div>
    )
}

export default Header
