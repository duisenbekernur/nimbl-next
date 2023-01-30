import {useState, useEffect, useRef} from 'react'
import Image from 'next/image'
import reactions from './reactions'
import styles from './Reactions.module.css'
import React from 'react'

const useComponentVisible = (initialIsVisible: any) => {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const initialRef: any = null;
    const ref = React.useRef(initialRef);
    const handleClickOutside = (event: { target: any; }) => {
      if(ref.current && !ref.current.contains(event.target)) {
        setIsComponentVisible(false);
      }
    }
    useEffect(() => {
      document.addEventListener('click', handleClickOutside, true);
      return () => {
        document.removeEventListener('click', handleClickOutside, true);
      }
    }, []);
    return {ref, isComponentVisible, setIsComponentVisible};
  }

const Reactions = () => {
    let [isShown, setIsShown] = useState(false);
    const handleClick = () => {
      setIsShown(current => !current);
    }
    return (
    <div className={`${styles.reactions}`}>
                    <Image onClick={handleClick} src={reactions[0]} alt="" className={`${styles.reactions_img}`}/>
                    <Image src={reactions[1]} alt="" className={`${styles.share_img}`}/>
                    {
                      isShown ? (
                        <div className={`${styles.options}`}>
                          <Image src={reactions[2]} alt="" className={`${styles.options_img}`}/>
                          <Image src={reactions[3]} alt="" className={`${styles.options_img}`}/>
                          <Image src={reactions[4]} alt="" className={`${styles.options_img}`}/>
                          <Image src={reactions[5]} alt="" className={`${styles.options_img}`}/>
                          <Image src={reactions[6]} alt="" className={`${styles.options_img}`}/>
                        </div>
                      ) : (<></>)
                    }
                  </div>
  )
}

export default Reactions