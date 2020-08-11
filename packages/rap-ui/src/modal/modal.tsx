import React, { useRef, useEffect, useCallback } from "react"
import styled from "styled-components"
import { useTheme, useThemeMode } from "../theme"
import { rgba, darken } from "polished"
import { RapUITheme, ModalProps } from "../types"
import { mdiClose } from "@mdi/js"
import Icon from "@mdi/react"

const ModalBackground: any = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
  background: ${(props: any) => rgba(props.background, 0.5)};
  top: 0;
  opacity: 0;
`

const ModalContainer: any = styled.div`
  position: relative;
  width: 44vw;
  border-radius: 10px;
  overflow: hidden;
  max-height: 80vh;
  background: ${(props: any) => props.background};
  box-shadow: 0 0 20px -10px ${(props: any) => darken(0.65, props.background)};
  transform: scale3d(0.8, 0.8, 0.8);
  opacity: 0;
`

const InnerContainer: any = styled.div`
  position: relative;
  padding: 30px;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: calc(80vh - 180px);

  > :not(:last-child) {
    margin-bottom: 25px;
  }
`

const Header: any = styled.div`
  width: calc(100% - 30px);
  height: 60px;
  display: grid;
  grid-template-columns: 60px 1fr 60px;
  grid-template-areas: ". title button";
  padding: 0 15px;
  justify-content: center;
  border-bottom: 1px solid ${(props: any) => rgba(props.border, 0.4)};
`

const Footer: any = styled.div`
  width: calc(100% - 30px);
  height: 60px;
  padding: 0 15px;
  border-top: 1px solid ${(props: any) => rgba(props.border, 0.4)};
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
  font-size: 18px;
  font-weight: normal;
`

/**
 * Display a Modal
 *
 * @example
 *
 * import React, { useState } from "react"
 * import { Modal } from "rap-ui"
 *
 * const MyPage = () => {
 *      const [openModal, setOpenModal] = useState(false)
 *
 *      return <React.Frgament>
 *          <button onClick = {()=>{setOpenModal(true)}}>Open Modal</button>
 *          <Modal active = {openModal} onClose = {(value)=>{setOpenModal(false)}} />
 *      <React.Fragment/>
 * }
 */

const Modal: React.FC<ModalProps> = ({
  active = false,
  onClose,
  title,
  children,
}) => {
  const theme: RapUITheme = useTheme()
  const [themeMode] = useThemeMode()
  const ref: any = useRef()

  const openAnimation = useCallback(() => {
    const DOMNode = ref.current

    if (DOMNode) {
      document.body.style.overflowY = "hidden"

      DOMNode.style.transition = "all .25s"
      DOMNode.style.opacity = "1"

      let modal = DOMNode.querySelector("#modal-container")
      modal.style.transition = ".25s transform .15s, .25s opacity .15s"
      modal.style.opacity = "1"
      modal.style.transform = "scale3d(1,1,1)"
    }
  }, [ref])

  const closeAnimation = useCallback(() => {
    const DOMNode = ref.current
    if (DOMNode) {
      document.body.style.overflowY = "auto"

      let modal = DOMNode.querySelector("#modal-container")
      modal.style.transition = "transform .25s, opacity .15s"
      modal.style.opacity = "0"
      modal.style.transform = "scale3d(0.8,0.8,0.8)"

      DOMNode.style.transition = ".25s all .15s"
      DOMNode.style.opacity = "1"
    }
  }, [ref])

  const handleEsc = useCallback((e: any) => {
    if (e.which === 27 || e.keyCode === 27 || e.code === "Escape") {
      handleClose()
    }
  }, [])

  useEffect(() => {
    if (active) {
      openAnimation()
      window.addEventListener("keyup", handleEsc)
    } else {
      window.removeEventListener("keyup", handleEsc)
    }

    return () => {
      window.removeEventListener("keyup", handleEsc)
    }
  }, [active])

  const handleClose = () => {
    closeAnimation()
    setTimeout(() => {
      onClose()
    }, 300)
  }

  return (
    active && (
      <ModalBackground
        ref={ref}
        background={darken(0.5, theme[themeMode].background)}
      >
        <ModalContainer
          id="modal-container"
          background={theme[themeMode].cardbackground}
        >
          <Header border={theme[themeMode].background}>
            {title && <Title>{title}</Title>}
            <CloseButton
              background={theme[themeMode].background}
              onClick={handleClose}
            >
              <Icon
                size={0.85}
                path={mdiClose}
                color={
                  themeMode === "lightmode"
                    ? theme.colors.dark
                    : theme.colors.white
                }
              />
            </CloseButton>
          </Header>
          <InnerContainer>{children}</InnerContainer>
          <Footer border={theme[themeMode].background}></Footer>
        </ModalContainer>
      </ModalBackground>
    )
  )
}
export default Modal
