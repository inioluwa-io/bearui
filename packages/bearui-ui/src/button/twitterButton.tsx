import { mdiTwitter } from "@mdi/js"
import React from "react"
import { FacebookSocialButton } from "../types"
import Button from "./button"

/**
 * How it works!!
 * background - if border is true set background to transparent else check if backgroundGradient is set or background is set
 * border - if outline is true set border to borderColor or background else set to none
 */

const TwitterButton: React.FC<FacebookSocialButton> = ({
  text = "Sign in with Twitter",
  color = "blue",
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
    case "blue": {
      textColor = "#fff"
      background = "#16a0ca"
      break
    }
    default: {
      textColor = "#16a0ca"
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
      icon={mdiTwitter}
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

export default TwitterButton
