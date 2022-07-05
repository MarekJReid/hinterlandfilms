import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

import { useSpring, animated } from "react-spring"
import { SplitScreenContainer } from "../StyledComponents/containers.css"

const Portrait = ({ environmentImage, yes }) => {
  const right = useSpring({
    config: { duration: 1000 },
    from: { opacity: 0, transform: `translateX(50vw)` },
    to: {
      opacity: 1,

      transform: yes === false ? `translateX(50vw)` : `translateX(0)`,
    }, delay: 0 
  })
  
  return (
    <SplitScreenContainer>

        <animated.div style={right}>
        <GatsbyImage image={getImage(environmentImage)} />
      </animated.div>

    </SplitScreenContainer>
  )
}

export default Portrait
