import React from 'react'
import Layout from '@/components/Layout'
import Rankings from '@/components/Rankings/index'
import LaunchpadCard from '@/components/LaunchpadCard/index'
import styles from './Launchpad.module.scss'

const LaunchpadPage = () => {
    return (
        <Layout>
            {/* <Rankings/> */}
            <div className={`${styles.launchpad_wrapper}`}>
                <div className={`${styles.launchpad_navigation}`}>
                    <div className={`${styles.nav_item}`}></div>
                    <div className={`${styles.nav_item}`}></div>
                    <div className={`${styles.nav_item}`}></div>
                </div>
                <div className={`${styles.launchpad_cards}`}>
                    <LaunchpadCard/>
                </div>
            </div>
        </Layout>

    )
}

export default LaunchpadPage
