import React from "react"
import { FlexRow, Card, Breadcrumb, Container, Progress } from "@rap/ui"
import Icon from "@mdi/react"
import { mdiHomeOutline } from "@mdi/js"

const ProgressPage: React.FC<any> = () => {
  return (
    <Container>
      <Card withBackground={false}>
        <FlexRow gap="10px" position="center" align="left">
          <h3 style={{ borderRight: "1px solid #999", paddingRight: "12px" }}>
            Progress
          </h3>
          <Breadcrumb
            item={[
              { name: <Icon path={mdiHomeOutline} size={0.85} />, to: "/" },
              { name: "Components", to: "/" },
              { name: "Progress", to: "" },
            ]}
          />
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Default</h5>
        <p>
          To add a Progress use the component <code>progress</code>.
        </p>
        <FlexRow>
          <Progress percent={73} />
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Color</h5>
        <p>
          To change the color, set the <code>color</code> prop to theme color /
          HEX / RGB colors
        </p>
        <FlexRow>
          <Progress percent={73} />
          <Progress percent={33} color="info" />
          <Progress percent={97} color="danger" />
          <Progress percent={58} color="warning" />
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Height</h5>
        <p>
          To change the height, set the <code>height</code> prop.
        </p>
        <FlexRow>
          <Progress percent={73} />
          <p>5px</p>
        </FlexRow>
        <FlexRow>
          <Progress percent={93} color="danger" height="7px" />
          <p>7px</p>
        </FlexRow>
        <FlexRow>
          <Progress percent={43} color="info" height="9px" />
          <p>9px</p>
        </FlexRow>
      </Card>
    </Container>
  )
}
export default ProgressPage
