import * as React from "react"
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Renderer from "../components/rich-text-renderers/sample"
import Seo from "../components/seo"
import { Heading1, Heading2 } from "../components/StyledComponents/typography.css"
import { MiddleContainer } from "../components/StyledComponents/containers.css"
import { Video } from 'gatsby-video'

import GithubIcon from "../images/githubIcon"
import HeroVideo from "../components/HeroVideo/HeroVideo"

const IndexPage = ({ data }) => {



  const { heading, heroMedia, introduction } = data.allContentfulLandingPageContent.edges[0].node
console.log('data', data)
  return (
    <Layout>
      <Seo title="Home" />

    <HeroVideo heroMedia={heroMedia}/>
   
    
      <Heading1>{heading}</Heading1>bla bla
        <Renderer node={introduction} />bla bla
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
      }
    }
  }
}


`