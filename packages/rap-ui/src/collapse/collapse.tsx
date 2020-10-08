import React, { useState, useEffect } from "react"
import { CollapseComponent } from "../types"
import Icon from "@mdi/react"
import * as mdi from "@mdi/js"
import styled from "styled-components"
import { useThemeMode } from ".."

const CollapseContainer: any = styled.div`
  width: 100%;
  li {
    display: block;
    transition: all 0.25s;

    &:not(:last-child) {
      border-bottom: 1px solid rgba(153, 153, 153, 0.3);
    }
  }
`
const CollapseElement: any = styled.li`
  header {
    width: calc(100% - 2rem);
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    cursor: pointer;

    .p {
      font-size: 15px;
      font-weight: 500;
      font-family: inherit;
    }
    .sc-ic {
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        transition: all 0.25s ease;
      }
    }

    &.active {
      .sc-ic {
        svg {
          transform: rotate(180deg);
        }
      }
    }
  }
  &.disabled {
    header {
      cursor: not-allowed;
    }
    .p {
      color: ${(props: any) =>
        props.themeMode === "lightmode" ? "#c2c6dc" : "#9799a4"} !important;
    }
    .sc-ic {
      svg path {
        fill: ${(props: any) =>
          props.themeMode === "lightmode" ? "#c2c6dc" : "#9799a4"} !important;
      }
    }
  }
  .sc-cnt {
    font-size: initial;
    transition: all 0.25s ease;
    padding: 0 1rem;
    overflow: hidden;
    height: 0;
    opacity: 0;

    &.active {
      height: fit-content;
      padding: 1rem;
      opacity: 1;
    }
  }
`

const Collapse: React.FC<CollapseComponent> = ({
  items,
  accordion = false,
  listener = "click",
  icon,
  ...props
}) => {
  const [themeMode] = useThemeMode()
  const iconColor = themeMode === "darkmode" ? "#f4f4f4" : "#444444"
  const [selected, setSelected] = useState<Map<number | string, boolean>>(
    new Map()
  )

  if (icon === undefined) {
    icon = <Icon path={mdi.mdiChevronDown} size={0.8} color={iconColor} />
  } else {
    icon = <Icon path={mdi[icon]} size={0.8} color={iconColor} />
  }

  const handleClick = (idx, disabled): void => {
    if (!disabled) {
      let prevState: Map<number | string, boolean> = new Map(selected)
      if (!accordion) {
        prevState.set(idx, !prevState.get(idx))
        setSelected(prevState)
      } else {
        const tempMap = new Map()
        tempMap.set(idx, !prevState.get(idx))
        setSelected(tempMap)
      }
    }
  }

  useEffect(() => {
    items.forEach((item, idx: number) => {
      if (item.active) {
        let prevState: Map<number | string, boolean> = new Map(selected)
        prevState.set(idx, true)
        setSelected(prevState)
      }
    })
  }, [items])

  return (
    <CollapseContainer {...props}>
      <ul>
        {items.map((item, idx: number) => (
          <CollapseElement
            key={idx}
            className={item.disabled ? "disabled" : ""}
            themeMode={themeMode}
            onMouseEnter={() => {
              if (listener === "hover") {
                handleClick(idx, item.disabled)
              }
            }}
            onMouseLeave={() => {
              if (listener === "hover") {
                handleClick(idx, item.disabled)
              }
            }}
          >
            <header
              onClick={e => {
                if (listener === "click") {
                  handleClick(idx, item.disabled)
                }
              }}
              className={selected.get(idx) ? "active" : ""}
            >
              <div className="p">{item.label}</div>
              <div className="sc-ic">{icon}</div>
            </header>
            <div className={selected.get(idx) ? "active sc-cnt" : "sc-cnt"}>
              {item.content}
            </div>
          </CollapseElement>
        ))}
      </ul>
    </CollapseContainer>
  )
}
export default Collapse
