import React, { useState } from "react"
import { useQueryStore } from "@rap/core"
import {
  Button,
  Input,
  FlexRow,
  Card,
  FlexColumn,
  useThemeMode,
  FormControl,
} from "@rap/ui"
import { Link } from "react-router-dom"

const Login: React.FC<any> = () => {
  const [themeMode, setThemeMode] = useThemeMode()
  const queryStore = useQueryStore()
  const [login, setLogin] = useState<boolean>(false)

  const { data: template, loading } = queryStore.getOne("template", {
    name: "Plain Blue",
  })

  return (
    <>
      <FlexRow
        style={{ width: "100%", height: "100%", minHeight: "100vh" }}
        center
      >
        <Card size="md" align="center">
          <h3>Login Page</h3>
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
            <FlexRow center>
              <p>or</p>
            </FlexRow>
            <p>
              Not registered? <Link to="/">Create an account</Link>
            </p>
          </FlexColumn>
        </Card>
      </FlexRow>
    </>
  )
}

export default Login
