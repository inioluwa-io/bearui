import React, { useState, ChangeEvent, EventHandler } from "react"
import { InputProps } from "../types"
import styled from "styled-components"
import { isSupported } from "../util"
import { colors } from "../default.json"

const InputElement: any = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
`
const InputContainer: any = styled.div`
  position: relative;
  height: ${(props: any) => props.height};
  width: ${(props: any) => props.width};
  display: flex;
`
const InputHtmlElement: any = styled.input`
  position: relative;
  height: calc(100% - (${(props: any) =>
    `${props.size} + ${props.size} + 1px)`});
  flex: 1;
  font-family: Nunito sans;
  width: 100%;
  outline: none;
  padding: ${(props: any) => props.size};
  border-radius: 5px;
  background: transparent;
  border: 1px solid transparent;
  background: #282c34;
  color: #f1f1f1;
  transition: all 0.35s;

  &:focus,
  &:hover {
    border: 1px solid ${(props: any) => props.color};
  }
`

const Label: any = styled.label`
  font-size: 0.85rem;
  font-family: Nunito sans;
  margin: 4px 0;
`

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled = false,
  placeholder,
  size = "lg",
  color = "#596173",
  icon,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState<string>("")

  const inputWidthSize = (): string => {
    switch (size) {
      case "sm": {
        return "200px"
      }
      case "md": {
        return "220px"
      }
      case "lg": {
        return "235px"
      }
      default: {
        throw new Error("size not supported")
      }
    }
  }
  const inputHeightSize = (): string => {
    switch (size) {
      case "sm": {
        return "36px"
      }
      case "md": {
        return "38px"
      }
      case "lg": {
        return "40px"
      }
      default: {
        throw new Error("size not supported")
      }
    }
  }
  const inputPaddingSize = (): string => {
    switch (size) {
      case "sm": {
        return "10px"
      }
      case "md": {
        return "12px"
      }
      case "lg": {
        return "15px"
      }
      default: {
        throw new Error("size not supported")
      }
    }
  }

  const formatColor = (): string => {
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
    if (isSupported(supportedColors, color)) {
      return colors[color]
    }
    return color
  }

  const handleChangeEvent = (e: any) => {
    setInputValue(e.target.value)
    onChange(e.target.value)
  }

  return (
    <InputElement>
      <Label htmlFor={`#${id}`}>{label}</Label>
      <InputContainer width={inputWidthSize()} height={inputHeightSize()}>
        <InputHtmlElement
          color={formatColor()}
          size={inputPaddingSize()}
          type={type}
          id={id}
          value={inputValue}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleChangeEvent}
        />
      </InputContainer>
    </InputElement>
  )
}
export default Input
