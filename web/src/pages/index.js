import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Backdrop from "../components/Backdrop/Backdrop"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Slideshow from "../components/Slideshow/Slideshow"

const upperGap = "20px"

const lowerGap = "30px"

const UpperGrid = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columsn: 1fr 1fr 1fr 1fr;
  width: 100%;
  min-height: 80vh;
  margin-top: ${upperGap};
  margin-bottom: ${upperGap};
  grid-gap: ${upperGap};
  & .gatsby-image-wrapper {
    background-image: cover;
  }
  & .gatsby-image-wrapper:nth-of-type(1) {
    grid-row: 1 / 3;
    grid-column: 1 / 3;
  }
  & .gatsby-image-wrapper:nth-of-type(2) {
    grid-row: 1 / 2;
    grid-column: 3 / 5;
  }
  & .gatsby-image-wrapper:nth-of-type(3) {
    grid-row: 3 / 4;
    grid-column: 1 / 3;
  }
  & .gatsby-image-wrapper:nth-of-type(4) {
    grid-row: 2 / 4;
    grid-column: 3 / 5;
  }
`

const FullGrid = styled.section`
  display: grid;
  min-width: 100%;
  /* define the number of grid columns */
  // grid-template-columns: fit-content(40%);
  grid-template-columns: repeat(auto-fit, minmax(500px, auto));
  // grid-template-rows: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 450px;
  // grid-template-rows: 500px repeat(auto-fit, 600px) 600px;
  grid-gap: ${lowerGap};
  margin-bottom: 2.5vh;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, auto));
    grid-auto-rows: 150px;
    grid-gap: 10px;
  }
`

const GalleryHeader = styled.h2`
  font-family: "Train One";
`

const IndexPage = ({ data }) => {
  // shall hold images
  const [showBackdrop, setShowBackdrop] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(false)
  const [showSlideshow, setShowSlideshow] = useState(false)
  const [images, setImages] = useState([data.allSanityArtPiece.edges])

  const bulkImages = data.allSanityArtPiece.edges.sort((img1, img2) => {
    img1 = parseInt(img1.node.name.replace("IG-Pic-", ""))
    img2 = parseInt(img2.node.name.replace("IG-Pic-", ""))
    if (img1 > img2) {
      return 1
    } else if (img1 < img2) {
      return -1
    } else if (img1 === img2) {
      return 0
    }
  })

  const [topImageData, setTopImageData] = useState(
    bulkImages.splice(-4, 4).reverse()
  )
  const [gridImageData, setGridImageData] = useState(bulkImages)

  const openBackdrop = () => {
    setShowBackdrop(true)
  }
  const closeBackdrop = () => {
    setShowBackdrop(false)
  }
  const openSlideshow = e => {
    console.log(e.target.key)
    if (e.target.currentSrc) {
      setCurrentSlide(e.target.currentSrc)
      openBackdrop()
      setShowSlideshow(true)
    }
  }
  const closeSlideshow = () => {
    closeBackdrop()
    setShowSlideshow(false)
    setCurrentSlide(false)
  }
  return (
    <Layout>
      <SEO title="Home" />
      <UpperGrid>
        {topImageData.map(img => (
          <Img
            fluid={img.node.image.asset.fluid}
            placeholder={"blurred"}
            key={img.node.id}
            objectFit={"cover"}
          />
        ))}
      </UpperGrid>
      <GalleryHeader>Gallery</GalleryHeader>
      <FullGrid>
        {bulkImages.reverse().map(img => (
          <Img
            fluid={img.node.image.asset.fluid}
            placeholder={"blurred"}
            key={img.node.id}
            objectFit={"cover"}
          />
        ))}
      </FullGrid>
      <Backdrop isActive={showBackdrop} clickHandler={closeSlideshow} />
      <Slideshow
        currentSlide={currentSlide}
        isActive={showSlideshow}
        clickHandler={closeSlideshow}
      />
    </Layout>
  )
}

export const data = graphql`
  query ImageQuery {
    allSanityArtPiece {
      edges {
        node {
          id
          date
          name
          Description
          instagramLink
          image {
            _key
            _type
            _rawAsset
            _rawHotspot
            _rawCrop
            asset {
              fluid {
                base64
                srcWebp
                srcSetWebp
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
