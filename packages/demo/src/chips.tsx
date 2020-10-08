import React, { useState } from "react"
import {
  FlexRow,
  Card,
  Breadcrumb,
  Container,
  Grid,
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
  const [suggestion, setSuggestion] = useState<string[]>([])
  const generateRandomString = (prefix: string, length: number): string => {
    const randomLength = Math.floor(Math.random() * length + 1) + 2
    const character: string = "abcdefghijklmnopqrstuvwxyz"
    let str: string = prefix

    for (let i = 0; i < randomLength; i++) {
      const randomCharacter =
        character[Math.floor(Math.random() * character.length)]
      str += randomCharacter
    }
    return str
  }

  const generateArrayOfString = (
    prefix: string,
    maxLength: number
  ): string[] => {
    let result = []
    for (let i = 0; i < 4; i++) {
      const randomStr = generateRandomString(prefix, maxLength)
      result.push(randomStr)
    }
    return result
  }
  return (
    <Container>
      <Grid xsCol="12">
        <Card withBackground={false}>
          <FlexRow gap="10px" position="center" align="left">
            <h3 style={{ borderRight: "1px solid #999", paddingRight: "12px" }}>
              Chip
            </h3>
            <Breadcrumb
              seperator="mdiChevronDoubleRight"
              item={[
                { name: <Icon path={mdiHomeOutline} size={0.85} />, to: "/" },
                { name: "Components", to: "/" },
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
        <Card xsCol="12">
          <h5>Auto Suggestion</h5>
          <p>
            To add a drop down for suggested text, pass an array of strings to
            the <code>autoSuggestion</code> prop. You can handle suggested data
            according to input changes by passing <code>onInputChange</code>. A
            string of input value is passed as an argument to{" "}
            <code>onInputChange</code>.
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
              autoSuggestion={suggestion}
              onInputChange={(value: string) => {
                setSuggestion(generateArrayOfString(value, 5))
              }}
            >
              React
            </Chip>
          </FlexRow>
        </Card>
      </Grid>
    </Container>
  )
}
export default ChipPage
