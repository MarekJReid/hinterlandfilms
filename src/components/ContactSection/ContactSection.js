import React from 'react'
import { SectionContainer } from '../StyledComponents/containers.css'
import styled from 'styled-components';
import Portrait from './Portrait';
import ContactInfo from './ContactInfo';
const ContactSection = ({profilePhoto, contactText}) => {
  return (
    <SectionContainer style={{height: '100vh', position: 'relative', zIndex: '2', marginTop: '12rem'}} fd="row">
      <Portrait profilePhoto={profilePhoto}/>
      <ContactInfo contactText={contactText}/>
    </SectionContainer>
  )
}

export default ContactSection

