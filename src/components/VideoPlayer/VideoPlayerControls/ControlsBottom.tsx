import React, {FC, useRef, useState} from 'react'
import Image from 'next/image'
import styles from './../VideoPlayer.module.scss'
import screenfull from 'screenfull'

import avatarIcon from '@/assets/avatar.png'
import videoGalleryIcon from '@/assets/svg_icons/video_gallery.svg'
import airplayIcon from '@/assets/svg_icons/airplay.svg'
import pauseIcon from '@/assets/svg_icons/pause.svg'
import fullIcon from '@/assets/svg_icons/fullscreen.svg'
import playIcon from '@/assets/svg_icons/play.svg'
import volumeIcon from '@/assets/svg_icons/high_volume.svg'
import muteIcon from '@/assets/svg_icons/low_volume.svg'
import commentIcon from '@/assets/svg_icons/comment.svg'
import futuresIcon from '@/assets/svg_icons/futures.svg'
import subtitleIcon from '@/assets/svg_icons/subtitles.svg'
import settingsIcon from '@/assets/svg_icons/settings2.svg'
import endIcon from '@/assets/svg_icons/end.svg'

type VideoPlayerControlsBottomType = {
    handleNextVideo: () => void
    currentMinutes: number
    currentSeconds: number
    durationMinutes: number
    durationSeconds: number
    muted: boolean
    stop: boolean
    progress: string
    volumeProgress: string
    togglePlay: () => void
    setMuted: (x: boolean) => void
    setProgress: (x: string) => void
    setVolumeProgress: (x: string) => void
    setStop: (x: boolean) => void
    isControllersVisible: boolean
    handleFullScreen: () => void
    videoRef: React.RefObject<HTMLVideoElement>
    playerRef: React.RefObject<HTMLDivElement>
}

const ControlsBottom: FC<VideoPlayerControlsBottomType> = ({
    handleNextVideo,
    currentMinutes,
    currentSeconds,
    durationMinutes,
    durationSeconds,
    muted,
    stop,
    progress,
    volumeProgress,
    togglePlay,
    setMuted,
    setProgress,
    setVolumeProgress,
    isControllersVisible,
    videoRef,
    handleFullScreen,
}) => {
    const [toggleSettings, setToggleSettings] = useState(false)

    const volumeRef = useRef<HTMLDivElement | null>(null)

    const getCurrentTime = () => {
        return `${currentMinutes < 10 ? '0' : ''}${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`
    }

    const getDurationTime = () => {
        return `${durationMinutes < 10 ? '0' : ''}${durationMinutes}:${
            durationSeconds < 10 ? '0' : ''
        }${durationSeconds}`
    }

    const scrub = (e: any) => {
        const scrubTime =
            (e.nativeEvent.offsetX / (videoRef?.current?.clientWidth || 1)) * (videoRef?.current?.duration || 0)
        if (!isNaN(scrubTime)) {
            //@ts-ignore
            videoRef.current.currentTime = scrubTime
        }
    }

    const handleProgress = () => {
        const percent =
            // @ts-ignore
            (videoRef.current?.currentTime / videoRef.current?.duration) * 100
        setProgress(`${percent}%`)
    }

    const handleProgressVolume = (e: any) => {
        const percent = (e.nativeEvent.offsetX / (volumeRef?.current?.clientWidth || 0)) * 100
        setVolumeProgress(`${percent}%`)
        setMuted(percent === 0)
        if (muted && percent === 0) setVolumeProgress('1%')
        //@ts-ignore
        videoRef.current.volume = percent / 100
    }

    return (
        <>
            <div
                className={styles.bottom_opacity}
                style={{
                    opacity: isControllersVisible ? '.5 ' : '0',
                    transition: '.3s all',
                }}></div>
            <div
                className={styles.player_controller_bottom}
                style={{
                    opacity: isControllersVisible ? '1' : '0',
                    transition: '.3s all',
                }}>
                <div className={styles.player_controller_bottom_comments}>
                    <Image src={avatarIcon} width={150} height={150} alt="avatar" />
                    <div className={styles.player_controller_bottom_comments_text}>
                        <p>This is incredible, can’t wait to use...</p>
                        <span>9:57</span>
                    </div>
                </div>

                <div className={styles.player_controller_bottom_likes}>
                    <span>
                        <Image src={videoGalleryIcon} alt="video gallery" />5 304
                    </span>
                    <span>
                        <Image src={commentIcon} alt="comment" />1 212
                    </span>
                    <span>
                        <Image src={futuresIcon} alt="future" />
                        17 349
                    </span>
                </div>

                <div
                    className={styles.progress}
                    // onMouseMove={(e) => isMouseDown && scrub(e)}
                    onClick={(e) => {
                        scrub(e)
                        handleProgress()
                    }}>
                    <div className={styles.progress__filled} style={{width: progress}}></div>
                </div>

                <div className={styles.bottom_opacity_content}>
                    <div className={styles.player_controller_bottom_volume_row}>
                        <Image src={!stop ? pauseIcon : playIcon} alt="pause" onClick={togglePlay} />
                        <Image src={endIcon} width={25} height={stop ? 18 : 29} alt="pause" onClick={handleNextVideo} />
                        <div className={styles.volume_progress}>
                            <Image src={muted ? muteIcon : volumeIcon} alt="volume" onClick={() => setMuted(!muted)} />
                            <div
                                ref={volumeRef}
                                className={styles.progress}
                                onClick={(e) => {
                                    handleProgressVolume(e)
                                }}>
                                <div className={styles.progress__filled} style={{width: volumeProgress}}></div>
                            </div>
                            <p>{getCurrentTime()}</p>
                        </div>
                    </div>

                    <div className={styles.bottom_right}>
                        <p>{getDurationTime()}</p>
                        <div>
                            <Image src={airplayIcon} alt="settings" />
                        </div>
                        <div>
                            <Image
                                src={settingsIcon}
                                alt="settings"
                                onClick={() => setToggleSettings(!toggleSettings)}
                            />
                        </div>
                        <div>
                            <Image src={subtitleIcon} alt="subtitle" />
                        </div>
                        <Image src={fullIcon} alt="full screen" onClick={handleFullScreen} />
                    </div>
                </div>
            </div>

            <div className={styles.settings_menu} style={{display: !toggleSettings ? 'none' : ''}}>
                <span>
                    <p>Subtitles</p>
                    <h6>Off</h6>
                </span>
                <span>
                    <p>Video speed</p>
                    <h6>1x</h6>
                </span>
                <span>
                    <p>Video quality</p>
                    <h6>Auto (480p)</h6>
                </span>
            </div>
        </>
    )
}

export default ControlsBottom
