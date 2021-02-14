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

const DocRouting: React.FC = () => {
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
        <h1>Routing</h1>
        <p className="description">
          <strong>BearUI</strong> uses{" "}
          <a href="https://reactrouter.com/">react-router</a> as routing system.
          To add new routes, follow the steps below.
        </p>

        <FlexColumn gap="10px">
          <h5>Create new route</h5>
          <p className="description">
            All routes pages are placed in the{" "}
            <code>packages/demo/src/routes/index.tsx</code> file.
          </p>
          <pre>
            <code>
              {`import React, { lazy } from 'react';

const myNewComponent = lazy(() => import('myNewComponentRoute'))

const Routes = () => (
	<Switch>
		<Route path="myNewComponent" component={myNewComponent} />
	</Switch>
);

export default Apps;

`}
            </code>
          </pre>
        </FlexColumn>

        <FlexColumn gap="10px">
          <h5>Navigating</h5>
          <p className="description">
            All routes pages are placed in the{" "}
            <code>packages/demo/src/routes/index.tsx</code> file.
          </p>
          <pre>
            <code>
              {`import {mdiHomeOutline} from "@mdi/js"

export type NavigationConfigProps = {
  headMenu?: string
  key: string
  path: string
  pathProps?: any
  title: string
  icon?: string
  breadcrumb?: false
  subMenu: NavigationConfigProps[]
}

const navigationConfig: NavigationConfigProps[] = [
  {
    key: "dashboard",
    path: "",
    title: "Dashboard",
    icon: mdiHomeOutline,
    breadcrumb: false,
    subMenu: []
  }
]


export default navigationConfig;

`}
            </code>
          </pre>
        </FlexColumn>
      </Card>
    </DocumentationContainer>
  )
}

export default DocRouting
