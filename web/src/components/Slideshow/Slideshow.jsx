import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
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
  data,
  isActive,
  clickHandler,
  currentSlide,
  images,
}) {
  // data other than image data is inside node: i.e. name, description, instagramlink
  // image to display: images.find(image => image.node.image.asset.fluid.srcWebp === currentSlide)
  console.log(currentSlide)
  console.log(images)
  console.log(data)

  const imageData = images.find(
    image => image.node.image.asset.fluid.srcWebp === currentSlide
  )
  console.log(imageData)
  return (
    <SlideshowFrame isActive={isActive}>
      {/* <img src={currentSlide} alt="Artwork by Sarah Hogue" /> */}

      {imageData ? (
        <Img
          fluid={imageData.node.image.asset.fluid}
          placeholder={"blurred"}
          key={imageData.node.name}
          objectFit={"cover"}
        />
      ) : null}
    </SlideshowFrame>
  )
}
export const graphqlQuery = graphql`
  query MyQuery {
    allSanityArtPiece(sort: { fields: name }) {
      nodes {
        image {
          _key
          _type
          _rawAsset
          _rawHotspot
          _rawCrop
          asset {
            gatsbyImageData(formats: WEBP, placeholder: BLURRED)
          }
        }
        name
      }
    }
  }
`
