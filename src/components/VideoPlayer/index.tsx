import styles from './VideoPlayer.module.scss'
import screenfull from 'screenfull'

import {useRef, useState} from 'react'
import VideoPlayerControls from './VideoPlayerControls/VideoPlayerControls'
import VideoPlayerControlsMini from './VideoPlayerControls/VideoPlayerControlsMini'

const VideoPlayer = () => {
    const [stop, setStop] = useState(false)
    const [muted, setMuted] = useState(true)
    const [progress, setProgress] = useState('0%')
    const [volumeProgress, setVolumeProgress] = useState('100%')
    const [currentMinutes, setCurrentMinutes] = useState(0)
    const [currentSeconds, setCurrentSeconds] = useState(0)
    const [durationMinutes, setDurationMinutes] = useState(0)
    const [durationSeconds, setDurationSeconds] = useState(0)
    const [isControllersVisible, setIsControllersVisible] = useState(false)

    const videoRef = useRef<HTMLVideoElement | null>(null)
    const playerRef = useRef<HTMLDivElement | null>(null)

    const updateCurrentTime = () => {
        setCurrentMinutes(Math.floor((videoRef.current?.currentTime || 0) / 60))
        const temp = Math.floor((videoRef.current?.currentTime || 0) - currentMinutes * 60)
        if (temp % 60 < 0) {
            setCurrentSeconds(60 + (temp % 60))
        } else {
            setCurrentSeconds(temp % 60)
        }
    }

    const durationTime = () => {
        setDurationSeconds(Math.floor((videoRef.current?.duration || 0) - durationMinutes * 60))
        setDurationMinutes(Math.floor((videoRef.current?.duration || 0) / 60))
    }

    const togglePlay = () => {
        const method = videoRef.current?.paused && true ? 'play' : 'pause'
        //@ts-ignore
        videoRef.current[method]()
        setStop(method === 'play' ? false : true)
    }

    const handleProgress = () => {
        const percent =
            // @ts-ignore
            (videoRef.current?.currentTime / videoRef.current?.duration) * 100
        setProgress(`${percent}%`)
    }

    const handleFullScreen = () => {
        //@ts-ignore
        screenfull.toggle(playerRef.current)
    }

    const handleKeyDown = (e: any) => {
        if (e.key === 'f') {
            //@ts-ignore
            screenfull.toggle(playerRef.current)
        }
        if (e.keyCode == '37') {
            //@ts-ignore
            videoRef.current.currentTime -= 10
        }
        if (e.keyCode == '39') {
            //@ts-ignore
            videoRef.current.currentTime += 10
        }
        if (e.keyCode == '38') {
            console.log(videoRef.current?.volume)
            //@ts-ignore
            if (videoRef.current?.volume < 0.98) {
                //@ts-ignore
                videoRef.current.volume += 0.02
                //@ts-ignore
                setVolumeProgress(`${videoRef.current.volume * 100}%`)
            }
            setMuted(false)
        }
        if (e.keyCode == '40') {
            //@ts-ignore
            if (videoRef.current?.volume > 0.02) {
                console.log(videoRef.current?.volume)
                //@ts-ignore
                videoRef.current.volume -= 0.02
                //@ts-ignore
                setVolumeProgress(`${videoRef.current.volume * 100}%`)
            } else {
                setMuted(true)
                setVolumeProgress(`0%`)
            }
        }
        if (e.keyCode == '32') {
            togglePlay()
        }
    }

    console.log(playerRef.current?.clientWidth);
    

    return (
        <div
            ref={playerRef}
            className={styles.player}
            onMouseEnter={() => setIsControllersVisible(true)}
            onMouseLeave={() => setIsControllersVisible(false)}
            onKeyDown={handleKeyDown}
            tabIndex={0}>
            <video
                // poster=''
                ref={videoRef}
                width={'100%'}
                height={'100%'}
                autoPlay
                onTimeUpdate={() => {
                    handleProgress()
                    updateCurrentTime()
                    durationTime()
                }}
                onDoubleClick={handleFullScreen}
                onClick={togglePlay}
                muted={muted}
                src="https://storage.cloud.google.com/nimbl/NFTs%20and%20the%20%2413B%20marketplace%2C%20explained.mp4"
            />

            {typeof playerRef.current?.clientWidth === 'number' && playerRef.current?.clientWidth > 1000 ? (
                <VideoPlayerControls
                    currentMinutes={currentMinutes}
                    currentSeconds={currentSeconds}
                    durationMinutes={durationMinutes}
                    durationSeconds={durationSeconds}
                    muted={muted}
                    setMuted={setMuted}
                    stop={stop}
                    setProgress={setProgress}
                    setVolumeProgress={setVolumeProgress}
                    setStop={setStop}
                    isControllersVisible={isControllersVisible}
                    videoRef={videoRef}
                    progress={progress}
                    volumeProgress={volumeProgress}
                />
            ) : (
                <VideoPlayerControlsMini stop={stop}/>
            )}
        </div>
    )
}

export default VideoPlayer
