import * as React from "react"
import styled from "styled-components"
import Theme from "../../util/Theme"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const HeaderStyle = styled.header`
  background-color: #d9d9d9;
  margin-bottom: 1rem;
`

const PaperBorder = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  @media screen and (max-width: 1000px) and (max-height: 450px) {
    padding: 0.35rem;
  }
`

const PageTitleStyle = styled.h1`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Major Mono Display";
  font-size: ${Theme.fontSizeXL};
  letter-spacing: ${Theme.titleLetterSpacing};
  fontweight: 400;
  margin: 0;
  text-align: center;

  @media screen and (max-width: 700px) {
    font-size: ${Theme.mobileTitleFontSize};
    letter-spacing: ${Theme.mobileTitleLetterSpacing};
  }
  @media screen and (max-width: 1000px) and (max-height: 450px) {
    font-size: ${Theme.mobileHorizontalTitleFontSize};
    letter-spacing: ${Theme.mobileHorizontalTitleLetterSpacing};
    // max-height: 5vh;
    padding: 0;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderStyle>
    <PaperBorder>
      <Link to="/" style={{ textDecoration: "none" }}>
        <PageTitleStyle>{siteTitle}</PageTitleStyle>
      </Link>
    </PaperBorder>
  </HeaderStyle>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
