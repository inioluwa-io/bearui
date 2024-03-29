import React from "react"
import { AvatarProps } from "../types"
import styled from "styled-components"
import { isObject } from "../util"
import { useTheme } from "../theme"
import { saturate, rgba } from "polished"
import Icon from "@mdi/react"

const AvatarComponent: any = styled.div`
  width: ${(props: any) => props.size} !important;
  height: ${(props: any) => props.size} !important;
  position: relative;
  border-radius: ${(props: any) => +props.size.split("px").join("") / 3}px;
  background: ${(props: any) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 12px;
    line-height: 0;
  }
`
const AvatarImgComponent: any = styled.img`
  position: absolute;
  min-width: 100%;
  max-width: 120%;
  min-height: 100%;
`
const AvatarImgContainer: any = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  overflow: hidden;
  border-radius: ${(props: any) => +props.size.split("px").join("") / 3}px;
  align-items: center;
  height: 100%;
`

const BadgeComponent: any = styled.div`
  position: absolute;
  z-index: 99;
  font-size: 0;
  top: 0;
  right: -4px;

  span {
    position: relative;
    line-height: 12px;
    font-size: 12px;
    width: fit-content;
    height: fit-content;
    text-align: center;
    padding: 1px 2px;
    border-radius: 3px;
    background: ${(props: any) => props.background};
  }
`

const StatusComponent: any = styled.div`
  position: absolute;
  z-index: 9;
  bottom: ${(props: any) => props.size / 20}px;
  right: ${(props: any) => props.size / 20}px;
  width: 10px;
  height: 10px;
  padding: ${(props: any) => props.size / 12}px;
  background: ${(props: any) => saturate(0.1, props.background)};
  border-radius: ${(props: any) => props.size / 2}px;
  box-shadow: 0 0 5px
    ${(props: any) => rgba(saturate(0.8, props.background), 0.3)};
`

const Avatar: React.FC<AvatarProps> = ({
  text,
  src,
  textColor,
  withBadge,
  withStatus = false,
  statusColor = "success",
  badgeText,
  badgeColor = "primary",
  size = "sm",
  color = "#9f9f9f",
  alt,
  icon,
  ...props
}) => {
  if (!text && !icon && !src) {
    throw new SyntaxError("Either text or src must be present")
  }
  if (color === "white" && !textColor) {
    textColor = "#222222"
  }
  const [theme] = useTheme()

  const getBackgroundColor: Function = (color: string): any => {
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
    if (supportedColors.includes(color.trim())) {
      return theme.colors[color.trim()]
    } else {
      return color
    }
  }

  const getAvatarSize: Function = (): string => {
    switch (size) {
      case "xs":
        return "30px"
      case "sm":
        return "38px"
      case "md":
        return "50px"
      case "lg":
        return "70px"
      default:
        return size
    }
  }

  const updateProps: Function = (value: any): any => {
    if (value && isObject(value)) {
      return (props = Object.assign(value, props))
    }
    throw new Error("value must be an object")
  }

  updateProps({ color: getBackgroundColor(color) })

  const formatText: Function = (text: string): string => {
    const splitText: string[] = text.split(" ")
    let joinedText: string = ""
    if (splitText.length > 1) {
      for (const i in splitText) {
        if (i === "4") break
        joinedText += splitText[i][0]
      }
    } else {
      joinedText = splitText[0]
    }
    return joinedText.split("").splice(0, 5).join("")
  }

  updateProps({ size: getAvatarSize() })

  if (withBadge && !badgeText) {
    throw new SyntaxError("badgeText cannot be empty when withBadge is true")
  }
  const calculatedSize = +getAvatarSize().split("px").join("") / 3
  return (
    <AvatarComponent {...props} className="sc-avatar">
      {withBadge && (
        <BadgeComponent background={getBackgroundColor(badgeColor)}>
          {<span style={{ color: "#ffffff" }}>{badgeText}</span>}
        </BadgeComponent>
      )}
      {withStatus && (
        <StatusComponent
          size={calculatedSize}
          background={getBackgroundColor(statusColor)}
        />
      )}
      {!src ? (
        icon ? (
          <Icon path={icon} color={textColor} size={0.8} />
        ) : (
          <span style={{ color: textColor || "#ffffff" }}>
            {formatText(text)}
          </span>
        )
      ) : (
        <AvatarImgContainer size={getAvatarSize()}>
          <AvatarImgComponent src={src} alt={alt || ""} />
        </AvatarImgContainer>
      )}
    </AvatarComponent>
  )
}
export default Avatar
