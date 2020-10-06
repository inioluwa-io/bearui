import React from "react"
import styled from "styled-components"
import { useTheme, useThemeMode } from "../theme"
import { LayoutComponent, NotifyProps } from "../types"
import { Notification } from "../notification"
import FlexColumn from "./flexColumn"
import { darken } from "polished"

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

const LayoutContainer: any = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  font-size: calc(10px + 2vmin);
  color: white;
  background: ${(props: any) => props.background};

  main {
    display: inline-flex;
    flex-wrap: wrap;
    width: 100%;

    #main-container {
      width: calc(100% - 16rem);
    }
  }
  @media (max-width: 991px) {
    main {
      #main-container {
        width: calc(100% - 65px);
      }
    }
  }
  @media (max-width: 768px) {
    main {
      #main-container {
        width: 100%;
      }
    }
  }
`
const SidebarContainer: any = styled.div`
  width: 16rem;
  background: ${(props: any) => props.background};
  position: sticky;
  box-shadow: 7px 0 25px -7px ${(props: any) => darken(0.05, props.boxShadow)};
  top: 0;
  height: 100vh;
  z-index: 9999;

  @media (max-width: 991px) {
    width: 65px;
  }

  @media (max-width: 768px) {
    width: 65px;
    position: fixed;
    transform: translateX(-100%);
  }
`

const Layout: React.FC<LayoutComponent> = ({
  navbar,
  notification,
  children,
  ...props
}) => {
  const [themeMode] = useThemeMode()
  const theme = useTheme()

  return (
    <LayoutContainer {...props} background={theme[themeMode].background}>
      <NotificationComponent notification={notification} />
      <main>
        <SidebarContainer
          background={theme[themeMode].cardbackground}
          boxShadow={theme[themeMode].background}
        />
        <FlexColumn id="main-container" style={{ minHeight: "100vh" }}>
          <div
            style={{
              position: "relative",
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
