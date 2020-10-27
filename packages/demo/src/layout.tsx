import React, { useEffect } from "react"
import { Link, NavLink, withRouter } from "react-router-dom"
import {
  useThemeMode,
  Avatar,
  useTheme,
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
  mdiAccountOutline,
  mdiBriefcaseOutline,
  mdiCardTextOutline,
  mdiCheckCircleOutline,
  mdiCircleOutline,
  mdiClipboardTextOutline,
  mdiCubeOutline,
  mdiFormatPaint,
  mdiKey,
  mdiWaterOutline,
} from "@mdi/js"

const LayoutComponent: React.FC<any> = ({
  children,
  withBar = true,
  ...props
}) => {
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

  useEffect(() => {
    document.body.style.background = theme[themeMode].background
  }, [theme, themeMode])

  if (!withBar) {
    return <Layout notification={notification}>{children}</Layout>
  }

  return (
    <Layout
      notification={notification}
      sideBar={
        <>
          <h6>APPS</h6>
          <NavLink to="/apps/invoice" activeClassName="active">
            <FlexRow gap="13px">
              <Icon path={mdiClipboardTextOutline} color={color} size={0.75} />
              Invoice
            </FlexRow>
          </NavLink>
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
                  <FlexColumn  gap="5px">
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
                active: /\/components/g.test(path),
                content: (
                  <FlexColumn  gap="5px">
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
                    <Icon path={mdiCubeOutline} color={color} size={0.75} />
                    Form Elements
                  </FlexRow>
                ),
                active: /\/formelements/g.test(path),
                content: (
                  <FlexColumn  gap="5px">
                    <NavLink to="/formelement/checkbox" activeClassName="active">
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        Checkbox
                      </FlexRow>
                    </NavLink>
                    <NavLink to="/formelement/input" activeClassName="active">
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        Input
                      </FlexRow>
                    </NavLink>
                    <NavLink to="/formelement/select" activeClassName="active">
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        Select
                      </FlexRow>
                    </NavLink>
                    <NavLink to="/formelement/switch" activeClassName="active">
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        Switch
                      </FlexRow>
                    </NavLink>
                    <NavLink to="/formelement/textarea" activeClassName="active">
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        Textarea
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
                  <FlexColumn  gap="5px">
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

          <h6>PAGES</h6>
          <Collapse
            className="group-link"
            icon="mdiChevronRight"
            items={[
              {
                label: (
                  <FlexRow gap="13px">
                    <Icon path={mdiAccountOutline} color={color} size={0.75} />
                    User
                  </FlexRow>
                ),
                active: /\/user/g.test(path),
                content: (
                  <FlexColumn gap="5px">
                    <NavLink to="/user/profile" activeClassName="active">
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        Profile
                      </FlexRow>
                    </NavLink>
                    <NavLink to="/user/view" activeClassName="active">
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        View
                      </FlexRow>
                    </NavLink>
                    <NavLink to="/user/edit" activeClassName="active">
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        Edit
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
                    <Icon path={mdiKey} color={color} size={0.75} />
                    Authentication
                  </FlexRow>
                ),
                active: /\/authentication/g.test(path),
                content: (
                  <FlexColumn gap="5px">
                    <NavLink
                      to="/pages/login"
                      target="_blank"
                      activeClassName="active"
                    >
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        Login
                      </FlexRow>
                    </NavLink>
                    <NavLink
                      to="/pages/sociallogin"
                      target="_blank"
                      activeClassName="active"
                    >
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        Social Login
                      </FlexRow>
                    </NavLink>
                    <NavLink
                      to="/pages/register"
                      target="_blank"
                      activeClassName="active"
                    >
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        Register
                      </FlexRow>
                    </NavLink>
                    <NavLink to="/user/edit" activeClassName="active">
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        Edit
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
          id="nav-bar"
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
                    onCheck={(value: boolean) => {
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