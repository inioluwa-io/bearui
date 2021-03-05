import {
  useTheme,
  useThemeMode,
  FlexColumn,
  FlexRow,
  RadioGroup,
  Radio,
  LinkButton,
  Dropdown,
  Switch,
} from "@bearui/ui"
import { mdiClose, mdiCogOutline } from "@mdi/js"
import Icon from "@mdi/react"
import { rgba } from "polished"
import React, { useState } from "react"
import styled from "styled-components"
import { useLocale, useSetLocale } from "ra-core"
import { themeConfig } from "../../configs"
import { keys } from "lodash"
import ReactCountryFlag from "react-country-flag"

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
      border-radius: 18px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
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
      border-radius: 18px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
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
  const [theme] = useTheme()
  const [themeMode, setThemeMode] = useThemeMode()
  const color: string = theme.colors.primary
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const locale = useLocale()
  const setLocale = useSetLocale()

  const changeLocale = (key: string) => {
    setLocale(key)
  }

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
                <header>Theme Configuration</header>
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
                  <FlexRow align="space">
                    <p>Dark Theme: </p>
                    <Switch
                      active={themeMode === "darkmode"}
                      onCheck={(value: any) => {
                        const mode = value ? "darkmode" : "lightmode"
                        setThemeMode(mode)
                      }}
                    />
                  </FlexRow>
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

                <FlexColumn gap="10px" className="row">
                  <h5>Locale</h5>
                  <FlexRow align="space">
                    <p>Language:</p>
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
                          <FlexRow position="center" gap="7px">
                            <ReactCountryFlag
                              svg
                              countryCode={
                                themeConfig.availableLanguages[key].countryCode
                              }
                            />
                            <span>
                              {themeConfig.availableLanguages[key].name}
                            </span>
                          </FlexRow>
                        </button>
                      ))}
                      showIcon={false}
                    >
                      <FlexRow position="center" gap="7px">
                        <ReactCountryFlag
                          svg
                          countryCode={
                            themeConfig.availableLanguages[locale].countryCode
                          }
                        />
                        <span>
                          {themeConfig.availableLanguages[locale].name}
                        </span>
                      </FlexRow>
                    </Dropdown>
                  </FlexRow>
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
export default ControlPanel
