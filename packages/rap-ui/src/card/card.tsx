import React from "react"
import styled from "styled-components"
import { useTheme, useThemeMode } from "../theme"
import { CardProps } from "../types"

type CardContainerProps = {
  background: string
  padding: string
  gap: string
  lgCol: string
  mdCol: string
  smCol: string
  xsCol: string
  xPadding: string
  align: {
    alignItems: string
  }
}

const gridSystem: any = {
  1: "calc(8.33333333% - 20px)",
  2: "calc(16.66666667% - 20px)",
  3: "calc(25% - 20px)",
  4: "calc(33.33333333% - 20px)",
  5: "calc(41.66666667% - 20px)",
  6: "calc(50% - 20px)",
  7: "calc(58.33333333% - 20px)",
  8: "calc(66.66666667% - 20px)",
  9: "calc(75% - 20px)",
  10: "calc(83.33333333% - 20px)",
  11: "calc(91.66666667% - 20px)",
  12: "calc(100% - 20px)",
}

const CardContainer: any = styled.div`
  padding: ${(props: CardContainerProps) => props.padding};
  display: flex;
  align-items: ${(props: CardContainerProps) => props.align.alignItems};
  flex-direction: column;
  background: ${(props: CardContainerProps) => props.background};
  box-shadow: 0 0 25px -18px #292929;
  border-radius: 10px;
  margin: ${(props: CardContainerProps) => props.padding};
  position: relative;
  height: fit-content;
  ${(props: CardContainerProps) =>
    (props.lgCol &&
      "width:calc(" +
        gridSystem[props.lgCol] +
        " - (" +
        props.xPadding +
        " + " +
        props.xPadding +
        "))") ||
    (props.mdCol &&
      "width:calc(" +
        gridSystem[props.mdCol] +
        " - (" +
        props.xPadding +
        " + " +
        props.xPadding +
        "))") ||
    (props.smCol &&
      "width:calc(" +
        gridSystem[props.smCol] +
        " - (" +
        props.xPadding +
        " + " +
        props.xPadding +
        "))") ||
    (props.xsCol &&
      "width:calc(" +
        gridSystem[props.xsCol] +
        " - (" +
        props.xPadding +
        " + " +
        props.xPadding +
        "))")};

  @media (max-width: 1200px) {
    ${(props: CardContainerProps) =>
      props.mdCol &&
      "width: calc(" +
        gridSystem[props.mdCol] +
        " - (" +
        props.xPadding +
        " + " +
        props.xPadding +
        "));"}
  }

  @media (max-width: 992px) {
    ${(props: CardContainerProps) =>
      props.smCol &&
      "width: calc(" +
        gridSystem[props.smCol] +
        " - (" +
        props.xPadding +
        " + " +
        props.xPadding +
        "));"}
  }

  @media (max-width: 768px) {
    ${(props: CardContainerProps) =>
      props.xsCol &&
      "width: calc(" +
        gridSystem[props.xsCol] +
        " - (" +
        props.xPadding +
        " + " +
        props.xPadding +
        "));"}
  }

  > :not(:last-child) {
    margin-bottom: ${(props: CardContainerProps) => props.gap};
  }
`

const Card: React.FC<CardProps> = ({
  size = "md",
  gap = "20px",
  children,
  align = "center",
  lgCol = "",
  smCol = "",
  mdCol = "",
  xsCol = "",
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

  let xPadding = (): string => {
    const paddingArr: string[] = getPaddingSize(size).split(" ")
    return paddingArr[paddingArr.length - 1]
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
      className={`rap-card rap-${size}`}
      {...props}
      lgCol={lgCol}
      mdCol={mdCol}
      smCol={smCol}
      xsCol={xsCol}
      xPadding={xPadding()}
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
