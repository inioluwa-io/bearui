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
  Row,
  Card,
  Column,
  useThemeMode,
  useTheme,
  FormControl,
  Avatar,
} from "rap-ui"
import img from "./brooks-leibee-562087-unsplash.jpg"

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
      <Shimmer loading={loading} size="sm">
        <Modal
          active={openModal}
          onClose={() => {
            setOpenModal(false)
          }}
          title="Modal Title"
        >
          <Row xPosition="center" yPosition="bottom">
            <Avatar alt="avatar" text="LD" size="100px" src={img} />
            <p>fjfk</p>
          </Row>
          <Row xPosition="center">
            <Avatar alt="avatar" text="LD" size="100px" color="white" />
            <p>fjfk</p>
          </Row>
        </Modal>
        <h4>Login Page</h4>

        <FormControl>
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
        </FormControl>
        <FormControl>
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
        </FormControl>
        <div>
          <Switch
            active={themeMode === "darkmode" ? true : false}
            color="success"
            onClick={(value: boolean) => {
              value ? setThemeMode("darkmode") : setThemeMode("lightmode")
            }}
          />
        </div>
        <Column gap="10px">
          <FacebookButton
            iconOnly
            onClick={() => {
              addNotification({
                title: "Award Unlocked!",
                icon: "mdiTrophy",
                text:
                  Math.floor(Math.random() * 100) +
                  "You have reached level 13 and you have been given free 300 coins and +3XP.",
              })
            }}
            size="md"
          />
          <AppleButton
            iconOnly
            onClick={() => {
              setOpenModal(true)
            }}
            size="md"
            text="apple"
          />
        </Column>
      </Shimmer>
    </>
  )
}

export default Login
