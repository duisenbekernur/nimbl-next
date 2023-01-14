import VideoPlayer from '../VideoPlayer'
import styles from './MainSidebar.module.scss'

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <VideoPlayer />
            <div className={styles.recommends}>dwad</div>
        </div>
    )
}

export default Sidebar
