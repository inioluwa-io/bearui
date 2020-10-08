import React from "react"
import {
  FlexRow,
  Card,
  Breadcrumb,
  Container,
  Grid,
  FlexColumn,
  Loader,
} from "@rap/ui"
import Icon from "@mdi/react"
import { mdiHomeOutline } from "@mdi/js"
import { useEffect } from "react"

const LoaderPage: React.FC<any> = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Container>
      <Grid xsCol="12">
        <Card withBackground={false}>
          <FlexRow gap="10px" position="center" align="left">
            <h3 style={{ borderRight: "1px solid #999", paddingRight: "12px" }}>
              Loader
            </h3>
            <Breadcrumb
              seperator="mdiChevronDoubleRight"
              item={[
                { name: <Icon path={mdiHomeOutline} size={0.85} />, to: "/" },
                { name: "Components", to: "/" },
                { name: "Loader", to: "" },
              ]}
            />
          </FlexRow>
        </Card>
        <Card xsCol="12">
          <h5>Default</h5>
          <p>
            To add a Loader use the component <code>Loader</code>
          </p>
          <Loader width="auto" height="auto" style={{ position: "relative" }} />
        </Card>
        <Card xsCol="12">
          <h5>Type</h5>
          <p>
            Change the loader type with <code>type</code>. <code>Loader</code>{" "}
            supports two types, <code>spinner</code> and <code>pulse</code>.
          </p>
          <FlexRow>
            <Loader
              width="auto"
              height="auto"
              style={{ position: "relative" }}
            />
            <Loader
              width="auto"
              height="auto"
              type="spinner"
              style={{ position: "relative" }}
            />
          </FlexRow>
        </Card>
        <Card xsCol="12">
          <h5>Color</h5>
          <p>
            To set the checkbox to checked state, set the <code>active</code>{" "}
            prop to true
          </p>
          <FlexRow>
            <Loader
              color="primary"
              width="auto"
              height="auto"
              style={{ position: "relative" }}
            />
            <Loader
              color="info"
              width="auto"
              height="auto"
              type="spinner"
              style={{ position: "relative" }}
            />
            <Loader
              color="danger"
              width="auto"
              height="auto"
              style={{ position: "relative" }}
            />
            <Loader
              color="warning"
              width="auto"
              height="auto"
              type="spinner"
              style={{ position: "relative" }}
            />
          </FlexRow>
        </Card>
        <Card xsCol="12">
          <h5>Icon Size</h5>
          <p>
            To set the checkbox to checked state, set the <code>active</code>{" "}
            prop to true
          </p>
          <FlexRow>
            <FlexColumn align="center">
              <Loader
                width="auto"
                height="auto"
                style={{ position: "relative" }}
              />
              <p>Default (1)</p>
            </FlexColumn>
            <FlexColumn align="center">
              <Loader
                color="primary"
                width="auto"
                iconSize={1.5}
                height="auto"
                style={{ position: "relative" }}
              />
              <p>1.5</p>
            </FlexColumn>
            <FlexColumn align="center">
              <Loader
                color="info"
                width="auto"
                height="auto"
                iconSize={2}
                type="spinner"
                style={{ position: "relative" }}
              />
              <p>2</p>
            </FlexColumn>
            <FlexColumn align="center">
              <Loader
                color="danger"
                width="auto"
                height="auto"
                iconSize={2.5}
                style={{ position: "relative" }}
              />
              <p>2.5</p>
            </FlexColumn>
            <FlexColumn align="center">
              <Loader
                color="warning"
                width="auto"
                height="auto"
                iconSize={3}
                type="spinner"
                style={{ position: "relative" }}
              />
              <p>3</p>
            </FlexColumn>
          </FlexRow>
        </Card>
      </Grid>
    </Container>
  )
}
export default LoaderPage
