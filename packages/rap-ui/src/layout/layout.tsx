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
  font-size: calc(10px + 2vmin);
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
  @media (max-width: 1200px) {
    main {
      #main-container {
        width: calc(100% - 65px);
      }
    }
  }
  @media (max-width: 992px) {
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
  display: grid;
  grid-template-rows: 65px 1fr;

  .scrollbar {
    overflow: hidden auto;
    padding: 20px 13px;
  }

  &:hover {
    * {
      ::-webkit-scrollbar-thumb {
        // background: #aaaaaa88;
      }
    }
  }

  #side-bar {
    white-space: nowrap;

    h6 {
      font-weight: 500;
      color: rgba(125, 125, 125, 0.7);
      font-size: 13px;
      // font-family: Nunito sans;
      text-transform: uppercase;

      &:not(:first-child) {
        margin-top: 15px;
      }
    }

    > .group-link:not(:last-child) {
      margin-bottom: 0;
    }

    .group-link {
      header {
        padding: 0 14px;
        width: calc(100% - 28px);
        height: 2.6rem;
        align-items: center;

        &.active {
          border-radius: 7px;
          background: rgba(0, 0, 0, 0.1);

          + .sc-cnt {
            margin-top: 5px;
          }
        }
      }
      .sc-cnt {
        padding: 0;
      }
    }

    a {
      text-decoration: none;
      font-size: 14px;
      padding: 0 14px;
      width: calc(100% - 28px);
      height: 2.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 7px;
      font-size: 15px;
      font-weight: 500;
      transition: all 0.25s ease;

      &:not(:last-child) {
        margin-bottom: 0 !important;
      }

      &.active {
        background: ${(props: any) => props.primaryColor};
        background: linear-gradient(
          138deg,
          ${(props: any) => props.primaryColor},
          ${(props: any) => rgba(props.primaryColor, 0.6)}
        );
        * {
          color: #fff;
        }

        svg path {
          fill: #fff !important;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    width: 65px;
  }

  @media (max-width: 992px) {
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
          primaryColor={theme.colors.primary}
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
            <FlexColumn id="side-bar" gap="10px" align="left">
              {sideBar}
            </FlexColumn>
          </div>
        </SidebarContainer>
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
