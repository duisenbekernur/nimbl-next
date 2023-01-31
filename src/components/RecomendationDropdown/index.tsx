import Image from 'next/image'
import styles from './RecomendationDropdown.module.scss'

import trendingImg from '../../assets/trending_videos.png'
import cryptonewsImg from '../../assets/crypto_news.png'
import nft from '../../assets/eth_nft.png'
import play2earn from '../../assets/play_to_earn.png'
import plus from '../../assets/icons/plus.svg'

const RecomendationDropdown = (props:any) => {
    return (
        <div className={styles.main}>
            <div className={styles.background}>
                <Image src={props.srcImg} alt="trending" />
                <div>
                    <h3>{props.title}</h3>
                </div>
                <div className={styles.plus}>
                    <Image src={plus} alt="plus" />
                </div>
            </div>

            <div className={styles.sub_categories}>
                <div className={styles.sub_categories_item}>
                    <Image src={cryptonewsImg} alt="trending" />
                    <div>
                        <h3>Crypto News</h3>
                    </div>
                </div>
                <div className={styles.sub_categories_item}>
                    <Image src={nft} alt="trending" />
                    <div>
                        <h3>ETH NFTs</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecomendationDropdown
