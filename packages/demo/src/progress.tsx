import React from "react"
import {
  Container,
  Card,
  Checkbox,
  Breadcrumb,
  FlexRow,
  Grid,
} from "@bearui/ui"
import { mdiHomeOutline } from "@mdi/js"
import Icon from "@mdi/react"

const ProgressPage: React.FC<{}> = () => {
  return (
    <Container>
      <Grid mdCol="3" smCol="1" xsCol="12"></Grid>
      <Grid mdCol="9" smCol="11" xsCol="12">
        <Card withBackground={false} xsCol="12">
          <FlexRow gap="10px" position="center" align="left">
            <h3 style={{ borderRight: "1px solid #999", paddingRight: "12px" }}>
              Progress
            </h3>
            <Breadcrumb
              item={[
                { name: <Icon path={mdiHomeOutline} size={0.85} />, to: "/" },
                { name: "Progress", to: "" },
              ]}
            />
          </FlexRow>
        </Card>
        <Card>
          <Checkbox />
        </Card>
      </Grid>
    </Container>
  )
}
export default ProgressPage
