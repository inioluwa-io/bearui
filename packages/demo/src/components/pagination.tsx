import React from "react"
import {
  FlexRow,
  Card,
  Breadcrumb,
  Container,
  Pagination,
  FlexColumn,
} from "@bearui/ui"
import Icon from "@mdi/react"
import { mdiHomeOutline } from "@mdi/js"

const PaginationPage: React.FC<any> = () => {
  return (
    <Container>
      <Card withBackground={false}>
        <FlexRow gap="10px" position="center" align="left">
          <h3 style={{ borderRight: "1px solid #999", paddingRight: "12px" }}>
            Pagination
          </h3>
          <Breadcrumb
            item={[
              { name: <Icon path={mdiHomeOutline} size={0.85} />, to: "/" },
              { name: "Components", to: "/" },
              { name: "Pagination", to: "" },
            ]}
          />
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Default</h5>
        <p>
          To add a Pagination use the component <code>pagination</code>
        </p>
        <FlexRow>
          <Pagination
            documentLength={80}
            onPageGoto={(startIndex, endIndex) => {}}
          />
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Color</h5>
        <p>
          To change the color, set the <code>color</code> prop to theme color /
          HEX / RGB colors
        </p>
        <FlexRow gap="40px">
          <Pagination
            documentLength={30}
            color="primary"
            onPageGoto={(startIndex, endIndex) => {}}
          />
          <Pagination
            documentLength={30}
            color="info"
            onPageGoto={(startIndex, endIndex) => {}}
          />
          <Pagination
            documentLength={30}
            color="success"
            onPageGoto={(startIndex, endIndex) => {}}
          />
          <Pagination
            documentLength={30}
            color="warning"
            onPageGoto={(startIndex, endIndex) => {}}
          />
          <Pagination
            documentLength={30}
            color="danger"
            onPageGoto={(startIndex, endIndex) => {}}
          />
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Max</h5>
        <p>
          To change the max number of pagination shown, set the <code>max</code>{" "}
          prop to the number. This allows only numbers greater than 5 and must
          be odd numbers or default value will be set (9).
        </p>
        <FlexRow gap="40px">
          <FlexColumn align="center">
            <Pagination
              documentLength={30}
              color="primary"
              max={5}
              onPageGoto={(startIndex, endIndex) => {}}
            />
            <p>Max: 5</p>
          </FlexColumn>
          <FlexColumn align="center">
            <Pagination
              documentLength={70}
              color="primary"
              max={7}
              onPageGoto={(startIndex, endIndex) => {}}
            />
            <p>Max: 7</p>
          </FlexColumn>
          <FlexColumn align="center">
            <Pagination
              documentLength={120}
              color="primary"
              max={11}
              onPageGoto={(startIndex, endIndex) => {}}
            />
            <p>Max: 11</p>
          </FlexColumn>
        </FlexRow>
      </Card>
    </Container>
  )
}
export default PaginationPage
