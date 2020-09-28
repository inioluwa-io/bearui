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
  yPadding: string
  withBackground: boolean
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
  background: ${(props: CardContainerProps) =>
    !props.withBackground ? "none" : props.background};
  border-radius: 10px;
  ${(props: CardContainerProps) => {
    if (props.withBackground) {
      return `
      box-shadow: 0 0 25px -18px #292929;`
    }
  }}
  margin:20px;
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

  @media (min-width: 441px) {
    ${(props: CardContainerProps) => {
      if (!props.withBackground) {
        return `width: calc(100%);
        padding-top: 7px !important;
        padding-bottom: 7px  !important;
        `
      }
    }}};
  }

  @media (max-width: 441px) {
    width: calc(
      100% - (${(props: any) => props.xPadding + " + " + props.xPadding})
    );
    margin: 0.5px 0;
    box-shadow: none;
    border-radius: 0;

    ${(props: CardContainerProps) => {
      if (!props.withBackground) {
        return `width: calc(100%);
        padding-left: ${props.yPadding};
        padding-right: ${props.yPadding} ;
        `
      }
    }}};
  }

  > :not(:last-child) {
    margin-bottom: ${(props: CardContainerProps) => props.gap};
  }
`

const Card: React.FC<CardProps> = ({
  size = "xs",
  gap = "20px",
  children,
  align = "left",
  lgCol = "",
  smCol = "",
  mdCol = "",
  xsCol = "",
  withBackground = true,
  ...props
}) => {
  const theme = useTheme()
  const [themeMode] = useThemeMode()
  const background: string = theme[themeMode].cardbackground

  const getPaddingSize = (size: string): string => {
    if (withBackground) {
      switch (size) {
        case "xs": {
          return "20px"
        }
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
          return "20px"
        }
      }
    } else {
      switch (size) {
        case "xs": {
          return "20px 0px"
        }
        case "sm": {
          return "30px 0px"
        }
        case "md": {
          return "40px 0px"
        }
        case "lg": {
          return "60px 0px"
        }
        default: {
          return "20px 0px"
        }
      }
    }
  }

  let xPadding = (): string => {
    const paddingArr: string[] = getPaddingSize(size).split(" ")
    return paddingArr[paddingArr.length - 1]
  }

  let yPadding = (): string => {
    const paddingArr: string[] = getPaddingSize(size).split(" ")
    return paddingArr[0]
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
      withBackground={withBackground}
      yPadding={yPadding()}
    >
      {children}
    </CardContainer>
  )
}
export default Card
