import React from "react"
import styled, { StyledComponent } from "styled-components"

export type ContainerProps = { gap?: string }

const ContainerDiv: StyledComponent<"div", any> = styled.div`
  width: calc(100% - 20px);
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  text-align: left;

  > .rap-card {
    margin: 10px;
    display: inline-block;
  }

  @media (max-width: 768px) {
    width: calc(100% - 10px);
    margin: 5px;
  }

  @media (max-width: 441px) {
    margin: 0;
    width: 100%;

    > .rap-card {
      margin: 0.5px 0;
    }
  }
`

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <ContainerDiv>{children}</ContainerDiv>
}
export default Container
