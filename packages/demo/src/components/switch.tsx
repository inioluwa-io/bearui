import React from "react"
import { FlexRow, Card, Breadcrumb, Container, Progress, Switch } from "@rap/ui"
import Icon from "@mdi/react"
import { mdiHomeOutline } from "@mdi/js"

const SwitchPage: React.FC<any> = () => {
  return (
    <Container>
      <Card withBackground={false}>
        <FlexRow gap="10px" position="center" align="left">
          <h3 style={{ borderRight: "1px solid #999", paddingRight: "12px" }}>
            Switch
          </h3>
          <Breadcrumb
            item={[
              { name: <Icon path={mdiHomeOutline} size={0.85} />, to: "/" },
              { name: "Components", to: "/" },
              { name: "Switch", to: "" },
            ]}
          />
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Default</h5>
        <p>
          To add a Switch use the component <code>switch</code>.
        </p>
        <FlexRow>
          <Switch active={true} onClick={(value: boolean) => {}} />
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Color</h5>
        <p>
          To change the color, set the <code>color</code> prop to theme color /
          HEX / RGB colors
        </p>
        <FlexRow>
          <Switch
            active={true}
            color="primary"
            onClick={(value: boolean) => {}}
          />
          <Switch
            active={true}
            color="success"
            onClick={(value: boolean) => {}}
          />
          <Switch active={true} color="info" onClick={(value: boolean) => {}} />
          <Switch
            active={true}
            color="warning"
            onClick={(value: boolean) => {}}
          />
          <Switch
            active={true}
            color="danger"
            onClick={(value: boolean) => {}}
          />
          <Switch active={true} color="dark" onClick={(value: boolean) => {}} />
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Active</h5>
        <p>
          To set the default checked state of switch, set the{" "}
          <code>active</code> prop to a boolean. Default is <code>false</code>.
        </p>
        <FlexRow>
          <Switch color="dark" onClick={(value: boolean) => {}} />
          <Switch active={true} color="dark" onClick={(value: boolean) => {}} />
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Disabled</h5>
        <p>
          To disable the Switch, set the <code>disabled</code> prop to a true.
          Default is <code>false</code>.
        </p>
        <FlexRow>
          <Switch color="dark" disabled onClick={(value: boolean) => {}} />
          <Switch
            active={true}
            disabled
            color="primary"
            onClick={(value: boolean) => {}}
          />
        </FlexRow>
      </Card>
    </Container>
  )
}
export default SwitchPage
