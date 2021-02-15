import { mdiCircleOutline, mdiHomeOutline } from "@mdi/js"
import Icon from "@mdi/react"
import { Container, Card, FlexRow, Breadcrumb, Button } from "@bearui/ui"
import React from "react"
import styled from "styled-components"

const FlexRowPageContainer: any = styled(Container)`
  .indent {
    text-indent: 30px;
    line-height: 30px;
  }
  .col {
    background: rgba(0, 0, 0, 0.1);
    padding: 10px;
    width: calc(100% - 20px);
  }
  .row {
    .grid {
      .col {
        border: 1px solid rgba(0, 0, 0, 0.3);
      }

      &:not(:last-child) {
        .col {
          border-right: none;
        }
      }
    }

    &:not(:last-child) {
      .col {
        border-bottom: none;
      }
    }
  }
`

const FlexRowPage: React.FC = () => {
  return (
    <FlexRowPageContainer>
      <Card withBackground={false}>
        <FlexRow gap="10px" position="center" align="left">
          <h3 style={{ borderRight: "1px solid #999", paddingRight: "12px" }}>
            Flex Row
          </h3>
          <Breadcrumb
            item={[
              { name: <Icon path={mdiHomeOutline} size={0.85} />, to: "/" },
              { name: "Layouts", to: "#" },
              { name: "Flex Row", to: "" },
            ]}
          />
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Default</h5>
        <p>
          <code>FlexRow</code> uses flex under the hood with{" "}
          <code>flex-direction</code> set to <code>row</code>.
        </p>
        <FlexRow>
          <p>Default</p>
        </FlexRow>
      </Card>

      <Card xsCol="12">
        <h5>Align</h5>
        <p>
          To align content set the <code>align</code> prop to either of the
          following: <code>left</code>, <code>right</code>, <code>center</code>,{" "}
          <code>stretch</code>.
        </p>
        <div className="col">
          <FlexRow align="left">
            <p>Left</p>
          </FlexRow>
        </div>
        <div className="col">
          <FlexRow align="center">
            <p>Center</p>
          </FlexRow>
        </div>
        <div className="col">
          <FlexRow align="right">
            <p>Right</p>
          </FlexRow>
        </div>
        <div className="col">
          <FlexRow align="stretch">
            <p>Stretch</p>
            <p>Stretch</p>
          </FlexRow>
        </div>
      </Card>

      <Card xsCol="12">
        <h5>Position</h5>
        <p>
          To position content set the <code>position</code> prop to either of
          the following: <code>top</code>, <code>center</code>,{" "}
          <code>bottom</code>.
        </p>
        <div className="col">
          <FlexRow position="top">
            <p>Top</p>
            <Button size="lg" iconOnly icon={mdiCircleOutline}>
              Click
            </Button>
          </FlexRow>
        </div>
        <div className="col">
          <FlexRow position="bottom">
            <p>Bottom</p>
            <Button size="lg" iconOnly icon={mdiCircleOutline}>
              Click
            </Button>
          </FlexRow>
        </div>
        <div className="col">
          <FlexRow position="center">
            <p>Center</p>
            <Button size="lg" iconOnly icon={mdiCircleOutline}>
              Click
            </Button>
          </FlexRow>
        </div>
      </Card>

      <Card xsCol="12">
        <h5>Gap</h5>
        <p>
          To change the gap between each children node, set the <code>gap</code>{" "}
          prop to a css size. Default is <code>20px</code>.
        </p>

        <div className="col">
          <FlexRow>
            <Button size="lg" iconOnly icon={mdiCircleOutline}>
              Click
            </Button>
            <Button
              size="lg"
              background="warning"
              iconOnly
              icon={mdiCircleOutline}
            >
              Click
            </Button>
          </FlexRow>
        </div>
      </Card>
    </FlexRowPageContainer>
  )
}
export default FlexRowPage
