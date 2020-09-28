import React, { useEffect, useState } from "react"
import { useQueryStore, useNotification } from "@rap/core"
import {
  Button,
  FacebookButton,
  Input,
  Modal,
  LinkButton,
  FlexRow,
  Card,
  FlexColumn,
  useThemeMode,
  FormControl,
  Avatar,
  GoogleButton,
  AppleButton,
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
      {/* {!Object.entries(template).length && (
        <Loader type="spinner" iconSize={1} />
      )} */}
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

      <FlexRow
        style={{ width: "100%", height: "100%", minHeight: "100vh" }}
        center
      >
        <Card size="md" align="center">
          <h4>Login Page</h4>
          <FlexRow>
            <p style={{ fontWeight: "500", fontSize: "16px" }}>
              Welcome Back!!
            </p>
          </FlexRow>
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
          <FlexColumn gap="15px">
            <Button
              gradient
              background="primary"
              loading={login}
              onClick={() => {
                setLogin(prevState => !prevState)
              }}
              size="md"
            >
              Login
            </Button>
            <FlexRow center><p>or</p></FlexRow>
            <p>
              Not registered? <a href="http://">Create an account</a>
            </p>
          </FlexColumn>
        </Card>
      </FlexRow>
    </>
  )
}

export default Login
