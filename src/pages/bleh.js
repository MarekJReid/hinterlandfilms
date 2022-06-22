import React, {useState} from "react"
import styled from "styled-components"
import HeroVideo from "../components/HeroVideo/HeroVideo"
import { keyframes } from "styled-components"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
const Bleh = ({ data }) => {
  const { heading, heroMedia, introduction } =
    data.allContentfulLandingPageContent.edges[0].node
    const [center, setCenter] = useState(false)
  //how to display random sized items on a grid randomly

  return (
    <Layout>
       <Button onClick={()=> setCenter(!center)}>
        hide
      </Button>
      <Container>
     
        <Block box="1" center></Block>
        <Block
          center={center}
          box="2"
          margin={`${Math.floor(Math.random() * 100)}px`}
          dims={`${Math.floor(Math.random() * 200)}px`}
        />
        <Block
          center={center}
          box="3"
          margin={`${Math.floor(Math.random() * 100)}px`}
          dims={`${Math.floor(Math.random() * 200)}px`}
        />
        <Block
          center={center}
          box="4"
          margin={`${Math.floor(Math.random() * 100)}px`}
          dims={`${Math.floor(Math.random() * 200)}px`}
        />
        <Block
          center={center}
          box="1"
          margin={`${Math.floor(Math.random() * 100)}px`}
          dims={`${Math.floor(Math.random() * 200)}px`}
        ></Block>
        <Block
          center={center}
          box="2"
          margin={`${Math.floor(Math.random() * 100)}px`}
          dims={`${Math.floor(Math.random() * 200)}px`}
        />
        <Block
          center={center}
          box="3"
          margin={`${Math.floor(Math.random() * 100)}px`}
          dims={`${Math.floor(Math.random() * 200)}px`}
        />
        <Block
          center
          box="4"
          margin={`${Math.floor(Math.random() * 100)}px`}
          dims={`${Math.floor(Math.random() * 200)}px`}
        />
        <Block
          center={center}
          box="2"
          margin={`${Math.floor(Math.random() * 100)}px`}
          dims={`${Math.floor(Math.random() * 200)}px`}
        />
        <Block
          center={center}
          box="3"
          margin={`${Math.floor(Math.random() * 100)}px`}
          dims={`${Math.floor(Math.random() * 200)}px`}
        />
        <Block
          center={center}
          box="4"
          margin={`${Math.floor(Math.random() * 100)}px`}
          dims={`${Math.floor(Math.random() * 200)}px`}
        />
       
      </Container>
    </Layout>
  )
}

export default Bleh



export const centerItems = keyframes`
0% 
   100% {
    justify-content:
  }
`

export const Button = styled.div`
  height: 6rem;
  padding: 1rem;
  justify-content: center;
  display: flex;
  align-items: center;
  width: 12rem;
  background: blue;
  color: white;
  font-size: 2rem;
  border-radius: 12px;
  
`;
export const Container = styled.div`
  background: pink;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: space-around;
  padding: 5rem;
  transition: all 0.5s ease-in-out;
`

export const Block = styled.div`

transform: ${props => (props.center ? 'translate(50%,-50%)' : null)};
  margin: ${props => (props.margin ? props.margin : props.center ? "0" : null)};
  z-index: ${props => (props.box ? props.box : null)};
  height: ${props => (props.margin ? props.dims : "25px")};
  width: ${props => (props.margin ? props.dims : "25px")};
  
  background: ${props => {
    switch (props.box) {
      case "1":
        return "blue"
      case "2":
        return "white"
      case "3":
        return "green"
      case "4":
        return "yellow"
      default:
        return "white"
    }
  }};
`

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
