import React from 'react';
import styles from './Rankings.module.css';
import more from '../../assets/more_icon.svg';
import Image from 'next/image';

const Rankings = () => {
  return (
    <div className={`${styles.rankings_wrapper}`}>
        <div className={`${styles.rankings_container}`}>
            <div className={`${styles.ranking_one} ${styles.ranking}` }>
                <h1>Trending Videos</h1>
                <Image className={`${styles.img}`} src={more} alt=""/>
            </div>
            <div className={`${styles.ranking_two} ${styles.ranking}`}>
                <h1>Trending Videos</h1>
                <Image className={`${styles.img}`} src={more} alt=""/>
            </div>
            <div className={`${styles.ranking_three } ${styles.ranking}`}>
                <h1>Trending Videos</h1>
                <Image className={`${styles.img}`} src={more} alt=""/>
            </div>
            <div className={`${styles.ranking_four} ${styles.ranking}`}>
                <h1>Trending Videos</h1>
                <Image className={`${styles.img}`} src={more} alt=""/>
            </div>
            <div className={`${styles.ranking_five} ${styles.ranking}`}>
                <h1>Trending Videos</h1>
                <Image className={`${styles.img}`} src={more} alt=""/>
            </div>
        </div>
    </div>  
  )
}

export default Rankings;