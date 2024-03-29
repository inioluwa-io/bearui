import React from "react"
import styled from "styled-components"
import { rgba } from "polished"
import { Scrollbars } from "react-custom-scrollbars"
import {
  Card,
  useTheme,
  useThemeMode,
  FlexColumn,
  FlexRow,
  getColorFromTheme,
} from "@bearui/ui"

type TimelineData = {
  title: string
  content: string
  color: string
}

export type TimelineWidgetComponent = {
  data: TimelineData[]
}

const CardContainer: any = styled(Card)`
  // overflow: hidden;
  .timeline-outer {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      height: calc(100% - 8px);
      width: 2px;
      background: #aaaaaa55;
      left: 4px;
      top: 8px;
    }

    .timeline-inner {
      flex-wrap: nowrap;

      span {
        font-size: 15px;
        // font-weight: 600;
      }
      p {
        font-size: 14px;
      }
    }
  }
  .container {
    outline: none;
    border: none;
    background: transparent;
    width: calc(100% + 15px);
    // overflow: hidden;
    height: 65vh;
    // overflow-y: auto;
    margin-left: -6px;

    .timeline-outer {
      margin: 0;
      width: calc(100% - 22px);
      margin-left: 10px;
    }
  }
`

const TimelineIcon: any = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 3px;
  position: relative;
  top: 6px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    width: 18px;
    border-radius: 5px;
    height: 18px;
    background: ${(props: any) => rgba(props.color, 1)};
  }

  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

const TimelineWidget: React.FC<TimelineWidgetComponent> = ({
  data,
  ...props
}) => {
  const [theme] = useTheme()
  const [themeMode] = useThemeMode()

  return (
    <CardContainer
      mdCol="4"
      smCol="12"
      size="xs"
      textColor={theme[themeMode].textColor}
      {...props}
    >
      <h5>Timeline</h5>
      <div className="container">
        <Scrollbars
          autoHideDuration={200}
          autoHide
          style={{ width: "100%", height: "100%" }}
        >
          <FlexColumn className="timeline-outer">
            {data.map((item, idx: number) => (
              <FlexRow
                align="left"
                key={idx}
                position="top"
                className="timeline-inner"
              >
                <TimelineIcon color={getColorFromTheme(item.color, theme)} />
                <FlexColumn gap="5px" style={{ width: "auto", flex: "1" }}>
                  <span>{item.title}</span>
                  <p>{item.content}</p>
                </FlexColumn>
              </FlexRow>
            ))}
          </FlexColumn>
        </Scrollbars>
      </div>
    </CardContainer>
  )
}
export default TimelineWidget
