import React, { useState, useCallback, useRef, useEffect } from "react"
import { SelectComponent } from "../types"
import styled from "styled-components"
import { isSupported } from "../util"
import { Icon } from "@mdi/react"
import { useTheme, useThemeMode } from "../theme"
import { mdiChevronDown } from "@mdi/js"

const InputElement: any = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  // margin-top: 0px;
  height: fit-content;
  width: 230px;
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
  height: calc(100% - (${(props: any) => `${props.size} + ${props.size})`});
  flex: 1;
  font-size: 13px; 
  font-family: inherit;
  width: 100%;
  outline: none;
  padding: ${(props: any) => props.size};
  border-radius: ${(props: any) => props.corners};
  border: 1px solid transparent;
  background: ${(props: any) => props.background.background || "transparent"};
  padding-right:33px;
  color: ${(props: any) => props.textColor};
  transition: border 0.35s;

  &::placeholder,&.fade{
    color: #777;
    font-weight: montserrat;
    border-radius: 9px;
    border-bottom-left-radius:0;
    border-bottom-right-radius:0;
  }

  &:hover,&:focus{
    border: 1px solid ${(props: any) => props.color};
  }
  &:focus{
  }

  &:focus,
  &:hover:not(:disabled) {

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

const ArrowDown: any = styled.div`
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

  svg path {
    transition: all 0.35s;
  }
`
const SuggestionContainer: any = styled.div`
  width: 100%;
  //   box-shadow: 0 0 15px -12px rgba(0, 0, 0, 0.5);
  border-radius: 9px;
  width: calc(100% - 2px);
  top: 100%;
  max-height: 150px;
  position: absolute;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  overflow: auto;
  z-index: 99;
  background: ${(props: any) => props.background};
  border: 1px solid ${(props: any) => props.color};

  button {
    background: transparent;
    border: none;
    border-radius: 0;
    display: block;
    width: 100%;
    outline: none;
    cursor: pointer;
    padding: 9px 15px;
    text-align: left;
    transition: background 0.25s ease, color 0.25s ease;

    &:hover,
    &.active,
    &:focus {
      background: ${(props: any) => props.color};
      color: #f4f4f4;

      span {
        transition: color 0.25s ease;
        color: #f4f4f4;
      }
    }
  }
`

/**
 *
 * Creates a select component
 */

const Select: React.FC<SelectComponent> = ({
  id,
  label = "",
  disabled = false,
  placeholder,
  corners = "box",
  defaultSelected = "",
  size = "sm",
  options = [],
  color = "#596173",
  onSelect,
  ...props
}) => {
  const [inputValue, setInputValue] = useState<string>("")
  const [selectedValue, setSelectedValue] = useState<string>(defaultSelected)
  const [labelColor, setLabelColor] = useState<string>("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [theme] = useTheme()
  const colors = theme.colors
  const [themeMode] = useThemeMode()
  const refs: any = useRef()

  const inputHeightSize = (): string => {
    switch (size) {
      case "sm": {
        return "37px"
      }
      case "md": {
        return "42px"
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
    e.target.classList.remove("fade")
    setLabelColor("")
  }

  const handleChangeEvent = (e: any) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    setInputValue(selectedValue)
    if (typeof onSelect === "function") {
      onSelect(inputValue)
    }
  }, [selectedValue])

  const getFilteredOptions = useCallback((): string[] => {
    if (inputValue.length < 1) {
      return options
    } else {
      return options.filter(option =>
        option.toLowerCase().includes(inputValue.toLowerCase())
      )
    }
  }, [inputValue])

  const closeSugeestions = useCallback(
    e => {
      {
        const DOMNode = refs.current
        const suggestionElement = DOMNode.querySelector(".sugst")
        const inputElement = DOMNode.querySelector("input")

        if (suggestionElement) {
          if (
            !suggestionElement.contains(e.target) &&
            !inputElement.contains(e.target)
          ) {
            setShowSuggestions(false)
            selectedValue.length > 0
              ? setInputValue(selectedValue)
              : setInputValue("")
          }
        }
      }
    },
    [refs, selectedValue]
  )
  const handleEsc = useCallback(
    (e: any) => {
      const DOMNode = refs.current
      const inputElement: HTMLElement = DOMNode.querySelector("input")

      if (e.which === 27 || e.keyCode === 27 || e.code === "Escape") {
        setShowSuggestions(false)
        selectedValue.length > 0 && setInputValue(selectedValue)
        inputElement.blur()
      }
    },
    [refs, selectedValue]
  )

  useEffect(() => {
    window.addEventListener("click", closeSugeestions)
    window.addEventListener("keydown", handleEsc)
    return (): void => {
      window.removeEventListener("click", closeSugeestions)
      window.removeEventListener("keydown", handleEsc)
    }
  }, [closeSugeestions])

  return (
    <InputElement
      ref={refs}
      color={labelColor}
      labelColor={formatColor()}
      {...props}
    >
      {!!label.length && <Label htmlFor={`${id}`}>{label}</Label>}
      <InputContainer height={inputHeightSize()}>
        <InputHtmlElement
          background={theme[themeMode]}
          color={formatColor()}
          corners={getBorderRadius()}
          colors={colors}
          textColor={themeMode === "lightmode" ? "#111" : "#f4f4f4"}
          size={inputPaddingSize()}
          type="text"
          id={id}
          value={inputValue}
          placeholder={selectedValue.length > 0 ? selectedValue : placeholder}
          disabled={disabled}
          onBlur={handleBlurEvent}
          onChange={handleChangeEvent}
          onFocus={e => {
            e.target.classList.add("fade")
            setLabelColor(formatColor())
            setInputValue("")
            setShowSuggestions(true)
          }}
        />
        <ArrowDown>
          <Icon path={mdiChevronDown} size={0.8} />
        </ArrowDown>
      </InputContainer>
      {showSuggestions && (
        <SuggestionContainer
          color={formatColor()}
          corners={getBorderRadius()}
          background={theme[themeMode].background}
          className="sugst"
        >
          <div>
            <button
              onClick={() => {
                setSelectedValue("")
                setShowSuggestions(false)
              }}
            >
              <span>...</span>
            </button>
            {getFilteredOptions().map((option, idx: number) => (
              <button
                key={idx}
                className={
                  option.toLowerCase() === selectedValue.toLowerCase()
                    ? "active"
                    : ""
                }
                onClick={() => {
                  setSelectedValue(option)
                  setShowSuggestions(false)
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </SuggestionContainer>
      )}
    </InputElement>
  )
}
export default Select
