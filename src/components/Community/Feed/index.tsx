import React from 'react'
import styles from './Feed.module.css'
import Image from 'next/image'
import pictures from './pictures'
import avatars from './avatars'

const Feed = () => {
  return (
    <div className={`${styles.community_item}`}>
          <div className={`${styles.community_item_userdata}`}>
            <div className={`${styles.community_item_avatar}`}>
              <Image src={avatars[0]} alt="avatar"/>  
            </div>    
            <div className={`${styles.community_item_details}`}>
              <div className={`${styles.community_item_details_info}`}>
                <div className={`${styles.community_item_details_name}`}>
                  <h1 className={`${styles.name}`}>VinGaming</h1>
                </div>
                <div className={`${styles.community_item_details_date}`}>
                  <h3 className={`${styles.submission_time}`}>2h ago</h3>
                </div>
              </div>
              <div className={`${styles.community_item_details_comment}`}>
                <h3 className={`${styles.comment}`}>It is buyin time!</h3>
              </div>
              <div className={`${styles.community_item_details_likes}`}>
                <Image className={`${styles.like}`} src={pictures[0]} alt="like"/>
                <h3 className={`${styles.likeAmount}`}>2k</h3>
                <Image className={`${styles.dislike}`} src={pictures[1]} alt="like"/>
              </div>
              <Image className={`${styles.comment_img}`} src={pictures[2]} alt=""/>
            </div>
          </div>    
        </div>
  )
}

export default Feed