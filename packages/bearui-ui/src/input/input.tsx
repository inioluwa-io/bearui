import React, { useState, useEffect, useRef } from "react"
import { InputProps } from "../types"
import styled from "styled-components"
import { getColorFromTheme, isSupported } from "../util"
import { Icon } from "@mdi/react"
import { useTheme, useThemeMode } from "../theme"
import { mdiClose } from "@mdi/js"
import { darken } from "polished"

const InputElement: any = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  top: 0px;
  height: fit-content;
  width: 250px;

  label {
    transition: color 0.35s ease;
    ${(props: any) => !!props.color.length && "color: " + props.color};
  }

  &:hover,
  &:focus {
    label {
      color: ${(props: any) => props.labelColor};
    }
  }
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
  font-size: 13px; 
  font-family: inherit;
  width: 100%;
  outline: none;
  padding: ${(props: any) => props.size};
  border-radius: ${(props: any) => props.corners};
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
  background: ${(props: any) => props.background || "transparent"};
  padding-left:${(props: any) =>
    props.padLeft && !props.iconRight && (props.iconBorder ? "45px" : "33px")};
  padding-right:${(props: any) => {
    if (props.padLeft && props.iconRight) {
      return "45px"
    } else if (props.padLeft && props.clearButton) {
      return "38px"
    }
  }};
  color: ${(props: any) => props.textColor} !important;
  transition: border 0.35s;

  &::placeholder{
    color: #777;
    font-weight: montserrat;
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
  font-size: 0.8rem;
  font-family: inherit;
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
      padding: 0 9px 0 10px;`}
  border:${(props: any) => !props.iconBorder && "none"}

  svg path {
    transition: all 0.35s;
  }
`

const ClearButton: any = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 8px;
  display: flex;
  border: none;
  outline: none;
  justify-content: center;
  align-items: center;
  z-index: 0;
  padding: 3px;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  background: ${(props: any) => props.background};

  svg path {
    transition: all 0.35s;
  }
`

/**
 *
 * Creates an input element
 */

const Input: React.FC<InputProps> = ({
  id = "",
  label = "",
  type = "text",
  background = "",
  disabled = false,
  placeholder,
  corners = "box",
  defaultValue = "",
  size = "sm",
  color = "#596173",
  icon,
  onError,
  iconRight = false,
  iconBorder = true,
  onInputChange,
  validate = "",
  clearButton = false,
  successMessage = "Valid",
  errorMessage = "Invalid",
  ...props
}) => {
  if (typeof onInputChange !== "function") {
    throw new Error("Props onInputChange is required")
  }
  const [inputValue, setInputValue] = useState<string>(defaultValue)
  const [labelColor, setLabelColor] = useState<string>("")
  const [error, setError] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [validateMessage, setValidateMessage] = useState<string>("")
  const [theme] = useTheme()
  const colors = theme.colors
  const [themeMode] = useThemeMode()
  const refs: any = useRef()
  // Reduce margin if parent is a form control element
  useEffect(() => {
    setInputValue(defaultValue)
    if (!!validate.length) {
      const DOMNode = refs.current
      const parentNode = DOMNode.parentElement
      if (parentNode.classList.contains("rap-ui-form-control")) {
        DOMNode.style.marginBottom = "-19px"
      }
    }
    // onInputChange(defaultValue)
  }, [defaultValue])

  const getBorderRadius = (): string => {
    switch (corners) {
      case "rounded": {
        return "50px"
      }
      case "box": {
        return "9px"
      }
      default: {
        throw new Error("corners not supported")
      }
    }
  }
  
  const inputHeightSize = (): string => {
    switch (size) {
      case "xs": {
        return "30px"
      }
      case "sm": {
        return "38px"
      }
      case "md": {
        return "43px"
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
      case "xs": {
        return "8px"
      }
      case "sm": {
        return "11.5px"
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
        if (typeof onError === "function") {
          onError()
        }
      }
    } else {
      setSuccess(false)
      setError(false)
      setValidateMessage("")
    }

    setLabelColor("")
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
      inputType={type}
      color={labelColor}
      labelColor={formatColor()}
      {...props}
    >
      {!!label.length && <Label htmlFor={`${id}`}>{label}</Label>}
      <InputContainer height={inputHeightSize()}>
        <InputHtmlElement
          padLeft={!!icon}
          error={error}
          corners={getBorderRadius()}
          success={success}
          background={
            background
              ? getColorFromTheme(background, theme)
              : theme[themeMode].background
          }
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
          clearButton={clearButton}
          iconRight={iconRight && !clearButton}
          onChange={handleChangeEvent}
          iconBorder={iconBorder}
          onFocus={() => {
            setLabelColor(formatColor())
          }}
        />
        {icon && (
          <InputIcon
            iconRight={iconRight && !clearButton}
            iconBorder={iconBorder}
          >
            <Icon path={icon} size={0.72} color={inputIconColor()} />
          </InputIcon>
        )}
        {clearButton && !!inputValue.length && (
          <ClearButton
            background={darken(
              0.07,
              background
                ? getColorFromTheme(background, theme)
                : theme[themeMode].background
            )}
            iconRight={iconRight && !clearButton}
            iconBorder={iconBorder}
            onClick={e => {
              setInputValue("")
              onInputChange("")
              refs.current.querySelector("input").focus()
            }}
          >
            <Icon path={mdiClose} size={0.55} color={"#f4f4f4"} />
          </ClearButton>
        )}
      </InputContainer>
      {!!validateMessage.length && (
        <span
          style={{
            fontSize: "10px",
            color: (success && colors.success) || (error && colors.danger),
            bottom: 0,
            margin: "3px 5px",
            // marginBottom: "-19px",
          }}
        >
          {validateMessage}
        </span>
      )}
    </InputElement>
  )
}
export default Input
