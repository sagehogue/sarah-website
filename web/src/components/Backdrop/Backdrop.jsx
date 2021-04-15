import React from "react"
import styled from "styled-components"
import { Transition } from "react-transition-group"
import Theme from "../../util/Theme"

const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  transition: all ${Theme.animationDuration}ms;
  left: 0;
  height: 100vh;
  width: 100vw;
  opacity: ${props =>
    props.animState === "entered"
      ? "0.55"
      : props.animState === "exited"
      ? "0"
      : props.animState === "entering"
      ? "0.55"
      : props.animState === "exiting"
      ? "0"
      : "0.55"};
  background-color: ${props =>
    props.animState === "entered" ||
    props.animState === "entering" ||
    props.animState === "exiting"
      ? "rgb(4, 4, 4)"
      : "whitesmoke"};
  z-index: ${props =>
    props.animState === "entered" || props.animState === "entering"
      ? "3"
      : "-1"};
`

export default function Backdrop({ isActive, clickHandler }) {
  // const defaultStyle = {
  //   transition: `transform 200ms, opacity 200ms ease`,
  //   opacity: 1,
  // }

  // const transitionStyles = {
  //   entering: { opacity: 0, backgroundColor: "rgba(4, 4, 4, 0.55)", zIndex: 3 },
  //   entered: { opacity: 1 },
  //   exiting: {},
  //   exited: { backgroundColor: "whitesmoke", zIndex: -1 },
  // }

  return (
    <Transition in={isActive} timeout={Theme.animationDuration}>
      {animState => {
        console.log(animState)
        return <BackdropStyle animState={animState} onClick={clickHandler} />
      }}
    </Transition>
  )
}
