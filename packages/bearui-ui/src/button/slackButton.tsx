import { mdiSlack } from "@mdi/js"
import React from "react"
import { SlackSocialButton } from "../types"
import Button from "./button"

/**
 * How it works!!
 * background - if border is true set background to transparent else check if backgroundGradient is set or background is set
 * border - if outline is true set border to borderColor or background else set to none
 */

const SlackButton: React.FC<SlackSocialButton> = ({
  text = "Sign in with Slack",
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
      background = "#dd1aac"
      break
    }
    case "yellow": {
      textColor = "#fff"
      background = "#f8e30e"
      break
    }
    default: {
      textColor = "#dd1aac"
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
      icon={mdiSlack}
      textColor={textColor}
      style={style}
      onClick={onClick}
      {...props}
    >
      {children || text}
    </Button>
  )
}

export default SlackButton
