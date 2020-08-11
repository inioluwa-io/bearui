import React from "react"
import styled from "styled-components"

type GridColumnStyleProps = { marginBottom }

const GridColumnContainer: any = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: "col-1 col-1 col-1 . . . . . . . . . ";
  width: min-content;
  > {
  }
`

const GridColumn: React.FC<any> = ({ children, gap = "20px" }) => {
  return (
    <GridColumnContainer marginBottom={gap}>{children}</GridColumnContainer>
  )
}
export default GridColumn
