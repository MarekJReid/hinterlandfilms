import React from "react"
import BouncingArrow from "../Bouncing Arrow/BouncingArrow"
import Renderer from "../rich-text-renderers/sample"
import { HeroContainer, HeroIntro } from "../StyledComponents/containers.css"
import { Heading1, Heading2 } from "../StyledComponents/typography.css.js"
import { useSpring, animated } from "react-spring"
const HeroSeeMore = ({ introduction, heading, scrollToPos }) => {
  const intro = useSpring({
    config: { duration: 500 },
    from: {
      opacity: 0,
      justifyContent: `center`,
      alignItems: `centers`,
      display: `flex`,
    },
    to: {
      opacity: 1,
    },
  })
  const scrollToSection = () => {
    window.scrollTo({
      top: scrollToPos + 400,
      behavior: "smooth",
    })
  }
  return (
    <>
      <HeroIntro>
        <animated.div style={intro}>
          <HeroContainer>
            <Heading2 marginTop="sm">Welcome to</Heading2>
            <Heading1 marginTop="xs">{heading}</Heading1>
            <Renderer node={introduction} color="white" />
            <Heading2 marginTop="sm">Click Below To Get In Contact</Heading2>
            <BouncingArrow
              scrollToPos={scrollToPos}
              onClick={() => scrollToSection()}
            />
          </HeroContainer>
        </animated.div>
      </HeroIntro>
    </>
  )
}

export default HeroSeeMore
