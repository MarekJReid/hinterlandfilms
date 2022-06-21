// import * as React from "react"
// import { graphql, Link } from 'gatsby'
// import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
// import Layout from "../components/layout"
// import Renderer from "../components/rich-text-renderers/sample"
// import Seo from "../components/seo"
// import { Heading1, Heading2 } from "../components/StyledComponents/typography.css"
// import { MiddleContainer, PageContainer, PageWrapper } from "../components/StyledComponents/containers.css"
// import styled from "styled-components"
// import bla from '../images/Octocat.png'
// import GithubIcon from "../images/githubIcon"

// const IndexPage = ({ data }) => {



//   // const { heroTitle, landingHero, introduction } = data.allContentfulHero.edges[0].node

//   return (
//     <Layout>

//       <PageContainer>

//         <Heading1 marginBottom="lg">Blogs</Heading1>


//         <BlogGrid full cols="3">
//           <BlogCard />
//           <BlogCard />
//           <BlogCard />
//         </BlogGrid>

//       </PageContainer>


//     </Layout>
//   )
// }

// export default IndexPage

// export const query = graphql`
// query courses {
//   allContentfulCourse {
//     edges {
//       node {
//         image {
//           gatsbyImageData(aspectRatio: 1, layout: FULL_WIDTH, placeholder: BLURRED)
//           title
//         }
//         duration
//         title
//         slug
//       }
//     }
//   }
// }

// `
// export const BlogGrid = styled.div`
//   width: ${props => (props.full ? "100%" : "74.5%")};
//   // align-self: flex-end;
//   display: grid;
//   grid-template-columns: ${props => `repeat(${props.cols}, 1fr)`};
//   grid-gap: ${props =>
//     props.insta ? props.insta : props.gridGap ? props.gridGap : "1rem"};

//   align-items: center;
//   align-items: start;
//   @media (max-width: 451px) {
//     grid-template-columns: ${props => `repeat(${props.colsMob}, 1fr)`};
//     grid-gap: 2rem 0rem;
//   }
// `

// export const BlogCard = styled.div`
// height: 200px;

// box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
// transition: all 200ms ease-in-out;
// :hover {
//   transform: scale(1.01)
// }
// `