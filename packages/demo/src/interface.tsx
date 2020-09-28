import React, { useState } from "react"
import { useQueryStore, useNotification } from "@rap/core"
import {
  Button,
  Switch,
  Modal,
  Container,
  Grid,
  FlexRow,
  Card,
  FlexColumn,
  useThemeMode,
  Avatar,
} from "@rap/ui"
import img from "./brooks-leibee-562087-unsplash.jpg"

const Interface: React.FC<any> = () => {
  const [themeMode, setThemeMode] = useThemeMode()
  const queryStore = useQueryStore()
  const [, addNotification] = useNotification()
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [login, setLogin] = useState<boolean>(false)

  const { data: template, loading } = queryStore.getOne("template", {
    name: "Plain Blue",
  })

  return (
    <>
      <Modal
        active={openModal}
        onClose={() => {
          setOpenModal(false)
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

      <FlexColumn style={{ width: "100%", height: "100%", minHeight: "100vh" }}>
        <Container>
          <Grid lgCol="3" mdCol="3" xsCol="12"></Grid>

          <Card align="center" lgCol="3" mdCol="4" smCol="5" xsCol="12">
            <h4>User Interface controls</h4>
            <FlexRow center>
              <p>Switch from {themeMode}</p>
              <Switch
                active={themeMode === "darkmode" ? true : false}
                color="success"
                onClick={(value: boolean) => {
                  value ? setThemeMode("darkmode") : setThemeMode("lightmode")
                }}
              />
            </FlexRow>
            <FlexColumn gap="10px" align="stretch">
              <Button
                background="info"
                onClick={() => {
                  addNotification({
                    title: "Award Unlocked!",
                    icon: "mdiTrophy",
                    text:
                      Math.floor(Math.random() * 100) +
                      "You have reached level 13 and you have been given free 300 coins and +3XP.",
                  })
                }}
              >
                Push Notification
              </Button>
              <Button
                background="dark"
                onClick={() => {
                  setOpenModal(true)
                }}
                size="md"
              >
                Modal
              </Button>
            </FlexColumn>
          </Card>
        </Container>
      </FlexColumn>
    </>
  )
}

export default Interface
