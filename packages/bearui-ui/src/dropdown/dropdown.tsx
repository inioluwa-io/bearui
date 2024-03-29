import React, { useRef, useEffect, useState, useCallback } from "react"
import { DropdownComponent } from "../types"
import styled from "styled-components"
import { useTheme, useThemeMode } from "../theme"
import { lighten } from "polished"
import { FlexRow } from "../layout"
import Icon from "@mdi/react"
import { mdiChevronDown } from "@mdi/js"

const DropdownElement: any = styled.span`
  position: absolute;
  width: max-content;
  max-width: 20rem;
  min-width: 3rem;
  z-index: 9999;
  background: ${(props: any) => props.background};
  color: ${(props: any) => props.color};
  padding: 5px 6px;
  border-radius: 10px;
  opacity: 0;
  transition: 0.25s all ${(props: any) => props.delay};
  font-size: 14px;
  visibility: hidden;
  ${(props: any) => props.position}
  box-shadow: 0px 2px 10px rgba(0,0,0,.25)};

  &.active {
    opacity: 1;
    visibility: visible;
  }

  &::after {
    width: 10px;
    content: "";
    height: 10px;
    position: absolute;
    z-index: 999;
    width: 0;
    height: 0;
    border-radius: 2px;
  }
`

const DropdownContainer: any = styled.div`
  position: relative;
  border: 1px solid transparent;
  border-radius: 9px;
  transition: all 0.35s ease;
`

const DropdownList: any = styled.ul`
  position: relative;

  li {
    display: block;
    padding: 10px 7px;
    width: calc(100% - 14px);
    text-align: left;

    a {
      text-decoration: none;
    }
  }
`

const TargetElement: any = styled.div`
  position: relative;
  cursor: default;
  display: flex;
  cursor: pointer;
`

const Dropdown: React.FC<DropdownComponent> = ({
  listener = "hover",
  showIcon = true,
  children,
  list = [],
  ...props
}) => {
  const [theme] = useTheme()
  const [themeMode] = useThemeMode()

  const refs = useRef<HTMLDivElement>()
  let indicatorColor = "#444444"
  const [position, setPosition] = useState<"top" | "bottom">("top")
  const [active, setActive] = useState<boolean>(false)

  let indicatorBackground = lighten(0.2, theme[themeMode].background)
  if (themeMode === "darkmode") {
    indicatorBackground = lighten(0.04, theme[themeMode].background)
    indicatorColor = "#f4f4f4"
  }

  // This adjust the position of dropdown to up or down depending on element view on the page. If the location of element on the Y axis is more than 50% the dropdown switches position
  const setElementPosition = useCallback((): void => {
    const DOMNode = refs.current
    if (DOMNode) {
      const elementTop: number = DOMNode.querySelector(
        ".dp-trgt"
      ).getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementTop > windowHeight / 2) {
        setPosition("top")
      } else {
        setPosition("bottom")
      }
    }
  }, [refs])

  const blur = useCallback(
    e => {
      const DOMNode = refs.current
      if (DOMNode) {
        if (listener === "click") {
          const target = DOMNode.querySelector(".dp")
          const dpTarget = DOMNode.querySelector(".dp-trgt")

          if (!dpTarget.contains(e.target) && !target.contains(e.target)) {
            handleBlur()
            setActive(false)
          }
        }
      }
    },
    [refs]
  )

  
  useEffect(() => {
    setElementPosition()
    window.addEventListener("scroll", () => {
      setElementPosition()
    })

    window.addEventListener("click", e => {
      blur(e)
    })

    return (): void => {
      window.removeEventListener("scroll", () => {
        setElementPosition()
      })
      window.removeEventListener("click", e => {
        blur(e)
      })
    }
  }, [refs, setElementPosition, blur])

  const getPosition = () => {
    switch (position) {
      case "top": {
        return `
        top:-13px;
        right:0;
        transform:translate(0, -90%);

        &.active{
            transform:translate(0, -100%);
        }

        &::after{
            bottom: -6px;
            right:12px;
            border-top: 6px solid ${indicatorBackground};
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
        }
        `
      }
      case "bottom": {
        return `
        bottom:-13px;
        right:0;
        transform:translate(0%, 90%);

        &.active{
            transform:translate(0%, 100%);
        }

        &::after{    
            top: -6px;
            right:12px;    
            border-bottom: 6px solid ${indicatorBackground};
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
        }
        `
      }
      default: {
        return `
        top:-10px;
        transform:translateY(-100%);
        `
      }
    }
  }

  const handleHover = () => {
    const DOMNode = refs.current
    if (DOMNode) {
      const Element = DOMNode.querySelector(".dp")
      Element.classList.add("active")
    }
  }

  const handleBlur = useCallback(() => {
    const DOMNode = refs.current
    if (DOMNode) {
      const Element = DOMNode.querySelector(".dp")
      Element.classList.remove("active")
    }
  }, [refs])

  const renderChildren: React.FC<any> = children => {
    return (
      <label
        style={{
          background: "transparent",
          fontSize: "14px",
          fontWeight: "bold",
          border: "none",
          outline: "none",
          fontFamily: "inherit",
          cursor: "pointer",
        }}
      >
        <FlexRow gap="7px" position="center">
          <div>{children}</div>
          {showIcon && (
            <Icon path={mdiChevronDown} size={0.7} color={indicatorColor} />
          )}
        </FlexRow>
      </label>
    )
  }

  const renderList: React.FC<any> = list => {
    if (list === undefined || list.length < 0) {
      return (
        <DropdownList>
          <li></li>
        </DropdownList>
      )
    }
    return (
      <DropdownList>
        {list.map((item, idx: number) => (
          <li
            key={idx+"drop"}
            onClick={() => {
              // handleBlur()
              // setActive(false)
            }}
          >
            {item}
          </li>
        ))}
      </DropdownList>
    )
  }

  return (
    <DropdownContainer ref={refs} {...props}>
      <DropdownElement
        boxShadow={theme[themeMode].background}
        position={getPosition()}
        background={indicatorBackground}
        color={indicatorColor}
        className="dp"
        onMouseEnter={() => {
          if (listener === "hover") {
            handleHover()
          }
        }}
        onMouseLeave={() => {
          if (listener === "hover") {
            handleBlur()
          }
        }}
      >
        {renderList(list)}
      </DropdownElement>
      <TargetElement
        className="dp-trgt"
        onMouseEnter={e => {
          if (listener === "hover") {
            handleHover()
          }
        }}
        onClick={e => {
          if (listener === "click") {
            handleHover()
            if (active) {
              handleBlur()
            }
          }
          setActive(prevState => !prevState)
        }}
        onMouseLeave={e => {
          if (listener === "hover") {
            handleBlur()
          }
        }}
      >
        {renderChildren(children)}
      </TargetElement>
    </DropdownContainer>
  )
}
export default Dropdown
