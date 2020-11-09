import React from "react"
import { ProgressCardComponent } from "../statistics/types"
import {
  Card,
  FlexColumn,
  FlexRow,
  getColorFromTheme,
  Progress,
  useTheme,
  useThemeMode,
} from "@rap/ui"
import styled from "styled-components"
import { rgba } from "polished"
import Chart from "react-apexcharts"
import Icon from "@mdi/react"
import { mdiArrowDown, mdiArrowUp } from "@mdi/js"

const CardContainer: any = styled(Card)`
  h5 {
    font-weight: 600;
  }

  span {
    font-size: 14px;
    color: ${(props: any) => rgba(props.textColor, 0.8)};
    font-weight: 400;

    &.diff {
      display: flex;
      align-items: center;
      font-size: 12px;
    }
  }

  h6 {
    font-weight: 500;
    font-size: 0.9em;
  }
`

const ProgressCard: React.FC<ProgressCardComponent> = ({
  title,
  data,
  ...props
}) => {
  const theme = useTheme()
  const [themeMode] = useThemeMode()
  return (
    <CardContainer lgCol="4" textColor={theme[themeMode].textColor}>
      <h5>{title}</h5>
      {data.map((item, idx: number) => (
        <FlexColumn key={idx} gap="10px">
          <FlexRow gap="10px">
            <span>{item.title}</span>
            <span
              className="diff"
              style={{
                color:
                  item.diff > 0 ? theme.colors.success : theme.colors.danger,
              }}
            >
              <Icon
                size={0.6}
                path={item.diff > 0 ? mdiArrowUp : mdiArrowDown}
                color={
                  item.diff > 0 ? theme.colors.success : theme.colors.danger
                }
              />
              ({item.diff > 0 && "+"}
              {item.diff})
            </span>
          </FlexRow>
          <h6>{"" + item.percent}%</h6>
          <Progress percent={item.percent} />
        </FlexColumn>
      ))}
    </CardContainer>
  )
}

export default ProgressCard
