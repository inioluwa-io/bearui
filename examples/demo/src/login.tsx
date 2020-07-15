import React, { useState, useEffect } from "react"
import { useLogin, useLogout, useNotification } from "rap-core"
import { Button, Notification } from "rap-ui"
import { NotifyProps } from "rap-ui/lib/types"

const NotificationComponent: React.FC<any> = ({ item, idx, onFinish }) => {
  useEffect(() => {
    ;(function () {
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
      <div
        style={{
          position: "fixed",
          top: "0",
          zIndex: 9999,
          display: "flex",
          height: notification.length * (100) + "px",
          flexDirection: "column-reverse",
          transition: "all .35s",
        }}
      >
          {notification.map((item: NotifyProps, idx: number) => (
            <Notification key={idx} title={item.title} text={item.text} icon = "mdiTrophyVariant" />
          ))}
        </div>
      

      <br />
      <br />
      <Button
        id="name"
        background="info"
        glow
        gradient
        size={"sm"}
        onClick={(e: any) => {
          setNotification([
            ...notification,
            {
              title: "Award Unlocked!",
              text: "You have reached level 13 and you have been given free 300 coins and +3XP.",
            },
          ])
        }}
      >
        Add notification
      </Button>
    </>
  )
}

export default Login
