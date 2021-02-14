import {
  mdiMessage,
  mdiMessageOutline,
  mdiPhone,
  mdiPhoneOutline,
  mdiAccountBox,
  mdiAccountBoxOutline,
  mdiBell,
  mdiBellOutline,
} from "@mdi/js"
import Icon from "@mdi/react"
import React from "react"
import styled from "styled-components"

const TabButtonStyle: any = styled.button`
  background: transparent;
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  grid-gap: 3px;
  font-size: 9px;
  transition: color 0.25s ease;
  ${(props: any) => props.active && "color: " + props.color};

  svg path {
    transition: all 0.25s ease;
  }

  &:hover {
    color: ${(props: any) => props.color};

    svg path {
      fill: ${(props: any) => props.color} !important;
    }
  }
`

const TabButton: React.FC<any> = ({
  active = false,
  children,
  type,
  color,
  onClick,
}) => {
  const renderIcon = () => {
    switch (type) {
      case "chat":
        return active ? (
          <Icon path={mdiMessage} size={0.85} color={color} />
        ) : (
          <Icon path={mdiMessageOutline} size={0.85} />
        )
      case "call":
        return active ? (
          <Icon path={mdiPhone} size={0.9} color={color} />
        ) : (
          <Icon path={mdiPhoneOutline} size={0.9} />
        )
      case "contact":
        return active ? (
          <Icon path={mdiAccountBox} size={0.9} color={color} />
        ) : (
          <Icon path={mdiAccountBoxOutline} size={0.9} />
        )
      case "notification":
        return active ? (
          <Icon path={mdiBell} size={0.9} color={color} />
        ) : (
          <Icon path={mdiBellOutline} size={0.9} />
        )
    }
  }
  return (
    <TabButtonStyle
      color={color}
      active={active}
      onClick={() => {
        onClick()
      }}
    >
      {renderIcon()}
      {children}
    </TabButtonStyle>
  )
}

export default TabButton
