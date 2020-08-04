import React, { useEffect } from "react"
import { useLogin, useQueryStore, useLogout, useNotification } from "rap-core"
import { Button, Switch, Input, useThemeMode, useTheme } from "rap-ui"

const Login: React.FC<any> = () => {
  // const login = useLogin()
  // const logout = useLogout()
  const [themeMode, setThemeMode] = useThemeMode()
  const theme = useTheme()
  const queryStore = useQueryStore()
  const [notification, addNotification] = useNotification()

  const template = queryStore.getOne("template", { name: "Plin Blue" })
  useEffect(() => {
    if (!template) {
      addNotification({
        title: "Data Provider",
        text: "message",
        icon: "mdiCheck",
        iconColor: "success",
      })
    }
  }, [])
  // const handleLogin: any = (e: EventListener) => {
  //   login({ username: "log" }, "/")
  // }
  // const handleLogout: any = (e: EventListener) => {
  //   console.log(logout({ username: "dd" }, "/"))
  // }

  return (
    <>
      <ul>{template && <li>{template.name}</li>}</ul>
      <div
        style={{
          background: theme[themeMode].cardbackground,
          padding: "60px 85px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: "10px",
          boxShadow: "0 0 35px -18px #292929",
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
          onError={() => {}}
          placeholder="Enter your password"
        />
        <br />
        <div>
          <Switch
            active={themeMode === "darkmode" ? true : false}
            color="success"
            onClick={(value: boolean) => {
              value ? setThemeMode("darkmode") : setThemeMode("lightmode")
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
              addNotification({
                title: "Award Unlocked!",
                icon: "mdiTrophy",
                text:
                  Math.floor(Math.random() * 100) +
                  "You have reached level 13 and you have been given free 300 coins and +3XP.",
              })
            }}
          >
            Add notification
          </Button>
        </div>
      </div>
    </>
  )
}

export default Login
