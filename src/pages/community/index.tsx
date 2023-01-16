import styles from './Community.module.css';
import avatar from '../../assets/avatar.png';
import avatar2 from '../../assets/avatar2.png';
import avatar3 from '../../assets/avatar3.png';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';
import bored from '../../assets/bored.png';
import Image from 'next/image';
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
              <Image src={avatar} alt="avatar"/>  
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
                <Image className={`${styles.like}`} src={like} alt="like"/>
                <h3 className={`${styles.likeAmount}`}>2k</h3>
                <Image className={`${styles.dislike}`} src={dislike} alt="like"/>
              </div>
              <Image className={`${styles.comment_img}`} src={bored} alt=""/>
            </div>
          </div>    
        </div>
        <div className={`${styles.community_item}`}>
          <div className={`${styles.community_item_userdata}`}>
            <div className={`${styles.community_item_avatar}`}>
              <Image src={avatar2} alt="avatar"/>  
            </div>    
            <div className={`${styles.community_item_details}`}>
              <div className={`${styles.community_item_details_info}`}>
                <div className={`${styles.community_item_details_name}`}>
                  <h1 className={`${styles.name}`}>@BlueWard2</h1>
                </div>
                <div className={`${styles.community_item_details_date}`}>
                  <h3 className={`${styles.submission_time}`}>2h ago</h3>
                </div>
              </div>
              <div className={`${styles.community_item_details_comment}`}>
                <h3 className={`${styles.comment}`}>Users who connect their crypto wallet are able to purchase NFTs and set them as their profile picture which will be displayed in a special hexagonal shape.</h3>
              </div>
              <div className={`${styles.community_item_details_likes}`}>
                <Image className={`${styles.like}`} src={like} alt="like"/>
                <h3 className={`${styles.likeAmount}`}>2k</h3>
                <Image className={`${styles.dislike}`} src={dislike} alt="like"/>
              </div>
            </div>
          </div>    
        </div>
        <div className={`${styles.community_item}`}>
          <div className={`${styles.community_item_userdata}`}>
            <div className={`${styles.community_item_avatar}`}>
              <Image src={avatar3} alt="avatar"/>  
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
                <h3 className={`${styles.comment}`}>Reading about people grabbing multi-figures monthly as incomes in investments even in this crazy days in the market, any pointers on how to make substantial progress in earning? would be appreciated.</h3>
              </div>
              <div className={`${styles.community_item_details_likes}`}>
                <Image className={`${styles.like}`} src={like} alt="like"/>
                <h3 className={`${styles.likeAmount}`}>2k</h3>
                <Image className={`${styles.dislike}`} src={dislike} alt="like"/>
              </div>
            </div>
          </div>    
        </div>
        <div className={`${styles.community_item}`}>
          <div className={`${styles.community_item_userdata}`}>
            <div className={`${styles.community_item_avatar}`}>
              <Image src={avatar} alt="avatar"/>  
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
                <h3 className={`${styles.comment}`}>Reading about people grabbing multi-figures monthly as incomes in investments even in this crazy days in the market, any pointers on how to make substantial progress in earning? would be appreciated.</h3>
              </div>
              <div className={`${styles.community_item_details_likes}`}>
                <Image className={`${styles.like}`} src={like} alt="like"/>
                <h3 className={`${styles.likeAmount}`}>2k</h3>
                <Image className={`${styles.dislike}`} src={dislike} alt="like"/>
              </div>
            </div>
          </div>    
        </div>
        <div className={`${styles.community_item}`}>
          <div className={`${styles.community_item_userdata}`}>
            <div className={`${styles.community_item_avatar}`}>
              <Image src={avatar} alt="avatar"/>  
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
                <Image className={`${styles.like}`} src={like} alt="like"/>
                <h3 className={`${styles.likeAmount}`}>2k</h3>
                <Image className={`${styles.dislike}`} src={dislike} alt="like"/>
              </div>
            </div>
          </div>    
        </div>
        <div className={`${styles.community_item}`}>
          <div className={`${styles.community_item_userdata}`}>
            <div className={`${styles.community_item_avatar}`}>
              <Image src={avatar} alt="avatar"/>  
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
                <Image className={`${styles.like}`} src={like} alt="like"/>
                <h3 className={`${styles.likeAmount}`}>2k</h3>
                <Image className={`${styles.dislike}`} src={dislike} alt="like"/>
              </div>
            </div>
          </div>    
        </div>
      </div>
      <div className={styles.community_chat}>
        <div className={`${styles.community_chat_users}`}>
          
        </div>
        <div className={`${styles.community_chat_stat}`}></div>
        <div className={`${styles.community_chat_messages}`}></div>
      </div>
    </div>
  );
};

export default Community;
