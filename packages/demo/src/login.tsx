import React, { useEffect, useState } from "react"
import { useQueryStore, useNotification } from "@rap/core"
import {
  Button,
  FacebookButton,
  Switch,
  Input,
  Modal,
  Container,
  LinkButton,
  Grid,
  FlexRow,
  Card,
  FlexColumn,
  useThemeMode,
  useTheme,
  FormControl,
  Loader,
  Avatar,
} from "@rap/ui"
import img from "./brooks-leibee-562087-unsplash.jpg"

const Login: React.FC<any> = () => {
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
      {!Object.entries(template).length && (
        <Loader type="spinner" iconSize={1} />
      )}
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
        </FlexColumn>
      </Modal>

      <FlexColumn style={{ width: "100%", height: "100%", minHeight: "100vh" }}>
        <Container>
          <Grid lgCol="3" mdCol="1" xsCol="12" />

          <Grid lgCol="3" mdCol="4" smCol="5" xsCol="12">
            <Card size="sm">
              <h4>User Interface controls</h4>
              <FlexRow center>
                <p>Switch {themeMode}</p>
                <Switch
                  active={themeMode === "darkmode" ? true : false}
                  color="success"
                  onClick={(value: boolean) => {
                    value ? setThemeMode("darkmode") : setThemeMode("lightmode")
                  }}
                />
              </FlexRow>
              <FlexColumn gap="10px">
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
          </Grid>
          <Grid lgCol="3" mdCol="4" smCol="5" xsCol="12">
            <Card size="sm">
              <h4>Login Page</h4>
              <Avatar src={img} size="lg" />

              <FormControl>
                <Input
                  type="email"
                  id="email"
                  color="primary"
                  label="Email"
                  validate="email"
                  icon="mdiEmailOutline"
                  onInputChange={(value: string) => {
                    console.log(value)
                  }}
                  onError={() => {}}
                  placeholder="Enter your email"
                />
              </FormControl>
              <FormControl>
                <Input
                  id="password"
                  type="password"
                  color="primary"
                  icon="mdiLock"
                  label="Password"
                  validate="number"
                  onInputChange={(value: string) => {
                    console.log(value)
                  }}
                  onError={() => {}}
                  placeholder="Enter your password"
                />
              </FormControl>
              <FlexColumn>
                <Button
                  background="primary"
                  loading={login}
                  onClick={() => {
                    setLogin(prevState => !prevState)
                  }}
                  size="md"
                >
                  Login
                </Button>
              </FlexColumn>
              <p>or</p>
              <FlexColumn gap="10px">
                <FacebookButton onClick={() => {}} size="md" />
                <LinkButton to="/" size="md">
                  Back to Home
                </LinkButton>
              </FlexColumn>
            </Card>
          </Grid>
          <Grid lgCol="1" />
        </Container>
      </FlexColumn>
    </>
  )
}

export default Login
