import React from 'react'
import styled from 'styled-components';
import BouncingArrow from '../Bouncing Arrow/BouncingArrow'
import Renderer from '../rich-text-renderers/sample'
import { Heading1, Heading2 } from '../StyledComponents/typography.css'

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

export const HeroContainer = styled.div`
  width: 80%;
 
 display: flex;
 align-items: center;
 flex-direction: column;

  `;

export const HeroIntro = styled.div`

    width: 100%;
display: flex;
justify-content: center;
   margin-top: -20rem;
   z-index: 1000;
 
`;