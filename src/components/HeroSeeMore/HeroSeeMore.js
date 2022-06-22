import React from 'react'
import BouncingArrow from '../Bouncing Arrow/BouncingArrow'
import Renderer from '../rich-text-renderers/sample'
import { HeroContainer, HeroIntro } from '../StyledComponents/containers.css';
import { Heading1, Heading2 } from '../StyledComponents/typography.css.js'

const HeroSeeMore = ({introduction, heading}) => {
  return (
    <HeroIntro>
   <HeroContainer>
   <Heading2 marginTop="sm" >Welcome to</Heading2>
    <Heading1 marginTop="xs">{heading}</Heading1>
    <Renderer node={introduction} color="white"/>
    <Heading2 marginTop="sm" >Click Below To Get In Contact</Heading2>
   <BouncingArrow/>
   </HeroContainer>
   </HeroIntro>
  )
}

export default HeroSeeMore

