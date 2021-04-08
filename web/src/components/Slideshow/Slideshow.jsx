import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
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
  top: 12.5vh;
  margin: auto;
  // height: ${height}vh;
  // width: ${width}%;
  height: 650px;
  width: 650px;
  // background-color: whitesmoke;
  z-index: ${props => (props.isActive ? "5" : "-1")};
  opacity: ${props => (props.isActive ? "1" : "0")};
  & .gatsby-image-wrapper {
    min-height: 650px;
    // margin: auto;
  }
  @media screen and (max-width: 700px) {
    top: 25vh;

    width: ${mobileWidth}%;
    & .gatsby-image-wrapper {
      min-height: ${mobileHeight}vw;
      // min-height: 500px;
      // margin: auto;
    }
  }
  @media screen and (max-width: 600px) {
    top: 15vh;
  }
  @media screen and (max-width: 550px) {
    top: 20vh;
  }
  @media screen and (max-width: 500px) {
    top: 25vh;
  }
  @media screen and (max-width: 450px) {
    top: 30vh;

    width: ${mobileWidth}%;
    & .gatsby-image-wrapper {
      min-height: ${mobileHeight}vw;
      // min-height: 500px;
      // margin: auto;
    }
  }
`

export default function Slideshow({ isActive, currentSlide }) {
  return (
    <SlideshowFrame isActive={isActive}>
      {currentSlide ? (
        <Img
          fluid={currentSlide.node.image.asset.fluid}
          placeholder={"blurred"}
          key={currentSlide.node.name}
          alt="Collage by Sarah Hogue"
          // objectFit={"cover"}
        />
      ) : null}
    </SlideshowFrame>
  )
}
