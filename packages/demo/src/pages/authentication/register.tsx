import React, { useState } from "react"
import { Button, Input, FlexRow, Card, FlexColumn, Checkbox } from "@bearui/ui"
import { Link } from "react-router-dom"
import styled from "styled-components"

const RegisterCard: any = styled(Card)`
  @media (max-width: 441px) {
    height: calc(100% - 61px);
    justify-content: center;
  }
`

const RegisterPage: React.FC<any> = () => {
  const [login, setLogin] = useState<boolean>(false)
  return (
    <FlexRow center style={{ height: "100%" }}>
      <RegisterCard size="md" align="center" gap="30px">
        <h4>Register</h4>
        <FlexColumn gap="20px">
          <FlexColumn gap="15px">
            <FlexRow align="stretch">
              <Input
                id="name"
                color="primary"
                onInputChange={(value: string) => {
                  console.log(value)
                }}
                onError={() => {}}
                placeholder="Name"
              />
            </FlexRow>
            <FlexRow align="stretch">
              <Input
                id="name"
                type="email"
                color="primary"
                onInputChange={(value: string) => {
                  console.log(value)
                }}
                onError={() => {}}
                placeholder="Email"
              />
            </FlexRow>
            <FlexRow align="stretch">
              <Input
                id="password"
                type="password"
                color="primary"
                onInputChange={(value: string) => {
                  console.log(value)
                }}
                onError={() => {}}
                placeholder="Password"
              />
            </FlexRow>
            <FlexRow align="stretch">
              <Input
                id="co-password"
                type="password"
                color="primary"
                onInputChange={(value: string) => {
                  console.log(value)
                }}
                onError={() => {}}
                placeholder="Confirm Password"
              />
            </FlexRow>
          </FlexColumn>
          <Checkbox id="accept" active={true}>
            <FlexRow>
              <p style={{ textAlign: "left" }}>
                I accept the terms & conditions.
              </p>
            </FlexRow>
          </Checkbox>
          <Button
            disabled
            gradient
            background="primary"
            loading={login}
            onClick={() => {
              setLogin(prevState => !prevState)
            }}
          >
            Register
          </Button>
          <p>
            Already registered? <Link to="/pages/login">Login</Link>
          </p>
        </FlexColumn>
      </RegisterCard>
    </FlexRow>
  )
}

export default RegisterPage
