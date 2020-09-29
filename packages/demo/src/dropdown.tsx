import React from "react"
import {
  FlexRow,
  Card,
  Breadcrumb,
  Container,
  Grid,
  Button,
  Switch,
  Tooltip,
  FlexColumn,
  FormControl,
  Dropdown,
  Input,
} from "@rap/ui"
import Icon from "@mdi/react"
import { mdiHomeOutline } from "@mdi/js"
import { Link } from "react-router-dom"

const DropdownPage: React.FC<any> = () => {
  return (
    <FlexColumn style={{ minHeight: "100vh" }}>
      <Container>
        <Grid mdCol="3" smCol="1" xsCol="12"></Grid>
        <Grid mdCol="9" smCol="11" xsCol="12">
          <Card withBackground={false}>
            <FlexRow gap="10px" yPosition="center" xPosition="left">
              <h3
                style={{ borderRight: "1px solid #999", paddingRight: "12px" }}
              >
                Dropdown
              </h3>
              <Breadcrumb
                seperator="mdiChevronDoubleRight"
                item={[
                  { name: <Icon path={mdiHomeOutline} size={0.85} />, to: "/" },
                  { name: "Dropdown", to: "" },
                ]}
              />
            </FlexRow>
          </Card>
          <Card xsCol="12">
            <h5>Default</h5>
            <p>
              To add a Dropdown use the component <code>Dropdown</code>
            </p>
            <FlexRow>
              <Dropdown list={["list 1", "list 2", "list 3"]}>
                Default Dropdown
              </Dropdown>
              <Dropdown list={["list 1", "list 2", "list 3"]}>
                Dropdown 2
              </Dropdown>
            </FlexRow>
          </Card>
          <Card xsCol="12">
            <h5>Listener</h5>
            <p>
              Dropdown supports 2 types of listeners. They are{" "}
              <code>hover</code> and <code>click</code>
            </p>
            <FlexRow>
              <Dropdown
                list={[<Link to="">List 1</Link>, "list 2", "list 3"]}
                listener="click"
              >
                <Button background="dark">Click Me</Button>
              </Dropdown>
              <Dropdown list={[<Link to="">List 1</Link>, "list 2", "list 3"]}>
                <Button background="dark">Hover Me</Button>
              </Dropdown>
            </FlexRow>
          </Card>
        </Grid>
      </Container>
    </FlexColumn>
  )
}
export default DropdownPage
