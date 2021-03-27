import * as React from "react"
import styled from "styled-components"
import Theme from "../../util/Theme"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const HeaderStyle = styled.header`
  background-color: #d9d9d9;
`

const PaperBorder = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
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
