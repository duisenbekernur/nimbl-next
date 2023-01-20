import AreaChart from '@/components/Chart/AreaChart'
import ProgressChart from '@/components/Chart/ProgressChart'
import NFTCard from '@/components/NFTCard'
import VideoCard from '@/components/VideoCard'
import Image from 'next/image'
import logo from '@/assets/user3.png'
import React, { FC, useState } from 'react'
import styles from '../../../styles/ChannelPage.module.scss'
const announcements = [
    {
        id: 1,
        img: logo,
        name: '@BlueWard2',
        description:
            'Users who connect their crypto wallet are able to purchase NFTs and set them as their profile picture which will be displayed in a special hexagonal shape.',
        likes: 5,
        comments: 2345,
    },
    {
        id: 2,
        img: logo,
        name: '@BlueWard2',
        description:
            'Users who connect their crypto wallet are able to purchase NFTs and set them as their profile picture which will be displayed in a special hexagonal shape.',
        likes: 5,
        comments: 2345,
    },
    {
        id: 3,
        img: logo,
        name: '@BlueWard2',
        description:
            'Users who connect their crypto wallet are able to purchase NFTs and set them as their profile picture which will be displayed in a special hexagonal shape.',
        likes: 5,
        comments: 2345,
    },
    {
        id: 4,
        img: logo,
        name: '@BlueWard2',
        description:
            'Users who connect their crypto wallet are able to purchase NFTs and set them as their profile picture which will be displayed in a special hexagonal shape.',
        likes: 5,
        comments: 2345,
    },
    {
        id: 5,
        img: logo,
        name: '@BlueWard2',
        description:
            'Users who connect their crypto wallet are able to purchase NFTs and set them as their profile picture which will be displayed in a special hexagonal shape.',
        likes: 5,
        comments: 2345,
    },
]
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
                            <div className={styles.profileImage}>
                                <Image src={logo} alt={'logo'} />
                            </div>
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
                        <article className={styles.announcements}>
                            <p className={styles.title}>Announcements</p>
                            {announcements.map((item) => {
                                const {
                                    id,
                                    name,
                                    description,
                                    img,
                                    likes,
                                    comments,
                                } = item
                                return (
                                    <div
                                        className={styles.singleAnnouncement}
                                        key={id}
                                    >
                                        <div
                                            className={styles.announcementLeft}
                                        >
                                            <div className={styles.logo}>
                                                <Image src={img} alt={'name'} />
                                            </div>
                                        </div>
                                        <div
                                            className={styles.announcementInfo}
                                        >
                                            <div className={styles.name}>
                                                {name}
                                            </div>
                                            <div
                                                className={
                                                    styles.announcementBody
                                                }
                                            >
                                                {description}
                                            </div>
                                            <div className={styles.additional}>
                                                <div className={styles.likes}>
                                                    {likes}k
                                                </div>
                                                <div
                                                    className={styles.comments}
                                                >
                                                    {comments}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </article>
                    </div>
                )}
                {leftButtons[1].isActive && (
                    <div className={styles.content}>
                        <div className={styles.buttonsSection}>
                            <button className={styles.active}>Buy NFT</button>
                            <button>Token Utility</button>
                        </div>
                        <div className={styles.cardSection}>
                            <div className={styles.card}>
                                <NFTCard />
                            </div>
                            <div className={styles.card}>
                                <NFTCard />
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
                                    <AreaChart />
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {leftButtons[1].isActive && (
                    <div className={styles.nftMain}>
                        <div className={styles.graphContainer}>
                            <div className={styles.profile}>
                                <div className={styles.profileImage}></div>
                                <div className={styles.profileTitle}>
                                    <span className={styles.name}>
                                        @BlueWard2
                                    </span>
                                    <span className={styles.followers}>
                                        100M followers
                                    </span>
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
                            <div className={styles.tradeGraph}>
                                <ProgressChart />
                            </div>
                        </div>

                        <div className={styles.activitiesSection}>
                            <div className={styles.title}>
                                <p>Recent activities</p>
                            </div>
                            <div className={styles.activities}>
                                <div className={styles.singleActivity}>
                                    <div className={styles.activityItem}>
                                        Sales
                                    </div>
                                    <div className={styles.activityItem}>
                                        0.051 ETH
                                    </div>
                                    <div className={styles.activityItem}>
                                        Bankless
                                    </div>
                                    <div className={styles.activityItem}>
                                        John
                                    </div>
                                    <div className={styles.activityItem}>
                                        1 hour ago
                                    </div>
                                </div>
                                <div className={styles.singleActivity}>
                                    <div className={styles.activityItem}>
                                        Sales
                                    </div>
                                    <div className={styles.activityItem}>
                                        0.051 ETH
                                    </div>
                                    <div className={styles.activityItem}>
                                        Bankless
                                    </div>
                                    <div className={styles.activityItem}>
                                        John
                                    </div>
                                    <div className={styles.activityItem}>
                                        1 hour ago
                                    </div>
                                </div>
                                <div className={styles.singleActivity}>
                                    <div className={styles.activityItem}>
                                        Sales
                                    </div>
                                    <div className={styles.activityItem}>
                                        0.051 ETH
                                    </div>
                                    <div className={styles.activityItem}>
                                        Bankless
                                    </div>
                                    <div className={styles.activityItem}>
                                        John
                                    </div>
                                    <div className={styles.activityItem}>
                                        1 hour ago
                                    </div>
                                </div>
                                <div className={styles.singleActivity}>
                                    <div className={styles.activityItem}>
                                        Sales
                                    </div>
                                    <div className={styles.activityItem}>
                                        0.051 ETH
                                    </div>
                                    <div className={styles.activityItem}>
                                        Bankless
                                    </div>
                                    <div className={styles.activityItem}>
                                        John
                                    </div>
                                    <div className={styles.activityItem}>
                                        1 hour ago
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ChannelPage
