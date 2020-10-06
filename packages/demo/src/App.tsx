import React, { useEffect } from "react"
import { Switch, Route, Link } from "react-router-dom"
import "./App.css"
import Login from "./login"
import {
  useTheme,
  useThemeMode,
  Notification,
  NotifyProps,
  Avatar,
  FlexRow,
  Navbar,
  Layout,
  Switch as UiSwitch,
  Dropdown,
  LinkButton,
} from "@rap/ui"
import Home from "./home"
import { useDataProvider, useNotification } from "@rap/core"
import Table from "./table"
import BreadcrumbPage from "./breadcrumb"
import TooltipPage from "./tooltip"
import Interface from "./interface"
import Login2 from "./login2"
import DropdownPage from "./dropdown"
import CollapsePage from "./collapse"
import ChipPage from "./chips"
import DataListPage from "./datalist"
import ProgressPage from "./progress"
import img from "./brooks-leibee-562087-unsplash.jpg"

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
  const [notification] = useNotification(8000)

  const URL =
    process.env.NODE_ENV === "production"
      ? "https://faceform.herokuapp.com/api/v1"
      : "http://localhost:8888/api/v1"

  useEffect(() => {
    dataProvider.getOne("/template", URL)
    dataProvider.getOne("/publish", URL)
  }, [dataProvider, URL])

  const [themeMode, setThemeMode] = useThemeMode()
  const theme = useTheme()

  return (
    <div className="App">
      <Switch>
        <Layout
          notification={notification}
          sideBar={
            <>
              <LinkButton background="dark" to="/login2">
                login2
              </LinkButton>
              <LinkButton gradient background="danger" to="/login">
                login
              </LinkButton>
              <LinkButton gradient background="info" to="/interface">
                Interface
              </LinkButton>
              <LinkButton gradient background="success" to="/breadcrumb">
                Breadcrumb
              </LinkButton>
              <LinkButton gradient to="/datatable">
                Datatables
              </LinkButton>
              <LinkButton background="warning" gradient to="/tooltip">
                Tooltip
              </LinkButton>
              <LinkButton background="dark" gradient to="/dropdown">
                Dropdown
              </LinkButton>
              <LinkButton background="primary" gradient to="/collapse">
                Collapse
              </LinkButton>
              <LinkButton background="info" gradient to="/chip">
                Chip
              </LinkButton>
              <LinkButton background="danger" gradient to="/progress">
                Progress
              </LinkButton>
              <LinkButton background="warning" gradient to="/datalist">
                Data List
              </LinkButton>
              <LinkButton background="danger" gradient to="/progress">
                Progress
              </LinkButton>
              <LinkButton background="warning" gradient to="/datalist">
                Data List
              </LinkButton>
              <LinkButton background="danger" gradient to="/progress">
                Progress
              </LinkButton>
              <LinkButton background="warning" gradient to="/datalist">
                Data List
              </LinkButton>
            </>
          }
          navbar={
            <Navbar
              position="floating"
              links={[
                <Link to="/">Home</Link>,
                <Link to="/">About</Link>,
                <Link to="/">Contact</Link>,
                <Dropdown
                  list={[
                    "list 1",
                    "list 2",
                    <FlexRow center>
                      <p>Switch from {themeMode}</p>
                      <UiSwitch
                        active={themeMode === "darkmode" ? true : false}
                        color="success"
                        onClick={(value: boolean) => {
                          value
                            ? setThemeMode("darkmode")
                            : setThemeMode("lightmode")
                        }}
                      />
                    </FlexRow>,
                  ]}
                  listener="click"
                >
                  <Avatar alt="avatar" size="xs" text="LD" src={img} />
                </Dropdown>,
              ]}
            />
          }
        >
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
            component={(props: any) => <DropdownPage {...props} />}
          />
          <Route
            path="/collapse"
            component={(props: any) => <CollapsePage {...props} />}
          />
          <Route
            path="/chip"
            component={(props: any) => <ChipPage {...props} />}
          />
          <Route
            path="/progress"
            component={(props: any) => <ProgressPage {...props} />}
          />
          <Route
            path="/datalist"
            component={(props: any) => <DataListPage {...props} />}
          />
        </Layout>
      </Switch>
    </div>
  )
}

export default App
