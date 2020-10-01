import React, { useState } from "react"
import {
  FlexRow,
  Card,
  Breadcrumb,
  Container,
  Grid,
  FlexColumn,
  Avatar,
  Chip,
} from "@rap/ui"
import Icon from "@mdi/react"
import img from "./brooks-leibee-562087-unsplash.jpg"
import { mdiHomeOutline } from "@mdi/js"

const ChipPage: React.FC<any> = () => {
  const [items, setItem] = useState<string[]>([
    "React",
    "React Redux",
    "GitHub",
    "Netlify",
  ])
  return (
    <FlexColumn style={{ minHeight: "100vh" }}>
      <Container>
        <Grid mdCol="3" smCol="1" xsCol="12"></Grid>
        <Grid mdCol="9" smCol="11" xsCol="12">
          <Card withBackground={false}>
            <FlexRow gap="10px" yPosition="center" xPosition="left">
              <h3
                style={{ borderRight: "1px solid #999", paddingRight: "12px" }}
              >
                Chip
              </h3>
              <Breadcrumb
                seperator="mdiChevronDoubleRight"
                item={[
                  { name: <Icon path={mdiHomeOutline} size={0.85} />, to: "/" },
                  { name: "Chip", to: "" },
                ]}
              />
            </FlexRow>
          </Card>
          <Card xsCol="12">
            <h5>Default</h5>
            <p>
              To add a Chip use the component <code>Chip</code>
            </p>
            <FlexRow>
              <Chip>Basic Chip</Chip>
              <Chip>
                <Avatar alt="avatar" text="LD" src={img} />
                Avatar Image
              </Chip>
              <Chip>
                <Avatar alt="avatar" text="LD" />
                Avatar Text
              </Chip>
              <Chip closable={true}>Closable chip</Chip>
            </FlexRow>
          </Card>
          <Card xsCol="12">
            <h5>Color</h5>
            <p>
              To change color of a Chip set the <code>color</code> prop
            </p>
            <FlexRow>
              <Chip color="primary">Basic Chip</Chip>
              <Chip color="danger">
                <Avatar alt="avatar" text="LD" src={img} />
                Avatar Image
              </Chip>
              <Chip color="success">
                <Avatar alt="avatar" text="LD" />
                Avatar Text
              </Chip>
              <Chip color="dark" closable={true}>
                Closable chip
              </Chip>
            </FlexRow>
          </Card>
          <Card xsCol="12">
            <h5>Transparent</h5>
            <p>
              To make Chip transparent set the <code>transparent</code> prop to
              true
            </p>
            <FlexRow>
              <Chip color="primary" transparent={true}>
                Basic Chip
              </Chip>
              <Chip color="danger" transparent={true}>
                <Avatar alt="avatar" text="LD" src={img} />
                Avatar Image
              </Chip>
              <Chip color="success" transparent={true}>
                <Avatar alt="avatar" text="LD" />
                Avatar Text
              </Chip>
              <Chip color="dark" transparent={true} closable={true}>
                Closable chip
              </Chip>
            </FlexRow>
          </Card>
          <Card xsCol="12">
            <h5>Closable</h5>
            <p>
              To make Chip transparent set the <code>transparent</code> prop to
              true
            </p>
            <FlexRow>
              <Chip closable={true}>React</Chip>
              <Chip closable={true}>React Redux</Chip>
              <Chip closable={true}>GitHub</Chip>
              <Chip closable={true}>Netlify</Chip>
            </FlexRow>
          </Card>
          <Card xsCol="12">
            <h5>Closable</h5>
            <p>
              To make Chip transparent set the <code>transparent</code> prop to
              true
            </p>
            <FlexRow>
              <Chip closable={true}>React</Chip>
              <Chip closable={true}>React Redux</Chip>
              <Chip closable={true}>GitHub</Chip>
              <Chip closable={true}>Netlify</Chip>
            </FlexRow>
          </Card>
          <Card xsCol="12">
            <h5>Add and Remove Items</h5>
            <p>
              To make Chip transparent set the <code>transparent</code> prop to
              true
            </p>
            <p>
              [
              {items.map((item, idx) => (
                <React.Fragment key={idx}>
                  {item}
                  {idx < items.length - 1 && ", "}
                </React.Fragment>
              ))}
              ]
            </p>
            <FlexRow>
              <Chip
                closable={true}
                onItemUpdate={(value: string[]) => {
                  setItem(value)
                }}
                items={items}
              >
                React
              </Chip>
            </FlexRow>
          </Card>
        </Grid>
      </Container>
    </FlexColumn>
  )
}
export default ChipPage
