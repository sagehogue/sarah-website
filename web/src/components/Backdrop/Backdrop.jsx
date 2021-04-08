import React from "react"
import styled from "styled-components"

const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(4, 4, 4, 0.45);
  z-index: ${props => (props.isActive ? "3" : "-1")};
  display: ${props => (props.isActive ? "block" : "none")};
`

export default function Backdrop({ isActive, clickHandler }) {
  return <BackdropStyle isActive={isActive} onClick={clickHandler} />
}
