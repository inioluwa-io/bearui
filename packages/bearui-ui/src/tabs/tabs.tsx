import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
import { TabList, TabsComponent } from "../types"
import styled from "styled-components"
import { darken } from "polished"
import { useTheme } from "../theme"
import { getColorFromTheme } from "../util"

const TabsElement: any = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: ${(props: any) => `${props.align}`};

  .container {
    position: relative;
    display: flex;
    // padding-bottom: 5px;
    ${(props: any) => {
      if (!(props.position === "left" || props.position === "right")) {
        return "overflow-x: auto;"
      }
    }}
    // background: ${(props: any) => props.tabColor};
    // box-shadow: 0 6px 15px -8px ${(props: any) => props.tabColor};
    border-radius: 14px;
    // padding: 6px;
    ${(props: any) => {
      if (props.position === "left" || props.position === "right") {
        return "width: fit-content;"
      } else {
        return `
        overflow:hidden;
        `
      }
    }}
  }
  .inner-container {
    position: relative;
    width: fit-content;
  }
  ul {
    display: flex;
    position: relative;
    width: ${(props: any) => `${props.fixed ? "100%" : "fit-content"}`};
    ${(props: any) => {
      if (props.position === "left" || props.position === "right") {
        return "flex-direction: column;"
      } else {
        return "flex-direction: row;"
      }
    }}
    z-index: 1;

    li {
      display: flex;
      flex: ${(props: any) => `${props.fixed ? "1" : "none"}`};
      button {
        width: ${(props: any) => `${props.fixed ? "100%" : "fit-content"}`};

        ${(props: any) => {
          if (props.position === "left" || props.position === "right") {
            return `
            padding: 9px 15px;
            width:100%`
          } else {
            return "padding: 9px 15px;"
          }
        }}
        background: transparent;
        border: none;
        outline: none;
        font-family: inherit;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        // transition: all 0.25s ease;
        text-align: center;
        * {
          fill: inherit;
          color: inherit;
        }

        > span {
          transition: all 0.25s ease;
          display: block;
        }

        &.active {
          span {
            color: #fff;
            * {
              // fill: ${(props: any) => props.tabColor};
              // color: ${(props: any) => props.tabColor};
              fill: #fff;
              color: #fff;
            }
          }
        }
      }
    }
  }
`

const TabsIndicator: any = styled.span`
  position: absolute;
  // background: rgba(0, 0, 0, 0.1);
  ${(props: any) => {
    if (props.position === "left") {
      return `
      height: 100%;
      width: 2px;
      top: 0;
      right:-3px;
      `
    } else if (props.position === "right") {
      return `
      height: 100%;
      width: 2px;
      top: 0;
      left: -3px;
      `
    } else {
      return `
      width: 100%;
      height: 100%;
      bottom: 0;
      `
    }
  }}

  &::after {
    content: "";
    position: absolute;
    transition: all 0.25s ease;
    background: ${(props: any) => props.tabColor};
    border-radius: 50px;
    // box-shadow: 0 8px 35px -6px ${(props: any) =>
      darken(0.18, props.tabColor)};

    ${(props: any) => {
      if (props.position === "left") {
        return `
        right:-1px;
        height:${props.height}px;
        width:2px;
        top: ${props.top}px;
        `
      } else if (props.position === "right") {
        return `
            left:1px;
            height:${props.height}px;
            width:2px;
            top: ${props.top}px;
            `
      } else {
        return `
        left: 0;
        width:${props.width}px;
        height:100%;
        left: ${props.left}px;
        `
      }
    }}
  }
`

const TabsContent: any = styled.div`
  width: 100%;

  ${(props: any) => {
    if (props.position === "left" || props.position === "right") {
      return `margin: 13px 20px;
      width:calc(100% - 40px);
      overflow:hidden;`
    } else {
      return `margin: 20px 13px;
      margin-bottom:13px;
      width:calc(100% - 26px);
      `
    }
  }}
`

const TabsContainer: any = styled.div`
  width: 100%;
  display: flex;

  ${(props: any) => {
    if (props.position === "left") {
      return "flex-direction:row;"
    } else if (props.position === "right") {
      return "flex-direction:row-reverse;"
    } else {
      return "flex-direction:column;"
    }
  }}

  &.isnotmobile .tab-ele {
    * {
      ::-webkit-scrollbar {
        height: 6px;
        background: rgba(0, 0, 0, 0);
        transition: all 0.25s ease;
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb {
        height: 6px;
        background: rba(0, 0, 0, 0);
        border-radius: 4px;
        transition: all 0.25s ease;
      }
    }

    &:hover {
      * {
        ::-webkit-scrollbar {
          opacity: 1;
          background: rgba(0, 0, 0, 0.1);
        }
        ::-webkit-scrollbar-thumb {
          background: #aaa;
        }
      }
    }
  }
`

const Tabs: React.FC<TabsComponent> = ({
  list,
  align = "center",
  position = "top",
  color = "primary",
  onTabClick,
  ...props
}) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0)
  type IndicatorProps = {
    left: number
    width: number
    height: number
    top: number
  }
  const [indicatorProp, setIndicatorProp] = useState<IndicatorProps>({
    left: 0,
    width: 0,
    top: 0,
    height: 0,
  })
  const [theme] = useTheme()
  const refs = useRef<HTMLDivElement>()
  const indicatorColor = getColorFromTheme(
    list[currentIdx].color || color,
    theme
  )

  const getTabPostition = useCallback(
    (idx): IndicatorProps => {
      const DOMNode = refs.current
      const getLeft = (idx): number => {
        let left = 0

        for (let i = 0; i < idx; i++) {
          const currentTab = Array.from(DOMNode.querySelectorAll("ul li.tab"))[
            i
          ]
          const pos = currentTab.getBoundingClientRect()

          left += pos.width
        }
        return left
      }
      const getTop = (idx): number => {
        let top = 0

        for (let i = 0; i < idx; i++) {
          const currentTab = Array.from(DOMNode.querySelectorAll("ul li.tab"))[
            i
          ]
          const pos = currentTab.getBoundingClientRect()

          top += pos.height
        }
        return top
      }

      if (DOMNode) {
        const currentTab = Array.from(DOMNode.querySelectorAll("ul li.tab"))[
          idx
        ]
        const pos = currentTab.getBoundingClientRect()

        return {
          width: pos.width,
          left: getLeft(idx),
          top: getTop(idx),
          height: pos.height,
        }
      }
    },
    [refs]
  )

  useEffect(() => {
    const currentTab = getTabPostition(0)

    const DOMNode = refs.current
    if (DOMNode) {
      if (
        /iPhone|iPad|Android|Blackberry|iPod/.test(window.navigator.userAgent)
      ) {
        DOMNode.classList.add("ismobile")
        DOMNode.classList.remove("isnotmobile")
      } else {
        DOMNode.classList.remove("ismobile")
        DOMNode.classList.add("isnotmobile")
      }
    }

    setIndicatorProp({
      left: currentTab.left,
      width: currentTab.width,
      height: currentTab.height,
      top: currentTab.top,
    })
  }, [refs])

  const handleTabClick = (idx: number): void => {
    setCurrentIdx(idx)

    const currentTab = getTabPostition(idx)
    setIndicatorProp({
      left: currentTab.left,
      width: currentTab.width,
      height: currentTab.height,
      top: currentTab.top,
    })
    if (typeof onTabClick === "function") {
      onTabClick(idx)
    }
  }

  const renderElementByIndex = (idx): ReactElement | string => {
    return list[idx].content
  }
  const getAlign = (): string => {
    switch (align) {
      case "center": {
        return "center"
      }
      case "right": {
        return "flex-end"
      }
      case "fixed": {
        return "center"
      }
      default: {
        return "flex-start"
      }
    }
  }
  return (
    <TabsContainer
      ref={refs}
      position={position}
      {...props}
      className="tab-container"
    >
      <TabsElement
        tabColor={indicatorColor}
        fixed={align === "fixed"}
        align={getAlign()}
        position={position}
        className="tab-ele"
      >
        <div className="container">
          <div className="inner-container">
            <ul>
              {list.map((item: TabList, idx: number) => (
                <li className="tab" key={idx}>
                  <button
                    onClick={e => {
                      handleTabClick(idx)
                    }}
                    className={currentIdx === idx ? "active" : ""}
                  >
                    <span>{item.title}</span>
                  </button>
                </li>
              ))}
            </ul>
            <TabsIndicator
              width={indicatorProp.width}
              left={indicatorProp.left}
              height={indicatorProp.height}
              top={indicatorProp.top}
              tabColor={indicatorColor}
              position={position}
            ></TabsIndicator>
          </div>
        </div>
      </TabsElement>
      <TabsContent position={position}>
        {renderElementByIndex(currentIdx)}
      </TabsContent>
    </TabsContainer>
  )
}
export default Tabs
