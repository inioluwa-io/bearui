import React, { useState } from "react"
import { useLogin, useLogout } from "rap-core"
import { Button, Notification, useNotificationProvider } from "rap-ui"
import { NotifyProps } from "rap-ui/lib/types"

const Login: React.FC<any> = () => {
  const login = useLogin()
  const logout = useLogout()
  const [notificationQueue, setNofticationQueue] = useNotificationProvider()

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
      {console.log(notificationQueue)}
      

      <br />
      <Button
        id="name"
        background="info"
        glow
        gradient
        size={"md"}
        onClick={(e: any) => {
          setNofticationQueue([
            ...notificationQueue,
            { title: "djd", text: "djd" },
          ])
        }}
      >
        Login
      </Button>
    </>
  )
}

export default Login
