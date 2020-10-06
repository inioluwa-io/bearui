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
  Input,
} from "@rap/ui"
import Icon from "@mdi/react"
import { mdiHomeOutline } from "@mdi/js"

const TooltipPage: React.FC<any> = () => {
  return (
    <Container>
      <Grid xsCol="12">
        <Card withBackground={false}>
          <FlexRow gap="10px" yPosition="center" xPosition="left">
            <h3 style={{ borderRight: "1px solid #999", paddingRight: "12px" }}>
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
          <FlexRow>
            <Tooltip id="firsttip" text="Tooltip Default">
              <Switch color="success" onClick={clicked => {}} />
            </Tooltip>
            <Tooltip text="Tooltip Default">
              <Button background="dark">Button</Button>
            </Tooltip>
            <Tooltip text="Tooltip Default">
              <FormControl>
                <Input
                  id="password"
                  type="password"
                  color="primary"
                  icon="mdiLock"
                  validate="number"
                  onInputChange={(value: string) => {
                    console.log(value)
                  }}
                  onError={() => {}}
                  placeholder="Enter your password"
                />
              </FormControl>
            </Tooltip>
          </FlexRow>
        </Card>
        <Card xsCol="12">
          <h5>Position</h5>
          <p>
            To add a Tooltip use the component <code>Tooltip</code>
          </p>
          <FlexRow>
            <Tooltip text="Tooltip Position Top" position="top">
              <Button background="dark">Top</Button>
            </Tooltip>
            <Tooltip text="Tooltip Position Bottom" position="bottom">
              <Button background="dark">Bottom</Button>
            </Tooltip>
            <Tooltip text="Tooltip Position Left" position="left">
              <Button background="dark">Left</Button>
            </Tooltip>
            <Tooltip text="Tooltip Position Right" position="right">
              <Button background="dark">Right</Button>
            </Tooltip>
          </FlexRow>
        </Card>
        <Card xsCol="12">
          <h5>Color</h5>
          <p>
            To change the color of the tooltip, use the property background. You
            can use the preset theme colors
          </p>
          <FlexRow>
            <Tooltip text="Tooltip Background Primary" background="primary">
              <Button background="primary" gradient>
                Primary
              </Button>
            </Tooltip>
            <Tooltip text="Tooltip Background Secondary" background="success">
              <Button background="success">Success</Button>
            </Tooltip>
            <Tooltip text="Tooltip Background Info" background="info">
              <Button background="info">Info</Button>
            </Tooltip>
            <Tooltip text="Tooltip Background Info" background="info">
              <Button background="info" outline gradient>
                Info
              </Button>
            </Tooltip>
          </FlexRow>
        </Card>
        <Card xsCol="12">
          <h5>Delay</h5>
          <p>
            To change the delay in appearing the tooltip with the property{" "}
            <code>delay</code>
          </p>
          <FlexRow>
            <Tooltip text="Tooltip default delay 0s">
              <Button background="dark">Delay default</Button>
            </Tooltip>
            <Tooltip text="Tooltip default delay 0.25s" delay="0.25s">
              <Button background="dark">Delay 0.25s</Button>
            </Tooltip>
            <Tooltip text="Tooltip default delay 1s" delay="1s">
              <Button background="dark">Delay 1s</Button>
            </Tooltip>
          </FlexRow>
        </Card>
      </Grid>
    </Container>
  )
}
export default TooltipPage
