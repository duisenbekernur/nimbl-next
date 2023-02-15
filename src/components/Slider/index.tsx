import React from 'react';
import styles from './Slider.module.css';
import {IoIosArrowBack} from 'react-icons/io';
import {IoIosArrowForward} from 'react-icons/io';
import { IconContext } from "react-icons";

const Slider = () => {
  return (
    <div className={`${styles.slider}`}>
        <div className={`${styles.slider_pagination}`}>
            <div className={`${styles.page_num}`}>
                <div className={`${styles.first}`}><span>01 /</span></div>
                <div className={`${styles.second}`}><span>20</span></div>
            </div>
            <div className={`${styles.navigation}`}>
                <IconContext.Provider value={{color: "white", size: "2.5em"}}>
                    <IoIosArrowBack className={`${styles.arrow}`}/>
                    <IoIosArrowForward className={`${styles.arrow}`}/>
                </IconContext.Provider>
            </div>
        </div>
    </div>
  )
}

export default Slider;