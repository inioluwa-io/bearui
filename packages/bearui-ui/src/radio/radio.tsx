import React, { useState, useEffect } from "react"
import { RadioComponent } from "../types"
import styled from "styled-components"
import { rgba } from "polished"
import { useTheme, useThemeMode } from "../theme"
import { getColorFromTheme } from "../util"
import Icon from "@mdi/react"
import { mdiCheck } from "@mdi/js"
import { FlexRow } from "../layout"

const RadioButton: any = styled.button`
  position: relative;
  width: 17px;
  height: 17px;
  display: flex;
  flex-direction: center;
  justify-content: center;
  font-size: 11px;
  font-family: Nunito sans;
  cursor: pointer;
  border-radius: 30px;
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
    props.checked
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

const RadioInput = styled.input`
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
  border-radius: 50px;
  transform: translate(-50%, -50%) scale3d(0, 0, 0) rotate(90deg);
  padding: 3px;
  display: flex;
  transition: transform 0.35s cubic-bezier(0.38, 0.39, 0.3, 1.36);
  align-items: center;
  justify-content: center;
  ${(props: any) => `background:${props.color}`};
  ${(props: any) => props.disabled && `background: ${rgba(props.color, 0.5)}`};

  ${(props: any) =>
    props.checked
      ? `
      transition: 0.35s transform 0.15s cubic-bezier(0.38, 0.39, 0.3, 1.36);
  transform: translate(-50%, -50%)`
      : ``};
`

const Radio: React.FC<RadioComponent> = ({
  disabled = false,
  id = "",
  value = "",
  color = "primary",
  onCheck,
  checked = false,
  children,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked)

  const theme = useTheme()
  const [themeMode] = useThemeMode()
  const textColor: string = themeMode === "darkmode" ? "#f4f4f4" : "#444444"

  const themeColor: string = getColorFromTheme(color, theme)
  useEffect(() => {
    setIsChecked(checked)
  }, [checked, disabled])

  return (
    <FlexRow gap="7px" style={{ flexWrap: "nowrap", width: "fit-content" }}>
      <RadioButton
        color={themeColor}
        textColor={textColor}
        checked={isChecked}
        className="sc-Radio"
        disabled={disabled}
      >
        <RadioInput
          {...props}
          type="radio"
          id={id}
          tabIndex={-1}
          disabled={disabled}
          checked={isChecked}
          onChange={e => {
            !e.target.disabled && setIsChecked(!isChecked)
            if (typeof onCheck === "function") {
              onCheck(value)
            }
          }}
        />
        <Check disabled={disabled} color={themeColor} checked={isChecked}>
          <Icon path={mdiCheck} color="#ffffff" size={0.7} />
        </Check>
      </RadioButton>
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
export default Radio
