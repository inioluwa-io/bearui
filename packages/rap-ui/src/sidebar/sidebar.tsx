import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { FlexRow, FlexColumn } from "../layout"
import { lighten, rgba } from "polished"
import { useTheme, useThemeMode } from "../theme"
import { mdiClose, mdiMenu } from "@mdi/js"
import Icon from "@mdi/react"

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
    background: ${(props: any) => props.background};
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
  .header {
    background: ${(props: any) => props.background};
    button {
      background: none;
      outline: none;
      cursor: pointer;
      border: none;
      display: none;
      padding: 3px;
    }
  }

  // @media (max-width: 1200px) {
  //   width: 65px;
  // }

  @media (max-width: 1200px) {
    position: fixed;
    transform: translateX(-100%);
    transition: transform 0.35s;

    + .underlay {
      position: fixed;
      left: 0;
      top: 0;
      z-index: 9991;
      height: 100vh;
      width: 100%;
      background: rgba(0, 0, 0, 0.25);
      visibility: hidden;
    }

    &.sidebar-collapse {
      transform: translateX(-0%);

      + .underlay {
        visibility: visible;
      }
    }
    .header {
      button {
        display: block;
      }
    }
  }
`

const Sidebar: React.FC<any> = ({ children, ...props }) => {
  const theme = useTheme()
  const [themeMode] = useThemeMode()

  return (
    <>
      <SidebarContainer
        background={theme[themeMode].cardbackground}
        boxShadow={theme[themeMode].background}
        primaryColor={theme.colors.primary}
        id="rap-sidebar"
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
          className="header"
        >
          <h3 style={{ color: theme.colors.primary }}>BearUI</h3>
          <div>
            <FlexRow align="right">
              <button
                onClick={() => {
                  document
                    .querySelector("#rap-sidebar")
                    ?.classList?.toggle("sidebar-collapse")
                }}
              >
                <Icon path={mdiClose} size={1} color={theme.colors.primary} />
              </button>
            </FlexRow>
          </div>
        </FlexRow>
        <div className="scrollbar">
          <FlexColumn id="side-bar" gap="5px" align="left">
            {children}
          </FlexColumn>
        </div>
      </SidebarContainer>
      <div className="underlay"></div>
    </>
  )
}
export default Sidebar
