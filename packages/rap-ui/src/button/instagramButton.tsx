import React from "react"
import { InstagramSocialButton } from "../types"
import Button from "./button"

/**
 * How it works!!
 * background - if border is true set background to transparent else check if backgroundGradient is set or background is set
 * border - if outline is true set border to borderColor or background else set to none
 */

const InstagramButton: React.FC<InstagramSocialButton> = ({
  text = "Sign in with Instagram",
  color = "purple",
  corners = "box",
  onClick,
  iconOnly = false,
  gradient = false,
  size = "sm",
  children,
  ...props
}) => {
  let textColor: string = ""
  let background: string = ""

  // set textColor and background according to color theme
  switch (color) {
    case "purple": {
      textColor = "#fff"
      background = "#eb2671"
      break
    }
    default: {
      textColor = "#eb2671"
      background = "#fff"
    }
  }

  let style = {
    fontFamily: "Roboto",
    fontSize: "13px",
  }
  return (
    <Button
      background={background}
      size={size}
      iconColor={textColor}
      corners={corners}
      gradient={gradient}
      iconOnly={iconOnly}
      icon="mdiInstagram"
      textColor={textColor}
      style={style}
      onClick={onClick}
      {...props}
    >
      {children || text}
    </Button>
  )
}

export default InstagramButton
