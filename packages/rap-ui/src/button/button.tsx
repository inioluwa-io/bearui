import React, { useRef, useEffect } from "react"
import { ButtonProps } from "../types"
import styled from "styled-components"
import { lighten, rgba, darken } from "polished"
import Icon from "@mdi/react"
import * as path from "@mdi/js"

/**
 * How it works!!
 * background - if border is true set background to transparent else check if backgroundGradient is set or background is set
 * border - if outline is true set border to borderColor or background else set to none
 */

const Button1: any = styled.button`
  font-family: Nunito sans;
  position:relative;
  background: ${(props: any) =>
    props.outline
      ? "transparent"
      : props.backgroundGradient || props.background};
  color: ${(props: any) =>
    props.outline ? props.background : props.textColor};
  font-size: 15px;
  padding: ${(props: any) =>
    !props.iconOnly ? props.padding : props.iconPadding};
  border-radius: ${(props: any) => props.borderRadius};
  cursor: pointer;
  display:flex;
  align-items: center;
  justify-content:center;
  flex-direction ${(props: any) => (props.iconRight ? "row-reverse" : "row")};
  transition: all 0.35s ease;
  box-shadow ${(props: any) => (props.float ? `` : "")};
  border: ${(props: any) =>
    props.outline
      ? "1px solid " + (props.borderColor || props.background)
      : "none"};
  box-shadow: 0 8px 25px -8px ${(props: any) =>
    props.float ? darken(0.15, rgba(props.background, 0.7)) : "transparent"};
  overflow:hidden;
  box-sizing: border-box;

  &:disabled {
    background: ${(props: any) =>
      !props.border ? lighten(0.1, props.background) : "transparent"};
    cursor:not-allowed;
  }

  &:focus{
    outline:none;
  }

  span{
    position:absolute;
    background:${(props: any) => rgba(lighten(0.5, props.background), 0.4)};
    width:100px;
    height:100px;
    margin-top: -50px;
    margin-left: -50px;
    opacity: 0;
    animation: ripple 1.5s;
    border-radius:100px;
    z-index:1;
  }

  &:focus:not(:active)::after {
    display: block;
  }
  
  @keyframes ripple {
    from {
      opacity: 1;
      transform: scale(0);
    }
    to {
      opacity: 0;
      transform: scale(5);
    }
  }
`

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  iconOnly = false,
  corners = "box",
  background = "primary",
  hoverColor,
  textColor = "#ffffff",
  iconRight = false,
  gradient = false,
  size = "md",
  ...props
}) => {
  const refs: any = useRef()

  useEffect(() => {
    const button: HTMLElement = refs.current
    let onButtonClick: any
    onButtonClick = button.addEventListener<"click">(
      "click",
      (e: MouseEvent): void => {
        let x = e.pageX - button.getBoundingClientRect().left
        let y = e.pageY - button.getBoundingClientRect().top

        const span: HTMLSpanElement = document.createElement("span")
        span.style.top = y + "px"
        span.style.left = x + "px"
        button.append(span)

        setTimeout(() => {
          button.removeChild(span)
        }, 1200)
      }
    )
    return () => {
      button.removeEventListener("click", onButtonClick, false)
    }
  }, [])

  const getStyleFromCornersProps: Function = (): any => {
    switch (corners) {
      case "rounded":
        return { borderRadius: "50px" }
      case "box":
        return { borderRadius: "5px" }
      default:
        throw new Error("corners only accepts 'box, and rounded' as values")
    }
  }

  const getStyleFromSizeProps: Function = (): any => {
    switch (size) {
      case "xs":
        return { padding: "5px", iconPadding: "5px" }
      case "sm":
        return { padding: "8px 20px", iconPadding: "8px" }
      case "md":
        return { padding: "9.5px 28px", iconPadding: "9.5px" }
      case "lg":
        return { padding: "15px", iconPadding: "15px" }
      default:
        throw new Error("corners only accepts 'box, and rounded' as values")
    }
  }

  const getStyleFromBackgroundProps: Function = (): any => {
    switch (background.trim()) {
      case "primary":
        return {
          backgroundGradient:
            gradient &&
            "linear-gradient(118deg,rgba(115,103,240,1),rgba(115,103,240,.7))",
          background: "rgb(115,103,240)",
        }
      case "success":
        return {
          backgroundGradient:
            gradient &&
            "linear-gradient(108deg,rgba(40,199,111,1),rgba(40,199,111,.7))",
          background: "rgb(40,199,111)",
        }
      case "danger":
        return {
          backgroundGradient:
            gradient &&
            "linear-gradient(118deg,rgba(234,84,85,1),rgba(234,84,85,.65))",
          background: "rgb(234,84,85)",
        }
      case "warning":
        return {
          backgroundGradient:
            gradient &&
            "linear-gradient(118deg,rgba(255,159,67,1),rgba(255,159,67,.7))",
          background: "rgb(255,159,67)",
        }
      case "transparent":
        return { background: "transparent", color: "#222" }
      case "white":
        return { background: "white", color: "#222" }
      case "dark":
        return {
          backgroundGradient:
            gradient &&
            "linear-gradient(118deg,rgba(30,30,30,1),rgba(30,30,30,.7))",
          background: "rgb(30,30,30)",
        }
      default:
        return { background }
    }
  }

  const isObject: Function = (object: any): boolean =>
    typeof object === "object"

  const updateProps: Function = (value: any): any => {
    if (value && isObject(value)) {
      return (props = Object.assign(value, props))
    }
    throw new Error("value must be an object")
  }
  const getIconStyle: Function = (): any => {
    if (iconOnly) return { margin: "0", padding: "1px" }
    return iconRight ? { marginLeft: "3px" } : { marginRight: "3px" }
  }

  updateProps(getStyleFromCornersProps())
  updateProps(getStyleFromSizeProps())
  updateProps(getStyleFromBackgroundProps())
  updateProps({ textColor: "#ffffff", iconRight, iconOnly })

  return (
    <Button1 {...props} ref={refs}>
      <Icon path={path[icon]} size={0.75} style={getIconStyle()} />
      {!iconOnly && children}
    </Button1>
  )
}

export default Button
