import React from "react"
import {
  Card,
  FlexColumn,
  FlexRow,
  getColorFromTheme,
  Progress,
} from "@bearui/ui"
import Icon from "@mdi/react"
import { themeConfig } from "../../../configs/"
import styled from "styled-components"

type MediaWidgetProps = {
  title: string
  icon: string
  color: string
  totalSpace: number
  usedSpace: number
  unit: string
}

const CardContainer: any = styled(Card)`
  .title {
    font-weight: 700;
    font-size: 15px;
  }
  .label {
    font-size: 13px;
  }
  .icon {
    padding: 9px;
    border-radius: 11px;
    background: #fff;
  }
`

const MediaWidget: React.FC<MediaWidgetProps> = ({
  title,
  icon,
  unit,
  totalSpace,
  usedSpace,
  color,
}) => {
  const themeColor: string = getColorFromTheme(color, themeConfig.colorPalette)
  const percent: number = Math.floor((usedSpace * 100) / totalSpace)

  return (
    <CardContainer
      mdCol="4"
      lgCol="3"
      xsCol="6"
      background={color}
      themeColor={themeColor}
      textColor ={"white"}
      gap="10px"
    >
      <FlexRow align="left" position="top" gap="10px">
        <Icon color={themeColor} size={0.9} path={icon} className="icon" />
        <p className="title">{title}</p>
      </FlexRow>
      <FlexColumn gap="6px">
        <FlexRow align="space">
          <p className="label"> {`${usedSpace}/${totalSpace} ${unit}`}</p>
          <p className="label"> {`${percent}%`}</p>
        </FlexRow>
        <Progress color="white" percent={percent} />
      </FlexColumn>
    </CardContainer>
  )
}
export default MediaWidget
