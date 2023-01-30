import VideoPlayer from '@/components/VideoPlayer'
import styles from '@/styles/Settings.module.scss'

const SettingsPage = () => {
    return (
        <div className={styles.settings}>
            <VideoPlayer />
        </div>
    )
}

export default SettingsPage
