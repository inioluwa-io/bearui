import React, { useCallback, useEffect, useRef } from "react"
import styled from "styled-components"
import { LayoutComponent, NotificationPanelMessage } from "../types"
import { Notification } from "../notification"
import FlexColumn from "./flexColumn"
import { useCollapseSideBar } from "../theme" 

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
        height: notification.length * 100 + "px",
        flexDirection: "column-reverse",
        transition: "all .45s",
      }}
    >
      {notification.map((item: NotificationPanelMessage, idx: number) => (
        <Notification
          key={idx}
          avatarProps={item.avatarProps}
          content={item.content}
          time={item.time}
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

  main {
    display: inline-flex;
    width: 100%;
    transition: width 0.35s;
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
  `}
`

const Layout: React.FC<LayoutComponent> = ({
  navbar = <></>,
  notification,
  children,
  sideBar,
  ...props
}) => {
  const refs = useRef<HTMLDivElement>()
  const [collapseSideBar, setCollapseSideBar] = useCollapseSideBar()

  const updatePageWidth = useCallback(() => {
    const innerWidth = window.innerWidth
    if (innerWidth <= 1200) {
      setCollapseSideBar(true)
    } else {
      setCollapseSideBar(false)
    }
  }, [])

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

  useEffect(() => {
    updatePageWidth()
    window.addEventListener("resize", updatePageWidth)
    return () => {
      window.removeEventListener("resize", updatePageWidth)
    }
  }, [updatePageWidth])

  // shrink container when min pixel reached
  useEffect(() => {
    const DOMNode = refs.current
    const container: HTMLDivElement = DOMNode.querySelector("#main-container")

    if (collapseSideBar) {
      container.style.width = "100%"
    } else {
      if (!sideBar) {
        container.style.width = "100%"
      } else {
        container.style.width = "calc(100% - 16.5rem)"
      }
    }
  }, [collapseSideBar, refs, sideBar])

  return (
    <LayoutContainer ref={refs} {...props} sideBar={!!sideBar} id="rap-layout">
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
