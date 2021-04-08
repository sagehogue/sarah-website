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
  background-color: whitesmoke;
  z-index: ${props => (props.isActive ? "5" : "-1")};
  opacity: ${props => (props.isActive ? "1" : "0")};
  & .gatsby-image-wrapper {
    min-height: 650px;
    margin: auto;
  }
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
  const data = useStaticQuery(graphql`
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
  `)
  // data other than image data is inside node: i.e. name, description, instagramlink
  // image to display: images.find(image => image.node.image.asset.fluid.srcWebp === currentSlide)
  console.log(currentSlide)
  // console.log(images[0])
  const artPieceArray = data.allSanityArtPiece.nodes
  console.log(artPieceArray)
  // const imageData = artPieceArray.find(
  //   image => image.image.asset.fluid.srcWebp === currentSlide
  // )
  // const imageData = images[0].find(
  //   image => image.node.image.asset.fluid.srcWebp === currentSlide
  // )
  // const imageData = artPieceArray.find(
  //   image => image.image.asset.fluid.srcWebp === currentSlide
  // )
  // console.log(imageData)
  return (
    <SlideshowFrame isActive={isActive}>
      {/* <img src={currentSlide} alt="Artwork by Sarah Hogue" /> */}

      {currentSlide ? (
        <Img
          fluid={currentSlide.node.image.asset.fluid}
          placeholder={"blurred"}
          key={currentSlide.node.name}
          // objectFit={"cover"}
        />
      ) : null}
    </SlideshowFrame>
  )
}
