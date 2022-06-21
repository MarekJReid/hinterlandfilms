import * as React from "react"
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Renderer from "../components/rich-text-renderers/sample"
import Seo from "../components/seo"
import { Heading1, Heading2 } from "../components/StyledComponents/typography.css"
import { MiddleContainer } from "../components/StyledComponents/containers.css"


import GithubIcon from "../images/githubIcon"

const IndexPage = ({ data }) => {



  const { heroTitle, landingHero, introduction } = data.allContentfulHero.edges[0].node

  return (
    <Layout>
      <Seo title="Home" />

      <GatsbyImage image={getImage(landingHero)} alt='boob' />
      <MiddleContainer>
        {/* <Heading1>{heroTitle}</Heading1> */}
        <Renderer node={introduction} />

        <Heading1> Clone repo now</Heading1>
        <a href="http://github.com" target="_blank">
          <GithubIcon height="100" width="100" />
        </a>

    <Heading2 marginTop="lg"> Alternativey you can go to boob<Link to="blogs" style={{ color: `lightgrey`}}> blogs</Link> page to see Contentful and Gatsby in action</Heading2>
      </MiddleContainer>

    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query MyQuery {
  allContentfulHero {
    edges {
      node {
        heroTitle
        introduction {
          raw
        }
        landingHero {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, aspectRatio: 1)
        }
      }
    }
  }
}

`