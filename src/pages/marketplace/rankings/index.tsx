import React, { useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { setActive } from '@/store/features/rankings-filter/filter'
import RecomendationDropdown from '@/components/RecomendationDropdown'
import Head from 'next/head'
import RankingsCard from '@/components/RankingsCard'
import MarketplaceButton from '@/components/UI/MarketplaceButton'

const RankingsPage = () => {
    const [isGridActive, setIsGridActive] = useState(true)
    const [activeButtonId, setActiveButtonId] = useState(0)

    const dispatch = useDispatch()
    const { time } = useSelector((store: RootState) => store.filter)
    console.log(time)
    return (
        <>
            <Head>
                <title>Rankings</title>
            </Head>
            <div className={styles.table_content}>
                <div className={styles.mainContainer}>
                    <RecomendationDropdown />
                    <RecomendationDropdown />
                    <RecomendationDropdown />
                    <RecomendationDropdown />
                </div>
                <div className={styles.table_inner}>
                    <div className={styles.table_content_inner}>
                        <div className={styles.sidebar_sort}>
                            <div className={styles.sort_byCategory}>
                                <Image
                                    className={styles.byCategory_svg}
                                    src={categorySvg}
                                    alt=""
                                />
                                <div className={styles.byCategory_text}>
                                    Top Creators
                                </div>
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
                                    const { id, name, isActive } = item
                                    return (
                                        <div
                                            key={id}
                                            className={
                                                isActive
                                                    ? `${styles.dateItem} ${styles.active}`
                                                    : `${styles.dateItem}`
                                            }
                                            onClick={() =>
                                                dispatch(setActive(id))
                                            }
                                        >
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
                                    }}
                                >
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
                                    className={styles.header_tab}
                                    onClick={() => {
                                        setIsGridActive(true)
                                        setActiveButtonId(0)
                                    }}
                                >
                                    <MarketplaceButton
                                        imgPath=""
                                        text="View as Grid"
                                        isActive={activeButtonId === 0}
                                    />
                                </div>
                                <div
                                    className={styles.header_tab}
                                    onClick={() => {
                                        setIsGridActive(false)
                                        setActiveButtonId(1)
                                    }}
                                >
                                    <MarketplaceButton
                                        imgPath=""
                                        text="View as List"
                                        isActive={activeButtonId === 1}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.card_main}>
                    {isGridActive
                        ? [...new Array(24)].map((_, index) => (
                              <div key={index} className={styles.ranking_boxs}>
                                  <div className={styles.card_loop}>
                                      <RankingsCard />
                                  </div>
                              </div>
                          ))
                        : null}
                </div>
            </div>
        </>
    )
}

export default RankingsPage
