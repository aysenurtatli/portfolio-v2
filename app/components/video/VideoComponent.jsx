'use client'
import { useEffect, useRef } from 'react'
import styles from './video.module.css';
const VideoComponent = () => {


    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            const playVideo = async () => {
                try {
                    if (video.paused) {
                        await video.play();
                    }
                } catch (error) {
                    console.error("Video oynatılırken bir hata oluştu:", error);
                }
            };

            const handlePause = () => {
                playVideo();
            };

            const handleFullscreen = (e) => {
                e.preventDefault();
                return false;
            };

            playVideo();
            video.playbackRate = 0.5;

            video.addEventListener('pause', handlePause);
            video.addEventListener('fullscreenchange', handleFullscreen);

            return () => {
                video.removeEventListener('pause', handlePause);
                video.removeEventListener('fullscreenchange', handleFullscreen);
            };
        }
    }, []);
    return (
        <div id='videoWrapper' className='flex items-center justify-center pointer-events-none rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] max-w-full relative'>
            <video ref={videoRef} id='homeVideo' muted preload="auto" className="w-full h-full rounded-full object-cover bg-transparent" >
                <source src="/video.mp4"  />
            </video>
        </div>
    )
}

export default VideoComponent