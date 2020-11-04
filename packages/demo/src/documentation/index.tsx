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
      <Card mdCol="9" smCol="8" xsCol="12">
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
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
            </tbody>
          </table>
        </FlexColumn>
        <FlexColumn id="button">
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
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
            </tbody>
          </table>
        </FlexColumn>
        <FlexColumn id="breadcrumb">
          <h5>Breadcrumb</h5>
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
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
            </tbody>
          </table>
        </FlexColumn>
        <FlexColumn id="aveatar">
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
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>false</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
            </tbody>
          </table>
        </FlexColumn>
      </Card>
    </DocumentationContainer>
  )
}

export default Documentation
