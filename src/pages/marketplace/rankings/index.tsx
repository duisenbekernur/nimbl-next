import React, {useState} from 'react'
import categorySvg from '../../../assets/icons/top-creator-icon.svg'
import arrowDownSvg from '../../../assets/icons/arrow_down.svg'
import Image from 'next/image'
import trendingImg from '../../../assets/icons/trending.svg'
import plus from '../../../assets/icons/plus.svg'
import styles from '../rankings/Rankings.module.scss'
import cryptonewsImg from '../../../assets/icons/cryptonews.svg'
import ethnftImg from '../../../assets/icons/ethnfts.svg'
import play2earn from '../../../assets/icons/play2earn.svg'
import channelImg from '../../../assets/icons/channel.svg'
import pauseImg from '../../../assets/icons/pause_2.svg'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '@/store/store'
import {setActive} from '@/store/features/rankings-filter/filter'
import Layout from '@/components/Layout'
import CategoriesSwiper from '@/components/CategoriesSwiper'
import RankingsCard from '@/components/RankingsCard'

const RankingsPage = () => {
    const [isGrid, setIsGrid] = useState(true)
    // const [activeGrid, setActiveGrid] = useState(0)
    const dispatch = useDispatch()
    const {time} = useSelector((store: RootState) => store.filter)

    return (
        <Layout>
            <div className={styles.table_content}>
                <div className={styles.mainContainer}>
                    <CategoriesSwiper />
                </div>
                <div className={styles.table_inner}>
                    <div className={styles.table_content_inner}>
                        <div className={styles.sidebar_sort}>
                            <div className={styles.sort_byCategory}>
                                <Image className={styles.byCategory_svg} src={categorySvg} alt="" />
                                <div className={styles.byCategory_text}>Top Creators</div>
                                <Image
                                    className={styles.byCategory_icon}
                                    src={arrowDownSvg}
                                    alt=""
                                    style={{
                                        width: '20px',
                                        height: '15px',
                                    }}
                                />
                            </div>
                            <div className={styles.sortByDate}>
                                {time.map((item) => {
                                    const {id, name, isActive} = item
                                    return (
                                        <div
                                            key={id}
                                            className={
                                                isActive ? `${styles.dateItem} ${styles.active}` : `${styles.dateItem}`
                                            }
                                            onClick={() => dispatch(setActive(id))}>
                                            {name}
                                        </div>
                                    )
                                })}
                            </div>
                            <div className={styles.sort_byCategory}>
                                <div
                                    className={styles.byCategoty_text}
                                    style={{
                                        maxWidth: '88%',
                                        fontWeight: '400',
                                        fontSize: '16px',
                                        textAlign: 'center',
                                        marginRight: '20px',
                                        color: '#fff',
                                        paddingLeft: '17px',
                                    }}>
                                    All Categories
                                </div>
                                <Image
                                    className={styles.byCategory_icon}
                                    src={arrowDownSvg}
                                    alt=""
                                    style={{
                                        marginLeft: '3px',
                                        width: '12%',
                                        height: '12%',
                                    }}
                                />
                            </div>
                            <div className={styles.header_tabs}>
                                <div
                                    onClick={() => setIsGrid(true)}
                                    className={`${styles.header_tab} ${isGrid ? styles.activeGrid : ''}`}>
                                    View as Grid
                                </div>
                                <div
                                    onClick={() => setIsGrid(false)}
                                    className={`${styles.header_tab} ${!isGrid ? styles.activeGrid : ''}`}>
                                    View as List
                                </div>
                            </div>
                        </div>
                    </div>
                    {isGrid ? (
                        <>
                            <div className={styles.card_grid}>
                                {[...new Array(16)].map((_, index) => (
                                    <RankingsCard />
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className={`${styles.tables} ${styles.table_body}`}>
                            <div className={styles.table_header}>
                                <div className={styles.table_img}></div>
                                <div className={styles.title_content}>Ranking</div>
                                <div className={styles.tag_content}>Level</div>
                                <div className={styles.level_content}>Categories</div>
                                <div className={styles.listing_content}>The # of Listings</div>
                                <div className={styles.price_content}>Floor Price:</div>
                                <div className={styles.community_content}>Community Size</div>
                                <div className={styles.total_content}>Total Volume</div>
                            </div>
                            <div className={styles.tables_body}>
                                <div className={styles.table_body}>
                                    <Image className={styles.table_img} src={channelImg} alt="" />
                                    <div className={styles.title_content}>
                                        <div className={styles.rang}>Rank 1</div>
                                        <div className={styles.nike}>@Tim.Cooks</div>
                                    </div>
                                    <div className={styles.level_content}>Level 14 Creator</div>
                                    <div className={styles.tag_content}>
                                        <div className={styles.tag}>#ETH-NFT #NFT-Trading #Discord-Tips</div>
                                    </div>
                                    <div
                                        className={styles.listing_content}
                                        style={{
                                            marginLeft: '-140px',
                                        }}>
                                        480/4022
                                    </div>
                                    <div
                                        className={styles.price_content}
                                        style={{
                                            marginLeft: '40px',
                                        }}>
                                        40 NMBL
                                    </div>
                                    <div
                                        className={styles.listing_content}
                                        style={{
                                            marginLeft: '20px',
                                        }}>
                                        6700
                                    </div>
                                    <div
                                        className={styles.price_content}
                                        style={{
                                            marginLeft: '35px',
                                        }}>
                                        144K NMBL
                                    </div>
                                </div>
                                <div className={styles.table_body}>
                                    <Image className={styles.table_img} src={channelImg} alt="" />
                                    <div className={styles.title_content}>
                                        <div className={styles.rang}>Rank 1</div>
                                        <div className={styles.nike}>@Tim.Cooks</div>
                                    </div>
                                    <div className={styles.level_content}>Level 14 Creator</div>
                                    <div className={styles.tag_content}>
                                        <div className={styles.tag}>#ETH-NFT #NFT-Trading #Discord-Tips</div>
                                    </div>
                                    <div
                                        className={styles.listing_content}
                                        style={{
                                            marginLeft: '-140px',
                                        }}>
                                        480/4022
                                    </div>
                                    <div
                                        className={styles.price_content}
                                        style={{
                                            marginLeft: '40px',
                                        }}>
                                        40 NMBL
                                    </div>
                                    <div
                                        className={styles.listing_content}
                                        style={{
                                            marginLeft: '20px',
                                        }}>
                                        6700
                                    </div>
                                    <div
                                        className={styles.price_content}
                                        style={{
                                            marginLeft: '35px',
                                        }}>
                                        144K NMBL
                                    </div>
                                </div>
                                <div className={styles.table_body}>
                                    <Image className={styles.table_img} src={channelImg} alt="" />
                                    <div className={styles.title_content}>
                                        <div className={styles.rang}>Rank 1</div>
                                        <div className={styles.nike}>@Tim.Cooks</div>
                                    </div>
                                    <div className={styles.level_content}>Level 14 Creator</div>
                                    <div className={styles.tag_content}>
                                        <div className={styles.tag}>#ETH-NFT #NFT-Trading #Discord-Tips</div>
                                    </div>
                                    <div
                                        className={styles.listing_content}
                                        style={{
                                            marginLeft: '-140px',
                                        }}>
                                        480/4022
                                    </div>
                                    <div
                                        className={styles.price_content}
                                        style={{
                                            marginLeft: '40px',
                                        }}>
                                        40 NMBL
                                    </div>
                                    <div
                                        className={styles.listing_content}
                                        style={{
                                            marginLeft: '20px',
                                        }}>
                                        6700
                                    </div>
                                    <div
                                        className={styles.price_content}
                                        style={{
                                            marginLeft: '35px',
                                        }}>
                                        144K NMBL
                                    </div>
                                </div>
                                <div className={styles.table_body}>
                                    <Image className={styles.table_img} src={channelImg} alt="" />
                                    <div className={styles.title_content}>
                                        <div className={styles.rang}>Rank 1</div>
                                        <div className={styles.nike}>@Tim.Cooks</div>
                                    </div>
                                    <div className={styles.level_content}>Level 14 Creator</div>
                                    <div className={styles.tag_content}>
                                        <div className={styles.tag}>#ETH-NFT #NFT-Trading #Discord-Tips</div>
                                    </div>
                                    <div
                                        className={styles.listing_content}
                                        style={{
                                            marginLeft: '-140px',
                                        }}>
                                        480/4022
                                    </div>
                                    <div
                                        className={styles.price_content}
                                        style={{
                                            marginLeft: '40px',
                                        }}>
                                        40 NMBL
                                    </div>
                                    <div
                                        className={styles.listing_content}
                                        style={{
                                            marginLeft: '20px',
                                        }}>
                                        6700
                                    </div>
                                    <div
                                        className={styles.price_content}
                                        style={{
                                            marginLeft: '35px',
                                        }}>
                                        144K NMBL
                                    </div>
                                </div>
                                <div className={styles.table_body}>
                                    <Image className={styles.table_img} src={channelImg} alt="" />
                                    <div className={styles.title_content}>
                                        <div className={styles.rang}>Rank 1</div>
                                        <div className={styles.nike}>@Tim.Cooks</div>
                                    </div>
                                    <div className={styles.level_content}>Level 14 Creator</div>
                                    <div className={styles.tag_content}>
                                        <div className={styles.tag}>#ETH-NFT #NFT-Trading #Discord-Tips</div>
                                    </div>
                                    <div
                                        className={styles.listing_content}
                                        style={{
                                            marginLeft: '-140px',
                                        }}>
                                        480/4022
                                    </div>
                                    <div
                                        className={styles.price_content}
                                        style={{
                                            marginLeft: '40px',
                                        }}>
                                        40 NMBL
                                    </div>
                                    <div
                                        className={styles.listing_content}
                                        style={{
                                            marginLeft: '20px',
                                        }}>
                                        6700
                                    </div>
                                    <div
                                        className={styles.price_content}
                                        style={{
                                            marginLeft: '35px',
                                        }}>
                                        144K NMBL
                                    </div>
                                </div>
                                <div className={styles.table_body}>
                                    <Image className={styles.table_img} src={channelImg} alt="" />
                                    <div className={styles.title_content}>
                                        <div className={styles.rang}>Rank 1</div>
                                        <div className={styles.nike}>@Tim.Cooks</div>
                                    </div>
                                    <div className={styles.level_content}>Level 14 Creator</div>
                                    <div className={styles.tag_content}>
                                        <div className={styles.tag}>#ETH-NFT #NFT-Trading #Discord-Tips</div>
                                    </div>
                                    <div
                                        className={styles.listing_content}
                                        style={{
                                            marginLeft: '-140px',
                                        }}>
                                        480/4022
                                    </div>
                                    <div
                                        className={styles.price_content}
                                        style={{
                                            marginLeft: '40px',
                                        }}>
                                        40 NMBL
                                    </div>
                                    <div
                                        className={styles.listing_content}
                                        style={{
                                            marginLeft: '20px',
                                        }}>
                                        6700
                                    </div>
                                    <div
                                        className={styles.price_content}
                                        style={{
                                            marginLeft: '35px',
                                        }}>
                                        144K NMBL
                                    </div>
                                </div>
                                <div className={styles.table_body}>
                                    <Image className={styles.table_img} src={channelImg} alt="" />
                                    <div className={styles.title_content}>
                                        <div className={styles.rang}>Rank 1</div>
                                        <div className={styles.nike}>@Tim.Cooks</div>
                                    </div>
                                    <div className={styles.level_content}>Level 14 Creator</div>
                                    <div className={styles.tag_content}>
                                        <div className={styles.tag}>#ETH-NFT #NFT-Trading #Discord-Tips</div>
                                    </div>
                                    <div
                                        className={styles.listing_content}
                                        style={{
                                            marginLeft: '-140px',
                                        }}>
                                        480/4022
                                    </div>
                                    <div
                                        className={styles.price_content}
                                        style={{
                                            marginLeft: '40px',
                                        }}>
                                        40 NMBL
                                    </div>
                                    <div
                                        className={styles.listing_content}
                                        style={{
                                            marginLeft: '20px',
                                        }}>
                                        6700
                                    </div>
                                    <div
                                        className={styles.price_content}
                                        style={{
                                            marginLeft: '35px',
                                        }}>
                                        144K NMBL
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    )
}

export default RankingsPage
