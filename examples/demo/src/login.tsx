import React, { useState } from "react"
import { useLogin, useLogout, useNotification } from "rap-core"
import { Button, Notification } from "rap-ui"
import { NotifyProps } from "rap-ui/lib/types"

const Login: React.FC<any> = () => {
  const login = useLogin()
  const logout = useLogout()
  const [notification, addNotification] = useNotification<NotifyProps>()

  const handleLogin: any = (e: EventListener) => {
    login({ username: "log" }, "/")
  }
  const handleLogout: any = (e: EventListener) => {
    console.log(logout({ username: "dd" }, "/"))
  }

  return (
    <>
      <br />
      <Button id="name" background="primary" glow gradient size={"lg"}>
        Search
      </Button>
      {console.log(notification)}

      <br />
      <Button
        id="name"
        background="info"
        glow
        gradient
        size={"md"}
        onClick={(e: any) => {
          addNotification({ title: "djd", text: "djd" })
        }}
      >
        Login
      </Button>
    </>
  )
}

export default Login
