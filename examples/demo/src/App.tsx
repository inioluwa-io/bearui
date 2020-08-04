import React, { useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import "./App.css"
import Login from "./login"
import { useTheme, useThemeMode, Notification } from "rap-ui"
import Home from "./home"
import { useDataProvider, useNotification } from "rap-core"
import { NotifyProps } from "rap-ui/lib/types"
import { useSelector } from "react-redux"

const NotificationComponent: React.FC<any> = ({ notification }) => {
  // const notification = useSelector(
  //   (state: any) => state.notificationReducer.notification
  // )
  // console.log(notification)
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        zIndex: 9999,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        height: notification().length * 100 + "px",
        flexDirection: "column-reverse",
        transition: "all .45s",
      }}
    >
      {notification().map((item: NotifyProps, idx: number) => (
        <Notification
          key={idx}
          title={item.title}
          text={item.text}
          icon={item.icon}
          iconColor={item.iconColor}
        />
      ))}
    </div>
  )
}
const App: React.FC<any> = () => {
  const dataProvider = useDataProvider()
  const [notification] = useNotification(6000)
  useEffect(() => {
    dataProvider.getOne("/template", {
      id: { id: "" },
    })
    dataProvider.getOne("/publish", {
      id: { id: "" },
    })
  }, [dataProvider])

  const [themeMode] = useThemeMode()
  const theme = useTheme()
  return (
    <div className="App">
      <NotificationComponent notification={notification} />
      <header
        className="App-header"
        style={{ background: theme[themeMode].background }}
      >
        <Switch>
          <Route
            exact
            path="/"
            component={(props: any) => <Home {...props} />}
          />
          <Route
            path="/login"
            component={(props: any) => <Login {...props} />}
          />
        </Switch>
      </header>
    </div>
  )
}

export default App
