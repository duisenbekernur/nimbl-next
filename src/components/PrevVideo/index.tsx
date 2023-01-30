import React from 'react'
import styles from './PrevVideo.module.scss'
const index = () => {
    return (
        <div className={styles.container}>
            <video
                width="50%"
                height="50%"
                muted
                loop
                controls={false}
                autoPlay
            >
                <source src="/video_preview.mp4" type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default index
