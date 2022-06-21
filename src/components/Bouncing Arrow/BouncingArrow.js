import React from "react"
import styled, { keyframes } from "styled-components"
const BouncingArrow = () => {
  return (
    <Arrow>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="69.012"
        height="36.147"
        viewBox="0 0 69.012 36.147"
      >
        <path
          id="Path_12"
          data-name="Path 12"
          d="M-11578.836,3576.481c10.736,10.655,28.885,25.267,28.885,25.267l28.826-25.267"
          transform="translate(11584.492 -3570.824)"
          fill="none"
          stroke="#603601"
          stroke-linecap="round"
          stroke-width="8"
        />
      </svg>
    </Arrow>
  )
}

export default BouncingArrow

export const bounce = keyframes`

    0%, 20%, 50%, 80%, 100% {
      transform: translateY(5px);
    }
    30% {
      transform: translateY(-5px);
    }
    40% {
      transform: translateY(-2px);
    }

`

export const Arrow = styled.div`
animation: ${bounce} 2s infinite;
 margin-top: 1rem;
  
  margin-left: -20px;
  width: 40px;
  height: 40px;

  /**
   * Dark Arrow Down
   */

  background-size: contain;

  .bounce {
    animation: bounce 2s infinite;
  }
`
