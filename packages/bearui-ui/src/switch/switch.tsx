import React, { useState } from "react"
import { SwitchProps } from "../types"
import styled from "styled-components"
import { rgba, lighten } from "polished"
import { useTheme } from "../theme"

const SwitchButton: any = styled.button`
  position: relative;
  min-width: 42px;
  height: 24px;
  display: flex;
  font-size: 11px;
  font-family: Nunito sans;
  align-items: center;
  overflow: hidden;
  justify-content: ${(props: any) =>
    props.active ? "flex-end" : "flex-start"};
  cursor: pointer;
  border-radius: 40px;
  border: none;
  transition: all 0.35s;
  background: ${(props: any) => (props.active ? props.color : "#eaeaea")};
  outline: none;
`

const SwitchInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 200;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  left: 0;

  &:checked {
    + .circle {
      right: 4px;
      transform: translateY(-50%);
      box-shadow: -1px 2px 7px ${rgba("#000", 0.38)};
    }
  }
  &:disabled {
    cursor: not-allowed;
  }
`

const Circle = styled.span`
  position: absolute;
  height: 18px;
  width: 18px;
  background: #ffffff;
  top: 50%;
  border-radius: 30px;
  box-shadow: 1px 2px 7px ${rgba("#000", 0.35)};
  transition: all 0.35s;

  right: calc(100% - 4px);
  transform: translate(100%, -50%);
`

const Text: any = styled.span`
  text-align: right;
  align-self: right;
  color: ${(props: any) => (props.active ? "#ffffff" : "222222")};
  padding-left: ${(props: any) => (props.active ? "22px" : "3px")};
  padding-right: ${(props: any) => (!props.active ? "22px" : "3px")};
`

const Switch: React.FC<SwitchProps> = ({
  id,
  color = "success",
  active = false,
  disabled = false,
  onText,
  offText,
  onCheck,
  ...props
}) => {
  const [isActive, setIsActive] = useState<boolean>(active)

  const [theme] = useTheme()
  const { colors } = theme

  const getColor: Function = (): any => {
    const supportedColors = [
      "primary",
      "success",
      "info",
      "danger",
      "warning",
      "transparent",
      "white",
      "dark",
    ]
    if (supportedColors.includes(color.trim())) {
      if (disabled) {
        return rgba(lighten(0.1, colors[color]), 0.5)
      }
      return colors[color]
    } else {
      if (disabled) {
        return rgba(lighten(0.1, color), 0.5)
      }
      return color
    }
  }

  return (
    <SwitchButton color={getColor()} active={isActive} id={id}>
      <SwitchInput
        {...props}
        type="checkbox"
        disabled={disabled}
        checked={isActive}
        onChange={e => {
          !e.target.disabled && setIsActive(!isActive)
          typeof onCheck === "function" && onCheck(!isActive)
        }}
      />
      <Circle className="circle"></Circle>
      <Text active={isActive}>{isActive ? <>{onText}</> : <>{offText}</>}</Text>
    </SwitchButton>
  )
}
export default Switch
