import React from "react"
import {
  FlexRow,
  Card,
  Breadcrumb,
  Container,
  Grid,
  Button,
  Switch,
  FlexColumn,
} from "@rap/ui"
import Icon from "@mdi/react"
import { mdiHomeOutline } from "@mdi/js"

const TooltipPage: React.FC<any> = () => {
  return (
    <FlexColumn style={{ minHeight: "100vh" }}>
      <Container>
        <Grid mdCol="3"></Grid>
        <Grid mdCol="9">
          <Card withBackground={false}>
            <FlexRow gap="10px" yPosition="center" xPosition="left">
              <h3
                style={{ borderRight: "1px solid #999", paddingRight: "12px" }}
              >
                Tooltip
              </h3>
              <Breadcrumb
                seperator="mdiChevronDoubleRight"
                item={[
                  { name: <Icon path={mdiHomeOutline} size={0.85} />, to: "/" },
                  { name: "Tooltip", to: "" },
                ]}
              />
            </FlexRow>
          </Card>
          <Card xsCol="12">
            <h5>Default</h5>
            <p>
              To add a Tooltip use the component <code>Tooltip</code>
            </p>
            <FlexRow gap="30px">
              <Switch color="success" onClick={clicked => {}} />
              <Button>Button</Button>
            </FlexRow>
          </Card>
        </Grid>
      </Container>
    </FlexColumn>
  )
}
export default TooltipPage
