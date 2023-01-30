import React from 'react';
import styles from './LaunchpadCard.module.css';
import Image from 'next/image';
import icons from './icons';

const LaunchpadCard = () => {
  return (
    <div className={`${styles.launchpad_card}`}>
                <div className={`${styles.card_img}`}>
                    <Image className={`${styles.card_play}`} src={icons[0]} alt=""/>
                </div>
                <div className={`${styles.card_body}`}>
                    <div className={`${styles.card_title}`}>@BlueWard2</div>
                    <div className={`${styles.card_stats}`}>
                        <div className={`${styles.stat_block_one}`}>
                            <div className={`${styles.top}`}>
                                <Image src={icons[1]} alt=""/>
                                <h1 className={`${styles.users_amount}`}>500k</h1>
                            </div>
                            <div className={`${styles.members}`}>members</div>
                        </div>
                        <div className={`${styles.stat_block_two}`}>
                            <div className={`${styles.text_one}`}>134 NMBL</div>
                            <div className={`${styles.text_two}`}>floor price</div>
                        </div>
                    </div>
                    <div className={`${styles.card_text}`}>
                        Build an Evolving NFTs (Pokemon) Web3 
                        App in 15 Minutes! | Custom smart 
                        contract tutorial</div>
                    <div className={`${styles.card_info}`}>
                        <div className={`${styles.date}`}>
                            <h2>Mint date</h2>
                            <h1>01.01.23</h1>
                        </div>
                        <div className={`${styles.card_tags}`}>
                            <div>#ETH-NFT</div>
                            <div>#NFT-Trading</div>
                            <div>#Discord-Tips</div>
                        </div>
                    </div>
                </div>
                <Image className={`${styles.card_corner_bottom}`} src={icons[2]} alt=""/>
                <Image className={`${styles.card_corner_top}`} src={icons[3]} alt=""/>
            </div>
  )
}

export default LaunchpadCard;