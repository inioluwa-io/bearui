import React from "react"
import styled from "styled-components"

type ColumnStyleProps = { marginBottom }

const ColumnContainer: any = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: flex-start;

  > :not(:last-child) {
    margin-bottom: ${(props: ColumnStyleProps) => props.marginBottom};
  }
`

const Column: React.FC<any> = ({ children, gap = "20px" }) => {
  return <ColumnContainer marginBottom={gap}>{children}</ColumnContainer>
}
export default Column
