import React from "react"
import { SocialButtonProps } from "../types"
import Button from "./button"

/**
 * How it works!!
 * background - if border is true set background to transparent else check if backgroundGradient is set or background is set
 * border - if outline is true set border to borderColor or background else set to none
 */

const GoogleButton: React.FC<SocialButtonProps> = ({
  text = "Sign in with Google",
  children,
  style
}) => {
  Object.assign(style, { fontFamily: "Open sans", fontWeight: "500" })
  return (
    <Button
      background="white"
      size={"sm"}
      iconColor="red"
      icon="mdiGoogle"
      textColor = "#333"
      style={style}
    >
      {children || text}
    </Button>
  )
}

export default GoogleButton
