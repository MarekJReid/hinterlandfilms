import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { SplitScreenContainer } from '../StyledComponents/containers.css'

const Portrait = ({profilePhoto}) => {
  return (
  <SplitScreenContainer>
    <GatsbyImage 
              image={getImage(profilePhoto)}
            
            
            />
    </SplitScreenContainer>
  )
}

export default Portrait