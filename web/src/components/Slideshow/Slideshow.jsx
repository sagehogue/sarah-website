import React from "react"
import styled from "styled-components"
// import Img from "gatsby-image"
const width = 80
const height = 80
const mobileWidth = 85
const mobileHeight = 85
const SlideshowFrame = styled.div`
  position: fixed;
  // top: 12.5%;
  // left: 12.5%;
  left: 0;
  right: 0;
  top: 5vh;
  margin: auto;
  height: ${height}vh;
  width: ${width}%;
  background-color: whitesmoke;
  z-index: ${props => (props.isActive ? "5" : "-1")};
  opacity: ${props => (props.isActive ? "1" : "0")};
  @media screen and (max-width: 700px) {
    height: ${mobileHeight}vh;
    width: ${mobileWidth}%;
  }
`

export default function Slideshow({
  isActive,
  clickHandler,
  currentSlide,
  images,
}) {
  return (
    <SlideshowFrame isActive={isActive}>
      {/* <img src={currentSlide} alt="Artwork by Sarah Hogue" /> */}
    </SlideshowFrame>
  )
}
