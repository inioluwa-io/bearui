import React from "react"
import styled from "styled-components"
import { CardProps } from "../types"

type CardContainerProps = {
  lgCol: string
  mdCol: string
  smCol: string
  xsCol: string
}

const gridSystem: any = {
  1: "calc(8.33333333%)",
  2: "calc(16.66666667%)",
  3: "calc(25%)",
  4: "calc(33.33333333%)",
  5: "calc(41.66666667%)",
  6: "calc(50%)",
  7: "calc(58.33333333%)",
  8: "calc(66.66666667%)",
  9: "calc(75%)",
  10: "calc(83.33333333% )",
  11: "calc(91.66666667%) )",
  12: "calc(100%)",
}

const CardContainer: any = styled.div`
  position: relative;
  height: max-content;
  display: inline-flex;
  flex-wrap: wrap;

  width: ${(props: CardContainerProps) =>
    (props.lgCol && "calc(" + gridSystem[props.lgCol] + ")") ||
    (props.mdCol && "calc(" + gridSystem[props.mdCol] + ")") ||
    (props.smCol && "calc(" + gridSystem[props.smCol] + ")") ||
    (props.xsCol && "calc(" + gridSystem[props.xsCol] + ")") ||
    "fit-content"};

  @media (max-width: 1200px) {
    ${(props: CardContainerProps) =>
      props.mdCol && "width: calc(" + gridSystem[props.mdCol] + ");"}
  }

  @media (max-width: 992px) {
    ${(props: CardContainerProps) =>
      props.smCol && "width: calc(" + gridSystem[props.smCol] + ");"}
  }

  @media (max-width: 768px) {
    ${(props: CardContainerProps) =>
      props.xsCol && "width: calc(" + gridSystem[props.xsCol] + ");"}
  }

  > .rap-card {
    margin: 10px;
  }

  @media (max-width: 441px) {
    > .rap-card {
      margin: 0.5px 0;
    }
  }
`

const Grid: React.FC<CardProps> = ({
  children,
  lgCol = "",
  smCol = "",
  mdCol = "",
  xsCol = "",
  ...props
}) => {
  return (
    <CardContainer
      {...props}
      lgCol={lgCol}
      mdCol={mdCol}
      smCol={smCol}
      xsCol={xsCol}
    >
      {children}
    </CardContainer>
  )
}
export default Grid
