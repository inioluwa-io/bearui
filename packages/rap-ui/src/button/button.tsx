import React, { useRef, useEffect } from "react"
import { ButtonProps } from "../types"
import styled from "styled-components"
import { lighten, rgba, darken } from "polished"
import Icon from "@mdi/react"
import * as path from "@mdi/js"

/**
 * How it works!!
 * background - if border is true set background to transparent else check if backgroundGradient is set or background is set
 * border - if border is true set border to borderColor or background else set to none
 */

const Button1: any = styled.button`
  font-family: Nunito sans;
  background: ${(props: any) =>
    props.border
      ? "transparent"
      : props.backgroundGradient || props.background};
  color: ${(props: any) => (props.border ? props.background : props.textColor)};
  font-size: 15px;
  padding: ${(props: any) => props.padding};
  border-radius: ${(props: any) => props.borderRadius};
  cursor: pointer;
  display:flex;
  justify-content:center;
  transition: all 0.35s ease;
  box-shadow ${(props: any) => (props.float ? `` : "")};
  border: ${(props: any) =>
    props.border
      ? "1px solid " + (props.borderColor || props.background)
      : "none"};
  box-shadow: 0 8px 25px -8px ${(props: any) =>
    darken(0.15, rgba(props.background, 0.7))};

  &:disabled {
    background: ${(props: any) =>
      !props.border ? lighten(0.1, props.background) : "transparent"};
    cursor:not-allowed;
  }
`

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  corners = "box",
  background = "primary",
  hoverColor,
  textColor = "#ffffff",
  gradient = false,
  size = "md",

  ...props
}) => {
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
        return { padding: "5px" }
      case "sm":
        return { padding: "8px 20px" }
      case "md":
        return { padding: "9.5px 28px" }
      case "lg":
        return { padding: "15px" }
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

  updateProps(getStyleFromCornersProps())
  updateProps(getStyleFromSizeProps())
  updateProps(getStyleFromBackgroundProps())
  updateProps({ textColor: "#ffffff" })

  return (
    <Button1 {...props}>
      {icon && (
        <Icon path={path[icon]} size={0.7} style={{ marginRight: "1px" }} />
      )}
      {children}
    </Button1>
  )
}

export default Button
