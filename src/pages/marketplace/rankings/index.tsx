import React from 'react'
import categorySvg from '../../../assets/icons/top-creator-icon.svg';
import arrowDownSvg from '../../../assets/icons/arrow_down.svg';
import Image from 'next/image';
import styles from '../rankings/Rankings.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setActive } from '@/store/features/rankings-filter/filter';

const RankingsPage = () => {
    const dispatch = useDispatch();
    const{time} = useSelector((store :RootState)=> store.filter)
    console.log(time)
  return (
    <div className={styles.table_content}>
        <div className={styles.table_inner}>
            <div className={styles.table_content_inner}>
                <div className={styles.sidebar_sort}>
                    <div className={styles.sort_byCategory}>
                        <Image className={styles.byCategory_svg} src={categorySvg} alt=""/>
                        <div className={styles.byCategory_text}>Top Creators</div>
                        <Image className={styles.byCtegory_icon} src={arrowDownSvg} alt="" />
                    </div>
                    <div className={styles.sortByDate}>
                        {time.map((item) => { 
                            const{id, name, isActive} = item;
                            return (<div key={ id } className={ isActive ? `${ styles.dateItem } ${ styles.active }` : `${ styles.dateItem }`} onClick={ () => dispatch(setActive(id))}>{name}</div>)
                         })}
                    </div>
                    <div className={styles.sort_byCategory}>
                        <div className={styles.byCategoty_text} style={{
                            fontWeight: '400',
                            fontSize: '16px',
                            textAlign: 'center',
                            marginRight: '15px',
                            color: '#fff'
                        }}>All Categories</div>
                        <Image className={styles.byCategory_icon} src={arrowDownSvg} alt="" />
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default RankingsPage