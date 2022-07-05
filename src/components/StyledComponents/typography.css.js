import styled, { createGlobalStyle } from "styled-components"
import Link from "gatsby"
import Lumberjack from "../../assetts/fonts/fonts/Lumberjack.woff"
// import Light from "../../assetts/fonts/fonts/CentraNo2-Light.woff"
// import Medium from "../../assetts/fonts/fonts/CentraNo2-Medium.woff"

export const Typography = createGlobalStyle`
:root{
  --color-text: #1C0A00;
  --color-background: #CC9544;
  --color-primary: #1C0A00;
  --color-dark-brown: #361500;
  --color-mid-brown: #603601;
  --color-light-brown: #ffeead;
  --color-light-blue: #96bdc6;
  --font-size-small: 1rem;
  --font-size-medium: 1.25rem;
  @media (min-width: 1024px) {
    --font-size-small: 1.25rem;
    --font-size-medium: 1.5rem;
  }
}
  @font-face {
    font-family: 'Lumberjack';
    src: url(${Lumberjack});
    font-style: normal;
 
  }
  @font-face {
    font-family: 'CentraNo2Light';
    src: url(${Lumberjack}) ;
    format: ("woff");

  }
  @font-face {
    font-family: 'CentraNo2Medium';
    src: url(${Lumberjack}) ;
    format: ("woff");

  }
  @font-face {
    font-family: 'CentraNo2Thin';
    src: url("//db.onlinewebfonts.com/t/67bac7131607122728c4b0b04138d514.woff") ;
    format: ("woff");

  }
`
export const Heading1 = styled.h1`
  font-family: Lumberjack;
  color:white !important;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: -1px;
  transition: color 0.2s ease;
  margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "sm":
        return "1rem"
      case "md":
        return "1.5rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "100%"
      default:
        return "0"
    }
  }};
  margin-top: ${props => {
    switch (props.marginTop) {
      case "sm":
        return "1rem"
      case "md":
        return "1.5rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "100%"
      default:
        return "0"
    }
  }};

  @media (max-width: 450px) {
    font-size: 1.5rem;
    line-height: 1.17;
  }
`

export const Heading2 = styled.h2`
font-family: Lumberjack;
color:${props => {
  switch (props.color) {
    case "white":
      return "white"
    case "xs":
      return ".25rem"
    default:
      return "var( --color-light-brown)"
  }
}};

  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 900;


  margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "xxs":
        return "-25rem"
      case "xs":
        return ".25rem"
      case "sm":
        return "1rem"
      case "md":
        return "1.5rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "100%"
      default:
        return "0"
    }
  }};
    margin-top: ${props => {
      switch (props.marginTop) {
        case "xxs":
          return "-2rem"
        case "sm":
          return "1rem"
        case "md":
          return "1.5rem"
        case "lg":
          return "3.75rem"
        case "xl":
          return "8rem"
        case "xxl":
          return "100%"
        default:
          return "0"
      }
    }};
  @media (max-width: 450px) {
    font-size: 1.25rem;
    line-height: 1.2;
    margin-bottom: 0.25rem;
  }
`

export const Heading3 = styled.h3`
  font-family: CentraNo2Book;

  font-size: 1rem;
  line-height: 1.25;
  margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "sm":
        return "1rem"
      case "md":
        return "1.5rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "100%"
      default:
        return "0"
    }
  }};
  margin-top: ${props => {
    switch (props.marginTop) {
      case "xs":
        return ".45rem"
      case "sm":
        return "1rem"
      case "md":
        return "1.5rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "100%"
      default:
        return "0"
    }
  }};
  @media (max-width: 450px) {
    font-family: CentraNo2Book;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`

export const BC1 = styled.p`
  font-family: CentraNo2Light;
  line-height: 1.2;
  font-size: 1.25rem;
  color:${props => {
    switch (props.color) {
      case "white":
        return "white"
      case "xs":
        return ".25rem"
      default:
        return "var( --color-mid-brown)"
    }
  }};
  text-align: center;
  margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "sm":
        return "1rem"
      case "md":
        return "1.5rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "100%"
      default:
        return "0"
    }
  }};
  margin-top: ${props => {
    switch (props.marginTop) {
      case "sm":
        return "1rem"
      case "md":
        return "1.5rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "100%"
      default:
        return "0"
    }
  }};
  @media (max-width: 450px) {
  }
`

export const BC2 = styled.p`
  font-family: CentraNo2Light;
  line-height: 1.25;
  font-size: 1.25rem;
  margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "sm":
        return "1rem"
      case "md":
        return "1.5rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "100%"
      default:
        return "0"
    }
  }};
  margin-top: ${props => {
    switch (props.marginTop) {
      case "sm":
        return "1rem"
      case "md":
        return "1.5rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "100%"
      default:
        return "0"
    }
  }};
  @media (max-width: 450px) {
  }
`

export const BC3 = styled.p`
  font-family: CentraNo2Light;
  line-height: 1.25;
  font-size: 1rem;
  margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "sm":
        return "1rem"
      case "md":
        return "1.5rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "100%"
      default:
        return "0"
    }
  }};
  margin-top: ${props => {
    switch (props.marginTop) {
      case "sm":
        return "1rem"
      case "md":
        return "1.5rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "100%"
      default:
        return "0"
    }
  }};

  @media (max-width: 450px) {
    font-size: 1rem;
    margin-bottom: 2.35rem;
    line-height: 1.15;
  }
`

export const SN1 = styled.p`
  font-family: CentraNo2Medium;
  line-height: 1.25;
  font-size: 1.25rem;
  margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "sm":
        return "1rem"
      case "md":
        return "1.5rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "100%"
      default:
        return "0"
    }
  }};
  margin-top: ${props => {
    switch (props.marginTop) {
      case "sm":
        return "1rem"
      case "md":
        return "1.5rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "100%"
      default:
        return "0"
    }
  }};

  @media (max-width: 450px) {
    font-size: 1rem;
    margin-bottom: 2.35rem;
    line-height: 1.15;
  }
`
export const SN2 = styled.p`
  font-family: CentraNo2Light;
  line-height: 1.25;
  font-size: 1rem;
  transition: all 0.2s ease;
  margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "sm":
        return "1rem"
      case "md":
        return "1.5rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "100%"
      default:
        return "0"
    }
  }};
  margin-top: ${props => {
    switch (props.marginTop) {
      case "sm":
        return "1rem"
      case "md":
        return "1.5rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "100%"
      default:
        return "0"
    }
  }};
  :hover {
    color: ${props => (props.hover ? "rgba(51, 51, 51, 50%)" : "")};
  }
  @media (max-width: 450px) {
    font-size: 1rem;
    margin-bottom: 2.35rem;
    line-height: 1.15;
  }
`

export const SampleLink = styled.a`
  text-decoration: none;
  color: inherit;
  transition: color 0.2s ease-out;
  :hover {
    color: grey;
  }
`
// export const SampleGatsbyLink = styled(Link)`
// text-decoration: none;
// color: inherit;
// transition: color .2s ease-out;
// :hover {
//   color: grey;
// }
// `
