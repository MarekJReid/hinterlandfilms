import styled from "styled-components"

export const ShapesContainer = styled.div`
  height: 90vh;
  width: 90vw;
  overflow: hidden;
  background-color: blue;
  display: flex;
  position: relative;
`
export const RightShapeContainer = styled.div`
position: absolute;
right: 0;
z-index: 2;
  height: 100%;
  width: ${props => props.pos === 0 ? `82%` : props.pos < 3 ? `${80 - props.pos * 2}%` : 0};
  float: right;
  background: teal;
  -webkit-clip-path: polygon(75% 0, 100% 0%, 100% 100%, 35% 100%);
  clip-path: polygon(77% 0, 100% 0%, 100% 100%, 60% 100%);
  transition: width 2s ease;
`
export const LeftShapeContainer = styled.div`
position: absolute;
left: 0;
z-index: 1;
  height: 100%;
  width: ${props => props.pos === 0 ? `82%` : props.pos < 3 ? `${80 - props.pos * 2}%` : 0};
  float: right;
  background: green;
  -webkit-clip-path: polygon(0 0, 100% 0%, 75% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 0%, 83% 100%, 0 100%);
  transition: width 2s ease;
`
export const TextContainer = styled.div`
  padding: 3rem;
`;

export const NavLine = styled.div`
z-index: 1000;
position: absolute;
right: 10%;
height: 81%;
width: 1rem;
background: black;

display: flex;
flex-direction: column;
justify-content: center;
`;