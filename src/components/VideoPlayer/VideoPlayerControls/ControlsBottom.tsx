import {likeSolid} from '@/assets/icons'
import Image from 'next/image'
import styles from './../VideoPlayer.module.scss'
import screenfull from 'screenfull'

import stopIcon from '@/assets/icons/stop.svg'
import playIcon from '@/assets/icons/play.svg'
import volumeIcon from '@/assets/icons/volume.png'
import muteIcon from '@/assets/icons/mute.svg'
import surprizeIcon from '@/assets/icons/surprize.png'
import donateIcon from '@/assets/icons/donate.png'
import subtitleIcon from '@/assets/icons/subs.png'
import settingsIcon from '@/assets/icons/settings.png'
import fullIcon from '@/assets/icons/full_screen.png'
import {FC, useRef, useState} from 'react'

type VideoPlayerControlsBottomType = {
    currentMinutes: number
    currentSeconds: number
    durationMinutes: number
    durationSeconds: number
    muted: boolean
    stop: boolean
    progress: string
    volumeProgress: string
    setMuted: (x: boolean) => void
    setProgress: (x: string) => void
    setVolumeProgress: (x: string) => void
    setStop: (x: boolean) => void
    isControllersVisible: boolean
    videoRef: React.RefObject<HTMLVideoElement>
}

const ControlsBottom: FC<VideoPlayerControlsBottomType> = ({
    currentMinutes,
    currentSeconds,
    durationMinutes,
    durationSeconds,
    muted,
    stop,
    progress,
    volumeProgress,
    setMuted,
    setProgress,
    setVolumeProgress,
    setStop,
    isControllersVisible,
    videoRef,
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

    const togglePlay = () => {
        const method = videoRef.current?.paused && true ? 'play' : 'pause'
        //@ts-ignore
        videoRef.current[method]()
        setStop(method === 'play' ? false : true)
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

    const handleFullScreen = () => {
        //@ts-ignore
        screenfull.toggle(playerRef.current)
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
                <div className={styles.player_controller_bottom_likes}>
                    <span>
                        <Image width={20} height={20} src={likeSolid} alt="like" />5 324
                    </span>
                    <span>
                        <Image width={20} height={20} src={surprizeIcon} alt="like" />5 324
                    </span>
                    <span>
                        <Image width={20} height={20} src={donateIcon} alt="like" />5 324
                    </span>
                </div>

                <div className={styles.bottom_opacity_content}>
                    <div className={styles.player_controller_bottom_volume_row}>
                        <Image
                            src={stop ? stopIcon : playIcon}
                            width={25}
                            height={stop ? 18 : 29}
                            alt="pause"
                            onClick={togglePlay}
                        />
                        <div className={styles.volume_progress}>
                            <Image
                                src={muted ? muteIcon : volumeIcon}
                                height={muted ? 40 : 20}
                                alt="volume"
                                onClick={() => setMuted(!muted)}
                            />
                            <div
                                ref={volumeRef}
                                className={styles.progress}
                                onClick={(e) => {
                                    handleProgressVolume(e)
                                }}>
                                <div className={styles.progress__filled} style={{width: volumeProgress}}></div>
                            </div>
                            {getCurrentTime()}
                        </div>
                    </div>

                    <div className={styles.bottom_right}>
                        <p>{getDurationTime()}</p>
                        <div>
                            <Image src={subtitleIcon} alt="subtitle" />
                        </div>
                        <div>
                            <Image
                                src={settingsIcon}
                                alt="settings"
                                onClick={() => setToggleSettings(!toggleSettings)}
                            />
                        </div>
                        <Image src={fullIcon} alt="full screen" onClick={handleFullScreen} />
                    </div>
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
