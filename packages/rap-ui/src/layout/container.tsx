import React, { HTMLAttributes } from "react"
import styled, { StyledComponent } from "styled-components"

export type ContainerProps = { gap?: string } & HTMLAttributes<HTMLDivElement>

const ContainerDiv: StyledComponent<"div", any> = styled.div`
  width: calc(100% - 30px);
  display: flex;
  flex-wrap: wrap;
  margin: 15px;
  text-align: left;
  align-items: flex-start;

  > .rap-card {
    margin: 10px;
    display: inline-flex;
    flex-wrap: wrap;
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

const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return <ContainerDiv {...props}>{children}</ContainerDiv>
}
export default Container
