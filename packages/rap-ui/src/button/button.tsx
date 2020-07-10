import React from "react"
import { ButtonProps } from "../types"
import styled from "styled-components"

const Button1: any = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props: any) => (props.primary ? "palevioletred" : "white")};
  color: ${(props: any) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const Button: React.FC<ButtonProps> = ({
  children,
  styleType = 1,
  hoverColor,
  size = "xs",
  ...props
}) => {
  return (
    <React.Fragment>
      <Button1 {...props}>{children}</Button1>
    </React.Fragment>
  )
}

export default Button
