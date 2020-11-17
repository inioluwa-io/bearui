import React, { useEffect } from "react"
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
  RapUIThemeMode,
} from "@rap/ui"
import { useDataProvider, useNotification } from "@rap/core"
import img from "./assets/img4.jpg"
import Icon from "@mdi/react"
import {
  mdiAccountOutline,
  mdiBriefcaseOutline,
  mdiCardTextOutline,
  mdiCheckCircleOutline,
  mdiCircleOutline,
  mdiClipboardTextOutline,
  mdiCubeOutline,
  mdiGridLarge,
  mdiKey,
  mdiLayersOutline,
  mdiCogOutline,
  mdiTools,
  mdiWaterOutline,
  mdiClose,
  mdiChatOutline,
} from "@mdi/js"
import styled from "styled-components"
import { rgba } from "polished"
import { useState } from "react"

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
                    defaultChecked={themeMode}
                    onChecked={(value: RapUIThemeMode) => {
                      setThemeMode(value)
                    }}
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
                    defaultChecked={navPosition}
                    onChecked={(value: NavbarPosition) => {
                      setNavPosition(value)
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
                    <Radio value="hidden" id="hidden-nav">
                      <p>Hidden</p>
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
  const [navPosition, setNavPosition] = useState<NavbarPosition>("sticky")
  const [themeMode, setThemeMode] = useThemeMode()
  const color: string = themeMode === "darkmode" ? "#f4f4f4" : "#444444"

  useEffect(() => {
    document.body.style.background = theme[themeMode].background
  }, [theme, themeMode])

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
        <Sidebar>
          <h6>APPS</h6>
          <NavLink to="/apps/invoice" activeClassName="active">
            <FlexRow gap="13px">
              <Icon path={mdiClipboardTextOutline} color={color} size={0.75} />
              Invoice
            </FlexRow>
          </NavLink>
          <NavLink to="/apps/chat" activeClassName="active">
            <FlexRow gap="13px">
              <Icon path={mdiChatOutline} color={color} size={0.7} />
              Chat
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
                    <Icon path={mdiGridLarge} color={color} size={0.75} />
                    Layouts
                  </FlexRow>
                ),
                active: /\/layouts/g.test(path),
                content: (
                  <FlexColumn gap="5px">
                    <NavLink to="/layouts/grid" activeClassName="active">
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        Grid
                      </FlexRow>
                    </NavLink>
                    <NavLink to="/layouts/flexrow" activeClassName="active">
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        Flex Row
                      </FlexRow>
                    </NavLink>
                    <NavLink to="/layouts/flexcolumn" activeClassName="active">
                      <FlexRow gap="13px">
                        <Icon
                          path={mdiCircleOutline}
                          color={color}
                          size={0.45}
                        />
                        Flex Column
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
                    <Icon path={mdiCardTextOutline} color={color} size={0.75} />
                    Card
                  </FlexRow>
                ),
                content: (
                  <FlexColumn gap="5px">
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
          <NavLink to="/colors" activeClassName="active">
            <FlexRow gap="9px">
              <Icon path={mdiWaterOutline} color={color} size={0.875} />
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
                  <FlexColumn gap="5px">
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
                  <FlexColumn gap="5px">
                    <NavLink
                      to="/formelement/checkbox"
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
                    <NavLink
                      to="/formelement/textarea"
                      activeClassName="active"
                    >
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
          <NavLink to="/form-layouts" activeClassName="active">
            <FlexRow gap="10px">
              <Icon path={mdiLayersOutline} color={color} size={0.85} />
              Form Layouts
            </FlexRow>
          </NavLink>

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
                      rel="noreferrer noopener"
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
                      rel="noreferrer noopener"
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
                      rel="noreferrer noopener"
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
                  </FlexColumn>
                ),
              },
            ]}
          ></Collapse>

          <h6>OTHERS</h6>
          <NavLink
            to="/documentation"
            target="__blank"
            rel="noopener noreferrer"
            activeClassName="active"
          >
            <FlexRow gap="12px">
              <Icon path={mdiTools} color={color} size={0.7} />
              Documentation
            </FlexRow>
          </NavLink>
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
      <ControlPanel setNavPosition={setNavPosition} navPosition={navPosition} />
    </Layout>
  )
}

export default withRouter(LayoutComponent)
