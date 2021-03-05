import React, { FormEvent, useState } from "react"
import {
  Button,
  Input,
  FlexRow,
  Card,
  FlexColumn,
  useNotification,
} from "@bearui/ui"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { mdiAccountOutline, mdiAlert, mdiLock } from "@mdi/js"
import { useLogin } from "ra-core"

const LoginCard: any = styled(Card)`
  @media (max-width: 441px) {
    height: calc(100% - 61px);
    justify-content: center;
  }
`
type FormLoginInput = {
  username: string
  password: string
}

const defaultInput = {
  username: "admin2",
  password: "12222234",
}

const LoginPage: React.FC<any> = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [formInput, setFormInput] = useState<FormLoginInput>(defaultInput)
  const login = useLogin()
  const [, setNotification] = useNotification()

  const handleSubmit =  (
    e: Event | FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault()

    try {
      login(formInput, "/")
    } catch (e) {
      setNotification({
        avatarProps: { icon: mdiAlert, color: "danger" },
        content: <p>{e.message}</p>,
        time: "11:38pm",
      })
      console.warn(e)
      setLoading(false)
    }
  }

  return (
    <FlexRow center style={{ height: "100%" }}>
      <LoginCard size="md" align="center" gap="30px">
        <h4>Login</h4>
        <FlexColumn gap="20px" align="left">
          <p>Welcome back</p>
          <form onSubmit={handleSubmit}>
            <FlexColumn gap="20px">
              <FlexColumn gap="15px">
                <FlexRow align="stretch">
                  <Input
                    type="text"
                    id="username"
                    color="primary"
                    label="Username"
                    defaultValue={defaultInput.username}
                    icon={mdiAccountOutline}
                    onInputChange={(value: string) => {
                      setFormInput({ ...formInput, username: value })
                    }}
                    onError={() => {}}
                    placeholder="Enter your Username"
                  />
                </FlexRow>
                <FlexRow align="stretch">
                  <Input
                    id="password"
                    type="password"
                    color="primary"
                    icon={mdiLock}
                    label="Password"
                    defaultValue={defaultInput.password}
                    validate="number"
                    onInputChange={(value: string) => {
                      setFormInput({ ...formInput, password: value })
                    }}
                    onError={() => {}}
                    placeholder="Enter your password"
                  />
                </FlexRow>
              </FlexColumn>
              <Button
                gradient
                background="primary"
                loading={loading}
                onClick={e => {
                  setLoading(prevState => !prevState)
                  handleSubmit(e)
                }}
              >
                Login
              </Button>
              <p>
                Not registered?{" "}
                <Link to="/pages/register">Create an account</Link>
              </p>
            </FlexColumn>
          </form>
        </FlexColumn>
      </LoginCard>
    </FlexRow>
  )
}

export default LoginPage
