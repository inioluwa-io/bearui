import React from "react"
import styled from "styled-components"
import { useTheme, useThemeMode } from "../theme"
import { CardProps } from "../types"

type CardContainerProps = {
  background: string
  padding: string
  gap: string
  align: {
    alignItems: string
  }
}

const CardContainer: any = styled.div`
  padding: ${(props: CardContainerProps) => props.padding};
  display: flex;
  align-items: ${(props: CardContainerProps) => props.align.alignItems};
  flex-direction: column;
  background: ${(props: CardContainerProps) => props.background};
  box-shadow: 0 0 25px -18px #292929;
  border-radius: 10px;
  margin: 20px 0;
  position: relative;

  > :not(:last-child) {
    margin-bottom: ${(props: CardContainerProps) => props.gap};
  }
`

const Card: React.FC<CardProps> = ({
  size = "md",
  gap = "20px",
  children,
  align = "center",
  ...props
}) => {
  const theme = useTheme()
  const [themeMode] = useThemeMode()
  const background: string = theme[themeMode].cardbackground

  const getPaddingSize = (size: string): string => {
    switch (size) {
      case "sm": {
        return "30px"
      }
      case "md": {
        return "40px 60px"
      }
      case "lg": {
        return "60px 80px"
      }
      default: {
        return "30px"
      }
    }
  }

  const formAlignment = (align): any => {
    switch (align) {
      case "left":
        return { alignItems: "flex-start" }
      case "center":
        return { alignItems: "center" }
      case "right":
        return { alignItems: "flex-end" }
      default:
        throw new Error(
          `${align} not supported. Use either left, center or right`
        )
    }
  }

  return (
    <CardContainer
      {...props}
      align={formAlignment(align)}
      padding={getPaddingSize(size)}
      background={background}
      gap={gap}
    >
      {children}
    </CardContainer>
  )
}
export default Card
