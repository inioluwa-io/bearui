import React, { useRef, useEffect, useCallback } from "react"
import styled from "styled-components"
import { useTheme, useThemeMode } from "../theme"
import { rgba, darken } from "polished"
import { PopUpProps } from "../types"
import { mdiClose } from "@mdi/js"
import Icon from "@mdi/react"
import { getColorFromTheme } from "../util"

const PopUpBackground: any = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  z-index: 99991;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
  background: ${(props: any) => rgba(props.background, 0.5)};
  top: 0;
  opacity: 0;
`

const PopUpContainer: any = styled.div`
  position: relative;
  min-width: 10rem;
  border-radius: 10px;
  overflow: hidden;
  max-height: 83vh;
  background: ${(props: any) => props.background};
  box-shadow: 0 0 20px -10px ${(props: any) => darken(0.65, props.background)};

  @media (max-width: 768px) {
    min-width: 85vw;
  }

  ${(props: any) =>
    props.active &&
    "animation: popOut .35s cubic-bezier(0.38, 0.39, 0.3, 1.36)"};

  @keyframes popOut {
    from {
      transform: scale3d(0.8, 0.8, 0.8);
      opacity: 0;
    }
    80% {
      opacity: 1;
    }
    to {
      transform: scale3d(1, 1, 1);
    }
  }

  @media (max-width: 441px) {
    max-height: 100vh;
    border-radius: unset;
  }
`

const InnerContainer: any = styled.div`
  position: relative;
  padding: 20px;
  padding-top: 0;
  overflow-y: auto;
  margin-top: -10px;
  overflow-x: hidden;
  max-height: calc(80vh - 190px);

  > :not(:last-child) {
    margin-bottom: 25px;
  }
  @media (max-width: 441px) {
    height: calc(100vh - 161px);
    max-height: calc(100vh - 161px);
    padding: 20px;
  }
`

const Header: any = styled.div`
  width: calc(100% - 30px);
  height: 60px;
  display: grid;
  grid-template-columns: 30px 1fr 30px;
  grid-template-areas: ". . button";
  padding: 0 15px;
  justify-content: center;
  color: ${(props: any) => props.color};

  @media (max-width: 441px) {
    width: 100%;
    padding: 0px;
  }
`

const CloseButton: any = styled.button`
  position: relative;
  height: 32px;
  width: 32px;
  border-radius: 40px;
  background: transparent;
  transition: all 0.35s;
  margin: auto;
  border: none;
  cursor: pointer;
  grid-area: button;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;

  svg {
    position: absolute;
  }

  &:hover {
    background: ${(props: any) => rgba(props.background, 0.65)};
  }

  &:active {
    background: transparent;
  }
`
const Title: any = styled.h4`
  text-align: center;
  grid-area: title;
  margin: auto;
  font-size: 16px;
  font-weight: 600;
  font-weight: inherit;
  color: ${(props: any) => props.color};
`

/**
 * Display a PopUp
 *
 * @example
 *
 * import React, { useState } from "react"
 * import { PopUp } from "rap-ui"
 *
 * const MyPage = () => {
 *      const [openPopUp, setOpenPopUp] = useState(false)
 *
 *      return <React.Frgament>
 *          <button onClick = {()=>{setOpenPopUp(true)}}>Open PopUp</button>
 *          <PopUp active = {openPopUp} onClose = {(value)=>{setOpenPopUp(false)}} />
 *      <React.Fragment/>
 * }
 */

const PopUp: React.FC<PopUpProps> = ({
  active = false,
  onClose,
  color = "",
  children,
  ...props
}) => {
  const [theme] = useTheme()
  const [themeMode] = useThemeMode()
  const ref: any = useRef()
  let defaultColor =
    themeMode === "lightmode" ? theme.colors.dark : theme.colors.white

  if (!!color.length) {
    defaultColor = getColorFromTheme(color, theme)
  }

  const openAnimation = useCallback(() => {
    const DOMNode = ref.current

    if (DOMNode) {
      document.body.style.overflowY = "hidden"

      DOMNode.style.transition = "all .25s"
      DOMNode.style.opacity = "1"
    }
  }, [ref])

  const closeAnimation = useCallback(() => {
    const DOMNode = ref.current
    if (DOMNode) {
      document.body.style.overflowY = "auto"

      const PopUp = DOMNode.querySelector(".PopUp-container")
      PopUp.style.transition = "transform .25s, opacity .15s"
      PopUp.style.opacity = "0"
      PopUp.style.transform = "scale3d(0.8,0.8,0.8)"

      DOMNode.style.transition = ".25s all .15s"
      DOMNode.style.opacity = "1"
    }
  }, [ref])

  const handleClose = useCallback(() => {
    closeAnimation()
    const timeout = setTimeout(() => {
      onClose()
    }, 300)
    return () => {
      clearTimeout(timeout)
    }
  }, [onClose])

  const handleEsc = useCallback(
    (e: any) => {
      if (e.which === 27 || e.keyCode === 27 || e.code === "Escape") {
        handleClose()
      }
    },
    [handleClose]
  )

  useEffect(() => {
    if (active) {
      openAnimation()
      window.addEventListener("keydown", handleEsc)
    } else {
      window.removeEventListener("keydown", handleEsc)
    }

    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [active])

  return (
    active && (
      <PopUpBackground
        ref={ref}
        {...props}
        background={darken(0.5, theme[themeMode].background)}
      >
        <PopUpContainer
          className="PopUp-container"
          background={theme[themeMode].cardbackground}
          active={active}
        >
          <Header border={theme[themeMode].background}>
            <CloseButton
              background={theme[themeMode].background}
              onClick={handleClose}
            >
              <Icon size={0.85} path={mdiClose} color={defaultColor} />
            </CloseButton>
          </Header>
          <InnerContainer color={defaultColor}>{children}</InnerContainer>
        </PopUpContainer>
      </PopUpBackground>
    )
  )
}
export default PopUp
