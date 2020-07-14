import React, { useState, useEffect } from "react"
import { useLogin, useLogout, useNotification } from "rap-core"
import { Button, Notification } from "rap-ui"
import { NotifyProps } from "rap-ui/lib/types"

const NotificationComponent: React.FC<any> = ({ item, idx, onFinish }) => {
  useEffect(() => {
    (function () {
      setTimeout(() => {
        onFinish(idx)
      }, 2000)
    })()
  }, [onFinish])

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
        <NotificationComponent
          key={idx}
          item={item}
          idx={idx}
          onFinish={(id: number) => {
            const notificationQueueCopy = [...notification]
            notificationQueueCopy.splice(id, 1)
            setNotification(notificationQueueCopy)
          }}
        />
      ))}

      <br />
      <br />
      <Button
        id="name"
        background="info"
        glow
        gradient
        size={"sm"}
        onClick={(e: any) => {
          // setTest([...test, "q"])
          setNotification([
            ...notification,
            { title: "title", text: "this is a message" },
          ])
          console.log([
            ...notification,
            { title: "title", text: "this is a message" },
          ])
        }}
      >
        Add notification
      </Button>
    </>
  )
}

export default Login
