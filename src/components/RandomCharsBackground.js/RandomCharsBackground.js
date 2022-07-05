import React, { useEffect, useState, useRef } from "react"
import { Heading1 } from "../StyledComponents/typography.css"
import { Controls, PlayState, Tween } from 'react-gsap';
import { Char } from "./StyledComponents.css"

const IntroBackground = () => {
    const [bgChars, setBgChars] = React.useState([])
    const stars = useRef(null)
    useEffect(() => {
      const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
      let i = 0
      const randomChars = []
      while (i < chars.length) {
        randomChars.push({
          char: chars.charAt(Math.floor(Math.random() * chars.length)),
          posX: Math.floor(Math.random() * 2000),
          posY: Math.floor(Math.random() * 2000),
        })
        i++
      }
      setBgChars(randomChars)
      
    }, [])



  return (
    <div
    style={{
        width: `100vw`,
        height: `100vh`,
        overflow: `hidden`
    }}
    >
    {bgChars && bgChars.map((char, i) => 
     <Tween 
     to={{ x: Math.floor(Math.random() * (-1000 - 1000) + 1000), 
           y: Math.floor(Math.random() * (-1000 - 1000) + 1000)
      
     }}
        duration={ Math.random() * 50} rotation={Math.random() * 1000} scale={0} ease="back.out(1.7)">
        <Char
        posX={char.posX}
        posY={char.posY}
        
        >{char.char}</Char>
        </Tween>
    )}
    </div>
  )
}

export default IntroBackground
