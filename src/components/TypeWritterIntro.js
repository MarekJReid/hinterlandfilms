import React from "react"
import { Tween } from "react-gsap"

import TypewriterComponent from "typewriter-effect"
import { Char } from "./RandomCharsBackground.js/StyledComponents.css"
import { PageContainer, SectionContainer, TypewritterContainer } from "./StyledComponents/containers.css"

const TypeWritterIntro = () => {
  return (
    <PageContainer absolute>
      <SectionContainer>
        <TypewritterContainer><Tween 
            to={{ opacity: 0 }} delay={5}>
          <Char>
          
            <TypewriterComponent
              options={{
                strings: ["Ignore the noise..."],
                autoStart: true,
                pauseFor: 2000,
                changeDeleteSpeed: 1000,
              }}
            />
         
          </Char>
          </Tween>
        </TypewritterContainer>
      </SectionContainer>
    </PageContainer>
  )
}

export default TypeWritterIntro
