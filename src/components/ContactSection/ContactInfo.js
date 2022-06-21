import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Renderer from "../rich-text-renderers/sample"
import { SplitScreenContainer } from "../StyledComponents/containers.css"
import { Heading1 } from "../StyledComponents/typography.css"
import { ContactInfoContainer } from "./Contact.css"
import ContactForm from "./ContactForm"

const ContactInfo = ({ profilePhoto, contactText }) => {
  return (
    <SplitScreenContainer>
        <ContactInfoContainer>
      <Heading1 marginBottom="sm">
        Let's work together!
      </Heading1>
      <Renderer node={contactText}/>
      <ContactForm/>
      </ContactInfoContainer>
    </SplitScreenContainer>
  )
}

export default ContactInfo
