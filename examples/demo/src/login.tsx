import React from "react"
import { useLogin } from "rap-core"
import { Button } from "rap-ui"

const Login: React.FC<any> = () => {
  const login = useLogin()
  const handleLogin: any = (e: EventListener) => {
    console.log(login({ username: "dd" }, "/"))
  }
  return (
    <>
      <br />
      <Button
        id="name"
        background="primary"
        glow
        gradient
        size={"lg"}
        onClick={handleLogin}
      >
        Search
      </Button>
      <br />
      <Button id="name" background="info" glow gradient size={"md"}>
        Search
      </Button>
    </>
  )
}

export default Login
