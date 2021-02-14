import { FlexRow, Container, Card, FlexColumn } from "@bearui/ui"
import React from "react"
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

const DocInstallation: React.FC = () => {
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
        <h1>Installation</h1>
        <p className="description">
          You need to have the following tools before running the app.
        </p>

        <ul>
          <li>
            <a href="https://nodejs.org/en/">Node.js</a>
          </li>
          <li>
            <a href="https://yarnpkg.com/">Yarn</a>
          </li>
        </ul>

        <FlexColumn gap="10px">
          <h5>Installing the packages</h5>
          <p>
            In the root directory run <code>npm install</code>{" "}
            <code>yarn install</code> to install all dependencies.
          </p>
        </FlexColumn>

        <FlexColumn gap="10px">
          <h5>Starting up</h5>
          <p>
            You may have to link and bootstrap all local yarn packages. In the
            root directory run <code>lerna bootstrap</code> and{" "}
            <code>lerna link</code>. After successful linking and bootstrapping
            run <code>yarn start</code> to run the project on the local server.
            By default, it will run on http://localhost:3000.
          </p>
        </FlexColumn>
      </Card>
    </DocumentationContainer>
  )
}

export default DocInstallation
