import React, { useCallback, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { LayoutComponent, NotifyProps } from "../types"
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
        background: #aaaaaa88;
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
      container.style.width = "calc(100% - 16.5rem)"
    }
  }, [collapseSideBar, refs])

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
