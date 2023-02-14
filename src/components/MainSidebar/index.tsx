import { useState} from 'react'
import styles from './MainSidebar.module.scss'
import Image from 'next/image'

import arrowDown from '../../assets/icons/arrow-down.svg'

import VideoPlayer from '../VideoPlayer'
import Tabs from '../UI/Tabs'
import Tab from '../UI/Tabs/Tab'
import TableChannels from './TableChannels'
import UISquareButton from '../UI/UISquareButton'
import Sprite from '../Sprite'

const trendingVideo = [
    {
        id: 1,
        title: 'Talks about NFT videos that can change world',
        time: '13:13',
        poster: 'video/trending-video1.jpg',
    },
    {
        id: 2,
        title: 'How NFTs are shaking up the art world | DW',
        time: '55:14',
        poster: 'video/trending-video2.jpg',
    },
    {
        id: 3,
        title: 'Why are people collecting NFTs?',
        time: '40:21',
        poster: 'video/trending-video3.jpg',
    },
]


const Sidebar = () => {
    const [showSubscribers, setShowSubscribers] = useState(false)
    const [activeChannelId, setActiveChannelId] = useState(0)
    const [isHeaderShow, setIsHeaderShow] = useState(true)
    const [isTrendingShow, setIsTrending] = useState(true)
    const [activeTab, setActiveTab] = useState(0)

    /* const getActiveChannel = () => {
        return channels.find((ch) => ch.id === activeChannelId)
    } */

    return (
        <div className={styles.sidebar}>
      
                    <div className={styles.sidebar_video}>
                        <div className={styles.sidebar_video_wrap}>
                            <VideoPlayer />
                        </div>
                    </div>
               
            {showSubscribers === false ? (
                <>
                    <Tabs size="large" value={activeTab} onChange={setActiveTab}>
                        <Tab label="Top" index={0} />
                        <Tab label="Trending" index={1} />
                        <Tab label="Rising" index={2} />
                        <Tab label="WatchList" index={3} />
                    </Tabs>
                    <div className={styles.channels}>
                        <div className={styles.sidebar_sorts}>
                            <Tabs size="small" value={activeTab} onChange={setActiveTab}>
                                <Tab label="1d" index={0} />
                                <Tab label="1w" index={1} />
                                <Tab label="1m" index={2} />
                                <Tab label="3m" index={3} />
                            </Tabs>
                            <UISquareButton icon={<Sprite id="arrow_down" />}>All Categories</UISquareButton>
                            <UISquareButton>View All</UISquareButton>
                        </div>
                        <div className={styles.table_wrap}>
                            <TableChannels />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {/* <div className={styles.channels}>
                                    <div className={styles.subs_header}>
                                        <div className={styles.subs_header_head}>
                                            <div className={styles.back_btn} onClick={() => setShowSubscribers(false)}>
                                                <Image src={arrowLeft} alt="back" />
                                            </div>
                                            <div className={styles.subs_titles}>
                                                <Image src={profileLogo} alt="" />
                                                <div className={styles.subs_title}>@{getActiveChannel.name}</div>
                                            </div>
                                        </div>
                                        <div className={styles.go_to_channel}>Go to channel</div>
                                    </div>
                                    <div className={styles.about_channel_box}>
                                        <div className={styles.value}>
                                            {100000}
                                        </div>
                                        <div className={styles.key}>Views</div>
                                    </div>
                                    <div className={styles.about_channel_box}>
                                        <div className={styles.value}>
                                            {100000}
                                        </div>
                                        <div className={styles.key}>Shares</div>
                                    </div>
                                    <div className={styles.about_channel_box}>
                                        <div className={styles.value}>
                                            {100}
                                        </div>
                                        <div className={styles.key}>
                                            Floor Price
                                        </div>
                                    </div>
                                    <div className={styles.about_channel_box}>
                                        <div className={styles.value}>
                                            {150}
                                        </div>
                                        <div className={styles.key}>Volume</div>
                                    </div>
                                    <div className={styles.about_channel_box}>
                                        <div className={styles.value}>
                                            {500}
                                        </div>
                                        <div className={styles.key}>
                                            Listings
                                        </div>
                                    </div>
                                    <div className={styles.subs_videos}>
                                        <div className={styles.subs_videos_header}>Trending Videos</div>
                                        <div className={styles.subs_videos_video}>
                                            {trendingVideo.map((item) => (
                                                <div className={styles.subs_videos_box} key={item.id}>
                                                    <div className={styles.subs_videos_main}>
                                                        <div className={styles.subs_img}>
                                                            <Image
                                                                style={{
                                                                    objectFit: 'cover',
                                                                }}
                                                                src={previewImg}
                                                                alt=""
                                                            />
                                                            <div className={styles.videos_timeline}>{item.time}</div>
                                                        </div>
                                                    </div>
                                                    <div className={styles.subs_videos_names}>{item.title} </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div> */}
                </>
            )}
        </div>
    )
}

export default Sidebar
