import React, { useEffect, useRef } from "react"
import { NotifyProps } from "../types"
import styled from "styled-components"
import Icon from "@mdi/react"
import { darken, rgba } from "polished"
import * as path from "@mdi/js"
import { useTheme, useThemeMode } from "../theme"

const NotificationDiv: any = styled.div`
  position: relative;
  background: ${(props: any) => props.background};
  animation: fadeDown 0.75s;
  border-radius: 5px;
  height: 90px;
  width: 330px;
  margin-top: 10px;
  text-align: left;
  transition: opacity 0.5s;
  overflow: hidden;
  //   backdrop-filter: blur(46px) saturate(276%);
  //   -webkit-opacity: 0.8;
  box-shadow: 0 8px 15px -6px ${(props: any) => props.boxShadow};

  &:hover {
    .overflow {
      opacity: 0;
    }
  }
  &::after {
    position: absolute;
    content: " ";
    width: 100%;
    height: 10px;
    bottom: 0;
    left: 0;
    z-index: 1;
    transition: opacity 0.35s;
    background: linear-gradient(-90deg, red, blue);
    background: -webkit-linear-gradient(
      -90deg,
      ${(props: any) => rgba(props.background, 0.1)},
      ${(props: any) => rgba(props.background, 1)}
    );
    background: -moz-linear-gradient(135deg, red, blue);
    background: -o-linear-gradient(135deg, red, blue);
    background: -ms-linear-gradient(135deg, red, blue);
  }

  @keyframes fadeDown {
    from {
      opacity: 0;
      transform: translateY(-50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`

const HeaderIcon: any = styled.div`
  right: 0;
  display: flex;
  margin-right: 7px;
  justify-content: center;
  align-items: center;
`
const Overflow: any = styled.div`
  overflow: hidden;
  position: relative;

  &:hover {
    overflow: auto;

    .overflow {
      opacity: 0;
    }
  }
  height: 100%;
`

const Notification: React.FC<NotifyProps> = ({
  title,
  icon,
  iconColor,
  text,
}) => {
  const theme = useTheme()
  const [themeMode] = useThemeMode()
  const colors = theme.colors
  const background:string = theme[themeMode]["cardbackground"]

  return (
    <NotificationDiv
      boxShadow={
        themeMode === "darkmode"
          ? darken(0.12, background)
          : darken(0.25, background)
      }
      background={background}
    >
      <Overflow>
        <div
          style={{
            margin: "10px 20px 10px 12px",
            position: "relative",
          }}
        >
          <div style={{ display: "flex" }}>
            <HeaderIcon>
              <Icon
                path={path[icon]}
                color={colors[iconColor] || iconColor || colors.warning}
                size={0.8}
              />
            </HeaderIcon>
            <h2
              style={{
                fontSize: "15px",
                margin: 0,
                fontWeight: "bold",
                color: themeMode === "darkmode" ? "#ffffff" : "#555",
              }}
            >
              {title}
            </h2>
          </div>
          <p
            style={{
              fontSize: "14px",
              color: themeMode === "darkmode" ? "#ffffff" : "#555",
              margin: "4px 0",
            }}
          >
            {text}
          </p>
        </div>
      </Overflow>
    </NotificationDiv>
  )
}
export default Notification
