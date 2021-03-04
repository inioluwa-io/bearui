import { FlexRow, Container, Card, FlexColumn } from "@bearui/ui"
import React from "react"
import documentationNavConfig from "./navConfig"
import styled from "styled-components"

const DocumentationContainer: any = styled(Container)`
  h1 {
    font-size: 0.83em;
  }
  p,
  li {
    font-size: 15px;
    line-height: 1.5rem;
  }
  .description {
  }
  li {
    display: block;
  }
`

const Documentation: React.FC = () => {
  return (
    <DocumentationContainer>
      <Card withBackground={false} xsCol="12">
        <FlexRow gap="10px" position="center" align="left">
          <h3 style={{ borderRight: "1px solid #999", paddingRight: "12px" }}>
            Documentation
          </h3>
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h1>Introduction</h1>
        <p className="description">
          <strong>BearUI</strong> is a developer friendly and scalable admin
          template built with react and modern tech stack. It includes 30+
          in-built UI components, Hooks with ease of integration for your
          project and many other features. BearUI can be used to build any
          modern application.
        </p>

        <FlexColumn gap="10px">
          <h5>Core libraries used</h5>
          <ul>
            <li>Create React App</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Redux</li>
            <li>ra-core</li>
            <li>ra-data-simple-rest</li>
            <li>Redux Thunk</li>
            <li>Styled Components</li>
            <li>React Apexcharts</li>
            <li>React Charts</li>
            <li>Polished</li>
            <li>Material design icons</li>
          </ul>
        </FlexColumn>
      </Card>
    </DocumentationContainer>
  )
}

export default Documentation
export { documentationNavConfig }
