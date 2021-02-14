import React, { useEffect } from "react"
import {
  FlexRow,
  Card,
  Breadcrumb,
  Container,
  Avatar,
  FlexColumn,
} from "@bearui/ui"
import Icon from "@mdi/react"
import img from "../assets/brooks-leibee-562087-unsplash.jpg"
import { mdiHomeOutline } from "@mdi/js"

const AvatarPage: React.FC<{}> = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container>
      <Card withBackground={false}>
        <FlexRow gap="10px" position="center" align="left">
          <h3 style={{ borderRight: "1px solid #999", paddingRight: "12px" }}>
            Avatar
          </h3>
          <Breadcrumb
            item={[
              { name: <Icon path={mdiHomeOutline} size={0.85} />, to: "/" },
              { name: "Components", to: "/" },
              { name: "Avatar", to: "" },
            ]}
          />
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Default</h5>
        <p>
          To add an Avatar use the component <code>Avatar</code>
        </p>
        <FlexRow>
          <Avatar alt="avatar" text="LD" src={img} />
          <Avatar alt="avatar" text="LD" />
          <Avatar alt="avatar" text="LD" src={img} withBadge badgeText="12" />
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Size</h5>
        <p>
          To change size set the <code>size</code> prop. Avatar supports{" "}
          <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code> and
          user defined sizes like <code>20px</code>. Default is <code>sm</code>
        </p>
        <FlexRow>
          <FlexColumn gap="5px" align="center">
            <Avatar alt="avatar" text="LD" size="xs" src={img} />
            <p>xs</p>
          </FlexColumn>
          <FlexColumn gap="5px" align="center">
            <Avatar alt="avatar" text="LD" size="sm" />
            <p>sm</p>
          </FlexColumn>
          <FlexColumn gap="5px" align="center">
            <Avatar
              alt="avatar"
              text="LD"
              size="md"
              src={img}
              withBadge
              badgeText="12"
            />
            <p>md</p>
          </FlexColumn>
          <FlexColumn gap="5px" align="center">
            <Avatar alt="avatar" text="LD" size="lg" src={img} />
            <p>lg</p>
          </FlexColumn>
          <FlexColumn gap="5px" align="center">
            <Avatar alt="avatar" text="LD" size="30px" />
            <p>30px</p>
          </FlexColumn>
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Badge</h5>
        <p>
          To add a badge set the <code>badge</code> prop to true and set the{" "}
          <code>badgeText</code>. You can also change the{" "}
          <code>badgeColor</code>, it accepts theme colors and HEX/RGB colors
        </p>
        <FlexRow>
          <Avatar alt="avatar" text="LD" withBadge badgeText="12" />
          <Avatar
            alt="avatar"
            text="LD"
            src={img}
            size="xs"
            withBadge
            badgeColor="warning"
            badgeText="12"
          />
          <Avatar
            alt="avatar"
            text="BL"
            size="md"
            withBadge
            badgeColor="cadetblue"
            badgeText="12"
          />
        </FlexRow>
      </Card>
    </Container>
  )
}
export default AvatarPage
