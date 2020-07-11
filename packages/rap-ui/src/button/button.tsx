import React from "react"
import { ButtonProps } from "../types"
import styled from "styled-components"
import { error } from "console"

const Button1: any = styled.button`
  background: transparent;
  color: palevioletred;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: ${(props: any) => props.borderRadius};
`

const Button: React.FC<ButtonProps> = ({
  children,
  corners = "box",
  hoverColor,
  size = "xs",
  ...props
}) => {
  const getButtonStyleOptionsFromStyleType: any = () => {
    switch (corners) {
      case "rounded":
        return { borderRadius: "50px" }
      case "box":
        return { borderRadius: "7px" }
      default:
        throw new Error("corners only accepts 'box, and rounded' as values")
    }
  }
  const isObject: Function = (object: any): boolean =>
    typeof object === "object"

  const updateProps: Function = (value: any): any => {
    if (value && isObject(value)) {
      return (props = Object.assign(value, props))
    }
    throw new Error("value must be an object")
  }

  updateProps(getButtonStyleOptionsFromStyleType())

  return (
    <React.Fragment>
      <Button1 {...props}>{children}</Button1>
    </React.Fragment>
  )
}

export default Button
