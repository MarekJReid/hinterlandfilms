import styled, { keyframes } from "styled-components"
export const moveStar = keyframes`
  0% {
  opacity: 1;
  display:flex;
  }

  100% {
  display: none;
opacity: 0;
  }
`
const translateTo = Math.random() * 100


const typing = keyframes `
from {
  width: 0;
}
`
const effect = `
50% {
  border-color: transparent;
}
`
export const Char = styled.h1`
  color: white;
  position: absolute;
  top: ${props => (props.posY ? `${props.posY}px` : null)};
  left: ${props => `${props.posX}px` };
  animation: ${typing} 2s steps(22);
`
// animation: typing 2s steps(22), effect .5s step-end infinite alternate;