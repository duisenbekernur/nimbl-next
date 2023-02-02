import React from 'react'
import styles from './Slider.module.css'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { IconContext } from 'react-icons'

const Slidernav = () => {
    return (
        <div className={`${styles.wrapper}`}>
            <div className={`${styles.pagination} ${styles.first}`}>
                <h1 className={`${styles.numbers}`}>
                    <span className={`${styles.number} ${styles.first}`}>
                        01
                    </span>
                    /
                    <span className={`${styles.number} ${styles.second}`}>
                        20
                    </span>
                </h1>
            </div>
            <div className={`${styles.pagination} ${styles.second}`}>
                <IconContext.Provider
                    value={{
                        color: 'white',
                        size: '30px',
                        className: `${styles.arrows}`,
                    }}
                >
                    <IoIosArrowBack style = {{cursor: "pointer", marginRight: "5px"}}/>
                    <IoIosArrowForward  style = {{cursor: "pointer"}}/>
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default Slidernav
