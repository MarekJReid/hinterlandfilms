import React from "react"
import { Tween } from "react-gsap"
import { RightShapeContainer } from "../Landing.css"
import {Heading1} from '../../../StyledComponents/typography.css'
const RightShape = ({pos}) => {
  return (
    <Tween from={{ x: "40vw"}} duration={1}>
<RightShapeContainer pos={pos}>

</RightShapeContainer>
</Tween>
  )
}

export default RightShape
