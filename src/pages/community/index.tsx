import styles from './Community.module.css';
import avatar from '../../assets/avatar.png';
import avatar2 from '../../assets/avatar2.png';
import avatar3 from '../../assets/avatar3.png';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';
import bored from '../../assets/bored.png';
import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.png';
import user3 from '../../assets/user3.png';
import user4 from '../../assets/user4.png';
import user5 from '../../assets/user5.png';
import user6 from '../../assets/user6.png';
import user7 from '../../assets/user7.png';
import user8 from '../../assets/user8.png';
import user9 from '../../assets/user9.png';
import logo from '../../assets/logo.png';
import arrowDown from '../../assets/arrowDown.svg';
import Image from 'next/image';
import ChatUser from '@/components/Community/ChatUser';
import Feed from '@/components/Community/Feed';
import avatars from '@/components/Community/Feed/avatars';
import Message from '@/components/Community/Message';

const Community = () => {
    return (
        <div className={styles.community_main}>
            <div className={styles.community_feed}>
                <div className={styles.community_feed_title}>
                    <h1>Community Feed</h1>
                </div>
                <Feed />
                <Feed />
                <Feed />
                <Feed />
                <Feed />
            </div>
            <div className={styles.community_chat}>
                <ChatUser />
                <div className={`${styles.community_chat_stat}`}>
                    <div className={`${styles.community_chat_stat_logo}`}>
                        <Image className={`${styles.img}`} src={logo} alt="" />
                        <div className={`${styles.text}`}>
                            <h1 className={`${styles.title}`}>Bankless</h1>
                            <h3 className={`${styles.details}`}>
                                Community Size: <span>4.2k</span>
                            </h3>
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
                    <div className={`${styles.community_chat_stat_dropdown}`}>
                        <div className={`${styles.stat_text}`}>
                            <h1>GaryVee #1</h1>
                            <h2>32 online</h2>
                        </div>
                        <Image
                            className={`${styles.img}`}
                            src={arrowDown}
                            alt=""
                        />
                    </div>
                </div>
                <div className={`${styles.community_chat_messages}`}>
                    <Message src={avatars[4]} message={messages[1]} />
                    <Message src={avatars[1]} message={messages[2]} />
                    <Message src={avatars[2]} message={messages[3]} />
                    <Message src={avatars[3]} message={messages[1]} />
                    <Message src={avatars[5]} message={messages[2]} />
                    <Message src={avatars[6]} message={messages[3]} />
                    <Message src={avatars[7]} message={messages[2]} />
                    <Message src={avatars[7]} message={messages[1]} />
                </div> 
                <div className={`${styles.message_form}`}>
                    <div className={`${styles.form_icons}`}>
                      <Image className={`${styles.icon}`} src={smile} alt=""/>
                      <Image className={`${styles.icon}`} src={attach} alt=""/>
                    </div>
                    <form action="">
                        <input placeholder="Enter text" type="text" name="message" />
                    </form>
                    <div className={`${styles.submit_btn}`}>
                      <Image src={send} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community
