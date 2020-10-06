import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { useTheme, useThemeMode } from "../theme"
import { LayoutComponent, NotifyProps } from "../types"
import { Notification } from "../notification"
import FlexColumn from "./flexColumn"
import { darken, lighten } from "polished"
import FlexRow from "./flexRow"

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

  &.isnotmobile {
    * {
      ::-webkit-scrollbar {
        height: 6px;
        width: 8px;
        background: rgba(0, 0, 0, 0);
        transition: all 0.25s ease;
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb {
        height: 6px;
        width: 8px;
        background: rba(0, 0, 0, 0);
        border-radius: 4px;
        transition: all 0.25s ease;
      }
    }
  }

  main {
    display: inline-flex;
    width: 100%;

    #main-container {
      width: calc(100% - 16.5rem);
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
  width: 16.5rem;
  background: ${(props: any) => props.background};
  position: sticky;
  border-right: 1px solid ${(props: any) => lighten(0.2, props.boxShadow)};
  top: 0;
  height: 100vh;
  z-index: 9999;
  display: flex;
  flex-direction: column;

  .scrollbar {
    overflow: hidden auto;
    padding: 20px 15px;
  }

  &:hover {
    * {
      ::-webkit-scrollbar {
        opacity: 1;
        background: rgba(0, 0, 0, 0.1);
      }
      ::-webkit-scrollbar-thumb {
        background: #aaa;
      }
    }
  }

  #side-bar {
    white-space: nowrap;
    height: 100vh;
  }

  @media (max-width: 991px) {
    width: 65px;
  }

  @media (max-width: 768px) {
    position: fixed;
    transform: translateX(-100%);
  }
`

const Layout: React.FC<LayoutComponent> = ({
  navbar,
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
    >
      <NotificationComponent notification={notification} />
      <main>
        <SidebarContainer
          background={theme[themeMode].cardbackground}
          boxShadow={theme[themeMode].background}
        >
          <FlexRow
            align="stretch"
            position="center"
            style={{
              height: "68px",
              width: "calc(100% - 30px)",
              padding: "0 15px",
              overflow: "hidden",
            }}
          >
            <h3 style={{ color: theme.colors.primary }}>BearUI</h3>
          </FlexRow>
          <div className="scrollbar">
            <FlexColumn id="side-bar" gap="10px">
              {sideBar}
            </FlexColumn>
          </div>
        </SidebarContainer>
        <FlexColumn id="main-container" style={{ minHeight: "100vh" }}>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {navbar}
            <div
              style={{
                margin: " 0",
                height: "100%",
                width: "100%",
                display: "flex",
              }}
            >
              {children}
            </div>
          </div>
        </FlexColumn>
      </main>
    </LayoutContainer>
  )
}
export default Layout
