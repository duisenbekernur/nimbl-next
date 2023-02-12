import Image from 'next/image'
import styles from './RecomendationDropdown.module.scss'

import trendingImg from '../../assets/icons/play2earn.svg'
import plus from '../../assets/icons/plus.svg'

const RecomendationDropdown = () => {
    return (
        <div className={styles.main}>
            <div className={styles.background}>
                <Image src={trendingImg} alt="trending" />
                    <h3>Trending Videos</h3>
                <div className={styles.plus}>
                    <Image src={plus} alt="plus" />
                </div>
            </div>
        </div>
    )
}

export default RecomendationDropdown
