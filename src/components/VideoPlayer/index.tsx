import styles from './VideoPlayer.module.scss'
import screenfull from 'screenfull'

import {useEffect, useRef, useState} from 'react'
// import VideoPlayerControls from './VideoPlayerControls/VideoPlayerControls'
import VideoPlayerControlsMini from './VideoPlayerControls/VideoPlayerControlsMini'
import VideoPlayerControls from './VideoPlayerControls/VideoPlayerControls'

const videoLinks = [
    'https://storage.googleapis.com/nimbl/NFTs%20and%20the%20%2413B%20marketplace%2C%20explained.mp4',
    'https://storage.googleapis.com/nimbl/652333414.mp4',
]

const VideoPlayer = () => {
    const [currentVideoId, setCurrentVideoId] = useState(0)
    const [stop, setStop] = useState(false)
    const [muted, setMuted] = useState(false)
    const [progress, setProgress] = useState('0%')
    const [volumeProgress, setVolumeProgress] = useState('10%')
    const [currentMinutes, setCurrentMinutes] = useState(0)
    const [currentSeconds, setCurrentSeconds] = useState(0)
    const [durationMinutes, setDurationMinutes] = useState(0)
    const [durationSeconds, setDurationSeconds] = useState(0)
    const [isControllersVisible, setIsControllersVisible] = useState(false)
    const [isFullScreen, setIsFullScreen] = useState(false)

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
        if (videoRef.current?.duration !== undefined)
            setDurationMinutes(Math.floor((videoRef.current?.duration || 0) / 60))
        if (videoRef.current?.duration !== undefined)
            setDurationSeconds(Math.floor((videoRef.current?.duration || 0) - durationMinutes * 60))
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
        // setIsFullScreen(!isFullScreen)
        console.log(screenfull.isFullscreen)
    }

    const handleNextVideo = () => {
        setStop(false)
        if (videoLinks.length < currentVideoId + 2) {
            setCurrentVideoId(0)
            return
        }

        setCurrentVideoId(currentVideoId + 1)
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

    useEffect(() => {
        if (videoRef.current != undefined) {
            videoRef.current.volume = 0.1
            videoRef.current.play()
        }
    }, [])

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
                src={videoLinks[currentVideoId]}
            />

            {(typeof playerRef.current?.clientWidth === 'number' && playerRef.current?.clientWidth > 1000) ||
            (screenfull.isFullscreen && window.innerWidth > 600) ? (
                <VideoPlayerControls
                    setIsFullScreen={setIsFullScreen}
                    handleFullScreen={handleFullScreen}
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
                    playerRef={playerRef}
                    progress={progress}
                    volumeProgress={volumeProgress}
                    togglePlay={togglePlay}
                    handleNextVideo={handleNextVideo}
                />
            ) : (
                <VideoPlayerControlsMini
                    muted={muted}
                    setMuted={setMuted}
                    handleNextVideo={handleNextVideo}
                    stop={stop}
                    togglePlay={togglePlay}
                    handleFullScreen={handleFullScreen}
                />
            )}
        </div>
    )
}

export default VideoPlayer
