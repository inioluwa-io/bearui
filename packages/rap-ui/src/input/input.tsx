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
  border: 1px solid ${(props: any) => {
    let color: string = "transparent"

    if (props.error || props.success) {
      if (props.error) {
        color = props.colors.danger + " !important"
      }
      if (props.success) {
        color = props.colors.success + " !important"
      }
    }
    return color
  }};
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
      fill: ${(props: any) => {
        let color: string = props.color

        if (props.error || props.success) {
          if (props.error) {
            color = props.colors.danger
          }
          if (props.success) {
            color = props.colors.success
          }
        }
        return color + " !important"
      }};
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

/**
 *
 * Creates an input element
 */

const Input: React.FC<InputProps> = ({
  id,
  label = "",
  type = "text",
  disabled = false,
  placeholder,
  size = "sm",
  color = "#596173",
  icon,
  onError,
  iconRight = false,
  iconBorder = true,
  onInputChange,
  validate = "",
  successMessage = "Valid",
  errorMessage = "Invalid",
  ...props
}) => {
  if (!id || typeof onInputChange !== "function") {
    throw new Error("Props id, onError and onChange are required")
  }
  if (type === "email" && typeof onError !== "function") {
    throw new Error("Props onError is required for type email")
  }
  const [inputValue, setInputValue] = useState<string>("")
  const [error, setError] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [validateMesssage, setValidateMessage] = useState<string>("")
  const theme = useTheme()
  const colors = theme.colors
  const [themeMode] = useThemeMode()
  const refs: any = useRef()

  // Reduce margin if parent is a form control element
  useEffect(() => {
    if (!!validate.length) {
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
    let typeMatch: boolean
    if (!!inputValue.length && !!validate.length) {
      switch (validate) {
        case "email": {
          typeMatch = /^[\w\-\.]+@[a-zA-Z]+\.[a-zA-Z]+$/g.test(e.target.value)
          break
        }
        case "alpha": {
          typeMatch = /^[a-zA-Z]+$/g.test(e.target.value)
          break
        }
        case "number": {
          typeMatch = /^[0-9]+$/g.test(e.target.value)
          break
        }
        default:
          typeMatch = true
      }
      // if validation is success
      if (typeMatch) {
        setValidateMessage(successMessage)
        setError(false)
        setSuccess(true)
      } else {
        setValidateMessage(errorMessage)
        setError(true)
        setSuccess(false)
        onError()
      }
    } else {
      setSuccess(false)
      setError(false)
      setValidateMessage("")
    }
  }

  const handleChangeEvent = (e: any) => {
    setInputValue(e.target.value)
    onInputChange(e.target.value)
  }

  const inputIconColor = (): string => {
    let color: string = "#777777"

    if (error || success) {
      if (error) color = colors.danger
      if (success) color = colors.success
    }
    return color
  }

  return (
    <InputElement
      ref={refs}
      padBottom={!!validate.length}
      inputType={type}
      {...props}
    >
      {!!label.length && <Label htmlFor={`${id}`}>{label}</Label>}
      <InputContainer height={inputHeightSize()}>
        <InputHtmlElement
          padLeft={!!icon}
          error={error}
          success={success}
          background={theme[themeMode]}
          color={formatColor()}
          colors={colors}
          textColor={themeMode === "lightmode" ? "#111" : "#f4f4f4"}
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
            <Icon path={mdi[icon]} size={0.72} color={inputIconColor()} />
          </InputIcon>
        )}
      </InputContainer>
      {!!validateMesssage.length && (
        <span
          style={{
            fontSize: "11px",
            position: "absolute",
            color: (success && colors.success) || (error && colors.danger),
            bottom: 0,
            margin: "3px 5px",
          }}
        >
          {validateMesssage}
        </span>
      )}
    </InputElement>
  )
}
export default Input
