import React, { useEffect } from "react"
import { Switch, Route, Link, NavLink, withRouter } from "react-router-dom"
import "./App.css"
import Login from "./login"
import {
  useThemeMode,
  useTheme,
  Avatar,
  FlexRow,
  Navbar,
  Layout,
  Switch as UiSwitch,
  Dropdown,
  Collapse,
  FlexColumn,
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
import Icon from "@mdi/react"
import { AvatarPage, ButtonPage, CheckboxPage } from "./components"
import {
  mdiBriefcaseOutline,
  mdiCardTextOutline,
  mdiCircleOutline,
  mdiFormatPaint,
  mdiWaterOutline,
} from "@mdi/js"

const App: React.FC<any> = ({ ...props }) => {
  const dataProvider = useDataProvider()
  const [notification] = useNotification(8000)
  const path = props.location.pathname

  const URL =
    process.env.NODE_ENV === "production"
      ? "https://faceform.herokuapp.com/api/v1"
      : "http://localhost:8888/api/v1"

  useEffect(() => {
    dataProvider.getOne("/template", URL)
    dataProvider.getOne("/publish", URL)
  }, [dataProvider, URL])

  const theme = useTheme()
  const [themeMode, setThemeMode] = useThemeMode()
  const color: string = themeMode === "darkmode" ? "#f4f4f4" : "#444444"

  return (
    <div className="App">
      <Switch>
        <Layout
          notification={notification}
          sideBar={
            <>
              <Collapse
                className="group-link"
                icon="mdiChevronRight"
                items={[
                  {
                    label: (
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCardTextOutline}
                          color={color}
                          size={0.75}
                        />
                        Card
                      </FlexRow>
                    ),
                    content: (
                      <FlexColumn>
                        <NavLink to="/card/basic" activeClassName="active">
                          <FlexRow gap="13px">
                            <Icon
                              path={mdiCircleOutline}
                              color={color}
                              size={0.45}
                            />
                            Basic
                          </FlexRow>
                        </NavLink>
                        <NavLink to="/card/statistics" activeClassName="active">
                          <FlexRow gap="13px">
                            <Icon
                              path={mdiCircleOutline}
                              color={color}
                              size={0.45}
                            />
                            Statistics
                          </FlexRow>
                        </NavLink>
                      </FlexColumn>
                    ),
                  },
                ]}
              ></Collapse>
              <NavLink to="/color" activeClassName="active">
                <FlexRow gap="13px">
                  <Icon path={mdiWaterOutline} color={color} size={0.7} />
                  Colors
                </FlexRow>
              </NavLink>
              <Collapse
                className="group-link"
                icon="mdiChevronRight"
                active={/\/component/.test(path)}
                items={[
                  {
                    label: (
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiBriefcaseOutline}
                          color={color}
                          size={0.75}
                        />
                        Components
                      </FlexRow>
                    ),
                    active: /\/component/.test(path),
                    content: (
                      <FlexColumn>
                        <NavLink
                          to="/component/avatar"
                          activeClassName="active"
                        >
                          <FlexRow gap="13px">
                            <Icon
                              path={mdiCircleOutline}
                              color={color}
                              size={0.45}
                            />
                            Avatar
                          </FlexRow>
                        </NavLink>
                        <NavLink
                          to="/component/button"
                          activeClassName="active"
                        >
                          <FlexRow gap="13px">
                            <Icon
                              path={mdiCircleOutline}
                              color={color}
                              size={0.45}
                            />
                            Button
                          </FlexRow>
                        </NavLink>
                        <NavLink to="/component/chip" activeClassName="active">
                          <FlexRow gap="13px">
                            <Icon
                              path={mdiCircleOutline}
                              color={color}
                              size={0.45}
                            />
                            Chip
                          </FlexRow>
                        </NavLink>
                        <NavLink
                          to="/component/checkbox"
                          activeClassName="active"
                        >
                          <FlexRow gap="13px">
                            <Icon
                              path={mdiCircleOutline}
                              color={color}
                              size={0.45}
                            />
                            Checkbox
                          </FlexRow>
                        </NavLink>
                        <NavLink
                          to="/component/collapse"
                          activeClassName="active"
                        >
                          <FlexRow gap="13px">
                            <Icon
                              path={mdiCircleOutline}
                              color={color}
                              size={0.45}
                            />
                            Collapse
                          </FlexRow>
                        </NavLink>
                        <NavLink
                          to="/component/dropdown"
                          activeClassName="active"
                        >
                          <FlexRow gap="13px">
                            <Icon
                              path={mdiCircleOutline}
                              color={color}
                              size={0.45}
                            />
                            Dropdown
                          </FlexRow>
                        </NavLink>
                        <NavLink to="/component/input" activeClassName="active">
                          <FlexRow gap="13px">
                            <Icon
                              path={mdiCircleOutline}
                              color={color}
                              size={0.45}
                            />
                            Input
                          </FlexRow>
                        </NavLink>
                        <NavLink
                          to="/component/loader"
                          activeClassName="active"
                        >
                          <FlexRow gap="13px">
                            <Icon
                              path={mdiCircleOutline}
                              color={color}
                              size={0.45}
                            />
                            Loader
                          </FlexRow>
                        </NavLink>
                        <NavLink to="/component/modal" activeClassName="active">
                          <FlexRow gap="13px">
                            <Icon
                              path={mdiCircleOutline}
                              color={color}
                              size={0.45}
                            />
                            Modal
                          </FlexRow>
                        </NavLink>
                        <NavLink
                          to="/component/navbar"
                          activeClassName="active"
                        >
                          <FlexRow gap="13px">
                            <Icon
                              path={mdiCircleOutline}
                              color={color}
                              size={0.45}
                            />
                            Navbar
                          </FlexRow>
                        </NavLink>
                        <NavLink
                          to="/component/pagination"
                          activeClassName="active"
                        >
                          <FlexRow gap="13px">
                            <Icon
                              path={mdiCircleOutline}
                              color={color}
                              size={0.45}
                            />
                            Pagination
                          </FlexRow>
                        </NavLink>
                        <NavLink
                          to="/component/progress"
                          activeClassName="active"
                        >
                          <FlexRow gap="13px">
                            <Icon
                              path={mdiCircleOutline}
                              color={color}
                              size={0.45}
                            />
                            Progress
                          </FlexRow>
                        </NavLink>
                        <NavLink
                          to="/component/switch"
                          activeClassName="active"
                        >
                          <FlexRow gap="13px">
                            <Icon
                              path={mdiCircleOutline}
                              color={color}
                              size={0.45}
                            />
                            Switch
                          </FlexRow>
                        </NavLink>
                        <NavLink to="/component/tab" activeClassName="active">
                          <FlexRow gap="13px">
                            <Icon
                              path={mdiCircleOutline}
                              color={color}
                              size={0.45}
                            />
                            Tabs
                          </FlexRow>
                        </NavLink>
                        <NavLink
                          to="/component/tooltip"
                          activeClassName="active"
                        >
                          <FlexRow gap="13px">
                            <Icon
                              path={mdiCircleOutline}
                              color={color}
                              size={0.45}
                            />
                            Tooltip
                          </FlexRow>
                        </NavLink>
                      </FlexColumn>
                    ),
                  },
                ]}
              ></Collapse>
              <Collapse
                className="group-link"
                icon="mdiChevronRight"
                items={[
                  {
                    label: (
                      <FlexRow gap="13px">
                        <Icon path={mdiFormatPaint} color={color} size={0.75} />
                        Theme
                      </FlexRow>
                    ),
                    content: (
                      <FlexColumn>
                        <NavLink to="/checkbox" activeClassName="active">
                          <FlexRow gap="13px">
                            <Icon
                              path={mdiCircleOutline}
                              color={color}
                              size={0.45}
                            />
                            Checkbox
                          </FlexRow>
                        </NavLink>
                        <NavLink to="/tooltip" activeClassName="active">
                          <FlexRow gap="13px">
                            <Icon
                              path={mdiCircleOutline}
                              color={color}
                              size={0.45}
                            />
                            Tooltip
                          </FlexRow>
                        </NavLink>
                      </FlexColumn>
                    ),
                  },
                ]}
              ></Collapse>
            </>
          }
          navbar={
            <Navbar
              position="sticky"
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
            path="/component/avatar"
            component={(props: any) => <AvatarPage {...props} />}
          />
          <Route
            path="/component/button"
            component={(props: any) => <ButtonPage {...props} />}
          />
          <Route
            path="/component/checkbox"
            component={(props: any) => <CheckboxPage {...props} />}
          />
          <Route
            path="/component/datatable"
            component={(props: any) => <Table {...props} />}
          />
          <Route
            path="/component/breadcrumb"
            component={(props: any) => <BreadcrumbPage {...props} />}
          />
          <Route
            path="/component/tooltip"
            component={(props: any) => <TooltipPage {...props} />}
          />
          <Route
            path="/component/interface"
            component={(props: any) => <Interface {...props} />}
          />
          <Route
            path="/component/dropdown"
            component={(props: any) => <DropdownPage {...props} />}
          />
          <Route
            path="/component/collapse"
            component={(props: any) => <CollapsePage {...props} />}
          />
          <Route
            path="/component/chip"
            component={(props: any) => <ChipPage {...props} />}
          />
          <Route
            path="/component/progress"
            component={(props: any) => <ProgressPage {...props} />}
          />
          <Route
            path="/component/datalist"
            component={(props: any) => <DataListPage {...props} />}
          />
        </Layout>
      </Switch>
    </div>
  )
}

export default withRouter(App)
