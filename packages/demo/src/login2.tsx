import React, { useState } from "react"
import { useQueryStore, useNotification } from "@rap/core"
import {
  Button,
  FacebookButton,
  TwitterButton,
  Input,
  Modal,
  FlexRow,
  Card,
  FlexColumn,
  FormControl,
  Avatar,
  GoogleButton,
  AppleButton,
  GithubButton,
  Container,
} from "@rap/ui"
import { Link } from "react-router-dom"

const Login2: React.FC<any> = () => {
  const queryStore = useQueryStore()
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [login, setLogin] = useState<boolean>(false)

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

      <Container>
        <FlexRow center>
          <Card size="md" align="center" gap="35px">
            <h3>Login Page</h3>

            <FlexColumn className="login-body">
              <FlexRow>
                <p style={{ fontWeight: "bold", fontSize: "16px" }}>
                  Welcome Back!!
                </p>
              </FlexRow>
              <FormControl>
                <Input
                  type="email"
                  id="email"
                  color="primary"
                  label="Email"
                  clearButton
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
                <p>
                  Not registered? <Link to="/">Create an account</Link>
                </p>
                <p>or</p>
                <FlexRow gap="15px">
                  <AppleButton onClick={() => {}} iconOnly size="md" />
                  <GoogleButton onClick={() => {}} iconOnly size="md" />
                  <FacebookButton onClick={() => {}} iconOnly size="md" />
                  <TwitterButton onClick={() => {}} iconOnly size="md" />
                  <GithubButton onClick={() => {}} iconOnly size="md" />
                </FlexRow>
              </FlexColumn>
            </FlexColumn>
          </Card>
        </FlexRow>
      </Container>
    </>
  )
}

export default Login2