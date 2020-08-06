import React from "react"
import styled from "styled-components"

type RowStyleProps = { marginRight }

const RowContainer: any = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  align-self: flex-start;

  > :not(:last-child) {
    margin-right: ${(props: RowStyleProps) => props.marginRight};
  }
`

const Row: React.FC<any> = ({ children, gap = "20px" }) => {
  return <RowContainer marginRight={gap}>{children}</RowContainer>
}
export default Row
