import React, { useEffect, useRef, useState } from "react"
import { SectionContainer } from "../StyledComponents/containers.css"
import styled from "styled-components"
import Portrait from "./Image"
import EnvironmentInfoSection from "./EnvironmentInfoSection"

const EnvironmentInfo = ({ environmentImage, environmentText }) => {
  const triggerRef = useRef()
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false,
  })

  function useIntersectionObserver(
    elementRef,
    { threshold = 0, root = null, rootMargin = "0%", freezeOnceVisible = false }
  ) {
    const [entry, setEntry] = useState()

    const frozen = entry?.isIntersecting && freezeOnceVisible

    const updateEntry = ([entry]) => {
      setEntry(entry)
    }

    useEffect(() => {
      const node = elementRef?.current
      const hasIOSupport = !!window.IntersectionObserver

      if (!hasIOSupport || frozen || !node) return

      const observerParams = { threshold, root, rootMargin }
      const observer = new IntersectionObserver(updateEntry, observerParams)

      observer.observe(node)

      return () => observer.disconnect()
    }, [elementRef, threshold, root, rootMargin, frozen])

    return entry
  }
  console.log(dataRef?.isInteresecting === true ? "hi" : "not")
  return (
    <SectionContainer
      style={{
        height: "100vh",
        position: "relative",
        zIndex: "2",
        marginTop: "400px",
        overflow: `hidden`,
      }}
      fd="row"
    >
      
      <EnvironmentInfoSection  environmentText={environmentText} yes={dataRef?.isIntersecting} />
      <Portrait environmentImage={environmentImage} yes={dataRef?.isIntersecting} />
      <div ref={triggerRef} style={{ marginTop: `200px` }} />
    </SectionContainer>
  )
}

export default EnvironmentInfo
