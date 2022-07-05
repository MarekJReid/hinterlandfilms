import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Renderer from "../rich-text-renderers/sample"
import {
  SplitScreenContainer,
  ContactInfoContainer,
} from "../StyledComponents/containers.css"
import { Heading1 } from "../StyledComponents/typography.css"
import { useSpring, animated } from "react-spring"

import styled from "styled-components"
const EnvironmentInfoSection = ({ environmentText, yes }) => {
  const right = useSpring({
    config: { duration: 1000 },
    from: { opacity: 0, transform: `translateX(-50vw)` },
    to: {
      opacity: 1,

      transform: yes === false ? `translateX(-50vw)` : `translateX(0)`,
    }, delay: 0 
  })
 
  return (
    <SplitScreenContainer>
      <animated.div style={right}>
        <AnimatedBox>
          <Heading1 marginBottom="sm">Environmentally Friendly Approach</Heading1>
          <Renderer node={environmentText} />
      
        </AnimatedBox>
      </animated.div>
    </SplitScreenContainer>
  )
}

export default EnvironmentInfoSection
export const AnimatedBox = styled(animated.div)`
  width: 100%;
  height: 100%;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
