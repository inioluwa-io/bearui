import React, { useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import "./App.css"
import Login from "./login"
import { useTheme, useThemeMode, Notification, NotifyProps } from "@rap/ui"
import Home from "./home"
import { useDataProvider, useNotification } from "@rap/core"
import Table from "./table"
import BreadcrumbPage from "./breadcrumb"
import TooltipPage from "./tooltip"
import Interface from "./interface"
import Login2 from "./login2"
import Dropdown from "./dropdown"

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

  const URL =
    process.env.NODE_ENV === "production"
      ? "https://faceform.herokuapp.com/api/v1"
      : "http://localhost:8888/api/v1"

  useEffect(() => {
    dataProvider.getOne("/template", URL)
    dataProvider.getOne("/publish", URL)
  }, [dataProvider])

  const [themeMode, setThemeMode] = useThemeMode()
  const theme = useTheme()

  useEffect(() => {
    // setThemeMode("lightmode")
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
            path="/login2"
            component={(props: any) => <Login2 {...props} />}
          />
          <Route
            path="/datatable"
            component={(props: any) => <Table {...props} />}
          />
          <Route
            path="/breadcrumb"
            component={(props: any) => <BreadcrumbPage {...props} />}
          />
          <Route
            path="/tooltip"
            component={(props: any) => <TooltipPage {...props} />}
          />
          <Route
            path="/interface"
            component={(props: any) => <Interface {...props} />}
          />
          <Route
            path="/dropdown"
            component={(props: any) => <Dropdown {...props} />}
          />
        </Switch>
      </header>
    </div>
  )
}

export default App
