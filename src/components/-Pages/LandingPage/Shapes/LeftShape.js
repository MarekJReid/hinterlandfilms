import React from "react"
import { Tween } from "react-gsap"
import { Heading1 } from "../../../StyledComponents/typography.css"
import { LeftShapeContainer, TextContainer } from "../Landing.css"

const LeftShape = ({pos}) => {
  return (
    <Tween from={{ x: "-80vw" }} duration={1}>
      <LeftShapeContainer pos={pos}>
       <TextContainer>
        <Tween from={{ x: '-200px', opacity: 0 }} stagger={0.2}  delay={0.5}>
        <Heading1 color="white" marginTop="lg">
         Bespoke Online Solutions
        </Heading1>
        <Heading1 color="white" marginTop="lg">
        Taylored to you or your business
        </Heading1>
        <Heading1 color="white" marginTop="lg">
         To get you infront
        </Heading1>
  </Tween>
  </TextContainer>
      </LeftShapeContainer>
    </Tween>
  )
}

export default LeftShape
