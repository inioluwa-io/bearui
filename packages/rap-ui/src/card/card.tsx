import React from "react"
import { darken } from "polished"
import styled from "styled-components"
import { useTheme, useThemeMode } from "../theme"
import { CardProps } from "../types"

type CardContainerProps = { background: string; padding: string }

const CardContainer: any = styled.div`
  padding: ${(props: CardContainerProps) => props.padding};
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${(props: CardContainerProps) => props.background};
  box-shadow: 0 0 25px -18px #292929;
  border-radius: 10px;
  margin: 20px 0;
  position: relative;

  > :not(:last-child) {
    margin-bottom: 25px;
  }
`

const Card: React.FC<CardProps> = ({ size = "md", style = {}, children }) => {
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
  
  return (
    <CardContainer
      style={style}
      padding={getPaddingSize(size)}
      background={background}
    >
      {children}
    </CardContainer>
  )
}
export default Card
