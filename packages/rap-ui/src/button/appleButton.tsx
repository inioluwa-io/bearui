import React from "react"
import { AppleSocialButton } from "../types"
import Button from "./button"

/**
 * How it works!!
 * background - if border is true set background to transparent else check if backgroundGradient is set or background is set
 * border - if outline is true set border to borderColor or background else set to none
 */

const AppleButton: React.FC<AppleSocialButton> = ({
  text = "Sign in with Apple",
  corners = "box",
  onClick,
  color = "dark",
  style = {},
  children,
}) => {
  Object.assign(style, { fontFamily: "Roboto", fontSize: "16px" })
  return (
    <Button
      background={color}
      size={"sm"}
      icon="mdiApple"
      corners={corners}
      textColor={color === "white" ? "#000" : "#fff"}
      iconColor={color === "white" ? "#000" : "#fff"}
      onClick={onClick}
      style={style}
    >
      {children || text}
    </Button>
  )
}

export default AppleButton
