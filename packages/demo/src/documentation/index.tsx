import { FlexRow, Container, Card, Collapse, FlexColumn } from "@rap/ui"
import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const DocumentationContainer: any = styled(Container)`
  .toc {
    position: sticky;
    top: 80px;
  }
  .content {
    li {
      padding: 0.3rem 0;
      display: block;
    }
  }
  .doc-main {
    table {
      border-collapse: collapse;

      th {
        padding: 10px 10px;
        font-size: 14px;
      }
      tbody {
        tr {
          td {
            border: 1px solid #aaaaaa55;
            padding: 10px 10px;
            font-size: 14px;
          }
        }
      }
    }
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
      <Card mdCol="3" smCol="4" className="toc">
        <h5>Table of Content</h5>
        <Collapse
          icon="mdiChevronRight"
          items={[
            {
              label: "Components",
              content: (
                <ul className="content">
                  <li>
                    <a href="#avatar">Avatar</a>
                  </li>
                  <li>
                    <a href="#breadcrumb">Breadcrumb</a>
                  </li>
                  <li>
                    <Link to="#button">Button</Link>
                  </li>
                  <li>
                    <Link to="#card">Card</Link>
                  </li>
                </ul>
              ),
            },
          ]}
        />
      </Card>
      <Card mdCol="9" smCol="8" xsCol="12" className="doc-main">
        <FlexColumn id="avatar">
          <h5>Avatar</h5>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Required</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>size</td>
                <td>"xs" | "sm" | "md" | "lg"</td>
                <td>no</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>withBadge</td>
                <td>boolean</td>
                <td>no</td>
                <td>-</td>
                <td>
                  Determines whether avatar should display a badge or not.
                </td>
              </tr>
            </tbody>
          </table>
        </FlexColumn>
      </Card>
    </DocumentationContainer>
  )
}

export default Documentation
