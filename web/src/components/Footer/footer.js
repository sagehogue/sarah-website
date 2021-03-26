import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import styled from "styled-components"
import Theme from "../../util/Theme"
const Footer = styled.footer`
  background-color: ${Theme.color2};
  display: flex;
  min-height: 5vh;
  position: fixed;
  bottom: 0;
  left: 0;
  min-width: 100%;
`
const LogoLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
`
const EmailLink = styled.a`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: 1rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  color: rgb(4, 4, 4);
  align-items: center;
`

export default function footer() {
  return (
    <Footer>
      <LogoLink href="https://www.instagram.com/artsarahtonin" target="_blank">
        <StaticImage
          src={"./logo.png"}
          alt={"Sarah's instagram"}
          placeholder="blurred"
          layout="fixed"
          width={103}
          height={29}
        />
      </LogoLink>
      <EmailLink href="mailto:artsarahtonin@email.com">Contact</EmailLink>
    </Footer>
  )
}
