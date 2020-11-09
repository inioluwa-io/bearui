import React, { useRef, useEffect, useCallback } from "react"
import { Link } from "react-router-dom"
import { LinkButtonProps } from "../types"
import styled from "styled-components"
import { lighten, rgba, darken } from "polished"
import Icon from "@mdi/react"
import * as path from "@mdi/js"
import { useTheme } from "../theme"
/**
 * How it works!!
 * background - if border is true set background to transparent else check if backgroundGradient is set or background is set
 * border - if outline is true set border to borderColor or background else set to none
 */

const Button1: any = styled(Link)`
font-family: inherit;
  position:relative;
  background: ${(props: any) => {
    if (props.transparent === "true") {
      return rgba(props.background, 0.15)
    } else {
      if (props.outline === "true") {
        return "transparent"
      } else {
        return props.backgroundGradient || props.background
      }
    }
  }};
  color: ${(props: any) => {
    if (props.transparent === "true") {
      return props.background
    } else {
      return props.outline === "true" ? props.background : props.textcolor
    }
  }};
  font-size: 13px;
  padding: ${(props: any) =>
    props.icononly === "false" ? props.padding : props.iconpadding};
  border-radius: ${(props: any) => props.borderradius};
  cursor: pointer;
  display:flex;
  align-items: center;
  justify-content:center;
  text-decoration:none;
  flex-direction ${(props: any) =>
    props.iconright === "true" ? "row-reverse" : "row"};
  transition: all 0.35s ease;
  border: ${(props: any) => {
    if (props.transparent === "true") {
      return "1px solid " + rgba(props.background, 0.025)
    } else {
      return props.outline === "true"
        ? "1px solid " + (props.borderColor || props.background)
        : "none"
    }
  }};
  box-shadow: 0 8px 35px -6px ${(props: any) =>
    props.glow === "true" ? darken(0.13, props.background) : "transparent"};
  overflow:hidden;
  box-sizing: border-box;

  &:disabled {
    background: ${(props: any) =>
      !(props.border === "true")
        ? lighten(0.1, props.background)
        : "transparent"};
    cursor:not-allowed;
  }

  svg path {
    transition: fill 0.35s ease;
  }
  
  // .text {
  //   transition: color 0.35s ease !important;
  // }

  .rap-ico{
    margin-top:-0.8px;
    margin-bottom:-0.8px;
  }

  &:hover, &:focus{
    ${(props: any) => {
      if (props.transparent === "true") {
        return `background: ${props.background};
        color: ${props.textcolor};`
      } else {
        if (props.outline === "true") {
          return `background: ${props.background};
        color: ${props.textColor};`
        } else {
          if (!props.backgroundGradient) {
            return (
              "background:" +
              darken(0.05, props.background) +
              ";" +
              `color:${props.textColor};`
            )
          }
        }
      }
    }}

          .text{
            color: ${(props: any) =>
              props.outline ? `${props.textcolor};` : `${props.textcolor};`}
            
          }
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
    animation: ripple 1s;
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

const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  icon,
  to,
  iconOnly = "false",
  corners = "box",
  background = "primary",
  hoverColor,
  iconColor = "#ffffff",
  textColor = "#ffffff",
  iconRight = "false",
  transparent = "false",
  gradient = "false",
  size = "sm",
  className,
  ...props
}) => {
  const refs: any = useRef()

  const Theme = useTheme()

  const addPulse = useCallback(
    e => {
      const button: HTMLElement = refs.current

      let x = e.clientX - button.getBoundingClientRect().left
      let y = e.clientY - button.getBoundingClientRect().top

      const span: HTMLSpanElement = document.createElement("span")
      span.style.top = y + "px"
      span.style.left = x + "px"
      button.append(span)

      setTimeout(() => {
        button.removeChild(span)
      }, 1000)
    },
    [refs]
  )

  // create ripple effects when button clicked
  useEffect(() => {
    const button: HTMLElement = refs.current

    button.addEventListener<"click">("click", addPulse)
    return () => {
      button.removeEventListener("click", addPulse, false)
    }
  }, [addPulse])

  const getStyleFromCornersProps: Function = (): any => {
    switch (corners) {
      case "rounded":
        return { borderRadius: "50px" }
      case "box":
        return size === "lg" ? { borderRadius: "11px" } : { borderRadius: "5px" }
      default:
        throw new Error("corners only accepts 'box, and rounded' as values")
    }
  }

  const getStyleFromSizeProps: Function = (): any => {
    switch (size) {
      case "xs":
        return { padding: "6px 12px", iconPadding: "4px" }
      case "sm":
        return { padding: "11.5px 24px", iconPadding: "9px" }
      case "md":
        return { padding: "14.5px 28px", iconPadding: "12px" }
      case "lg":
        return { padding: "16px 33px", iconPadding: "14px" }
      default:
        throw new Error("corners only accepts 'box, and rounded' as values")
    }
  }

  const getStyleFromBackgroundProps: Function = (): any => {
    const supportedColors = [
      "primary",
      "success",
      "info",
      "danger",
      "warning",
      "transparent",
      "white",
      "dark",
    ]
    if (supportedColors.includes(background.trim())) {
      return {
        backgroundGradient:
          gradient &&
          `linear-gradient(138deg,${Theme.colors[background.trim()]}, ${rgba(
            Theme.colors[background.trim()],
            0.625
          )})`,
        background: Theme.colors[background.trim()],
      }
    } else {
      return {
        backgroundGradient:
          gradient &&
          `linear-gradient(138deg,${background.trim()}, ${rgba(
            background.trim(),
            0.625
          )})`,
        background,
      }
    }
  }

  const isObject: Function = (object: any): boolean =>
    typeof object === "object"

  const updateProps: Function = (value: any): any => {
    if (value && isObject(value)) {
      return (props = Object.assign(props, value))
    }
    throw new Error("value must be an object")
  }
  const getIconStyle: Function = (): any => {
    if (iconOnly) return { margin: "0", padding: "1px" }
    return iconRight ? { marginLeft: "5px" } : { marginRight: "5px" }
  }

  updateProps(getStyleFromCornersProps())
  updateProps(getStyleFromSizeProps())
  updateProps(getStyleFromBackgroundProps())
  if (background === "white" && textColor === "#ffffff") {
    updateProps({ textColor: "#222222" })
  }
  updateProps({ textColor: textColor, iconRight, iconOnly })

  const formatObjKeysToLowercase = (obj): any => {
    let formatedObj = {}
    for (let i in obj) {
      formatedObj[i.toLocaleLowerCase()] = obj[i] + ""
    }
    return formatedObj
  }

  return (
    <Button1
      to={to}
      background={background}
      transparent={transparent}
      {...formatObjKeysToLowercase(props)}
      className={className}
      ref={refs}
    >
      {icon && (
        <Icon
          className="rap-ico"
          path={path[icon]}
          size={0.75}
          color={iconColor}
          style={getIconStyle()}
        />
      )}
      {!(iconOnly === "true") && children}
    </Button1>
  )
}

export default LinkButton
