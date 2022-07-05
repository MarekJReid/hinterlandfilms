import React, { useState } from "react"
import { Timeline, Tween } from "react-gsap"
import useScrollPosition from "../../hooks/ScrollPosition"
import { Char } from "../../RandomCharsBackground.js/StyledComponents.css"
import { PageContainer } from "../../StyledComponents/containers.css"
import { ShapesContainer } from "./Landing.css"
import RightLine from "./Navigation/RightLine"
import LeftShape from "./Shapes/LeftShape"
import RightShape from "./Shapes/RightShape"

const Landing = () => {
  const [slide, setSlide] = useState(0)
  const [pos, setPos] = useState(0)

  const changeEls = e => {
    e.preventDefault()
    e.deltaY > pos ? setPos(pos + 1) : setPos(pos - 1)
  }

  console.log("pos", pos)
  return (
    //animation deets for intro from={{ opacity: 0 }} delay={5} below
    <Tween>
      <PageContainer absolute background="blue">
        <ShapesContainer onWheel={e => changeEls(e)}>
          <LeftShape pos={pos} slide={slide}/>
          <RightShape pos={pos} slide={slide}/>
        </ShapesContainer>
        <RightLine />
      </PageContainer>
    </Tween>
  )
}

export default Landing
