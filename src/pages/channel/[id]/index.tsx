import AreaChart from '@/components/AreaChart'
import VideoCard from '@/components/VideoCard'
import React, { FC, useState } from 'react'
import styles from '../../../styles/ChannelPage.module.scss'

const ChannelPage: FC = () => {
    const [buttons, setButtons] = useState([
        { id: 1, name: 'Most Watched', isActive: true },
        { id: 2, name: 'Recent Videos', isActive: false },
        { id: 3, name: 'Playlist', isActive: false },
    ])
    const [leftButtons, setLeftbuttons] = useState([
        { id: 1, name: 'Content', isActive: true },
        { id: 2, name: 'NFT Stats', isActive: false },
    ])
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <video
                    src=""
                    className={styles.video}
                    poster="https://chambo015.github.io/nimble-dist/assets/video-1.caf0ce7d.jpg"
                ></video>
                <div className={styles.infoButtons}>
                    {leftButtons.map((item) => {
                        const { id, name, isActive } = item
                        return (
                            <button
                                className={isActive ? styles.active : ''}
                                onClick={() => {
                                    const newButtons = leftButtons.map(
                                        (item) => {
                                            if (item.id !== id) {
                                                return {
                                                    ...item,
                                                    isActive: false,
                                                }
                                            } else {
                                                return {
                                                    ...item,
                                                    isActive: true,
                                                }
                                            }
                                        }
                                    )
                                    setLeftbuttons(newButtons)
                                }}
                            >
                                {name}
                            </button>
                        )
                    })}
                </div>
                {leftButtons[0].isActive && (
                    <div className={styles.content}>
                        <div className={styles.profile}>
                            <div className={styles.profileImage}></div>
                            <div className={styles.profileTitle}>
                                <span className={styles.name}>@BlueWard2</span>
                                <span className={styles.followers}>
                                    100M followers
                                </span>
                            </div>
                            <button className={styles.subscribeButton}>
                                subscribed
                            </button>
                            <div className={styles.profileAnnouncement}>
                                <div className={styles.bell}></div>
                            </div>
                        </div>
                        <div className={styles.description}>
                            Users who connect their crypto wallet are able to
                            purchase NFTs and set them as their profile picture
                            which will be displayed in a special hexagonal
                            shape.
                        </div>
                        <div className={styles.additionalInfo}>
                            <div className={styles.location}>New-York, USA</div>
                            <div className={styles.time}>
                                Joined September 1, 2022
                            </div>
                        </div>
                        <button className={styles.levelButton}>
                            Level 14 creator
                        </button>
                        <div className={styles.announcements}>
                            <p className={styles.title}>Announcements</p>
                            <div className={styles.singleAnnouncement}>
                                <div className={styles.announcementLeft}>
                                    <div className={styles.logo}></div>
                                </div>
                                <div className={styles.announcementInfo}>
                                    <div className={styles.title}>
                                        @BlueWard2
                                    </div>
                                    <div className={styles.announcementBody}>
                                        Users who connect their crypto wallet
                                        are able to purchase NFTs and set them
                                        as their profile picture which will be
                                        displayed in a special hexagonal shape.
                                    </div>
                                    <div className={styles.additional}>
                                        <div className={styles.likes}>5k</div>
                                        <div className={styles.comments}>
                                            2 345
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.singleAnnouncement}>
                                <div className={styles.announcementLeft}>
                                    <div className={styles.logo}></div>
                                </div>
                                <div className={styles.announcementInfo}>
                                    <div className={styles.title}>
                                        @BlueWard2
                                    </div>
                                    <div className={styles.announcementBody}>
                                        Users who connect their crypto wallet
                                        are able to purchase NFTs and set them
                                        as their profile picture which will be
                                        displayed in a special hexagonal shape.
                                    </div>
                                    <div className={styles.additional}>
                                        <div className={styles.likes}>5k</div>
                                        <div className={styles.comments}>
                                            2 345
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.singleAnnouncement}>
                                <div className={styles.announcementLeft}>
                                    <div className={styles.logo}></div>
                                </div>
                                <div className={styles.announcementInfo}>
                                    <div className={styles.title}>
                                        @BlueWard2
                                    </div>
                                    <div className={styles.announcementBody}>
                                        Users who connect their crypto wallet
                                        are able to purchase NFTs and set them
                                        as their profile picture which will be
                                        displayed in a special hexagonal shape.
                                    </div>
                                    <div className={styles.additional}>
                                        <div className={styles.likes}>5k</div>
                                        <div className={styles.comments}>
                                            2 345
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {leftButtons[1].isActive && (
                    <div className={styles.content}>
                        <div className={styles.profile}>
                            <div className={styles.profileImage}></div>
                            <div className={styles.profileTitle}>
                                <span className={styles.name}>@BlueWard2</span>
                                <span className={styles.followers}>
                                    100M followers
                                </span>
                            </div>
                            <button className={styles.subscribeButton}>
                                subscribed
                            </button>
                            <div className={styles.profileAnnouncement}>
                                <div className={styles.bell}></div>
                            </div>
                        </div>
                        <div className={styles.description}>
                            Users who connect their crypto wallet are able to
                            purchase NFTs and set them as their profile picture
                            which will be displayed in a special hexagonal
                            shape.
                        </div>
                        <div className={styles.additionalInfo}>
                            <div className={styles.location}>New-York, USA</div>
                            <div className={styles.time}>
                                Joined September 1, 2022
                            </div>
                        </div>
                        <button className={styles.levelButton}>
                            Level 14 creator
                        </button>
                        <div className={styles.announcements}>
                            <p className={styles.title}>Announcements</p>
                            <div className={styles.singleAnnouncement}>
                                <div className={styles.announcementLeft}>
                                    <div className={styles.logo}></div>
                                </div>
                                <div className={styles.announcementInfo}>
                                    <div className={styles.title}>
                                        @BlueWard2
                                    </div>
                                    <div className={styles.announcementBody}>
                                        Users who connect their crypto wallet
                                        are able to purchase NFTs and set them
                                        as their profile picture which will be
                                        displayed in a special hexagonal shape.
                                    </div>
                                    <div className={styles.additional}>
                                        <div className={styles.likes}>5k</div>
                                        <div className={styles.comments}>
                                            2 345
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.singleAnnouncement}>
                                <div className={styles.announcementLeft}>
                                    <div className={styles.logo}></div>
                                </div>
                                <div className={styles.announcementInfo}>
                                    <div className={styles.title}>
                                        @BlueWard2
                                    </div>
                                    <div className={styles.announcementBody}>
                                        Users who connect their crypto wallet
                                        are able to purchase NFTs and set them
                                        as their profile picture which will be
                                        displayed in a special hexagonal shape.
                                    </div>
                                    <div className={styles.additional}>
                                        <div className={styles.likes}>5k</div>
                                        <div className={styles.comments}>
                                            2 345
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.singleAnnouncement}>
                                <div className={styles.announcementLeft}>
                                    <div className={styles.logo}></div>
                                </div>
                                <div className={styles.announcementInfo}>
                                    <div className={styles.title}>
                                        @BlueWard2
                                    </div>
                                    <div className={styles.announcementBody}>
                                        Users who connect their crypto wallet
                                        are able to purchase NFTs and set them
                                        as their profile picture which will be
                                        displayed in a special hexagonal shape.
                                    </div>
                                    <div className={styles.additional}>
                                        <div className={styles.likes}>5k</div>
                                        <div className={styles.comments}>
                                            2 345
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className={styles.right}>
                {leftButtons[0].isActive && (
                    <>
                        <div className={styles.headerButtons}>
                            {buttons.map((item) => {
                                const { id, name, isActive } = item
                                return (
                                    <button
                                        className={
                                            isActive ? styles.active : ''
                                        }
                                        key={id}
                                        onClick={() => {
                                            const newArr = buttons.map(
                                                (item) => {
                                                    if (item.id !== id)
                                                        return {
                                                            ...item,
                                                            isActive: false,
                                                        }
                                                    else
                                                        return {
                                                            ...item,
                                                            isActive: true,
                                                        }
                                                }
                                            )
                                            setButtons(newArr)
                                        }}
                                    >
                                        {name}
                                    </button>
                                )
                            })}
                        </div>
                        <div className={styles.rightMain}>
                            <div className={styles.videosSection}>
                                <VideoCard />
                                <VideoCard />
                                <VideoCard />
                                <VideoCard />
                                <VideoCard />
                                <VideoCard />
                                <VideoCard />
                                <VideoCard />
                            </div>
                            <div className={styles.statistics}>
                                <div className={styles.statisticsLeft}>
                                    <div className={styles.item}>
                                        <h2>100 132</h2>
                                        <p>Members</p>
                                    </div>
                                    <div className={styles.item}>
                                        <h2>100 132</h2>
                                        <p>Members</p>
                                    </div>
                                    <div className={styles.item}>
                                        <h2>100 132</h2>
                                        <p>Members</p>
                                    </div>
                                    <div className={styles.item}>
                                        <h2>100 132</h2>
                                        <p>Members</p>
                                    </div>
                                    <div className={styles.item}>
                                        <h2>100 132</h2>
                                        <p>Members</p>
                                    </div>
                                    <div className={styles.item}>
                                        <h2>100 132</h2>
                                        <p>Members</p>
                                    </div>
                                </div>
                                <div className={styles.statisticsRight}>
                                    {/* <AreaChart /> */}
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default ChannelPage
