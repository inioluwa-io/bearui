import React, { useState, useEffect, useRef } from "react"
import { InputProps } from "../types"
import styled from "styled-components"
import { isSupported } from "../util"
import * as mdi from "@mdi/js"
import { Icon } from "@mdi/react"
import { useTheme, useThemeMode } from "../theme"

const InputElement: any = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 0px;
  height: fit-content;
  width: 220px;
  padding-bottom: ${(props: any) => props.padBottom && "19px"};
`
const InputContainer: any = styled.div`
  position: relative;
  height: ${(props: any) => props.height};
  width: 100%;
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
  border: 1px solid ${(props: any) =>
    props.error ? props.colors.danger + " !important" : "transparent"};
  background: ${(props: any) => props.background.background || "transparent"};
  padding-left:${(props: any) => props.padLeft && !props.iconRight && "40px"};
  padding-right:${(props: any) => props.padLeft && props.iconRight && "40px"};
  color: ${(props: any) => props.textColor};
  transition: all 0.35s;

  &::placeholder{
    color: #777;
  }

  &:focus,
  &:hover:not(:disabled) {
    border: 1px solid ${(props: any) => props.color};

     + div svg path{
      transition: all 0.35s;
      fill: ${(props: any) =>
        props.error ? props.colors.danger : props.color} !important;
    }
  }
`

const Label: any = styled.label`
  font-size: 0.85rem;
  font-family: Nunito sans;
  margin-top: 1px;
  margin-bottom: 4px;
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
  z-index: 0;

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
  onError,
  iconRight = false,
  iconBorder = true,
  onChange,
}) => {
  if (!id || typeof onChange !== "function") {
    throw new Error("Props id, onError and onChange are required")
  }
  if (type === "email" && typeof onError !== "function") {
    throw new Error("Props onError is required for type email")
  }
  const [inputValue, setInputValue] = useState<string>("")
  const [error, setError] = useState<boolean>(false)
  const [errorMesssage, setErrorMessage] = useState<string>("")
  const theme = useTheme()
  const colors = theme.colors
  const [themeMode] = useThemeMode()
  const refs: any = useRef()

  // Reduce margin if parent is a form control element
  useEffect(() => {
    if (type === "email") {
      const DOMNode = refs.current
      const parentNode = DOMNode.parentElement
      if (parentNode.classList.contains("rap-ui-form-control")) {
        DOMNode.style.marginBottom = "-19px"
      }
    }
  }, [])

  const inputHeightSize = (): string => {
    switch (size) {
      case "sm": {
        return "36px"
      }
      case "md": {
        return "39px"
      }
      case "lg": {
        return "50px"
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

  const handleBlurEvent = (e: any): void => {
    if (type === "email" && inputValue) {
      const typeMatch: boolean = /^[\w\-\.]+@[a-zA-Z]+\.[a-zA-Z]+$/g.test(
        e.target.value
      )
      setError(!typeMatch)
      setErrorMessage(!typeMatch ? "Invalid email format" : "")
      !typeMatch && onError()
    }
  }

  const handleChangeEvent = (e: any) => {
    setInputValue(e.target.value)
    onChange(e.target.value)
  }

  return (
    <InputElement ref={refs} padBottom={type === "email"} inputType={type}>
      <Label htmlFor={`${id}`}>{label}</Label>
      <InputContainer height={inputHeightSize()}>
        <InputHtmlElement
          padLeft={!!icon}
          error={error}
          background={theme[themeMode]}
          color={formatColor()}
          colors={colors}
          textColor={themeMode === "lightmode" ? "#222" : "#f1f1f1"}
          size={inputPaddingSize()}
          type={type}
          id={id}
          value={inputValue}
          placeholder={placeholder}
          disabled={disabled}
          onBlur={handleBlurEvent}
          iconRight={iconRight}
          onChange={handleChangeEvent}
        />
        {icon && (
          <InputIcon iconRight={iconRight} iconBorder={iconBorder}>
            <Icon path={mdi[icon]} size={0.72} color="#777777" />
          </InputIcon>
        )}
      </InputContainer>
      {errorMesssage && (
        <span
          style={{
            fontSize: "11px",
            position: "absolute",
            color: colors.danger,
            bottom: 0,
            margin: "3px 0",
          }}
        >
          {errorMesssage}
        </span>
      )}
    </InputElement>
  )
}
export default Input
