import Icon from "@mdi/react"
import * as mdi from "@mdi/js"
import React, { useState } from "react"
import styled from "styled-components"
import { rgba, darken } from "polished"
import { ChipComponent } from "../types"
import { useTheme, useThemeMode } from "../theme"
import { getColorFromTheme } from "../util"
import { FlexRow } from "../layout"

const CloseButtonContainer: any = styled.button`
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
`

const ChipItemsContainer: any = styled.div`
  width: 100%;

  .sc-cont {
    box-shadow: 0 0 30px -12px ${(props: any) => darken(0.25, props.boxShadow)};
    border-radius: 10px;
    padding: 15px;
    width: calc(100% - 30px);
    position: relative;
  }
  .sc-cnt-chip {
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
  const theme = useTheme()
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
      <span>{children}</span>{" "}
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
  ...props
}) => {
  const [inputValue, setInputValue] = useState<string>("")
  const [themeMode] = useThemeMode()
  const theme = useTheme()
  const boxShadow = darken(0, theme[themeMode].background)

  const handleUpdateInput = e => {
    setInputValue(e.target.value)
  }

  const handleAddItem = e => {
    if (e.which === 13 || e.keyCode === 13 || e.code === "Enter") {
      if (!!inputValue.length) {
        handleAdd(inputValue)
        setInputValue("")
        onItemUpdate([...items, inputValue])
      }
    }
  }

  return (
    <ChipItemsContainer {...props} boxShadow={boxShadow}>
      <FlexRow className="sc-cont" position="center">
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
            placeholder={itemsPlaceholder}
            onChange={handleUpdateInput}
            onKeyUp={handleAddItem}
            value={inputValue}
          />
        </FlexRow>
        <ClearButtonContainer
          onClick={() => {
            handleClear()
          }}
        >
          <Icon path={mdi.mdiClose} size={0.85} color="#f4f4f4" />
        </ClearButtonContainer>
      </FlexRow>
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
  ...props
}) => {
  const [chipsItem, setChipsItem] = useState(items || [""])
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
      ></ChipItems>
    )
  }
}
export default Chip
