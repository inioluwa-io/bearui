import React, { useEffect, useRef } from "react"
import { ShimmerProps } from "../types"
import styled from "styled-components"
import { darken, lighten } from "polished"
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
        transform:translateX(-75%);
    }
    80% {
        transform:translateX(0%);
    }
`

const Shimmer: React.FC<ShimmerProps> = ({
  loading = false,
  children,
  gap,
  size,
  ...props
}) => {
  const [theme] = useTheme()
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

  const refs: any = useRef()

  return (
    <div ref={refs}>
      <Card align="left" style={{ overflow: "hidden" }} gap={gap} size={size}>
        <ShimmerContainer background={background} />
        {/* {loading ? <ShimmerContainer background={background} /> : children} */}
      </Card>
    </div>
  )
}
export default Shimmer
