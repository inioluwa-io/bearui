import React, { useRef, useEffect } from "react"
import { TooltipComponent } from "../types"
import styled from "styled-components"
import { getColorFromTheme } from "../util"
import { useTheme } from "../theme"
import { rgba } from "polished"

const TooltipElement: any = styled.span`
  position: absolute;
  width: max-content;
  max-width: 11rem;
  z-index: 99;
  background: ${(props: any) => props.background};
  color: ${(props: any) => props.color};
  padding: 5px 6px;
  border-radius: 3px;
  opacity: 0;
  transition: 0.25s all ${(props: any) => props.delay};
  font-size: 13px;
  visibility: hidden;
  ${(props: any) => props.position}
  box-shadow: 0px 2px 5px ${rgba("#000", 0.25)};

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

const TooltipContainer: any = styled.div`
  position: relative;
  }
`

const TargetElement: any = styled.div`
  position: relative;
`

const Tooltip: React.FC<TooltipComponent> = ({
  text,
  background = "dark",
  textColor = "white",
  position = "top",
  delay = "0s",
  children,
}) => {
  const theme = useTheme()
  const refs = useRef<HTMLDivElement>()
  const indicatorColor = getColorFromTheme(textColor, theme)
  const indicatorBackground = getColorFromTheme(background, theme)

  const getPosition = () => {
    switch (position) {
      case "top": {
        return `
        top:-13px;
        left:50%;
        transform:translate(-50%, -90%);

        &.active{
            transform:translate(-50%, -100%);
        }

        &::after{
            bottom: -5px;
            left:50%;
            transform:translateX(-50%);
            border-top: 6px solid ${indicatorBackground};
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
        }
        `
      }
      case "bottom": {
        return `
        bottom:-13px;
        left:50%;
        transform:translate(-50%, 90%);

        &.active{
            transform:translate(-50%, 100%);
        }

        &::after{    
            top: -5px;
            left:50%;
            transform:translateX(-50%);        
            border-bottom: 6px solid ${indicatorBackground};
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
        }
        `
      }
      case "left": {
        return `
        top:50%;
        left:-13px;
        transform:translate(-90%,-50%);

        &.active{
            transform:translate(-100%,-50%);
        }

        &::after{    
            right: -5px;
            top:50%;
            transform:translateY(-50%);        
            border-top: 6px solid transparent;
            border-bottom: 6px solid transparent; 
            border-left:6px solid ${indicatorBackground};
        }
        `
      }
      case "right": {
        return `
        top:50%;
        right:-13px;
        transform:translate(90%,-50%);

        &.active{
            transform:translate(100%,-50%);
        }

        &::after{    
            left: -5px;
            top:50%;
            transform:translateY(-50%);        
            border-top: 6px solid transparent;
            border-bottom: 6px solid transparent; 
            border-right:6px solid ${indicatorBackground};
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
    const Element = DOMNode.querySelector(".ttp")
    Element.classList.add("active")
  }

  const handleBlur = () => {
    const DOMNode = refs.current
    const Element = DOMNode.querySelector(".ttp")
    Element.classList.remove("active")
  }

  return (
    <TooltipContainer ref={refs}>
      <TooltipElement
        position={getPosition()}
        background={indicatorBackground}
        color={indicatorColor}
        className="ttp"
        delay={delay}
      >
        {text}
      </TooltipElement>
      <TargetElement
        onMouseEnter={() => {
          handleHover()
        }}
        onMouseLeave={() => {
          handleBlur()
        }}
      >
        {children}
      </TargetElement>
    </TooltipContainer>
  )
}
export default Tooltip
