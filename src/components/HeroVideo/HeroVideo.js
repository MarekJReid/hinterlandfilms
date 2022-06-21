import React from "react"
import BouncingArrow from "../Bouncing Arrow/BouncingArrow"
import { Video, VideoWrapper } from "./HeroVideo.css"

const HeroVideo = ({ heroMedia }) => {
  return (
    <VideoWrapper>
      <Video autoPlay loop id="myVideo">
        <source src={heroMedia.file.url} type="video/mp4" />
      </Video>
    </VideoWrapper>
  )
}

export default HeroVideo
