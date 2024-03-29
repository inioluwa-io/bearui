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
  flex-wrap: wrap;
  // flex: 1;
  margin: ${(props: RowStyleProps) => `-${props.marginRight} 0 0 -${props.marginRight}` };
  flex-direction: row;
  width: calc(100% + ${(props: RowStyleProps) => props.marginRight});
  align-items: ${(props: RowStyleProps) => props.position.alignItems};
  justify-content: ${(props: RowStyleProps) => props.position.alignSelf};

  > * {
    margin: ${(props: RowStyleProps) => `${props.marginRight} 0 0 ${props.marginRight}`};
  }

  > :not(:last-child) {
    // margin-right: ${(props: RowStyleProps) => props.marginRight};
  }
  > input {
    flex-basis: 100%;
    width: 100%;
  }
  ${(props: RowStyleProps) =>
    props.position.alignSelf === "space-between" &&
    `
    > div {
      width:auto;
      // flex:auto;
    }
    `};
  ${(props: RowStyleProps) =>
    props.position.alignSelf === "stretch" &&
    `
    > * {
      flex:1 1;
    }
    `};

  @media (max-width: 768px) {
    // width: calc(100% - 10px);
    // padding: 5px;
  }

  @media (max-width: 441px) {
    // width: 100%;
    // padding: 0;
  }
`

/**
 *
 * Controls the alignment of row flex-direction of an element
 */

const FlexRow: React.FC<RowProps> = ({
  children,
  position = "center",
  align = "left",
  center,
  gap = "20px",
  ...props
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
      case "space":
        return "space-between"
      case "stretch":
        return "stretch"
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
      alignItems = calculateYPosition(position)
      alignSelf = calculateXPosition(align)
    }
    return { alignItems, alignSelf }
  }
  return (
    <RowContainer
      {...props}
      center={center}
      position={getPosition()}
      marginRight={gap}
    >
      {children}
    </RowContainer>
  )
}
export default FlexRow
