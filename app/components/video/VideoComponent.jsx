'use client'
import { useEffect, useRef } from 'react'

const VideoComponent = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.playbackRate = 0.5
    }
  }, [])

  return (
    <div
      id="videoWrapper"
      className="flex items-center justify-center rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] max-w-full relative"
    >
      <video
        ref={videoRef}
        id="homeVideo"
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        className="w-full h-full rounded-full object-cover"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default VideoComponent
