import React from "react"
import styled, { StyledComponent } from "styled-components"

type ContainerStyledProps = { margin }

export type ContainerProps = { gap: string }

const ContainerDiv: StyledComponent<
  "div",
  any,
  ContainerStyledProps
> = styled.div`
  width: calc(100% - 40px);
  display: block;
  margin: 0 ${(props: ContainerStyledProps) => props.margin};
  text-align: left;

  > .rap-card {
    margin:10px;
    display: inline-block;
  }
`

const Container: React.FC<ContainerProps> = ({ children, gap = "20px" }) => {
  return <ContainerDiv margin={gap}>{children}</ContainerDiv>
}
export default Container
