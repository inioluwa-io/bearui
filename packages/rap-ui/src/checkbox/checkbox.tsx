import React, { useState } from "react"
import { CheckBoxComponent } from "../types"
import styled from "styled-components"
import { rgba, lighten } from "polished"
import { useTheme } from "../theme"
import { getColorFromTheme } from "../util"
import Icon from "@mdi/react"
import { mdiCheck } from "@mdi/js"

const CheckboxButton: any = styled.button`
  position: relative;
  width: 21px;
  height: 21px;
  display: flex;
  flex-direction: center;
  justify-content: center;
  font-size: 11px;
  font-family: Nunito sans;
  cursor: pointer;
  border-radius: 3px;
  border: none;
  outline: none;
  background: transparent;
  transition: 0.35s all 0.25s ease;
  border: 2px solid ${(props: any) => props.color};

  ${(props: any) =>
    props.active
      ? `
      transition: all 0.35s ease;
      border: 2px solid transparent`
      : ``};

  &:disabled {
    cursor: not-allowed;
  }
`

const CheckboxInput = styled.input`
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
  }
`

const Check: any = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  margin: 0;
  cursor: pointer;
  top: 50%;
  left: 50%;
  border-radius: 3px;
  transform: translate(-50%, -50%) scale3d(0, 0, 0) rotate(90deg);
  padding: 2px;
  display: flex;
  transition: transform 0.35s cubic-bezier(0.38, 0.39, 0.3, 1.36);
  flex-direction: center;
  justify-content: center;
  ${(props: any) => `background:${props.color}`};

  ${(props: any) =>
    props.active
      ? `
      transition: 0.35s transform 0.15s cubic-bezier(0.38, 0.39, 0.3, 1.36);
  transform: translate(-50%, -50%)`
      : ``};
`

const Checkbox: React.FC<CheckBoxComponent> = ({
  disabled = false,
  id = "",
  active = false,
  color = "primary",
  onClick,
  ...props
}) => {
  const [isActive, setIsActive] = useState<boolean>(active)

  const theme = useTheme()

  const themeColor: string = getColorFromTheme(color, theme)

  return (
    <CheckboxButton color={themeColor} active={isActive} id={id}>
      <CheckboxInput
        {...props}
        type="checkbox"
        disabled={disabled}
        checked={isActive}
        onChange={e => {
          !e.target.disabled && setIsActive(!isActive)
          if (typeof onClick === "function") {
            onClick(!isActive)
          }
        }}
      />
      <Check color={themeColor} active={isActive}>
        <Icon path={mdiCheck} color="#ffffff" size={0.7} />
      </Check>
    </CheckboxButton>
  )
}
export default Checkbox
