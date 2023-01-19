import {useState, useEffect, useRef} from 'react';
// Styles
import styles from './Community.module.css';
// Avatars
import avatar from '../../assets/avatar.png';
import avatar2 from '../../assets/avatar2.png';
import avatar3 from '../../assets/avatar3.png';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';
import bored from '../../assets/bored.png';
// User icons
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
// Reactions
import reaction from '../../assets/reactions.svg';
import share from '../../assets/share.svg';
import fire from '../../assets/reactions_fire.svg';
import smile from '../../assets/reactions_smile.svg';
import thinking from '../../assets/reactions_thinking.svg';
import clap from '../../assets/reactions_clap.svg';
import angry from '../../assets/reactions_angry.svg';
import Image from 'next/image';

const useComponentVisible = (initialIsVisible: any) => {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
  const ref = useRef(null);
  const handleClickOutside = (event: { target: any; }) => {
    if(ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    }
  }, []);
  return {ref, isComponentVisible, setIsComponentVisible};
}

const Community = () => {
  let [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    setIsShown(current => !current);
  }
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
          <div className={`${styles.community_chat_user}`}>
            <Image className={`${styles.img}`} src={user1} alt=""/>
            <div className={`${styles.line}`}></div>
          </div>
          <div className={`${styles.community_chat_user}`}>
            <Image className={`${styles.img}`} src={user2} alt=""/>
            <div className={`${styles.line}`}></div>
          </div>
          <div className={`${styles.community_chat_user}`}>
            <Image className={`${styles.img}`} src={user3} alt=""/>
            <div className={`${styles.line}`}></div>
          </div>
          <div className={`${styles.community_chat_user}`}>
            <Image className={`${styles.img}`} src={user4} alt=""/>
            <div className={`${styles.line}`}></div>
          </div>
          <div className={`${styles.community_chat_user}`}>
            <Image className={`${styles.img}`} src={user5} alt=""/>
            <div className={`${styles.line}`}></div>
          </div>
          <div className={`${styles.community_chat_user}`}>
            <Image className={`${styles.img}`} src={user6} alt=""/>
            <div className={`${styles.line}`}></div>
          </div>
          <div className={`${styles.community_chat_user}`}>
            <Image className={`${styles.img}`} src={user7} alt=""/>
            <div className={`${styles.line}`}></div>
          </div>
          <div className={`${styles.community_chat_user}`}>
            <Image className={`${styles.img}`} src={user8} alt=""/>
            <div className={`${styles.line}`}></div>
          </div>
          <div className={`${styles.community_chat_user}`}>
            <Image className={`${styles.img}`} src={user9} alt=""/>
          </div>
        </div>
        <div className={`${styles.community_chat_stat}`}>
          <div className={`${styles.community_chat_stat_logo}`}>
            <Image className={`${styles.img}`} src={logo} alt=""/>
            <div className={`${styles.text}`}>
              <h1 className={`${styles.title}`}>Bankless</h1>
              <h3 className={`${styles.details}`}>Community Size: <span>4.2k</span></h3>
            </div>
          </div>
          <div className={`${styles.community_chat_stat_info}`}>
            <div className={`${styles.stat_block}`}>Floor Price: <span>20 NMBL</span></div>
            <div className={`${styles.stat_block}`}>Volume: <span>134 NMBL</span></div>
          </div>
          <div className={`${styles.community_chat_stat_dropdown}`}>
            <div className={`${styles.stat_text}`}>
              <h1>GaryVee #1</h1>
              <h2>32 online</h2>
            </div>
            <Image className={`${styles.img}`} src={arrowDown} alt=""/>
          </div>
        </div>
        <div className={`${styles.community_chat_messages}`}>
            <div className={`${styles.messages_block}`}>
              <Image className={`${styles.user_image}`} src={user5} alt=""/>
              <div className={`${styles.message_details}`}>
                <div className={`${styles.user_info}`}>
                  <div className={`${styles.user_data}`}>
                    <div className={`${styles.username}`}>Akie</div>
                    <div className={`${styles.submission_date}`}>Today at 09:26</div>
                  </div>
                </div>
                <div className={`${styles.message}`}>
                  Hahaha. Dont worry mate he is figuringit out. He is getting confused too
                  <div className={`${styles.reactions}`}>
                    <Image onClick={handleClick} src={reaction} alt="" className={`${styles.reactions_img}`}/>
                    <Image src={share} alt="" className={`${styles.share_img}`}/>
                    {
                      isShown ? (
                        <div className={`${styles.options}`}>
                          <Image src={fire} alt="" className={`${styles.options_img}`}/>
                          <Image src={smile} alt="" className={`${styles.options_img}`}/>
                          <Image src={thinking} alt="" className={`${styles.options_img}`}/>
                          <Image src={angry} alt="" className={`${styles.options_img}`}/>
                          <Image src={clap} alt="" className={`${styles.options_img}`}/>
                        </div>
                      ) : (<></>)
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.messages_block}`}>
              <Image className={`${styles.user_image}`} src={user5} alt=""/>
              <div className={`${styles.message_details}`}>
                <div className={`${styles.user_info}`}>
                  <div className={`${styles.user_data}`}>
                    <div className={`${styles.username}`}>Akie</div>
                    <div className={`${styles.submission_date}`}>Today at 09:26</div>
                  </div>
                </div>
                <div className={`${styles.message}`}>
                  Hahaha. Dont worry mate he is figuringit out. He is getting confused too
                </div>
              </div>
            </div>
            <div className={`${styles.messages_block}`}>
              <Image className={`${styles.user_image}`} src={user5} alt=""/>
              <div className={`${styles.message_details}`}>
                <div className={`${styles.user_info}`}>
                  <div className={`${styles.user_data}`}>
                    <div className={`${styles.username}`}>Akie</div>
                    <div className={`${styles.submission_date}`}>Today at 09:26</div>
                  </div>
                </div>
                <div className={`${styles.message}`}>
                  Hahaha. Dont worry mate he is figuringit out. He is getting confused too
                </div>
              </div>
            </div>
            <div className={`${styles.messages_block}`}>
              <Image className={`${styles.user_image}`} src={user5} alt=""/>
              <div className={`${styles.message_details}`}>
                <div className={`${styles.user_info}`}>
                  <div className={`${styles.user_data}`}>
                    <div className={`${styles.username}`}>Akie</div>
                    <div className={`${styles.submission_date}`}>Today at 09:26</div>
                  </div>
                </div>
                <div className={`${styles.message}`}>
                  Hahaha. Dont worry mate he is figuringit out. He is getting confused too
                </div>
              </div>
            </div>
            <div className={`${styles.messages_block}`}>
              <Image className={`${styles.user_image}`} src={user5} alt=""/>
              <div className={`${styles.message_details}`}>
                <div className={`${styles.user_info}`}>
                  <div className={`${styles.user_data}`}>
                    <div className={`${styles.username}`}>Akie</div>
                    <div className={`${styles.submission_date}`}>Today at 09:26</div>
                  </div>
                </div>
                <div className={`${styles.message}`}>
                  Hahaha. Dont worry mate he is figuringit out. He is getting confused too
                </div>
              </div>
            </div>
            <div className={`${styles.messages_block}`}>
              <Image className={`${styles.user_image}`} src={user5} alt=""/>
              <div className={`${styles.message_details}`}>
                <div className={`${styles.user_info}`}>
                  <div className={`${styles.user_data}`}>
                    <div className={`${styles.username}`}>Akie</div>
                    <div className={`${styles.submission_date}`}>Today at 09:26</div>
                  </div>
                </div>
                <div className={`${styles.message}`}>
                  Hahaha. Dont worry mate he is figuringit out. He is getting confused too
                </div>
              </div>
            </div>
            <div className={`${styles.messages_block}`}>
              <Image className={`${styles.user_image}`} src={user5} alt=""/>
              <div className={`${styles.message_details}`}>
                <div className={`${styles.user_info}`}>
                  <div className={`${styles.user_data}`}>
                    <div className={`${styles.username}`}>Akie</div>
                    <div className={`${styles.submission_date}`}>Today at 09:26</div>
                  </div>
                </div>
                <div className={`${styles.message}`}>
                  Hahaha. Dont worry mate he is figuringit out. He is getting confused too
                </div>
              </div>
            </div>
            <div className={`${styles.messages_block}`}>
              <Image className={`${styles.user_image}`} src={user5} alt=""/>
              <div className={`${styles.message_details}`}>
                <div className={`${styles.user_info}`}>
                  <div className={`${styles.user_data}`}>
                    <div className={`${styles.username}`}>Akie</div>
                    <div className={`${styles.submission_date}`}>Today at 09:26</div>
                  </div>
                </div>
                <div className={`${styles.message}`}>
                  Hahaha. Dont worry mate he is figuringit out. He is getting confused too
                </div>
              </div>
            </div>
            <div className={`${styles.messages_block}`}>
              <div className={`${styles.message_details}`}>
                <Image className={`${styles.user_image}`} src={user5} alt=""/>
                <div className={`${styles.user_info}`}>
                  <div className={`${styles.user_data}`}>
                    <div className={`${styles.username}`}>Akie</div>
                    <div className={`${styles.submission_date}`}>Today at 09:26</div>
                  </div>
                </div>
                <div className={`${styles.message}`}>
                  Hahaha. Dont worry mate he is figuringit out. He is getting confused too
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
