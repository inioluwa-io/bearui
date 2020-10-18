import React, { useState, useEffect } from "react"
import { CheckBoxComponent } from "../types"
import styled from "styled-components"
import { rgba } from "polished"
import { useTheme, useThemeMode } from "../theme"
import { getColorFromTheme } from "../util"
import Icon from "@mdi/react"
import { mdiCheck } from "@mdi/js"
import { FlexRow } from "../layout"

const CheckboxButton: any = styled.button`
  position: relative;
  width: 17px;
  height: 17px;
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

  border: 2px solid
    ${(props: any) =>
      props.disabled
        ? `${rgba(props.color, 0.35)}`
        : ` ${rgba(props.textColor, 0.35)}`};

  ${(props: any) =>
    props.active
      ? `
      transition: all 0.35s ease;
      border: 2px solid transparent`
      : ``};

  &:focus {
    border: 2px solid ${(props: any) => props.color};
  }

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
  ${(props: any) => props.disabled && `cursor: not-allowed`};

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
  padding: 3px;
  display: flex;
  transition: transform 0.35s cubic-bezier(0.38, 0.39, 0.3, 1.36);
  align-items: center;
  justify-content: center;
  ${(props: any) => `background:${props.color}`};
  ${(props: any) => props.disabled && `background: ${rgba(props.color, 0.5)}`};

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
  onCheck,
  children,
  ...props
}) => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const theme = useTheme()
  const [themeMode] = useThemeMode()
  let textColor = themeMode === "darkmode" ? "#f4f4f4" : "#444444"

  const themeColor: string = getColorFromTheme(color, theme)
  useEffect(() => {
    setIsActive(active)
  }, [active, disabled])

  return (
    <FlexRow gap="10px" style={{ flexWrap: "nowrap" }}>
      <CheckboxButton
        color={themeColor}
        textColor={textColor}
        active={isActive}
        className="sc-checkbox"
        disabled={disabled}
      >
        <CheckboxInput
          {...props}
          type="checkbox"
          id={id}
          tabIndex={-1}
          disabled={disabled}
          checked={isActive}
          onChange={e => {
            !e.target.disabled && setIsActive(!isActive)
            if (typeof onCheck === "function") {
              onCheck(!isActive)
            }
          }}
        />
        <Check disabled={disabled} color={themeColor} active={isActive}>
          <Icon path={mdiCheck} color="#ffffff" size={0.7} />
        </Check>
      </CheckboxButton>
      {children && (
        <label
          tabIndex={-1}
          style={{ cursor: "pointer", flex: "1 1", whiteSpace: "break-spaces" }}
          htmlFor={id}
        >
          {children}
        </label>
      )}
    </FlexRow>
  )
}
export default Checkbox
