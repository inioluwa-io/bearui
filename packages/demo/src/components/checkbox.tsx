import React, { useEffect } from "react"
import {
  FlexRow,
  Card,
  Breadcrumb,
  Container,
  Checkbox,
  FlexColumn,
} from "@rap/ui"
import Icon from "@mdi/react"
import { mdiHomeOutline } from "@mdi/js"

const CheckboxPage: React.FC<any> = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Container>
      <Card withBackground={false}>
        <FlexRow gap="10px" position="center" align="left">
          <h3 style={{ borderRight: "1px solid #999", paddingRight: "12px" }}>
            Checkbox
          </h3>
          <Breadcrumb
            item={[
              { name: <Icon path={mdiHomeOutline} size={0.85} />, to: "/" },
              { name: "Components", to: "/" },
              { name: "Checkbox", to: "" },
            ]}
          />
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Default</h5>
        <p>
          To add a Checkbox use the component <code>Checkbox</code>
        </p>
        <Checkbox id="checkbox-1">
          <p style={{ fontWeight: 500 }}>Default checkbox</p>
        </Checkbox>
      </Card>
      <Card xsCol="12">
        <h5>Color</h5>
        <p>
          To change the color, set the <code>color</code> prop to theme color /
          HEX / RGB colors
        </p>
        <FlexColumn>
          <Checkbox id="checkbox-2">
            <p style={{ fontWeight: 500 }}>Primary checkbox</p>
          </Checkbox>
          <Checkbox id="checkbox-3" color="success">
            <p style={{ fontWeight: 500 }}>Success checkbox</p>
          </Checkbox>
          <Checkbox id="checkbox-4" color="info">
            <p style={{ fontWeight: 500 }}>Info checkbox</p>
          </Checkbox>
          <Checkbox id="checkbox-5" color="warning">
            <p style={{ fontWeight: 500 }}>Warning checkbox</p>
          </Checkbox>
          <Checkbox id="checkbox-6" color="danger">
            <p style={{ fontWeight: 500 }}>Danger checkbox</p>
          </Checkbox>
          <Checkbox id="checkbox-7" color="dark">
            <p style={{ fontWeight: 500 }}>Dark checkbox</p>
          </Checkbox>
          <Checkbox id="checkbox-8" color="blue">
            <p style={{ fontWeight: 500 }}>Custom checkbox</p>
          </Checkbox>
        </FlexColumn>
      </Card>
      <Card xsCol="12">
        <h5>Active</h5>
        <p>
          To set the checkbox to checked state, set the <code>active</code> prop
          to true
        </p>
        <FlexColumn>
          <Checkbox active id="checkbox-9">
            <p style={{ fontWeight: 500 }}>Primary checkbox</p>
          </Checkbox>
          <Checkbox active id="checkbox-10" color="success">
            <p style={{ fontWeight: 500 }}>Success checkbox</p>
          </Checkbox>
        </FlexColumn>
      </Card>
      <Card xsCol="12">
        <h5>Disabled</h5>
        <p>
          To set the checkbox to checked state, set the <code>active</code> prop
          to true
        </p>
        <FlexColumn>
          <Checkbox disabled active id="checkbox-11">
            <p style={{ fontWeight: 500 }}>Primary checkbox</p>
          </Checkbox>
          <Checkbox disabled active id="checkbox-12" color="success">
            <p style={{ fontWeight: 500 }}>Success checkbox</p>
          </Checkbox>
        </FlexColumn>
      </Card>
    </Container>
  )
}
export default CheckboxPage
