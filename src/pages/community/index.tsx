import styles from './Community.module.css';

const Community = () => {
  return (
    <div className={styles.community_main}>
      <div className={styles.community_feed}>
        <div className={styles.community_feed_title}>
          <h1>Community Feed</h1>
        </div>
        <div className={`${styles.community_item}`}>
          <div className={`${styles.community_item_userdata}`}>
            <div className={`${styles.community_item_avatar}`}>
              <img src="" alt="avatar"/>  
            </div>    
            <div className={`${styles.community_item_details}`}></div>
          </div>    
        </div>
      </div>
      <div className={styles.community_chat}></div>
    </div>
  );
};

export default Community;
