import React from "react"
import BouncingArrow from "../Bouncing Arrow/BouncingArrow"
import { Video, VideoWrapper } from "./HeroVideo.css"

const HeroVideo = ({ heroMedia }) => {
  return (

      <Video autoPlay loop >
        <source src={heroMedia.file.url} type="video/mp4" />
      </Video>

  )
}

export default HeroVideo
