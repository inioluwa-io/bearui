import React from "react"
import styled from "styled-components"
import { RowProps, yPositionProps, xPositionProps } from "../types"

type StylePosition = {
  alignItems: string
  alignSelf: string
}

type RowStyleProps = {
  marginRight: string
  center: boolean
  position: StylePosition
}

const RowContainer: any = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: ${(props: RowStyleProps) => props.position.alignItems};
  justify-content: ${(props: RowStyleProps) => props.position.alignSelf};

  > :not(:last-child) {
    margin-right: ${(props: RowStyleProps) => props.marginRight};
  }
  > input {
    flex-basis: 100%;
    width: 100%;
  }
`

const Row: React.FC<RowProps> = ({
  children,
  yPosition = "center",
  xPosition = "center",
  center,
  gap = "20px",
}) => {
  const calculateYPosition = (position: yPositionProps) => {
    switch (position) {
      case "center":
        return "center"
      case "top":
        return "flex-start"
      case "bottom":
        return "flex-end"
      default:
        return "flex-start"
    }
  }
  const calculateXPosition = (position: xPositionProps) => {
    switch (position) {
      case "center":
        return "center"
      case "left":
        return "flex-start"
      case "right":
        return "flex-end"
      default:
        return "flex-start"
    }
  }
  const getPosition = (): StylePosition => {
    let alignItems = ""
    let alignSelf = ""

    if (center) {
      alignItems = "center"
      alignSelf = "center"
    } else {
      alignItems = calculateYPosition(yPosition)
      alignSelf = calculateXPosition(xPosition)
    }
    return { alignItems, alignSelf }
  }
  return (
    <RowContainer center={center} position={getPosition()} marginRight={gap}>
      {children}
    </RowContainer>
  )
}
export default Row
