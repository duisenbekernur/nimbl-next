import Image from 'next/image'
import styles from './RecomendationDropdown.module.scss'
import img from '@/assets/dropdown/eth.png'
import plus from '../../assets/icons/plus.svg'

const RecomendationDropdown = (props:any) => {
    return (
        <div className={styles.main}>
            <div className={styles.background}>
                <Image src={img} alt="trending" />
                    <h3>Trending Videos</h3>
                <div className={styles.plus}>
                    <Image src={plus} alt="plus" />
                </div>
            </div>
        </div>
    )
}

export default RecomendationDropdown
