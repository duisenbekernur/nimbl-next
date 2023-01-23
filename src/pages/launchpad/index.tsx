import React from 'react';
import styles from './Launchpad.module.css';
import Image from 'next/image'
import live from '../../assets/launchpad_live.svg';
import committed from '../../assets/launchpad_committed.svg';
import mints from '../../assets/launchpad_mints.svg';
import Rankings from '../../components/Rankings/index';
import LaunchpadCard from  '../../components/LaunchpadCard/index';

const Launchpad = () => {
  return (
    <div className={`${styles.launchpad}`}>
        <Rankings/>
        <div className={`${styles.launchpad_navigation}`}>
            <div className={`${styles.navigation_buttons}`}>
                <div className={`${styles.button}`}>
                    <Image alt="" src={live} className={`${styles.button_img}`}/>
                    <h1 className={`${styles.button_title}`}>Live mints</h1>
                </div>
                <div className={`${styles.button}`}>
                    <Image alt="" src={committed} className={`${styles.button_img}`}/>
                    <h1 className={`${styles.button_title}`}>Finished mints</h1>
                </div>
                <div className={`${styles.button}`}>
                    <Image alt="" src={mints} className={`${styles.button_img}`}/>
                    <h1 className={`${styles.button_title}`}>Upcoming mints</h1>
                </div>
            </div>
        </div>
        <div className={`${styles.launchpad_cards}`}>
            <LaunchpadCard/>
            <LaunchpadCard/>
            <LaunchpadCard/>
            <LaunchpadCard/>
        </div>
    </div>
  );
}

export default Launchpad;