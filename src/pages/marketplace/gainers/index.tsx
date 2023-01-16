import Image from 'next/image'
import RecomendationDropdown from '@/components/RecomendationDropdown'

import styles from '../../../styles/Gainers.module.scss'

import arrowBottomImg from '../../../assets/icons/arrow-right-bottom.svg'
import arrowTopImg from '../../../assets/icons/arrow-right-top.svg'
import profile from '../../../assets/icons/profile.svg'

const GainersPage = () => {
    return (
        <div className={styles.gainer}>
            <div className={styles.dropdowns}>
                <RecomendationDropdown />
                <RecomendationDropdown />
                <RecomendationDropdown />
                <RecomendationDropdown />
            </div>

            <div className={styles.content}>
                <div className={styles.content_buttons}>
                    <div>
                        <Image src={arrowTopImg} alt="arrow" />
                        <button>Top gainers</button>
                    </div>
                    <div>
                        <Image src={arrowBottomImg} alt="arrow" />
                        <button>Top loosers</button>
                    </div>
                </div>
            </div>

            <div className={styles.table}>
                <div className={styles.table_header}>
                    <p>#</p>
                    <p>Name</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p>Volume(24h)</p>
                </div>

                <div className={styles.table_row}>
                    <p>1</p>
                    <div>
                        <Image src={profile} alt="logo" /> Bankless
                    </div>
                    <p>204 NMBL</p>
                    <p>+24.6%</p>
                    <p>$7 123 422</p>
                </div>
            </div>
        </div>
    )
}

export default GainersPage