import React from "react"
import { AppleSocialButton } from "../types"
import Button from "./button"

/**
 * How it works!!
 * background - if border is true set background to transparent else check if backgroundGradient is set or background is set
 * border - if outline is true set border to borderColor or background else set to none
 */

const CodepenButton: React.FC<AppleSocialButton> = ({
  text = "Sign in with CodePen",
  corners = "box",
  onClick,
  color = "dark",
  gradient = false,
  iconOnly = false,
  size = "sm",
  children,
  ...props
}) => {
  let style = {
    fontFamily: "Roboto",
    fontSize: "13px",
    lineHeight: "19px",
  }
  return (
    <Button
      background={color}
      size={size}
      icon="mdiCodepen"
      gradient={gradient}
      corners={corners}
      iconOnly={iconOnly}
      textColor={color === "white" ? "#000" : "#fff"}
      iconColor={color === "white" ? "#000" : "#fff"}
      onClick={onClick}
      style={style}
      {...props}
    >
      {children || text}
    </Button>
  )
}

export default CodepenButton
