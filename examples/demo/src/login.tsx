import React, { useState, useEffect } from "react"
import { useLogin, useLogout, useNotification } from "rap-core"
import { Button, Notification, Switch, Input } from "rap-ui"
import { NotifyProps } from "rap-ui/lib/types"
import { connect } from "react-redux"

const Message: React.FC<any> = ({ idx, item }) => {
  const [notification, setNotification] = useNotification<NotifyProps[]>([])

  const msgs = [...notification]

  useEffect(() => {
    let timer: any

    if (msgs.length) {
      timer = setTimeout(() => {
        msgs.shift()
        setNotification(msgs)
      }, 2500)
    }
    return () => clearTimeout(timer)
  }, [notification])
  return (
    <Notification
      key={idx}
      title={item.title}
      text={item.text}
      icon="mdiTrophyVariant"
      time={1500}
      onClose={(element: any) => {
        if (element) {
          element.style.opacity = "0"
        }
      }}
    />
  )
}

const NotificationComponent: React.FC<{}> = () => {
  const [notification] = useNotification<NotifyProps[]>([])
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        zIndex: 9999,
        display: "flex",
        height: notification.length * 100 + "px",
        flexDirection: "column-reverse",
        transition: "all .4s",
      }}
    >
      {notification.map((item: NotifyProps, idx: number) => (
        <Message idx={idx} item={item} />
      ))}
    </div>
  )
}

const Login: React.FC<any> = () => {
  const login = useLogin()
  const logout = useLogout()
  const [notification, setNotification] = useNotification<NotifyProps[]>([])

  const handleLogin: any = (e: EventListener) => {
    login({ username: "log" }, "/")
  }
  const handleLogout: any = (e: EventListener) => {
    console.log(logout({ username: "dd" }, "/"))
  }

  return (
    <>
      <NotificationComponent />
      <div
        style={{
          background: "#3E4451",
          padding: "60px 85px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: "10px",
          boxShadow: "0 0 35px -8px #292929",
        }}
      >
        <h4 style={{ margin: "0 0 25px" }}>Login Page</h4>
        <Input
          type="email"
          id="email"
          color="primary"
          label="Email"
          icon="mdiEmailOutline"
          onChange={(value: string) => {
            console.log(value)
          }}
          onError={() => {}}
          placeholder="Enter your email"
        />
        <Input
          id="password"
          type="password"
          color="primary"
          icon="mdiLock"
          label="Password"
          onChange={(value: string) => {
            console.log(value)
          }}
          placeholder="Enter your password"
        />
        <br />
        <div>
          <Switch
            active
            color="success"
            onClick={(e: any) => {
              const newno = [...notification]
              newno.shift()
              setNotification(newno)
            }}
          />
        </div>
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Button
            id="name"
            background="primary"
            glow
            gradient
            size={"sm"}
            onClick={(e: any) => {
              setNotification([
                ...notification,
                {
                  title: "Award Unlocked!",
                  text:
                    Math.floor(Math.random() * 100) +
                    "You have reached level 13 and you have been given free 300 coins and +3XP.",
                },
              ])
            }}
          >
            Add notification
          </Button>
        </div>
      </div>
    </>
  )
}
const mapStateToProps = (state: any) => ({
  notification: state.notification,
})

export default connect(mapStateToProps)(Login)
