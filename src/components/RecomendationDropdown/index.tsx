import Image from 'next/image'
import styles from './RecomendationDropdown.module.scss'

import trendingImg from '../../assets/dropdown/trending.png'
import plus from '../../assets/icons/plus.svg'

const RecomendationDropdown = () => {

    return (
        <div className={styles.main}>
            <Image src={trendingImg} alt="trending" />
            <div>
                <h3>Trending Videos</h3>
            </div>
            <Image className={styles.plus} src={plus} alt="plus" />
        </div>
    )
}

export default RecomendationDropdown
