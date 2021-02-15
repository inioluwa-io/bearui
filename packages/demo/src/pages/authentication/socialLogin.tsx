import React, { useState } from "react"
import {
  Button,
  Input,
  FlexRow,
  Card,
  FlexColumn,
  AppleButton,
  FacebookButton,
  GithubButton,
  GoogleButton,
  TwitterButton,
} from "@bearui/ui"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { mdiEmailOutline, mdiLock } from "@mdi/js"

const LoginCard: any = styled(Card)`
  @media (max-width: 441px) {
    height: calc(100% - 61px);
    justify-content: center;
  }
`

const SocialLoginPage: React.FC<any> = () => {
  const [login, setLogin] = useState<boolean>(false)
  return (
    <FlexRow center style={{ height: "100%" }}>
      <LoginCard size="md" align="center" gap="30px">
        <h4>Login</h4>
        <FlexColumn gap="20px">
          <FlexColumn align="left" style={{ textAlign: "left" }}>
            <p>Welcome back</p>
          </FlexColumn>
          <FlexColumn gap="15px">
            <FlexRow align="stretch">
              <Input
                type="email"
                id="email"
                color="primary"
                label="Email"
                validate="email"
                icon={mdiEmailOutline}
                onInputChange={(value: string) => {
                  console.log(value)
                }}
                onError={() => {}}
                placeholder="Enter your email"
              />
            </FlexRow>
            <FlexRow align="stretch">
              <Input
                id="password"
                type="password"
                color="primary"
                icon={mdiLock}
                label="Password"
                validate="number"
                onInputChange={(value: string) => {
                  console.log(value)
                }}
                onError={() => {}}
                placeholder="Enter your password"
              />
            </FlexRow>
          </FlexColumn>
          <Button
            gradient
            background="primary"
            loading={login}
            onClick={() => {
              setLogin(prevState => !prevState)
            }}
          >
            Login
          </Button>
          <p>or</p>
          <FlexRow gap="15px" align="center">
            <AppleButton onClick={() => {}} iconOnly />
            <GoogleButton onClick={() => {}} iconOnly />
            <FacebookButton onClick={() => {}} iconOnly />
            <TwitterButton onClick={() => {}} iconOnly />
            <GithubButton onClick={() => {}} iconOnly />
          </FlexRow>
          <p>
            Not registered? <Link to="/pages/register">Create an account</Link>
          </p>
        </FlexColumn>
      </LoginCard>
    </FlexRow>
  )
}

export default SocialLoginPage
