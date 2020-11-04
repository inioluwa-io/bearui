import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { useTheme, useThemeMode } from "../theme"
import { LayoutComponent, NotifyProps } from "../types"
import { Notification } from "../notification"
import FlexColumn from "./flexColumn"
import { lighten, rgba } from "polished"
import FlexRow from "./flexRow"

const NotificationComponent: React.FC<any> = ({ notification }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        zIndex: 999999,
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

const LayoutContainer: any = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  font-size: calc(10px + 2vh);
  color: white;
  background: ${(props: any) => props.background};

  &.isnotmobile {
    * {
      ::-webkit-scrollbar {
        height: 8px;
        width: 8px;
        background: rgba(0, 0, 0, 0);
        transition: all 0.25s ease;
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb {
        height: 8px;
        width: 8px;
        background: #aaaaaa55;
        border-radius: 4px;
        transition: all 0.25s ease;
      }
    }
    *:hover {
      ::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.225);
        background: ${(props: any) =>
          props.themeMode === "lightmode"
            ? "rgba(0, 0, 0, 0.225)"
            : "rgba(255, 255, 255, 0.225)"};
      }
    }
  }

  main {
    display: inline-flex;
    width: 100%;
  }

  ${(props: any) =>
    props.sideBar &&
    `
    main {
      display: inline-flex;
      width: 100%;
  
      #main-container {
        width: calc(100% - 16.5rem);
      }
    }
    @media (max-width: 1200px) {
      main {
        #main-container {
          width: 100%;
        }
      }
    }
  `}
`

const Layout: React.FC<LayoutComponent> = ({
  navbar = <></>,
  notification,
  children,
  sideBar,
  ...props
}) => {
  const [themeMode] = useThemeMode()
  const theme = useTheme()
  const refs = useRef<HTMLDivElement>()

  useEffect(() => {
    const DOMNode = refs.current
    if (DOMNode) {
      if (
        /iPhone|iPad|Android|Blackberry|iPod/.test(window.navigator.userAgent)
      ) {
        DOMNode.classList.add("ismobile")
        DOMNode.classList.remove("isnotmobile")
      } else {
        DOMNode.classList.remove("ismobile")
        DOMNode.classList.add("isnotmobile")
      }
    }
  }, [refs])

  return (
    <LayoutContainer
      ref={refs}
      {...props}
      background={theme[themeMode].background}
      themeMode={themeMode}
      sideBar={!!sideBar}
      id ="rap-layout"
    >
      <NotificationComponent notification={notification} />
      <main>
        {sideBar}
        <FlexColumn id="main-container" style={{ minHeight: "100vh" }}>
          <div
            style={{
              position: "relative",
              minHeight: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {navbar}
            {children}
          </div>
        </FlexColumn>
      </main>
    </LayoutContainer>
  )
}
export default Layout
