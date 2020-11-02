import { mdiHomeOutline } from "@mdi/js"
import Icon from "@mdi/react"
import {
  Container,
  Card,
  FlexColumn,
  FlexRow,
  Breadcrumb,
  Button,
} from "@rap/ui"
import React from "react"
import styled from "styled-components"

const FlexColumnPageContainer: any = styled(Container)`
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

const FlexColumnPage: React.FC = () => {
  return (
    <FlexColumnPageContainer>
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
          <code>FlexColumn</code> uses flex under the hood with{" "}
          <code>flex-direction</code> set to <code>column</code>.
        </p>
        <FlexColumn>
          <p>Default</p>
        </FlexColumn>
      </Card>

      <Card xsCol="12">
        <h5>Align</h5>
        <p>
          To align content set the <code>align</code> prop to either of the
          following: <code>left</code>, <code>right</code>, <code>center</code>,{" "}
          <code>stretch</code>.
        </p>
        <FlexColumn className="col" align="left">
          <Button >Left</Button>
          <Button >Left</Button>
        </FlexColumn>
        <FlexColumn className="col" align="center">
          <Button >Center</Button>
          <Button >Center</Button>
        </FlexColumn>
        <FlexColumn className="col" align="right">
          <Button >Right</Button>
        </FlexColumn>
        <FlexColumn className="col" align="stretch">
          <Button >Stretch</Button>
          <Button >Stretch</Button>
        </FlexColumn>
      </Card>

      <Card xsCol="12">
        <h5>Gap</h5>
        <p>
          To change the gap between each children node, set the <code>gap</code>{" "}
          prop to a css size. Default is <code>20px</code>.
        </p>
        <FlexColumn className="col">
          <Button size="lg" iconOnly icon="mdiCircleOutline">
            Click
          </Button>
          <Button
            size="lg"
            background="warning"
            iconOnly
            icon="mdiCircleOutline"
          >
            Click
          </Button>
        </FlexColumn>
      </Card>
    </FlexColumnPageContainer>
  )
}
export default FlexColumnPage
