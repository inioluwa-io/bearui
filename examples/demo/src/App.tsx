import React, { useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import "./App.css"
import Login from "./login"
import { useTheme, useThemeMode, Notification } from "rap-ui"
import Home from "./home"
import { useDataProvider, useNotification } from "rap-core"
import { NotifyProps } from "rap-ui/lib/types"
import Table from "./table"

const NotificationComponent: React.FC<any> = ({ notification }) => {
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
    dataProvider.getOne("/template", "http://localhost:8888/api/v1")
    dataProvider.getOne("/publish", "http://localhost:8888/api/v1")
  }, [dataProvider])

  const [themeMode, setThemeMode] = useThemeMode()
  const theme = useTheme()

  useEffect(() => {
    setThemeMode("lightmode")
  }, [])
  
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
          <Route
            path="/datatable"
            component={(props: any) => <Table {...props} />}
          />
        </Switch>
      </header>
    </div>
  )
}

export default App
