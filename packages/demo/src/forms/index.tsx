import React from "react"
import { mdiHomeOutline } from "@mdi/js"
import Icon from "@mdi/react"
import { Container, Card, FlexRow, Breadcrumb, FlexColumn } from "@rap/ui"
import VerticalForm from "./vertical"
import HorizontalForm from "./horizontal"

const FormsLayoutPage: React.FC = () => {
  return (
    <Container>
      <Card withBackground={false} xsCol="12">
        <FlexRow gap="10px" position="center" align="left">
          <h3 style={{ borderRight: "1px solid #999", paddingRight: "12px" }}>
            Form Layouts
          </h3>
          <Breadcrumb
            item={[
              { name: <Icon path={mdiHomeOutline} size={0.85} />, to: "/" },
              { name: "Form Layouts", to: "" },
            ]}
          />
        </FlexRow>
      </Card>
      <VerticalForm />
      <HorizontalForm />
    </Container>
  )
}

export default FormsLayoutPage
