import { mdiGoogle } from "@mdi/js"
import React from "react"
import { GoogleSocialButton } from "../types"
import Button from "./button"

/**
 * How it works!!
 * background - if border is true set background to transparent else check if backgroundGradient is set or background is set
 * border - if outline is true set border to borderColor or background else set to none
 */

const GoogleButton: React.FC<GoogleSocialButton> = ({
  text = "Sign in with Google",
  color = "red",
  corners = "box",
  iconOnly = false,
  gradient = false,
  onClick,
  size = "sm",
  children,
  ...props
}) => {
  let textColor: string = ""
  let background: string = ""

  // set textColor and background according to color theme
  switch (color) {
    case "red": {
      textColor = "#fff"
      background = "#cc2929"
      break
    }
    case "blue": {
      textColor = "#fff"
      background = "#3c5eff"
      break
    }
    default: {
      textColor = "#f92a2a"
      background = "#fff"
    }
  }
  let style = { fontFamily: "Open sans", fontWeight: 400 }

  return (
    <Button
      background={background}
      size={size}
      iconColor={textColor}
      corners={corners}
      gradient={gradient}
      icon={mdiGoogle}
      iconOnly={iconOnly}
      textColor={textColor}
      style={style}
      {...props}
      onClick={onClick}
    >
      {children || text}
    </Button>
  )
}

export default GoogleButton
