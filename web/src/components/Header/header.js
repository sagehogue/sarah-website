import * as React from "react"
import styled from "styled-components"
import Theme from "../../util/Theme"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const HeaderStyle = styled.header`
  background-color: ${Theme.color2};
  letter-spacing: 5px;
`

const Header = ({ siteTitle }) => (
  <HeaderStyle>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, textAlign: "center" }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            textTransform: "uppercase",
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </HeaderStyle>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
