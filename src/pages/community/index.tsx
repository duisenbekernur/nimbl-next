import dynamic from 'next/dynamic'
import styles from './Community.module.scss'
import user1 from '../../assets/user1.png'
import user2 from '../../assets/user2.png'
import user3 from '../../assets/user3.png'
import user4 from '../../assets/user4.png'
import user5 from '../../assets/user5.png'
import user6 from '../../assets/user6.png'
import user7 from '../../assets/user7.png'
import user8 from '../../assets/user8.png'
import user9 from '../../assets/user9.png'
import logo from '../../assets/logo.png'
import arrowDown from '../../assets/arrowDown.svg'
import Image from 'next/image'
import Layout from '@/components/Layout'
import CommunityFeed from '@/components/Community/CommunityFeed'
import withAuthorization from '@/HOC/Authorization/Authorization'
const CommunityChat = dynamic(() => import('@/components/Community/CommunityChat'), { ssr: false })


const users = [
    { name: 'TupacTV', img: user1 },
    { name: 'Alkimax', img: user2 },
    { name: 'NotCrypto', img: user3 },
    { name: 'Akie', img: user4 },
    { name: 'Den', img: user5 },
    { name: 'Ezekiel', img: user6 },
    { name: 'Mikey', img: user7 },
    { name: 'VinGaming', img: user8 },
    { name: '@BlueWard2', img: user9 },
]

const Community = () => {
    return (
        <Layout>
            <div className={styles.community_main}>
                <div className={styles.community_feed}>
                    <div className={styles.community_feed_title}>
                        <span>Community Feed</span>
                    </div>
                    <div className={styles.community_feed_body}>
                        <CommunityFeed />
                    </div>
                </div>
                <div className={styles.community_chat}>
                    <div className={styles.community_chat_users}>
                        {users.map((user, idx) => {
                            return (
                                <div
                                    key={user.name}
                                    className={`${styles.community_chat_user}`}
                                >
                                    <Image
                                        className={styles.img}
                                        src={user.img}
                                        alt={user.name}
                                    />
                                    <span className={styles.user_name}>
                                        {user.name}
                                    </span>
                                    {idx < users.length - 1 && (
                                        <div className={styles.line}></div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.community_chat_stat}>
                        <div className={styles.community_chat_stat_logo}>
                            <Image
                                className={`${styles.img}`}
                                src={logo}
                                alt=""
                            />
                            <div className={`${styles.text}`}>
                                <h2 className={`${styles.title}`}>Bankless</h2>
                                <span className={`${styles.details}`}>
                                    Community Size: <span>4.2k</span>
                                </span>
                            </div>
                        </div>
                        <div className={`${styles.community_chat_stat_info}`}>
                            <div className={`${styles.stat_block}`}>
                                Floor Price: <span>20 NMBL</span>
                            </div>
                            <div className={`${styles.stat_block}`}>
                                Volume: <span>134 NMBL</span>
                            </div>
                        </div>
                        <div
                            className={`${styles.community_chat_stat_dropdown}`}
                        >
                            <div className={`${styles.stat_text}`}>
                                <span className={styles.stat_level}>
                                    GaryVee #1
                                </span>
                                <span className={styles.stat_online}>
                                    32 online
                                </span>
                            </div>
                            <Image
                                className={`${styles.img}`}
                                src={arrowDown}
                                alt="arrowDown"
                            />
                        </div>
                    </div>
                    <div className={styles.chat_wrap}>
                        <CommunityChat />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default withAuthorization(Community)
