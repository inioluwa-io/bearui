import React, { useState } from "react"
import { InputProps } from "../types"
import styled from "styled-components"
import { isSupported } from "../util"
import { colors } from "../default.json"
import * as mdi from "@mdi/js"
import { Icon } from "@mdi/react"

const InputElement: any = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
`
const InputContainer: any = styled.div`
  position: relative;
  height: ${(props: any) => props.height};
  width: 220px;
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
  padding-left:${(props: any) => props.padLeft && !props.iconRight && "40px"};
  padding-right:${(props: any) => props.padLeft && props.iconRight && "40px"};
  color: #f1f1f1;
  transition: all 0.35s;

  &::placeholder{
    color: #777;
  }

  &:focus,
  &:hover:not(:disabled) {
    border: 1px solid ${(props: any) => props.color};

     + div svg path{
      fill: ${(props: any) => props.color} !important;
    }
  }
`

const Label: any = styled.label`
  font-size: 0.85rem;
  font-family: Nunito sans;
  margin: 4px 0;
`

const InputIcon: any = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props: any) => (props.iconRight ? "auto" : "0")};
  right: ${(props: any) => (props.iconRight ? "0" : "auto")};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;

  ${(props: any) =>
    props.iconRight
      ? `border-left: 1px solid #666;
       padding: 0 8px 0 7px`
      : `border-right: 1px solid #666;
      padding: 0 7px 0 8px;`}
      border:${(props: any) => !props.iconBorder && "none"}

  svg path {
    transition: all 0.35s;
  }
`

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled = false,
  placeholder,
  size = "sm",
  color = "#596173",
  icon,
  iconRight = false,
  iconBorder = true,
  onChange,
}) => {

  if(!id || typeof onChange !== "function") {
    throw new Error("Props id and onChange are required")
  }
  const [inputValue, setInputValue] = useState<string>("")

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
      <Label htmlFor={`${id}`}>{label}</Label>
      <InputContainer height={inputHeightSize()}>
        <InputHtmlElement
          padLeft={!!icon}
          color={formatColor()}
          size={inputPaddingSize()}
          type={type}
          id={id}
          value={inputValue}
          placeholder={placeholder}
          disabled={disabled}
          iconRight={iconRight}
          onChange={handleChangeEvent}
        />
        {icon && (
          <InputIcon iconRight={iconRight} iconBorder={iconBorder}>
            <Icon path={mdi[icon]} size={0.72} color="#777777" />
          </InputIcon>
        )}
      </InputContainer>
    </InputElement>
  )
}
export default Input
