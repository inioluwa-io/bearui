import React from "react"
import styled from "styled-components"
import { FlexColumnProps } from "../types"

type ColumnStyleProps = {
  marginBottom: string
  align: {
    alignItems: string
  }
}

const ColumnContainer: any = styled.div`
  display: flex;
  flex-direction: column;
  // width: 100%;
  ${(props: ColumnStyleProps) =>
    props.align.alignItems === "stretch" && "width:100%"};
  align-items: ${(props: ColumnStyleProps) => props.align.alignItems};

  > :not(:last-child) {
    margin-bottom: ${(props: ColumnStyleProps) => props.marginBottom};
  }

  > * {
    // width:100%;
  }
`

const FlexColumn: React.FC<FlexColumnProps> = ({
  children,
  align = "stretch",
  gap = "20px",
  ...props
}) => {
  const formAlignment = (align): any => {
    switch (align) {
      case "left":
        return { alignItems: "flex-start" }
      case "center":
        return { alignItems: "center" }
      case "stretch":
        return { alignItems: "stretch" }
      case "right":
        return { alignItems: "flex-end" }
      default:
        throw new Error(
          `${align} not supported. Use either left, center, stretch or right`
        )
    }
  }

  return (
    <ColumnContainer {...props} align={formAlignment(align)} marginBottom={gap}>
      {children}
    </ColumnContainer>
  )
}
export default FlexColumn
