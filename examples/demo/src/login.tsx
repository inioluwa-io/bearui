import React, { useEffect, useState } from "react"
import { useLogin, useQueryStore, useLogout, useNotification } from "rap-core"
import {
  Button,
  AppleButton,
  FacebookButton,
  GoogleButton,
  TwitterButton,
  Switch,
  Input,
  Modal,
  Shimmer,
  useThemeMode,
  useTheme,
} from "rap-ui"

const Login: React.FC<any> = () => {
  const [themeMode, setThemeMode] = useThemeMode()
  const theme = useTheme()
  const queryStore = useQueryStore()
  const [, addNotification] = useNotification()
  const [openModal, setOpenModal] = useState<boolean>(false)

  const { data: template, loading } = queryStore.getOne("template", {
    name: "Plain Blue",
  })

  useEffect(() => {
    if (!template) {
      addNotification({
        title: "QueryStore",
        text: "Could not fetch from template",
        icon: "mdiAlert",
        iconColor: "danger",
      })
    }
  }, [template, addNotification])
  // const handleLogin: any = (e: EventListener) => {
  //   login({ username: "log" }, "/")
  // }
  // const handleLogout: any = (e: EventListener) => {
  //   console.log(logout({ username: "dd" }, "/"))
  // }

  return (
    <>
      <Shimmer loading={loading} size="lg">
        <p
          style={{
            margin: "0",
            fontSize: "16px",
          }}
        >
          {template.name}
        </p>
        <Modal
          active={openModal}
          onClose={() => {
            setOpenModal(false)
          }}
          title="Modal Title"
        >
          <div style={{ textAlign: "left", fontSize: "18px" }}>
            Hello I'm a modal
          </div>
        </Modal>

        <h4 style={{ margin: "0 0 25px" }}>Login Page</h4>
        <Input
          type="email"
          id="email"
          color="primary"
          label="Email"
          icon="mdiEmailOutline"
          onChange={(value: string) => {
            console.log(value)
          }}
          onError={() => {}}
          placeholder="Enter your email"
        />
        <Input
          id="password"
          type="password"
          color="primary"
          icon="mdiLock"
          label="Password"
          onChange={(value: string) => {
            console.log(value)
          }}
          onError={() => {}}
          placeholder="Enter your password"
        />
        <br />
        <div>
          <Switch
            active={themeMode === "darkmode" ? true : false}
            color="success"
            onClick={(value: boolean) => {
              value ? setThemeMode("darkmode") : setThemeMode("lightmode")
            }}
          />
        </div>
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Button
            id="name"
            background="primary"
            gradient
            size="md"
            onClick={(e: any) => {
              addNotification({
                title: "Award Unlocked!",
                icon: "mdiTrophy",
                text:
                  Math.floor(Math.random() * 100) +
                  "You have reached level 13 and you have been given free 300 coins and +3XP.",
              })
            }}
          >
            Send Notification
          </Button>
          <Button
            id="name"
            background="info"
            gradient
            size="md"
            onClick={(e: any) => {
              setOpenModal(true)
            }}
            style={{ marginTop: "10px" }}
          >
            Open Modal
          </Button>
          <AppleButton
            onClick={() => {}}
            size="md"
            style={{ marginTop: "10px" }}
          />
        </div>
      </Shimmer>
    </>
  )
}

export default Login
