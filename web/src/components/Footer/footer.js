import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import styled from "styled-components"
import Theme from "../../util/Theme"
const Footer = styled.footer`
  background-color: ${Theme.color2};
  display: flex;
  min-height: 5vh;
  position: absolute;
  bottom: 0;
  left: 0;
  min-width: 100%;
`
const Link = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
`

export default function footer() {
  return (
    <Footer>
      <Link href="https://www.instagram.com/artsarahtonin">
        <StaticImage
          src={"./logo.png"}
          alt={"Sarah's instagram"}
          placeholder="blurred"
          layout="fixed"
          width={103}
          height={29}
        />
      </Link>
    </Footer>
  )
}
