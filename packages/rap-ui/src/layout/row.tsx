import React from "react"
import styled from "styled-components"
import { CardProps } from "../types"

const RowContainer: any = styled.div`
  width: 100%;
  position: relative;
`

const Row: React.FC = ({ children }) => {
  return <RowContainer className="row">{children}</RowContainer>
}

export default Row
