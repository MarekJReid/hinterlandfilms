import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Renderer from "../rich-text-renderers/sample"
import {
  SplitScreenContainer,
  ContactInfoContainer,
} from "../StyledComponents/containers.css"
import { Heading1 } from "../StyledComponents/typography.css"
import { useSpring, animated } from "react-spring"
import ContactForm from "./ContactForm"
import styled from "styled-components"
const ContactInfo = ({ contactText, yes }) => {
    const right = useSpring({
        config: { duration: 1000, },
        from: { opacity: 0, transform: `translateY(50vw)` },
        to: {
          opacity: 1,
    
          transform: yes === false ? `translateY(50vw)` : `translateY(0)`,
        },
       
      })
  console.log("headerStyle")
  return (
    <SplitScreenContainer>
      <animated.div style={right}>
        <AnimatedBox>
          <Heading1 marginBottom="sm">Let's work together!</Heading1>
          <Renderer node={contactText} />
          <ContactForm />
        </AnimatedBox>
      </animated.div>
    </SplitScreenContainer>
  )
}

export default ContactInfo
export const AnimatedBox = styled(animated.div)`
  width: 100%;
  height: 100%;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
