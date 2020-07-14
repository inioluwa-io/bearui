import React, { useState, useEffect } from "react"
import { useLogin, useLogout, useNotification } from "rap-core"
import { Button, Notification } from "rap-ui"
import { NotifyProps } from "rap-ui/lib/types"

const NotificationComponent: React.FC<any> = ({ item, idx }) => {
  const [notification, setNotification] = useNotification<NotifyProps>()
  useEffect(() => {
    setTimeout(() => {
      const notificationQueueCopy = notification
      notificationQueueCopy.splice(idx, 1)
      console.log(notificationQueueCopy)
      setNotification(notificationQueueCopy)
    }, 2000)
  }, [notification, setNotification])

  return (
    <div>
      <p>{item.title}</p>
      <p>{item.text}</p>
    </div>
  )
}

const Login: React.FC<any> = () => {
  const login = useLogin()
  const logout = useLogout()
  const [notification, setNotification] = useNotification<NotifyProps>()

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
      {notification.map((item: NotifyProps, idx: number) => (
        <NotificationComponent key={idx} item={item} idx={idx} />
      ))}

      <br />
      <Button
        id="name"
        background="info"
        glow
        gradient
        size={"md"}
      >
        Login
      </Button>
      
      <br />
      <Button
        id="name"
        background="info"
        glow
        gradient
        size={"md"}
        onClick={(e: any) => {
          setNotification([
            ...notification,
            { title: "title", text: "this is a message" },
          ])
        }}
      >
        Login
      </Button>
    </>
  )
}

export default Login
