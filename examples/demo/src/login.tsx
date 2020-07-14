import React from "react"
import { useLogin, useLogout } from "rap-core"
import { Button } from "rap-ui"

const Login: React.FC<any> = () => {
  const login = useLogin()
  const logout = useLogout()

  const handleLogin: any = (e: EventListener) => {
    login({ username: "dd" }, "/")
  }
  const handleLogout: any = (e: EventListener) => {
    console.log(logout({ username: "dd" }, "/"))
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
      >
        Search
      </Button>
      <br />
      <Button
        id="name"
        background="info"
        glow
        gradient
        size={"md"}
        onClick={handleLogin}
      >
        Search
      </Button>
    </>
  )
}

export default Login
