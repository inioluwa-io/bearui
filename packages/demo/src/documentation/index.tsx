import { FlexRow, Container, Card, Collapse, FlexColumn } from "@rap/ui"
import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const DocumentationContainer: any = styled(Container)`
  .toc {
    position: sticky;
    top: 30px;
    // z-index:9;
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
      <Card mdCol="3" smCol="4" xsCol="12" className="toc">
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
                    <a href="#button">Button</a>
                  </li>
                  <li>
                    <a href="#checkbox">Checkbox</a>
                  </li>
                  <li>
                    <a href="#chip">Chip</a>
                  </li>
                  <li>
                    <a href="#collapse">Collapse</a>
                  </li>
                  <li>
                    <a href="#datalist">Datalist</a>
                  </li>
                  <li>
                    <a href="#datatable">Datatable</a>
                  </li>
                  <li>
                    <a href="#dropdown">Dropdown</a>
                  </li>
                  <li>
                    <a href="#input">Input</a>
                  </li>
                  <li>
                    <a href="#textarea">TextArea</a>
                  </li>
                  <li>
                    <a href="#loader">Loader</a>
                  </li>
                  <li>
                    <a href="#modal">Modal</a>
                  </li>
                  <li>
                    <a href="#navbar">Navbar</a>
                  </li>
                  <li>
                    <a href="#pagination">Pagination</a>
                  </li>
                  <li>
                    <a href="#progress">Progress</a>
                  </li>
                  <li>
                    <a href="#radio">Radio</a>
                  </li>
                  <li>
                    <a href="#select">Select</a>
                  </li>
                  <li>
                    <a href="#switch">Switch</a>
                  </li>
                </ul>
              ),
            },
          ]}
        />
      </Card>
      <Card mdCol="9" smCol="8" xsCol="12" gap="100px" className="doc-main">
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
                <td>color</td>
                <td>sting</td>
                <td>no</td>
                <td>"#9f9f9f</td>
                <td>
                  Background color of the avatar. Accepts theme colors and
                  HEX/RGB colors
                </td>
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
              <tr>
                <td>text</td>
                <td>sting</td>
                <td>no</td>
                <td>-</td>
                <td>Text to be shown</td>
              </tr>
              <tr>
                <td>src</td>
                <td>sting</td>
                <td>no</td>
                <td>-</td>
                <td>Image src value</td>
              </tr>
              <tr>
                <td>textColor</td>
                <td>sting</td>
                <td>no</td>
                <td>-</td>
                <td>Color of the text.</td>
              </tr>
              <tr>
                <td>badgeColor</td>
                <td>sting</td>
                <td>no</td>
                <td>"primary"</td>
                <td>
                  Color of the badge. Accepts theme colors and HEX/RGB colors
                </td>
              </tr>
              <tr>
                <td>icon</td>
                <td>sting</td>
                <td>no</td>
                <td>-</td>
                <td>
                  This uses mdi Icons, check{" "}
                  <a href="/#" target="_blank" rel="noopener noreferrer">
                    mdi documentation
                  </a>
                </td>
              </tr>
              <tr>
                <td>withStatus</td>
                <td>boolean</td>
                <td>no</td>
                <td>false</td>
                <td>Shows avatar status icon. </td>
              </tr>
              <tr>
                <td>statusColor</td>
                <td>sting</td>
                <td>no</td>
                <td>"primary"</td>
                <td>
                  Color of the status. Accepts theme colors and HEX/RGB colors
                </td>
              </tr>
              <tr>
                <td>badgeText</td>
                <td>sting</td>
                <td>no</td>
                <td>-</td>
                <td>Text to be shown</td>
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
                <td>item</td>
                <td>{`{
                    name: string | ReactElement;
                    to:string
                 }[]`}</td>
                <td>no</td>
                <td>sm</td>
                <td>Size of the avatar</td>
              </tr>
              <tr>
                <td>color</td>
                <td>sting</td>
                <td>no</td>
                <td>"primary"</td>
                <td>
                  Color of the breadcrumb. Accepts theme colors and HEX/RGB
                  colors
                </td>
              </tr>
              <tr>
                <td>seperator</td>
                <td>string</td>
                <td>no</td>
                <td>"/"</td>
                <td>Symbol between each breadcrum Item.</td>
              </tr>
            </tbody>
          </table>
        </FlexColumn>

        <FlexColumn id="button">
          <h5>Button, LinkButton</h5>
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
                <td>icon</td>
                <td>sting</td>
                <td>no</td>
                <td>-</td>
                <td>
                  This uses mdi Icons, check{" "}
                  <a href="/#" target="_blank" rel="noopener noreferrer">
                    mdi documentation
                  </a>
                </td>
              </tr>
              <tr>
                <td>iconOnly</td>
                <td>boolean</td>
                <td>no</td>
                <td>false</td>
                <td>Hide text and show icon only.</td>
              </tr>
              <tr>
                <td>corners</td>
                <td>"box" | "rounded"</td>
                <td>no</td>
                <td>"box"</td>
                <td>Border radius styles of button.</td>
              </tr>
              <tr>
                <td>background</td>
                <td>string</td>
                <td>no</td>
                <td>"primary"</td>
                <td>
                  Background color of the button. Accepts theme colors and
                  HEX/RGB colors
                </td>
              </tr>
              <tr>
                <td>hoverColor</td>
                <td>string</td>
                <td>no</td>
                <td>-</td>
                <td>
                  Background hover color of the button. Accepts HEX/RGB colors
                </td>
              </tr>
              <tr>
                <td>iconColor</td>
                <td>string</td>
                <td>no</td>
                <td>"#ffffff</td>
                <td>
                  Color of the icon. Accepts theme colors and HEX/RGB colors
                </td>
              </tr>
              <tr>
                <td>textColor</td>
                <td>string</td>
                <td>no</td>
                <td>"#ffffff</td>
                <td>
                  Color of the text. Accepts theme colors and HEX/RGB colors
                </td>
              </tr>
              <tr>
                <td>iconRight</td>
                <td>boolean</td>
                <td>no</td>
                <td>false</td>
                <td>Show icon on the right side in the button.</td>
              </tr>
              <tr>
                <td>gradient</td>
                <td>boolean</td>
                <td>no</td>
                <td>false</td>
                <td>Changes background color to a gradient color.</td>
              </tr>
              <tr>
                <td>size</td>
                <td> "xs" | "sm" | "md" | "lg"</td>
                <td>no</td>
                <td>"sm"</td>
                <td>Size of the button.</td>
              </tr>
              <tr>
                <td>loadingIcon</td>
                <td> string</td>
                <td>no</td>
                <td>-</td>
                <td>
                  This uses mdi Icons, check{" "}
                  <a href="/#" target="_blank" rel="noopener noreferrer">
                    mdi documentation
                  </a>
                </td>
              </tr>
              <tr>
                <td>loading</td>
                <td> boolean</td>
                <td>no</td>
                <td>false</td>
                <td>Sets loading state style of button</td>
              </tr>
              <tr>
                <td>transparent</td>
                <td> boolean</td>
                <td>no</td>
                <td>false</td>
                <td>Sets background of button to transparent</td>
              </tr>
            </tbody>
          </table>
        </FlexColumn>
        <FlexColumn id="checkbox">
          <h5>Checkbox</h5>
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
                <td>disabled</td>
                <td>boolean</td>
                <td>no</td>
                <td>false</td>
                <td>Prevents user from interacting with the checkbox</td>
              </tr>
              <tr>
                <td>id</td>
                <td>sting</td>
                <td>no</td>
                <td>""</td>
                <td>Id of the checkbox.</td>
              </tr>
              <tr>
                <td>active</td>
                <td>boolean</td>
                <td>no</td>
                <td>false</td>
                <td>Sets the check state of the checkbox</td>
              </tr>
              <tr>
                <td>color</td>
                <td>sting</td>
                <td>no</td>
                <td>"primary"</td>
                <td>
                  Color of the Checkbox. Accepts theme colors and HEX/RGB colors
                </td>
              </tr>
              <tr>
                <td>onCheck</td>
                <td>function</td>
                <td>no</td>
                <td>-</td>
                <td>Callback function when active check state is changed.</td>
              </tr>
            </tbody>
          </table>
        </FlexColumn>
        <FlexColumn id="chip">
          <h5>Chip</h5>
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
                <td>closable</td>
                <td>boolean</td>
                <td>no</td>
                <td>false</td>
                <td>Shows a button to make chip closable or removeable</td>
              </tr>
              <tr>
                <td>items</td>
                <td>sting[]</td>
                <td>no</td>
                <td>-</td>
                <td>Render a list of chips</td>
              </tr>
              <tr>
                <td>color</td>
                <td>string</td>
                <td>no</td>
                <td>-</td>
                <td>
                  Changes color of the chips. Accepts theme colors and HEX/RGB
                  colors
                </td>
              </tr>
              <tr>
                <td>transparent</td>
                <td>boolean</td>
                <td>no</td>
                <td>false</td>
                <td>Makes chip background color transparent</td>
              </tr>
              <tr>
                <td>itemsPlaceholder</td>
                <td>string</td>
                <td>no</td>
                <td>"Add a chip here..."</td>
                <td>
                  Sets placeholder text of chips items. Can only be used if{" "}
                  <code>items</code> is set.
                </td>
              </tr>
              <tr>
                <td>onItemUpdate</td>
                <td>function</td>
                <td>no</td>
                <td>-</td>
                <td>
                  Callback function executed after each successful item update.
                  It passes new items as argument. Only works when{" "}
                  <code>items</code> is set
                </td>
              </tr>
              <tr>
                <td>onInputChange</td>
                <td>function</td>
                <td>no</td>
                <td>-</td>
                <td>
                  Callback function executed after text input change. It passes
                  the input <code>value</code> as argument. Only works when{" "}
                  <code>items</code> is set
                </td>
              </tr>
              <tr>
                <td>autoSuggestion</td>
                <td>string[]</td>
                <td>no</td>
                <td>-</td>
                <td> Adds a drop down for suggested texts.</td>
              </tr>
            </tbody>
          </table>
        </FlexColumn>
        <FlexColumn id="collapse">
          <h5>Collapse</h5>
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
                <td>items</td>
                <td>{`{
  label: ReactElement | string;
  content: ReactElement | string;
  disabled?: boolean;
  active?: boolean;}[]`}</td>
                <td>no</td>
                <td>-</td>
                <td>List of collapse element. </td>
              </tr>
              <tr>
                <td>accordion</td>
                <td>boolean</td>
                <td>no</td>
                <td>false</td>
                <td>Determines if collapse should be an accordion.</td>
              </tr>
              <tr>
                <td>listener</td>
                <td>"click" | "hover"</td>
                <td>no</td>
                <td>"click"</td>
                <td>Event listener type.</td>
              </tr>
              <tr>
                <td>icon</td>
                <td>string</td>
                <td>no</td>
                <td>-</td>
                <td>
                  This uses mdi Icons, check{" "}
                  <a href="/#" target="_blank" rel="noopener noreferrer">
                    mdi documentation
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </FlexColumn>
        <FlexColumn id="datalist">
          <h5>Datalist</h5>
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
                <td>document</td>
                <td>{`{
  [key: string]: any}[]`}</td>
                <td>yes</td>
                <td>-</td>
                <td>
                  Document(An array of objects) to be displayed on the table.
                  Each object of the array should have a unique unique
                  identifier.
                </td>
              </tr>
              <tr>
                <td>columns</td>
                <td>{` {
  name: string;
  selector: string
}[]`}</td>
                <td>yes</td>
                <td>-</td>
                <td>
                  Heading for each column. <code>name</code> is displayed in{" "}
                  <code>th</code>. <code>selector</code> is used to select
                  index/key for each data in <code>document</code>.
                </td>
              </tr>
              <tr>
                <td>actionList</td>
                <td>{`{
  text: string;
  onClick: (value: any) => void
}[]`}</td>
                <td>no</td>
                <td>-</td>
                <td>Extra button options for each row in the table</td>
              </tr>
              <tr>
                <td>menuActionList</td>
                <td>{`{
  text: string;
  color?: string;
  onClick: (value: any) => void
}[]`}</td>
                <td>no</td>
                <td>-</td>
                <td>Menu buttons all rows in the table</td>
              </tr>
              <tr>
                <td>onRowSelect</td>
                <td>{`(data: any) => void`}</td>
                <td>no</td>
                <td>-</td>
                <td>
                  Callback function when row is selected. It passes an array of
                  selected rows data.
                </td>
              </tr>
              <tr>
                <td>uniqueIdentifier</td>
                <td>string</td>
                <td>no</td>
                <td>"id"</td>
                <td>This is used to identify each data in the document.</td>
              </tr>
              <tr>
                <td>menu</td>
                <td>any</td>
                <td>no</td>
                <td>-</td>
                <td>
                  Custom menu option rendered on the same as{" "}
                  <code>menuActionList</code>.
                </td>
              </tr>
              <tr>
                <td>renderRule</td>
                <td>
                  {" "}
                  {`{
  selector: string;
  onRender: (
    data: any,
    idx?: number
  ) => string | ComponentType<any> | Element | JSX.Element
}[ ]`}
                </td>
                <td>no</td>
                <td>[]</td>
                <td>Custom render control for each column.</td>
              </tr>
            </tbody>
          </table>
        </FlexColumn>
        <FlexColumn id="datatable">
          <h5>Datatable</h5>
          <p>
            Accepts all the props of <a href="#datalist">Datalist</a>
          </p>
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
                <td>showControls</td>
                <td>boolean</td>
                <td>no</td>
                <td>true</td>
                <td>
                  Shows/hides controls like search field, filters and
                  pagination.
                </td>
              </tr>
              <tr>
                <td>check</td>
                <td>boolean</td>
                <td>no</td>
                <td>true</td>
                <td>
                  Shows/hides checkbox for the rows. This only works if{" "}
                  <code>showControls</code> is set to true.
                </td>
              </tr>
              <tr>
                <td>onCellSelect</td>
                <td>{`(data: any) => void`}</td>
                <td>no</td>
                <td>-</td>
                <td>
                  Callback function when cell is selected. It passes selected
                  cells data.
                </td>
              </tr>
            </tbody>
          </table>
        </FlexColumn>
        <FlexColumn id="dropdown">
          <h5>Dropdown</h5>
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
                <td>listener</td>
                <td>"hover" | "click"</td>
                <td>no</td>
                <td>"hover"</td>
                <td>Trigger listener for the dropdown.</td>
              </tr>
              <tr>
                <td>showIcon</td>
                <td>boolean</td>
                <td>no</td>
                <td>true</td>
                <td>Shows/hides icon on the right side.</td>
              </tr>
              <tr>
                <td>list</td>
                <td>any[]</td>
                <td>no</td>
                <td>[]</td>
                <td>Dropdown items to be rendered.</td>
              </tr>
            </tbody>
          </table>
        </FlexColumn>
        <FlexColumn id="input">
          <h5>Input</h5>
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
                <td>id</td>
                <td>string</td>
                <td>no</td>
                <td>""</td>
                <td>Input id.</td>
              </tr>
              <tr>
                <td>label</td>
                <td>string</td>
                <td>no</td>
                <td>""</td>
                <td>Input label.</td>
              </tr>
              <tr>
                <td>type</td>
                <td>"number" | "text" | "email" | "password" | "date"</td>
                <td>no</td>
                <td>"text"</td>
                <td>Input type.</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>boolean</td>
                <td>no</td>
                <td>false</td>
                <td>Disable input.</td>
              </tr>
              <tr>
                <td>placeholder</td>
                <td>string</td>
                <td>no</td>
                <td>-</td>
                <td>Input placeholder.</td>
              </tr>
              <tr>
                <td>defaultValue</td>
                <td>string</td>
                <td>no</td>
                <td>""</td>
                <td>Default/initial value of input.</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>no</td>
                <td>""</td>
                <td>Default/initial value of input.</td>
              </tr>
              <tr>
                <td>color</td>
                <td>string</td>
                <td>no</td>
                <td>"#596173"</td>
                <td>
                  Color style of input. Accepts theme colors and HEX/RGB colors
                </td>
              </tr>
              <tr>
                <td>icon</td>
                <td>sting</td>
                <td>no</td>
                <td>-</td>
                <td>
                  This uses mdi Icons, check{" "}
                  <a href="/#" target="_blank" rel="noopener noreferrer">
                    mdi documentation
                  </a>
                </td>
              </tr>
              <tr>
                <td>iconRight</td>
                <td>boolean</td>
                <td>no</td>
                <td>false</td>
                <td>Moves icon to the right</td>
              </tr>
              <tr>
                <td>iconBorder</td>
                <td>boolean</td>
                <td>no</td>
                <td>true</td>
                <td>Shows icon border.</td>
              </tr>
              <tr>
                <td>validate</td>
                <td>"email" | "alpha" | "number"</td>
                <td>no</td>
                <td>""</td>
                <td>Strict validation rule fo input value.</td>
              </tr>
              <tr>
                <td>clearButton</td>
                <td>boolean</td>
                <td>no</td>
                <td>false</td>
                <td>Shows a clear button to clear the input value.</td>
              </tr>
              <tr>
                <td>successMessage</td>
                <td>string</td>
                <td>no</td>
                <td>"Vaild"</td>
                <td>
                  Message to be displayed if validation rule matches input
                  value. This is only displayed if <code>validate</code> is set.{" "}
                </td>
              </tr>
              <tr>
                <td>errorMessage</td>
                <td>string</td>
                <td>no</td>
                <td>"Invalid"</td>
                <td>
                  Message to be displayed if validation rule does not match
                  input value. This is only displayed if <code>validate</code>
                  is set.
                </td>
              </tr>
              <tr>
                <td>onInputChange</td>
                <td>{`(value: string)=>`}</td>
                <td>no</td>
                <td>-</td>
                <td>
                  Callback function called after each key press input. Passes
                  input value as an argument.
                </td>
              </tr>
              <tr>
                <td>onError</td>
                <td>function</td>
                <td>no</td>
                <td>-</td>
                <td>
                  Callback function called when validation rule does not match
                  input value.
                </td>
              </tr>
            </tbody>
          </table>
        </FlexColumn>
        <FlexColumn id="textarea">
          <h5>TextArea</h5>
          <p>
            Accepts all the props of <a href="#input">Input</a>
          </p>
        </FlexColumn>
        <FlexColumn id="loader">
          <h5>Loader</h5>
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
                <td>type</td>
                <td>"spinner" | "pulse"</td>
                <td>no</td>
                <td>"pulse"</td>
                <td>Inbuilt loader icon style with animation.</td>
              </tr>
              <tr>
                <td>customIcon</td>
                <td>boolean</td>
                <td>no</td>
                <td>true</td>
                <td>Shows/hides icon on the right side.</td>
              </tr>
              <tr>
                <td>iconSize</td>
                <td>number</td>
                <td>no</td>
                <td>1</td>
                <td>Size of loader icon.</td>
              </tr>
              <tr>
                <td>width</td>
                <td>string</td>
                <td>no</td>
                <td>"100%"</td>
                <td>Width of the loader outer container.</td>
              </tr>
              <tr>
                <td>height</td>
                <td>string</td>
                <td>no</td>
                <td>"100%"</td>
                <td>Height of the loader outer container.</td>
              </tr>
              <tr>
                <td>color</td>
                <td>string</td>
                <td>no</td>
                <td>"100%"</td>
                <td>
                  Color of the icon. Accepts theme colors and HEX/RGB colors
                </td>
              </tr>
              <tr>
                <td>withBackground</td>
                <td>boolean</td>
                <td>no</td>
                <td>false</td>
                <td>Show background card for the loader.</td>
              </tr>
            </tbody>
          </table>
        </FlexColumn>
        <FlexColumn id="modal">
          <h5>Modal</h5>
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
                <td>active</td>
                <td>boolean</td>
                <td>no</td>
                <td>false</td>
                <td>Sets the state to opens/close the modal.</td>
              </tr>
              <tr>
                <td>title</td>
                <td>string</td>
                <td>no</td>
                <td>-</td>
                <td>Shows a title at top of the modal.</td>
              </tr>
              <tr>
                <td>iconSize</td>
                <td>number</td>
                <td>no</td>
                <td>1</td>
                <td>Size of loader icon.</td>
              </tr>
              <tr>
                <td>color</td>
                <td>string</td>
                <td>no</td>
                <td>"100%"</td>
                <td>
                  Color of the icon. Accepts theme colors and HEX/RGB colors
                </td>
              </tr>
              <tr>
                <td>submitButton</td>
                <td>React Element</td>
                <td>no</td>
                <td>-</td>
                <td>
                  Renders a react element. It sole purpose is to accept a button
                  but other react element types are supported.
                </td>
              </tr>
              <tr>
                <td>onClose</td>
                <td>function</td>
                <td>no</td>
                <td>-</td>
                <td>Callback function called on close buttons clicked.</td>
              </tr>
            </tbody>
          </table>
        </FlexColumn>
        <FlexColumn id="navbar">
          <h5>Navbar</h5>
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
                <td>position</td>
                <td>"static" | "sticky" | "floating"</td>
                <td>no</td>
                <td>"floating"</td>
                <td>Navbar position type.</td>
              </tr>
              <tr>
                <td>links</td>
                <td>ReactElement[]</td>
                <td>yes</td>
                <td>-</td>
                <td>
                  It accepts an array of React Element to be display on the
                  right side of the Navbar
                </td>
              </tr>
            </tbody>
          </table>
        </FlexColumn>
        <FlexColumn id="pagination">
          <h5>Pagination</h5>
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
                <td>perPage</td>
                <td>number</td>
                <td>no</td>
                <td>5</td>
                <td>Number of rows per page.</td>
              </tr>
              <tr>
                <td>documentLength</td>
                <td>number</td>
                <td>yes</td>
                <td>-</td>
                <td>Total number of rows in the table</td>
              </tr>
              <tr>
                <td>max</td>
                <td>number</td>
                <td>yes</td>
                <td>9</td>
                <td>Maximum number of pagination buttons to be displayed. </td>
              </tr>
              <tr>
                <td>color</td>
                <td>string</td>
                <td>no</td>
                <td>"primary"</td>
                <td>
                  Pagination theme color. Accepts theme colors and HEX/RGB
                  colors
                </td>
              </tr>
              <tr>
                <td>prevIcon</td>
                <td>string</td>
                <td>no</td>
                <td>"mdiChevronLeft"</td>
                <td>Previous button icon</td>
              </tr>
              <tr>
                <td>nextIcon</td>
                <td>string</td>
                <td>no</td>
                <td>"mdiChevronRight"</td>
                <td>Next button icon</td>
              </tr>
              <tr>
                <td>onPageGoto</td>
                <td> {`(startIndex: number, endIndex: number) => void`}</td>
                <td>yes</td>
                <td>-</td>
                <td>A callback function when new page is changed.</td>
              </tr>
            </tbody>
          </table>
        </FlexColumn>
        <FlexColumn id="progress">
          <h5>Progress</h5>
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
                <td>color</td>
                <td>string</td>
                <td>no</td>
                <td>"primary"</td>
                <td>
                  Progress theme color. Accepts theme colors and HEX/RGB colors
                </td>
              </tr>
              <tr>
                <td>percent</td>
                <td>string</td>
                <td>yes</td>
                <td>-</td>
                <td>Progress bar percentage. </td>
              </tr>
              <tr>
                <td>height</td>
                <td>string</td>
                <td>no</td>
                <td>"5px"</td>
                <td>Height of progress bar.</td>
              </tr>
              <tr>
                <td>width</td>
                <td>string</td>
                <td>no</td>
                <td>"100%"</td>
                <td>Width of progress bar.</td>
              </tr>
            </tbody>
          </table>
        </FlexColumn>
        <FlexColumn id="radio">
          <h5>Radio</h5>
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
                <td>disabled</td>
                <td>boolean</td>
                <td>no</td>
                <td>false</td>
                <td>Prevents user from interacting with the radio</td>
              </tr>
              <tr>
                <td>id</td>
                <td>sting</td>
                <td>no</td>
                <td>""</td>
                <td>Id of the radio.</td>
              </tr>
              <tr>
                <td>checked</td>
                <td>boolean</td>
                <td>no</td>
                <td>false</td>
                <td>Sets the check state of the radio</td>
              </tr>
              <tr>
                <td>color</td>
                <td>sting</td>
                <td>no</td>
                <td>"primary"</td>
                <td>
                  Color of the radio. Accepts theme colors and HEX/RGB colors
                </td>
              </tr>
              <tr>
                <td>value</td>
                <td>sting</td>
                <td>no</td>
                <td>""</td>
                <td>Value of radio button.</td>
              </tr>
              <tr>
                <td>onCheck</td>
                <td>function</td>
                <td>no</td>
                <td>-</td>
                <td>Callback function when active check state is changed.</td>
              </tr>
            </tbody>
          </table>
        </FlexColumn>
        <FlexColumn id="select">
          <h5>Select</h5>
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
                <td>id</td>
                <td>string</td>
                <td>no</td>
                <td>""</td>
                <td>Select id attribute.</td>
              </tr>
              <tr>
                <td>label</td>
                <td>string</td>
                <td>no</td>
                <td>""</td>
                <td>Select label attribute.</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>boolean</td>
                <td>no</td>
                <td>false</td>
                <td>Disable select.</td>
              </tr>
              <tr>
                <td>placeholder</td>
                <td>string</td>
                <td>no</td>
                <td>-</td>
                <td>Select placeholder attribute.</td>
              </tr>
              <tr>
                <td>defaultSelected</td>
                <td>string</td>
                <td>no</td>
                <td>""</td>
                <td>Default/initial value of select.</td>
              </tr>
              <tr>
                <td>size</td>
                <td>"sm" | "md" | "lg"</td>
                <td>no</td>
                <td>"sm"</td>
                <td>Select element size.</td>
              </tr>
              <tr>
                <td>options</td>
                <td>string[]</td>
                <td>no</td>
                <td>[]</td>
                <td>An array of strings to be displayed as a select option.</td>
              </tr>
              <tr>
                <td>color</td>
                <td>string</td>
                <td>no</td>
                <td>"#596173"</td>
                <td>
                  Color style of input. Accepts theme colors and HEX/RGB colors
                </td>
              </tr>
              <tr>
                <td>onSelect</td>
                <td>{`(value: string)=>any`}</td>
                <td>no</td>
                <td>-</td>
                <td>
                  Callback function called after changing selected option.
                  Passes selected option value as an argument.
                </td>
              </tr>
            </tbody>
          </table>
        </FlexColumn>
        <FlexColumn id="switch">
          <h5>Switch</h5>
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
                <td>id</td>
                <td>string</td>
                <td>no</td>
                <td>""</td>
                <td>Switch id attribute.</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>boolean</td>
                <td>no</td>
                <td>false</td>
                <td>Disable swtich.</td>
              </tr>
              <tr>
                <td>active</td>
                <td>boolean</td>
                <td>no</td>
                <td>false</td>
                <td>Sets the check state of the switch</td>
              </tr>
              <tr>
                <td>onText</td>
                <td>string</td>
                <td>no</td>
                <td>-</td>
                <td>
                  Displays a text when <code>active</code> is true.
                </td>
              </tr>
              <tr>
                <td>offText</td>
                <td>string</td>
                <td>no</td>
                <td>-</td>
                <td>
                  Displays a text when <code>active</code> is false.
                </td>
              </tr>
              <tr>
                <td>color</td>
                <td>string</td>
                <td>no</td>
                <td>"success"</td>
                <td>
                  Color style of switch. Accepts theme colors and HEX/RGB colors
                </td>
              </tr>
              <tr>
                <td>onCheck</td>
                <td>{`(value: boolean)=>any`}</td>
                <td>no</td>
                <td>-</td>
                <td>
                  Callback function called after changing active state of
                  switch. Passes active state as an argument.
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
