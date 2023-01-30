import React from 'react'
import Image from 'next/image'
import styles from './Message.module.css'
import Reactions from '../Reactions/index'

const Message = (props:any) => {
    return (
        <div className={`${styles.message_wrapper}`}>
            <div className={`${styles.message_avatar}`}>
                <Image className={`${styles.avatar}`} src={props.src} alt=""/>
            </div>
            <div className={`${styles.message_block}`}>
                 <div className={`${styles.user_info}`}>
                    <div className={`${styles.info}`}>
                        <div className={`${styles.user_name}`}>
                            <h1>Akie</h1>
                        </div>
                        <div className={`${styles.submission_date}`}>
                            <h3>Today at 09:26</h3>
                        </div>
                    </div>
                    <Reactions/>
                 </div>
                 <div className={`${styles.message}`}>
                    {props.message}
                 </div>
            </div>
        </div>    
    )
}

export default Message
