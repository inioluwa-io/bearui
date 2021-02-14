import React, { useEffect, Fragment } from "react"
import { Link, NavLink, withRouter } from "react-router-dom"
import {
  useThemeMode,
  Avatar,
  useTheme,
  FlexRow,
  Navbar,
  LinkButton,
  Layout,
  Switch as UiSwitch,
  Dropdown,
  Collapse,
  FlexColumn,
  Sidebar,
  Tooltip,
  Radio,
  NavbarPosition,
  RadioGroup,
} from "@bearui/ui"
import { useDataProvider, useNotification } from "@bearui/core"
import img from "./assets/img4.jpg"
import Icon from "@mdi/react"
import {
  mdiCheckCircleOutline,
  mdiCircleOutline,
  mdiClipboardTextOutline,
  mdiCogOutline,
  mdiClose,
} from "@mdi/js"
import styled from "styled-components"
import { rgba } from "polished"
import { useState } from "react"
import { navigationConfig, NavigationConfigProps, themeConfig } from "./configs"

const ControlPanelContainer: any = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  transform: translateX(100%);
  transition: transform 0.35s ease;
  z-index: 9999;

  &.active {
    transform: translateX(0);

    .pnl {
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    }
  }
  .pnl {
    height: 100%;
    width: 100%;
    top: 0;

    .lay {
      height: 100%;
      text-align: left;
      background: ${(props: any) => props.background};
    }

    .container {
      padding: 20px;
      height: calc(100% - 40px);
      width: calc(25rem - 40px);
      text-align: left;

      @media (max-width: 578px) {
        width: calc(22rem - 40px);
      }

      .row {
        padding-top: 20px;
        padding-bottom: 20px;
        border-top: 1px solid;
        border-color: ${(props: any) => rgba(props.border, 0.2)};
      }

      header {
        font-size: 0.83em;
        font-weight: 500;
        text-transform: uppercase;
      }
      h5 {
        font-size: 0.8em;
        font-weight: 500;
      }
    }
  }

  #close-pnl {
    background: transparent;
    padding: 0.3rem;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
  }

  a.buynow-btn {
    position: absolute;
    left: 0;
    width: fit-content;
    top: 70%;
    transform: translate(-100%, -50%);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  button.contrl {
    background: ${(props: any) => props.color};
    padding: 0.68rem;
    outline: none;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    display: flex;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-100%, -50%);
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;

    svg {
      animation: spin 1.2s linear infinite;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`

const ControlPanel: React.FC<any> = ({ setNavPosition, navPosition }) => {
  const theme = useTheme()
  const [themeMode, setThemeMode] = useThemeMode()
  const color: string = theme.colors.primary
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <ControlPanelContainer
      id="ctrl-pnl"
      color={color}
      className={isOpen && "active"}
      border={theme[themeMode].textColor}
      background={theme[themeMode].cardbackground}
    >
      <div className="pnl">
        <div className="lay">
          <div className="container">
            <FlexColumn>
              <FlexRow align="space" gap="0px">
                <header>Theme Customizer</header>
                <button
                  id="close-pnl"
                  onClick={() => {
                    setIsOpen(prev => !prev)
                  }}
                >
                  <Icon path={mdiClose} size={0.85} />
                </button>
              </FlexRow>

              <FlexColumn gap="0px">
                <FlexColumn gap="10px" className="row">
                  <h5>Theme Mode</h5>
                  <RadioGroup
                    onChecked={(value: any) => {
                      setThemeMode(value)
                    }}
                    defaultSelected={themeMode}
                  >
                    <Radio value="lightmode" id="light-mode-selector">
                      <p>Lightmode</p>
                    </Radio>
                    <Radio value="darkmode" id="dark-mode-selector">
                      <p>Darkmode</p>
                    </Radio>
                  </RadioGroup>
                </FlexColumn>
                <FlexColumn gap="10px" className="row">
                  <h5>Navbar Position</h5>
                  <RadioGroup
                    defaultSelected={navPosition}
                    onChecked={(value: any) => {
                      setNavPosition && setNavPosition(value)
                    }}
                  >
                    <Radio value="sticky" id="sticky-nav">
                      <p>Sticky</p>
                    </Radio>
                    <Radio value="static" id="static-nav">
                      <p>Static</p>
                    </Radio>
                    <Radio value="floating" id="floating-nav">
                      <p>Floating</p>
                    </Radio>
                  </RadioGroup>
                </FlexColumn>
              </FlexColumn>
            </FlexColumn>
          </div>
        </div>
      </div>
      <button
        className="contrl"
        onClick={() => {
          setIsOpen(prev => !prev)
        }}
      >
        <Icon path={mdiCogOutline} color="#ffffff" size={0.75} />
      </button>
      <LinkButton to="" glow className="buynow-btn" background="danger">
        Buy Now
      </LinkButton>
    </ControlPanelContainer>
  )
}

const LayoutComponent: React.FC<any> = ({
  children,
  withBar = true,
  ...props
}) => {
  const dataProvider = useDataProvider()
  const [notification] = useNotification(8000)
  const locationPath = props.location.pathname

  const URL =
    process.env.NODE_ENV === "production"
      ? "https://faceform.herokuapp.com/api/v1"
      : "http://localhost:8888/api/v1"

  useEffect(() => {
    dataProvider.getOne("/template", URL)
    dataProvider.getOne("/publish", URL)
  }, [dataProvider, URL])

  const theme = useTheme()
  const [navPosition, setNavPosition] = useState<NavbarPosition>(
    themeConfig.navbarPosition
  )
  const [themeMode, setThemeMode] = useThemeMode()
  const color: string = themeMode === "darkmode" ? "#f4f4f4" : "#444444"

  useEffect(() => {
    setThemeMode(themeConfig.currentTheme)
  }, [setThemeMode, theme])

  useEffect(() => {
    document.body.style.background = theme[themeMode].background
  }, [themeMode])

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

  if (!withBar) {
    return (
      <Layout notification={notification}>
        {children}
        <ControlPanel />
      </Layout>
    )
  }

  return (
    <Layout
      notification={notification}
      sideBar={
        <Sidebar
          logo={
            <>
              <img src={require("./assets/logo.png")} alt="logo" />
              <h4 style={{ color }}>BearUI</h4>
            </>
          }
        >
          {renderNav(navigationConfig)}
        </Sidebar>
      }
      navbar={
        <Navbar
          position={navPosition}
          id="nav-bar"
          links={[
            <Link to="/apps/todos">
              <Tooltip text={"Todos"} position="bottom">
                <Icon path={mdiCheckCircleOutline} color={color} size={1} />
              </Tooltip>
            </Link>,
            <Link to="/apps/invoice">
              <Tooltip text={"Invoice"} position="bottom">
                <Icon path={mdiClipboardTextOutline} color={color} size={1} />
              </Tooltip>
            </Link>,
            <Dropdown
              list={[
                "Profile",
                "Settings",
                <FlexRow center>
                  <p>Turn on data saver</p>
                  <UiSwitch color="success" />
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
      <ControlPanel setNavPosition={setNavPosition} navPosition={navPosition} />
    </Layout>
  )
}

export default withRouter(LayoutComponent)
