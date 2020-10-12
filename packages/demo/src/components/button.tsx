import React, { useState, useEffect } from "react"
import {
  FlexRow,
  Card,
  Breadcrumb,
  Container,
  Button,
  LinkButton,
  GithubButton,
  FacebookButton,
  AppleButton,
  TwitterButton,
  GoogleButton,
} from "@rap/ui"
import Icon from "@mdi/react"
import { mdiHomeOutline } from "@mdi/js"

const ButtonPage: React.FC<{}> = () => {
  const [active, setActive] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Container>
      <Card withBackground={false}>
        <FlexRow gap="10px" position="center" align="left">
          <h3 style={{ borderRight: "1px solid #999", paddingRight: "12px" }}>
            Button
          </h3>
          <Breadcrumb
            item={[
              { name: <Icon path={mdiHomeOutline} size={0.85} />, to: "/" },
              { name: "Components", to: "/" },
              { name: "Button", to: "" },
            ]}
          />
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Default</h5>
        <p>
          To add a Button use the component <code>Button</code>. To add a
          LinkButton use the component <code>LinkButton</code>. To add a Social
          button use the component <code>GithubButton</code>,{" "}
          <code>FacebookButton</code>, <code>GoogleButton</code>,{" "}
          <code>TwitterButton</code> or <code>AppleButton</code>.
        </p>
        <FlexRow>
          <Button>Primary</Button>
          <LinkButton to="#">LinkButton</LinkButton>
          <GithubButton onClick={() => {}}>Github Button</GithubButton>
          <TwitterButton onClick={() => {}}>Twitter Button</TwitterButton>
          <AppleButton onClick={() => {}}>Apple Button</AppleButton>
          <FacebookButton onClick={() => {}}>Facebook Button</FacebookButton>
          <GoogleButton onClick={() => {}}>Google Button</GoogleButton>
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Size</h5>
        <p>
          To change size of a Button set the <code>size</code> prop. Avatar
          supports <code>xs</code>, <code>sm</code>, <code>md</code>,{" "}
          <code>lg</code>. Default is <code>sm</code>
        </p>
        <FlexRow>
          <Button size="xs">Extra Small Button</Button>
          <LinkButton to="#">Small Button</LinkButton>
          <GithubButton size="md" onClick={() => {}}>
            Medium Button
          </GithubButton>
          <TwitterButton size="lg" onClick={() => {}}>
            Large Button
          </TwitterButton>
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Background</h5>
        <p>
          To change the background color, set the <code>background</code> prop
          to theme color / HEX / RGB colors
        </p>
        <FlexRow>
          <Button>Primary</Button>
          <Button background="success">Success</Button>
          <Button background="info">Info</Button>
          <Button background="danger">Danger</Button>
          <Button background="warning">Warning</Button>
          <Button background="dark">Dark</Button>
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Glow</h5>
        <p>
          To add a glow effect, set the <code>glow</code> prop to true
        </p>
        <FlexRow>
          <Button glow>Primary</Button>
          <Button glow background="success">
            Success
          </Button>
          <Button glow background="info">
            Info
          </Button>
          <Button glow background="danger">
            Danger
          </Button>
          <Button glow background="warning">
            Warning
          </Button>
          <Button glow background="dark">
            Dark
          </Button>
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Gradient</h5>
        <p>
          To change the background color, set the <code>background</code> prop
          to theme color / HEX / RGB colors
        </p>
        <FlexRow>
          <Button gradient>Primary</Button>
          <Button gradient background="success">
            Success
          </Button>
          <Button gradient background="info">
            Info
          </Button>
          <Button gradient background="danger">
            Danger
          </Button>
          <Button gradient background="warning">
            Warning
          </Button>
          <Button gradient background="dark">
            Dark
          </Button>
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Text Color</h5>
        <p>
          To change the text color, set the <code>textColor</code> prop to HEX /
          RGB colors
        </p>
        <FlexRow>
          <Button textColor="#0bffdb">Primary</Button>
          <Button textColor="yellow" background="success">
            Success
          </Button>
          <Button textColor="#0c31b0" background="info">
            Info
          </Button>
          <Button textColor="#ddeaa4" background="danger">
            Danger
          </Button>
          <Button textColor="#0c31b0" background="warning">
            Warning
          </Button>
          <Button textColor="yellow" background="dark">
            Dark
          </Button>
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Outline</h5>
        <p>
          To change the button style to an outline, set the <code>outline</code>{" "}
          prop to true
        </p>
        <FlexRow>
          <Button outline>Primary</Button>
          <Button outline background="success">
            Success
          </Button>
          <Button outline background="info">
            Info
          </Button>
          <Button outline background="danger">
            Danger
          </Button>
          <Button outline background="warning">
            Warning
          </Button>
          <Button outline background="dark">
            Dark
          </Button>
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Icon</h5>
        <p>
          To add an Icon set the <code>icon</code> prop to name of Icon. This
          uses mdi Icons, check{" "}
          <a href="" target="_blank" rel="noopener noreferrer">
            mdi documentation
          </a>
        </p>
        <FlexRow>
          <Button icon="mdiEmailOutline">Send Email</Button>
          <Button icon="mdiHeart" background="success">
            Save
          </Button>
          <Button icon="mdiDownload" background="info">
            Download
          </Button>
          <Button icon="mdiDelete" background="danger">
            Delete
          </Button>
          <Button icon="mdiStar" background="warning">
            Add to Favourite
          </Button>
          <Button icon="mdiHome" background="dark">
            Home
          </Button>
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Icon Right</h5>
        <p>
          To move icon to the the right set <code>iconRight</code> prop to true
        </p>
        <FlexRow>
          <Button iconRight icon="mdiEmailOutline">
            Send Email
          </Button>
          <Button iconRight icon="mdiHeart" background="success">
            Save
          </Button>
          <Button iconRight icon="mdiDownload" background="info">
            Download
          </Button>
          <Button iconRight icon="mdiDelete" background="danger">
            Delete
          </Button>
          <Button iconRight icon="mdiStar" background="warning">
            Add to Favourite
          </Button>
          <Button iconRight icon="mdiHome" background="dark">
            Home
          </Button>
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Icon Only</h5>
        <p>
          To show only icon in the button set <code>iconOnly</code> prop to true
        </p>
        <FlexRow>
          <Button iconOnly icon="mdiEmailOutline">
            Send Email
          </Button>
          <Button iconOnly outline icon="mdiHeart" background="success">
            Save
          </Button>
          <Button iconOnly outline icon="mdiDownload" background="info">
            Download
          </Button>
          <Button iconOnly icon="mdiDelete" background="danger">
            Delete
          </Button>
          <Button iconOnly outline icon="mdiStar" background="warning">
            Add to Favourite
          </Button>
          <Button iconOnly icon="mdiHome" background="dark">
            Home
          </Button>
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Loading</h5>
        <p>
          To show a loading icon set <code>loading</code> prop to true
        </p>
        <FlexRow>
          <Button
            onClick={() => {
              let newArr = [...active]
              newArr[0] = !newArr[0]

              setActive(newArr)
            }}
            loading={active[0]}
            icon="mdiEmailOutline"
          >
            Email
          </Button>
          <Button
            onClick={() => {
              let newArr = [...active]
              newArr[1] = !newArr[1]

              setActive(newArr)
            }}
            loading={active[1]}
            icon="mdiHeart"
            background="success"
          >
            Save
          </Button>
          <Button
            onClick={() => {
              let newArr = [...active]
              newArr[2] = !newArr[2]

              setActive(newArr)
            }}
            loading={active[2]}
            icon="mdiDownload"
            background="info"
          >
            Download
          </Button>
          <Button
            onClick={() => {
              let newArr = [...active]
              newArr[3] = !newArr[3]

              setActive(newArr)
            }}
            loading={active[3]}
            icon="mdiDelete"
            background="danger"
          >
            Delete
          </Button>
          <Button
            onClick={() => {
              let newArr = [...active]
              newArr[4] = !newArr[4]

              setActive(newArr)
            }}
            loading={active[4]}
            icon="mdiStar"
            background="warning"
          >
            Add Favourite
          </Button>
          <Button
            onClick={() => {
              let newArr = [...active]
              newArr[5] = !newArr[5]

              setActive(newArr)
            }}
            loading={active[5]}
            background="dark"
          >
            Click me
          </Button>
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Loading Icon</h5>
        <p>
          To change loading icon set <code>loadingIcon</code> prop to name of
          Icon. This uses mdi Icons, check{" "}
          <a href="" target="_blank" rel="noopener noreferrer">
            mdi documentation
          </a>
        </p>
        <FlexRow>
          <Button loading icon="mdiEmailOutline">
            Email
          </Button>
          <Button loading loadingIcon="mdiHeart" background="success">
            Save
          </Button>
          <Button loading loadingIcon="mdiDownload" background="info">
            Download
          </Button>
          <Button loading loadingIcon="mdiDelete" background="danger">
            Delete
          </Button>
          <Button loading loadingIcon="mdiStar" background="warning">
            Add Favourite
          </Button>
          <Button loading loadingIcon="mdiDotsHexagon" background="dark">
            Click me
          </Button>
        </FlexRow>
      </Card>
    </Container>
  )
}
export default ButtonPage
