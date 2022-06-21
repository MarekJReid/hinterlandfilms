import React from 'react'
import { Video } from './HeroVideo.css'

const HeroVideo = ({heroMedia}) => {
  return (
    <Video autoPlay loop id="myVideo">
    <source  src={heroMedia.file.url} type="video/mp4"/>
  </Video>
  )
}

export default HeroVideo