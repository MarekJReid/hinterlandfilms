import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

import { useSpring, animated } from "react-spring"
import { SplitScreenContainer } from "../StyledComponents/containers.css"

const Portrait = ({ profilePhoto, yes }) => {
  const left = useSpring({
    config: { duration: 300 },
    from: { opacity: 0, transform: `translateX(-200px)` },
    to: {
      opacity: 1,

      transform: yes === false ? `translateX(-200px)` : `translateX(0)`,
    }, delay: 100 
  })
  
  return (
    <SplitScreenContainer>

        <animated.div style={left}>
        <GatsbyImage image={getImage(profilePhoto)} />
      </animated.div>

    </SplitScreenContainer>
  )
}

export default Portrait
