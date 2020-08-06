import React, { useEffect } from "react"
import { ShimmerProps } from "../types"
import styled from "styled-components"
import { darken, lighten, rgba } from "polished"
import { useTheme, useThemeMode } from "../theme"
import Card from "../card/card"

const ShimmerContainer: any = styled.div`
  position: absolute;
  width: 500%;
  height: 100%;
  top: 0;
  left: 0;
  animation: blink .85s linear infinite;
  background: ${(props: any) => props.background};

  @keyframes blink {
    from {
        transform:translateX(-100%);
    }
    80% {
        transform:translateX(0%);
    }
`

const Shimmer: React.FC<ShimmerProps> = ({ loading = false, children }) => {
  const theme = useTheme()
  const [themeMode] = useThemeMode()
  const cardBackground: string = theme[themeMode].cardbackground
  let background = ""
  if (themeMode === "darkmode") {
    background = `linear-gradient(-60deg,${cardBackground} 10%, ${lighten(
      0.15,
      cardBackground
    )} 45%, ${cardBackground} 70%)`
  } else if (themeMode === "lightmode") {
    background = `linear-gradient(-60deg,${cardBackground} 10%, ${darken(
      0.1,
      cardBackground
    )} 40%, ${cardBackground} 75%)`
  }
  return (
    <Card style={loading ? { overflow: "hidden" } : {}}>
      {loading ? <ShimmerContainer background={background} /> : children}
    </Card>
  )
}
export default Shimmer
