import React from "react"
import styled from "styled-components"
// import Img from "gatsby-image"
const width = 80
const height = 70
const SlideshowFrame = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -${height / 2}vh; /* Negative half of height. */
  //   margin-left: -42.5vw; /* Negative half of width. */
  height: ${height}vh;
  width: ${width}%;
  left: auto;
  right: auto;
  z-index: ${props => (props.isActive ? "5" : "-1")};
  opacity: ${props => (props.isActive ? "1" : "0")};
  background-color: red;
`

export default function Slideshow({ isActive, clickHandler, currentSlide }) {
  return (
    <SlideshowFrame isActive={isActive}>
      {/* <img src={currentSlide} alt="Artwork by Sarah Hogue" /> */}
    </SlideshowFrame>
  )
}
