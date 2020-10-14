import React, { useEffect } from "react"
import { Link, NavLink, withRouter } from "react-router-dom"
import "./App.css"
import {
  useThemeMode,
  Avatar,
  FlexRow,
  Navbar,
  Layout,
  Switch as UiSwitch,
  Dropdown,
  Collapse,
  FlexColumn,
} from "@rap/ui"
import { useDataProvider, useNotification } from "@rap/core"
import img from "./brooks-leibee-562087-unsplash.jpg"
import Icon from "@mdi/react"
import {
  mdiBriefcaseOutline,
  mdiCardTextOutline,
  mdiCheckCircleOutline,
  mdiCircleOutline,
  mdiFormatPaint,
  mdiWaterOutline,
} from "@mdi/js"

const LayoutComponent: React.FC<any> = ({ children, ...props }) => {
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

  const [themeMode, setThemeMode] = useThemeMode()
  const color: string = themeMode === "darkmode" ? "#f4f4f4" : "#444444"

  return (
    <Layout
      notification={notification}
      sideBar={
        <>
          <h6>APPS</h6>
          <NavLink to="/apps/todos" activeClassName="active">
            <FlexRow gap="13px">
              <Icon path={mdiCheckCircleOutline} color={color} size={0.7} />
              Todos
            </FlexRow>
          </NavLink>
          <h6>UI</h6>
          <Collapse
            className="group-link"
            icon="mdiChevronRight"
            items={[
              {
                label: (
                  <FlexRow gap="13px">
                    <Icon path={mdiCardTextOutline} color={color} size={0.75} />
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
            active={/\/components/.test(path)}
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
                active: /\/components\//.test(path),
                content: (
                  <FlexColumn>
                    <NavLink to="/components/avatar" activeClassName="active">
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        Avatar
                      </FlexRow>
                    </NavLink>
                    <NavLink to="/components/button" activeClassName="active">
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        Button
                      </FlexRow>
                    </NavLink>
                    <NavLink to="/components/chip" activeClassName="active">
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        Chip
                      </FlexRow>
                    </NavLink>
                    <NavLink to="/components/checkbox" activeClassName="active">
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        Checkbox
                      </FlexRow>
                    </NavLink>
                    <NavLink to="/components/collapse" activeClassName="active">
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        Collapse
                      </FlexRow>
                    </NavLink>
                    <NavLink to="/components/datalist" activeClassName="active">
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        Data List
                      </FlexRow>
                    </NavLink>
                    <NavLink to="/components/dropdown" activeClassName="active">
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        Dropdown
                      </FlexRow>
                    </NavLink>
                    <NavLink to="/components/input" activeClassName="active">
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        Input
                      </FlexRow>
                    </NavLink>
                    <NavLink to="/components/list" activeClassName="active">
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        List
                      </FlexRow>
                    </NavLink>
                    <NavLink to="/components/loader" activeClassName="active">
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        Loader
                      </FlexRow>
                    </NavLink>
                    <NavLink to="/components/modal" activeClassName="active">
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        Modal
                      </FlexRow>
                    </NavLink>
                    <NavLink to="/components/navbar" activeClassName="active">
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
                      to="/components/pagination"
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
                    <NavLink to="/components/progress" activeClassName="active">
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        Progress
                      </FlexRow>
                    </NavLink>
                    <NavLink to="/components/switch" activeClassName="active">
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        Switch
                      </FlexRow>
                    </NavLink>
                    <NavLink to="/components/tab" activeClassName="active">
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        Tabs
                      </FlexRow>
                    </NavLink>
                    <NavLink to="/components/tooltip" activeClassName="active">
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
      {children}
    </Layout>
  )
}

export default withRouter(LayoutComponent)
