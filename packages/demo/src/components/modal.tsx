import React, { useState } from "react"
import {
  FlexRow,
  Card,
  Breadcrumb,
  FlexColumn,
  Avatar,
  Container,
  Modal,
  Button,
} from "@bearui/ui"
import Icon from "@mdi/react"
import { mdiHomeOutline } from "@mdi/js"

const ModalPage: React.FC<any> = () => {
  const [openModal, setOpenModal] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ])
  const toggleModal = (idx: number) => {
    const arr = [...openModal]
    console.log(!arr[idx])
    arr[idx] = !arr[idx]
    setOpenModal(arr)
  }
  return (
    <Container>
      <Card withBackground={false}>
        <FlexRow gap="10px" position="center" align="left">
          <h3 style={{ borderRight: "1px solid #999", paddingRight: "12px" }}>
            Modal
          </h3>
          <Breadcrumb
            item={[
              { name: <Icon path={mdiHomeOutline} size={0.85} />, to: "/" },
              { name: "Components", to: "/" },
              { name: "Modal", to: "" },
            ]}
          />
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Default</h5>
        <p>
          To add a Modal use the component <code>Modal</code>
        </p>
        <FlexRow>
          <Button
            background="dark"
            onClick={() => {
              toggleModal(0)
            }}
          >
            Click Me
          </Button>
          <Modal
            active={openModal[0]}
            onClose={() => {
              toggleModal(0)
            }}
            title="Modal Title"
          >
            <FlexColumn align="center">
              <Avatar alt="avatar" text="LD" size="100px" />
              <p>fjfk</p>
              <p>fjfk</p>
              <p>fjfk</p>
              <p>fjfk</p>
            </FlexColumn>
          </Modal>
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Color</h5>
        <p>
          To add a Modal use the component <code>Modal</code>
        </p>
        <FlexRow>
          <Button
            background="primary"
            onClick={() => {
              toggleModal(1)
            }}
          >
            Primary Modal
          </Button>
          <Modal
            active={openModal[1]}
            color="primary"
            onClose={() => {
              toggleModal(1)
            }}
            title="Modal Title"
          >
            <FlexColumn align="center">
              <Avatar alt="avatar" text="LD" size="100px" />
              <p>fjfk</p>
              <p>fjfk</p>
              <p>fjfk</p>
              <p>fjfk</p>
            </FlexColumn>
          </Modal>
          <Button
            background="success"
            onClick={() => {
              toggleModal(2)
            }}
          >
            Success Modal
          </Button>
          <Modal
            active={openModal[2]}
            color="success"
            onClose={() => {
              toggleModal(2)
            }}
            title="Modal Title"
          >
            <FlexColumn align="center">
              <Avatar alt="avatar" text="LD" size="100px" />
              <p>fjfk</p>
              <p>fjfk</p>
              <p>fjfk</p>
              <p>fjfk</p>
            </FlexColumn>
          </Modal>
        </FlexRow>
      </Card>
    </Container>
  )
}
export default ModalPage
