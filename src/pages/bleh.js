import React from 'react'
import styled from 'styled-components';
import HeroVideo from '../components/HeroVideo/HeroVideo';
import { graphql, Link } from "gatsby"
import Layout from '../components/layout';
const Bleh = ({data}) => {
    const { heading, heroMedia, introduction } =
    data.allContentfulLandingPageContent.edges[0].node
  return (
    <Layout
    
    >
        <Block box="1">
            <HeroVideo heroMedia={heroMedia}/>
            </Block>
        <Block box="2"/>
        <Block box="3"/>
        <Block box={4}/>

    </Layout>
  )
}

export default Bleh

export const Block = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  background: ${props => {
    switch (props.box) {
      case "1":
        return "blue"
      case "2":
        return "black"
      case "3":
        return "green"
      case "4":
        return "yellow"
      default:
        return "white"
    }
  }};
`;

export const query = graphql`
  query query {
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