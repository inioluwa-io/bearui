import React from "react"
import styled from "styled-components"
import { ProgressComponent } from "../types"
import { useTheme, useThemeMode } from "../theme"
import { getColorFromTheme } from "../util"
import { rgba, darken, adjustHue, lighten } from "polished"

const ProgressContainer: any = styled.div`
  width: 100%;
  flex: 1;
`
const ProgressBar: any = styled.div`
  position: relative;
  width: ${(props: any) => props.initialWidth};
  height: ${(props: any) => props.barHeight};
  background: ${(props: any) => rgba(props.barColor, 0.225)};
  border-radius: ${(props: any) => props.barHeight};
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 5px;
    width: ${(props: any) => props.barWidth}%;
    height: ${(props: any) => props.barHeight};
    background: ${(props: any) => props.barColor};
    background: linear-gradient(
      90deg,
      ${(props: any) =>
        lighten(0.07, adjustHue(355, props.barColor)) +
        " 20%, " +
        props.barColor}
    );
    animation: ${(props: any) => "progress" + props.barWidth} 0.5s ease;
  }

  @keyframes progress${(props: any) => props.barWidth} {
    from {
      width: 0;
    }
    to {
      width: ${(props: any) => props.barWidth}%;
    }
  }
`

const Progress: React.FC<ProgressComponent> = ({
  color = "primary",
  percent,
  height = "5px",
  width = "100%",
  ...props
}) => {
  const theme = useTheme()
  const [themeMode] = useThemeMode()
  const barColor = getColorFromTheme(color, theme)
  const boxShadow = darken(0, theme[themeMode].background)

  return (
    <ProgressContainer {...props}>
      <ProgressBar
        boxShadow={boxShadow}
        barColor={barColor}
        barWidth={percent}
        initialWidth={width}
        barHeight={height}
      />
    </ProgressContainer>
  )
}
export default Progress
