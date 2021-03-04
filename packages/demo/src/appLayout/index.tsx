import React, { useEffect, Fragment } from "react"
import { NavLink, withRouter } from "react-router-dom"
import {
  useThemeMode,
  useTheme,
  FlexRow,
  Navbar,
  Layout,
  Collapse,
  FlexColumn,
  Sidebar,
  NavbarPosition,
  Dropdown,
  Row,
  useNotification,
} from "@bearui/ui"
import img from "../assets/pht4.png"
import Icon from "@mdi/react"
import { mdiCircleOutline, mdiBellOutline } from "@mdi/js"
import { useState } from "react"
import {
  navigationConfig,
  NavigationConfigProps,
  themeConfig,
} from "../configs"
import { useSelector } from "react-redux"
import { keys } from "lodash"
import { useLocale, useSetLocale } from "ra-core"
import ControlPanel from "./components/controlPanel"
import NotificationPanel from "./components/notificationPanel"
import styled from "styled-components"

const NotificationBell: any = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  ${(props: any) =>
    props.showStatus &&
    `
  &::after {
    position: absolute;
    content:"";
    background: ${themeConfig.colorPalette.colors.danger};
    top:0;
    right:0;
    width:6px;
    height:6px;
    border-radius:5px;
  }
  `}
`

const LayoutComponent: React.FC<any> = ({
  children,
  withBar = true,
  navConfig = navigationConfig,
  ...props
}) => {
  // get tmp notification to be displayed on every add to notification call
  const notificationTmp = useSelector(
    (state: any) => state.notificationReducer.tmp
  )
  const [notification] = useNotification()
  const locationPath = props.location.pathname

  const [theme, setTheme] = useTheme()
  const [navPosition, setNavPosition] = useState<NavbarPosition>(
    themeConfig.navbarPosition
  )
  const [themeMode, setThemeMode] = useThemeMode()
  const color: string = themeMode === "darkmode" ? "#f4f4f4" : "#444444"

  const locale = useLocale()
  const setLocale = useSetLocale()

  useEffect(() => {
    setTheme(themeConfig.colorPalette)
    setThemeMode(themeConfig.currentTheme)
  }, [setThemeMode, setTheme])

  useEffect(() => {
    document.body.style.background = theme[themeMode].background
  }, [themeMode, theme])

  const renderNav = (nav: NavigationConfigProps[]) => {
    return nav.map(link => {
      const { title, path, icon, subMenu, key, headMenu, pathProps } = link

      if (subMenu.length && icon) {
        const titleString = title.toLowerCase().split(" ").join("")
        const reg = new RegExp(`/${titleString}`, "g")

        return (
          <Fragment key={key}>
            {headMenu && <h6>{headMenu}</h6>}
            <Collapse
              className="group-link"
              icon="mdiChevronRight"
              items={[
                {
                  label: (
                    <FlexRow gap="13px">
                      <Icon path={icon} color={color} size={0.75} />
                      <p>{title}</p>
                    </FlexRow>
                  ),
                  active: reg.test(locationPath),
                  content: subMenu.length ? (
                    renderNav(subMenu)
                  ) : (
                    <FlexColumn gap="5px">
                      {subMenu.map((menu, idx) => (
                        <NavLink
                          {...pathProps}
                          key={idx}
                          to="/dashboard/default"
                          activeClassName="active"
                        >
                          <FlexRow gap="13px">
                            <Icon
                              path={mdiCircleOutline}
                              color={color}
                              size={0.45}
                            />
                            <p>{menu.title}</p>
                          </FlexRow>
                        </NavLink>
                      ))}
                    </FlexColumn>
                  ),
                },
              ]}
            />
          </Fragment>
        )
      } else {
        return (
          <NavLink {...pathProps} to={path} activeClassName="active" key={key}>
            <FlexRow gap="13px">
              <Icon
                path={icon || mdiCircleOutline}
                color={color}
                size={icon ? 0.75 : 0.45}
              />
              <p>{title}</p>
            </FlexRow>
          </NavLink>
        )
      }
    })
  }

  const changeLocale = (key: string) => {
    setLocale(key)
  }

  if (!withBar) {
    return (
      <Layout notification={notificationTmp}>
        {children}
        <ControlPanel />
      </Layout>
    )
  }

  return (
    <Layout
      notification={notificationTmp}
      sideBar={
        <Sidebar
          avatarText="DP"
          fullName="Tony Stark"
          role="Admin"
          avatarImg={img}
          logo={
            <>
              <img src={require("../assets/logo-min.png")} alt="logo" />
              <h4 style={{ color }}>BearUI</h4>
            </>
          }
        >
          {renderNav(navConfig)}
        </Sidebar>
      }
      navbar={
        <Navbar
          position={navPosition}
          searchData={navigationConfig}
          id="nav-bar"
          links={[
            <Dropdown
              listener="click"
              list={keys(themeConfig.availableLanguages).map(key => (
                <button
                  key={key}
                  style={{
                    background: "none",
                    outline: "none",
                    cursor: "pointer",
                    border: "none",
                  }}
                  onClick={() => {
                    changeLocale(key)
                  }}
                >
                  {themeConfig.availableLanguages[key]}
                </button>
              ))}
              showIcon={false}
            >
              {themeConfig.availableLanguages[locale]}
            </Dropdown>,
            <Dropdown
              listener="click"
              list={[
                <Row>
                  <NotificationPanel messages={notification()} theme={theme} />
                </Row>,
              ]}
              showIcon={false}
            >
              <NotificationBell showStatus={notification().length}>
                <Icon path={mdiBellOutline} color={color} size={1} />
              </NotificationBell>
            </Dropdown>,
          ]}
        />
      }
    >
      {children}
      <ControlPanel setNavPosition={setNavPosition} navPosition={navPosition} />
    </Layout>
  )
}

export default withRouter(LayoutComponent)
