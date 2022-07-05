import React, { useRef, useEffect, useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

import HeroVideo from "../components/HeroVideo/HeroVideo"
import HeroSeeMore from "../components/HeroSeeMore/HeroSeeMore"
import ContactSection from "../components/ContactSection/ContactSection"
import EnvironmentInfo from "../components/EnvironmentSection/EnvironmentSection"

const IndexPage = ({ data }) => {
  const [contactTop, setContactTop] = React.useState()

  const { heading, heroMedia, introduction, profilePhoto, contactText, environmentText, environmentImage } =
    data.allContentfulLandingPageContent.edges[0].node
  const [scrollToPos, setScrollToPos] = useState(0)
  const contactDiv = useRef()

  useEffect(() => {
    const el2 = contactDiv.current
    setScrollToPos(el2.offsetTop) // 👈️ element here
  }, [])

  return (
    <Layout>
      <Seo title="Home" />

      <HeroVideo heroMedia={heroMedia} />

      <HeroSeeMore
        heading={heading}
        heroMedia={heroMedia}
        introduction={introduction}
        scrollToPos={scrollToPos}
      />
      <EnvironmentInfo environmentImage={environmentImage} environmentText={environmentText} />
      <div ref={contactDiv}>
        <ContactSection profilePhoto={profilePhoto} contactText={contactText} />
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    allContentfulLandingPageContent {
      edges {
        node {
          introduction {
            raw
          }
          heading
          heroMedia {
            title
            file {
              url
            }
          }
          contactText {
            raw
          }
          profilePhoto {
            title
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
          environmentText {
            raw
          }
          environmentImage {
            title
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
