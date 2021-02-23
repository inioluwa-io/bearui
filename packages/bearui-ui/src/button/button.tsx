import React, { useRef, useEffect, useCallback } from "react"
import { ButtonProps } from "../types"
import styled from "styled-components"
import { lighten, rgba, darken } from "polished"
import Icon from "@mdi/react"
import { useTheme } from "../theme"

/**
 * How it works!!
 * background - if border is true set background to transparent else check if backgroundGradient is set or background is set
 * border - if outline is true set border to borderColor or background else set to none
 */

const Button1: any = styled.button`
font-family: inherit;
  position:relative;
  background: ${(props: any) => {
    if (props.transparent) {
      return rgba(props.background, 0.175)
    } else {
      if (props.outline) {
        return "transparent"
      } else {
        return props.backgroundGradient || props.background
      }
    }
  }};
  color: ${(props: any) => {
    if (props.transparent) {
      return props.background
    } else {
      return props.outline ? props.background : props.textColor
    }
  }};
  font-size: 13px;
  padding: ${(props: any) =>
    !props.iconOnly ? props.padding : props.iconPadding};
  border-radius: ${(props: any) => props.borderRadius};
  cursor: pointer;
  display:flex;
  align-items: center;
  justify-content:center;
  flex-direction ${(props: any) => (props.iconRight ? "row-reverse" : "row")};
  transition: background 0.25s ease, border 0.25s ease;
  border: ${(props: any) => {
    if (props.transparent) {
      return "none"
    } else {
      return props.outline
        ? "1px solid " + (props.borderColor || props.background)
        : "none"
    }
  }};
  box-shadow: 0 9px 35px -7px ${(props: any) =>
    props.glow ? darken(0.13, props.background) : "transparent"};
  overflow:hidden;
  box-sizing: border-box;

  &:disabled {
    background: ${(props: any) =>
      !props.border
        ? lighten(0.1, props.background)
        : "transparent"} !important;
    cursor:not-allowed;
  }

  svg path {
    transition: fill 0.25s ease;
  }
  
  .text {
    transition: color 0.25s ease !important;
  }

  .rap-ico, .rap-loa{
    margin-top:-0.8px;
    margin-bottom:-0.8px;
  }
  
  &:hover, &:focus{
    ${(props: any) => {
      if (props.transparent) {
        return `background: ${props.background};`
      } else {
        if (props.outline) {
          return `background: ${props.background};
        color: ${props.textColor};`
        } else {
          if (!props.backgroundGradient) {
            return (
              "background:" +
              darken(0.05, props.background) +
              ";" +
              `color:${props.textColor};
              border:1px solid ${darken(0.05, props.background)}
              border:none;`
            )
          }
        }
      }
    }}

          .text{
            color: ${(props: any) =>
              props.outline ? `${props.textColor};` : `${props.textColor};`}
          }

          svg path{
            fill: ${(props: any) => {
              if (props.transparent) {
                return `${props.textColor} !important`
              } else {
                if (props.outline) {
                  return `${props.textColor} !important`
                }
              }
            }}
          }
  }

  &:focus{
    outline:none;
  }

  span:not(.text){
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
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .text{
    color: inherit;
  }

  &.loading{
    background: ${(props: any) => lighten(0.1, props.background)};
    border: 1px solid ${(props: any) =>
      rgba(lighten(0.1, props.background), 0.045)};
      border: none;
    .rap-core, .text, svg{
      visibility:hidden;
    }
    
    .rap-cus-loa{
      visibility:visible;
      position:absolute;
      display:flex;
      justify-content:center;
      align-items:center;

      svg{
        position: absolute;
        visibility:visible;
      }
    }
    .rap-loa {
      animation: spin .45s linear infinite;
      visibility:visible;
      position:absolute;

      *{
        visibility:visible;
      }
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
  iconColor = "#ffffff",
  textColor = "#ffffff",
  iconRight = false,
  gradient = false,
  size = "sm",
  loadingIcon = "mdiLoading",
  loading = false,
  transparent = false,
  className,
  ...props
}) => {
  const refs: any = useRef()

  const [theme] = useTheme()
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
        return size === "lg"
          ? { borderRadius: "16px" }
          : { borderRadius: "10px" }
      default:
        throw new Error("corners only accepts 'box, and rounded' as values")
    }
  }

  const getStyleFromSizeProps: Function = (): any => {
    switch (size) {
      case "xs":
        return { padding: "6px 12px", iconPadding: "4px" }
      case "sm":
        return { padding: "11.5px 24px", iconPadding: "9.8px" }
      case "md":
        return { padding: "14.5px 28px", iconPadding: "12px" }
      case "lg":
        return { padding: "16px 33px", iconPadding: "14px" }
      default:
        throw new Error("corners only accepts 'box, and rounded' as values")
    }
  }

  const getStyleFromBackgroundProps: Function = (): any => {
    if (supportedColors.includes(background.trim())) {
      return {
        backgroundGradient:
          gradient &&
          `linear-gradient(138deg,${theme.colors[background.trim()]}, ${rgba(
            theme.colors[background.trim()],
            0.625
          )})`,
        background: theme.colors[background.trim()],
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

  return (
    <Button1
      transparent={transparent}
      {...props}
      ref={refs}
      className={loading ? "loading " + className : className}
    >
      {loading && (
        <Icon
          className="rap-loa"
          path={loadingIcon}
          color={
            transparent
              ? getStyleFromBackgroundProps().background
              : props.outline
              ? getStyleFromBackgroundProps().background
              : iconColor
          }
          size={size === "lg" ? 1 : 0.725}
          style={getIconStyle()}
        />
      )}
      {icon && (
        <Icon
          className="rap-ico"
          path={icon}
          color={
            transparent
              ? getStyleFromBackgroundProps().background
              : props.outline
              ? getStyleFromBackgroundProps().background
              : iconColor
          }
          size={size === "lg" ? 1 : 0.725}
          style={getIconStyle()}
        />
      )}
      {!iconOnly && <span className="text">{children}</span>}
    </Button1>
  )
}

export default Button
