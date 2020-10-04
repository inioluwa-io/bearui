import React from "react"
import {
  Container,
  FlexColumn,
  Card,
  Progress,
  Datatable,
  Checkbox,
  Chip,
  Avatar,
  Breadcrumb,
  FlexRow,
  Grid,
} from "@rap/ui"
import img from "./dp1.jpg"
import img1 from "./brooks-leibee-562087-unsplash.jpg"
import { mdiHomeOutline } from "@mdi/js"
import Icon from "@mdi/react"

const ProgressPage: React.FC<{}> = () => {
  return (
    <FlexColumn style={{ minHeight: "100vh" }}>
      <Container>
        <Grid mdCol="3" smCol="1" xsCol="12"></Grid>
        <Grid mdCol="9" smCol="11" xsCol="12">
          <Card withBackground={false} xsCol="12">
            <FlexRow gap="10px" position="center" align="left">
              <h3
                style={{ borderRight: "1px solid #999", paddingRight: "12px" }}
              >
                Progress
              </h3>
              <Breadcrumb
                seperator="mdiChevronDoubleRight"
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
    </FlexColumn>
  )
}
export default ProgressPage
