import React from 'react'
import styles from './ChatUser.module.css'
import Image from 'next/image'
import users from './users'

const ChatUser = () => {
    return (
        <div className={`${styles.community_chat_users}`}>
          <div className={`${styles.community_chat_user}`}>
            <Image className={`${styles.img}`} src={users[0]} alt=""/>
            <div className={`${styles.line}`}></div>
          </div>
          <div className={`${styles.community_chat_user}`}>
            <Image className={`${styles.img}`} src={users[1]} alt=""/>
            <div className={`${styles.line}`}></div>
          </div>
          <div className={`${styles.community_chat_user}`}>
            <Image className={`${styles.img}`} src={users[2]} alt=""/>
            <div className={`${styles.line}`}></div>
          </div>
          <div className={`${styles.community_chat_user}`}>
            <Image className={`${styles.img}`} src={users[3]} alt=""/>
            <div className={`${styles.line}`}></div>
          </div>
          <div className={`${styles.community_chat_user}`}>
            <Image className={`${styles.img}`} src={users[4]} alt=""/>
            <div className={`${styles.line}`}></div>
          </div>
          <div className={`${styles.community_chat_user}`}>
            <Image className={`${styles.img}`} src={users[5]} alt=""/>
            <div className={`${styles.line}`}></div>
          </div>
          <div className={`${styles.community_chat_user}`}>
            <Image className={`${styles.img}`} src={users[6]} alt=""/>
            <div className={`${styles.line}`}></div>
          </div>
          <div className={`${styles.community_chat_user}`}>
            <Image className={`${styles.img}`} src={users[7]} alt=""/>
            <div className={`${styles.line}`}></div>
          </div>
          <div className={`${styles.community_chat_user}`}>
            <Image className={`${styles.img}`} src={users[8]} alt=""/>
          </div>
        </div>
    )
}

export default ChatUser
