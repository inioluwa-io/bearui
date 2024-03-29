import Icon from "@mdi/react"
import * as mdi from "@mdi/js"
import React, { useEffect, useState, useRef, useCallback } from "react"
import styled from "styled-components"
import { rgba, darken } from "polished"
import { ChipComponent } from "../types"
import { useTheme, useThemeMode } from "../theme"
import { getColorFromTheme } from "../util"
import { FlexRow } from "../layout"

const CloseButtonContainer: any = styled.button`
  margin: 0;
  margin-left: 6px;
  border: none;
  border-radius: 50px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
`

const ClearButtonContainer: any = styled.button`
  border: none;
  border-radius: 50px;
  position: absolute;
  right: 15px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding: 5px;
  cursor: pointer;
  margin: 0;
`

const ChipItemsContainer: any = styled.div`
  width: 100%;
  position: relative;

  .sc-cont {
    box-shadow: 0 0 30px -12px ${(props: any) => darken(0.25, props.boxShadow)};
    border-radius: 10px;
    padding: 15px;
    width: calc(100% - 30px);
    position: relative;
    background: ${(props: any) => props.background};
    margin: 0;
  }
  .sc-cnt-chip {
    margin: -20px 0 0 -20px;
    margin-right: 35px;
  }

  input {
    flex-basis: unset;
    width: calc(10% - 30px);
    flex-grow: 1;
    background: transparent;
    outline: none;
    border: none;
    padding: 2px 0;

    &::placeholder {
      color: #999;
    }
  }
`

const ChipSuggestionContainer: any = styled.div`
  width: 100%;
  box-shadow: 0 0 30px -12px ${(props: any) => darken(0.25, props.boxShadow)};
  border-radius: 10px;
  width: calc(100% - 0px);
  margin-top: 10px;
  position: absolute;
  overflow: hidden;
  z-index: 99;
  background: ${(props: any) => props.background};

  button {
    background: transparent;
    border: none;
    display: block;
    width: 100%;
    outline: none;
    cursor: pointer;
    padding: 15px;
    text-align: left;
    transition: background 0.25s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.15);
    }
  }
`
const ChipSingleContainer: any = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  padding: 2px 0.6rem;
  border-radius: 30px;
  justify-content: center;
  min-height: 1.5rem;
  vertical-align: middle;
  width: fit-content;
  background: ${(props: any) => props.color};

  &.sc-closeable {
    padding-right: 3px;
  }

  .sc-avatar {
    transform: translateX(-7px);
    height: 24px !important;
    width: 24px !important;
  }

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 0;
    font-weight: 500;
    font-size: 11px;
    font-family: inherit;
    color: ${(props: any) => props.textColor};

    span {
      font-size: 10px;
    }

    > p {
      font-size: 12px;
    }
  }
`

type ChipSingleComponent = {
  onClose: (idx: number) => void
  index: number
} & ChipComponent

const ChipSingle: React.FC<ChipSingleComponent> = ({
  closable,
  children,
  index,
  transparent,
  color,
  onClose,
  ...props
}) => {
  const [theme] = useTheme()
  const [themeMode] = useThemeMode()
  let textColor = "#f4f4f4"

  // set default colors if color is not set
  if (!color) {
    color = theme[themeMode].background
    textColor = themeMode === "darkmode" ? "#f4f4f4" : "#444444"
  }
  let chipColor = getColorFromTheme(color, theme)

  // transparent is supported by only lightmode
  if (transparent && themeMode === "lightmode") {
    chipColor = rgba(getColorFromTheme(color, theme), 0.15)
    textColor = getColorFromTheme(color, theme)
  }

  return (
    <ChipSingleContainer
      {...props}
      color={chipColor}
      textColor={textColor}
      className={closable ? "sc-closeable" : ""}
    >
      <span>{children}</span>
      {closable && (
        <CloseButtonContainer
          onClick={() => {
            onClose(index)
          }}
        >
          <Icon path={mdi.mdiClose} size={0.6} color="#f4f4f4" />
        </CloseButtonContainer>
      )}
    </ChipSingleContainer>
  )
}

const ChipAutoSuggestion: React.FC<any> = ({
  suggestions,
  background,
  updateItems,
  boxShadow,
  setShowSuggestions,
  ...props
}) => {
  const [suggestion, setSuggestion] = useState(suggestions)
  useEffect(() => {
    setSuggestion(suggestions)
  }, [suggestions])
  return (
    <ChipSuggestionContainer
      background={background}
      boxShadow={boxShadow}
      {...props}
    >
      {suggestion.map((item: string, idx: number) => (
        <button
          key={idx}
          onClick={() => {
            updateItems(item)
            setShowSuggestions(false)
          }}
        >
          {item}
        </button>
      ))}
    </ChipSuggestionContainer>
  )
}

const ChipItems: React.FC<any> = ({
  items,
  children,
  closable,
  color,
  transparent,
  handleClose,
  itemsPlaceholder,
  handleAdd,
  onItemUpdate,
  handleClear,
  onInputChange,
  autoSuggestion,
  ...props
}) => {
  const [inputValue, setInputValue] = useState<string>("")
  const [themeMode] = useThemeMode()
  const [theme] = useTheme()
  const boxShadow = darken(0, theme[themeMode].background)
  const [suggestions, setSuggeestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const refs = useRef<HTMLDivElement>()

  const handleUpdateInput = (value: string) => {
    setInputValue(value)
    if (typeof onInputChange === "function") {
      onInputChange(value)
    }
  }

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
          }
        }
      }
    },
    [refs]
  )

  useEffect(() => {
    setSuggeestions(autoSuggestion)
    window.addEventListener("click", closeSugeestions)
    return (): void => {
      window.removeEventListener("click", closeSugeestions)
    }
  }, [autoSuggestion, closeSugeestions])

  const handleAddItem = e => {
    if (e.which === 13 || e.keyCode === 13 || e.code === "Enter") {
      if (!!inputValue.length) {
        updateItems(inputValue)
      }
    }
  }

  const updateItems = value => {
    if (!!value.length) {
      setInputValue("")
      if (!items.includes(value)) {
        handleAdd(value)
        onItemUpdate([...items, value])
      } else {
        onItemUpdate(items)
      }
    }
  }

  const throwAutoSuggestionError = () => {
    if (autoSuggestion) {
      if (!(autoSuggestion instanceof Array)) {
        throw new Error(
          `autoSuggestion expects property to be an Array of strings`
        )
      }
      if (typeof onInputChange !== "function") {
        throw new TypeError(
          `onInputChange expected to be a function and passed together with autoSuggestion. Try passing a function to onInputChange property on Chip component`
        )
      }
    }
  }

  throwAutoSuggestionError()

  return (
    <ChipItemsContainer
      {...props}
      boxShadow={boxShadow}
      background={theme[themeMode].cardbackground}
      ref={refs}
    >
      <FlexRow className="sc-cont">
        <FlexRow className="sc-cnt-chip" position="center">
          {items.map((item, idx: number) => (
            <ChipSingle
              key={idx}
              index={idx}
              closable={closable}
              transparent={transparent}
              color={color}
              onClose={handleClose}
              {...props}
            >
              {item}
            </ChipSingle>
          ))}
          <input
            type="text"
            onFocus={() => {
              setShowSuggestions(true)
            }}
            placeholder={itemsPlaceholder}
            onChange={e => {
              handleUpdateInput(e.target.value)
            }}
            onKeyDown={handleAddItem}
            value={inputValue}
          />
        </FlexRow>
        <ClearButtonContainer
          onClick={() => {
            handleClear()
          }}
        >
          <Icon path={mdi.mdiClose} size={0.85} />
        </ClearButtonContainer>
      </FlexRow>
      {showSuggestions && suggestions && !!suggestions.length && (
        <ChipAutoSuggestion
          className="sugst"
          updateItems={updateItems}
          suggestions={suggestions}
          setShowSuggestions={setShowSuggestions}
          boxShadow={boxShadow}
          background={theme[themeMode].cardbackground}
        />
      )}
    </ChipItemsContainer>
  )
}

const Chip: React.FC<ChipComponent> = ({
  children,
  closeIcon,
  closable = false,
  items,
  color,
  transparent = false,
  itemsPlaceholder = "Add a chip here...",
  onItemUpdate,
  onInputChange,
  autoSuggestion,
  ...props
}) => {
  const [chipsItem, setChipsItem] = useState([""])
  const handleClose = (idx: number) => {
    const tmpArr = [...chipsItem]
    tmpArr.splice(idx, 1)

    setChipsItem(tmpArr)
  }

  const handleItemClose = (idx: number) => {
    const tmpArr = [...chipsItem]
    tmpArr.splice(idx, 1)

    setChipsItem(tmpArr)
    onItemUpdate(tmpArr)
  }

  const handleClear = () => {
    setChipsItem([])
    onItemUpdate([])
  }

  const handleAdd = (value: string) => {
    setChipsItem([...chipsItem, value])
  }

  useEffect(() => {
    setChipsItem(items || [""])
  }, [items])

  if (!items) {
    return (
      <>
        {chipsItem.map((item, idx: number) => (
          <ChipSingle
            key={idx}
            index={idx}
            closable={closable}
            transparent={transparent}
            color={color}
            onClose={handleClose}
            {...props}
          >
            {children}
          </ChipSingle>
        ))}
      </>
    )
  } else {
    return (
      <ChipItems
        items={chipsItem}
        closable={closable}
        transparent={transparent}
        color={color}
        onClose={handleItemClose}
        handleAdd={handleAdd}
        handleClear={handleClear}
        itemsPlaceholder={itemsPlaceholder}
        onItemUpdate={onItemUpdate}
        onInputChange={onInputChange}
        autoSuggestion={autoSuggestion}
      ></ChipItems>
    )
  }
}
export default Chip
