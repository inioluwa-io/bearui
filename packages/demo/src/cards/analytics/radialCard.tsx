import { Card, FlexRow, useTheme, useThemeMode, FlexColumn } from "@rap/ui"
import React, { useRef, useEffect, useCallback, useState } from "react"
import { RadialCardComponent } from "../types"
import styled from "styled-components"
import { rgba } from "polished"
import Chart from "react-apexcharts"

const CardContainer: any = styled(Card)`
  h5 {
    font-weight: 600;
  }

  .apexcharts-tooltip {
    background: ${(props: any) => props.background} !important;
    color: ${(props: any) => props.textColor};
    border: none !important;
    padding: 3px;
    font-family: inherit;
  }
  .det {
    p {
      font-size: 14px;
      color: ${(props: any) => rgba(props.textColor, 0.8)};
      font-weight: 400;
    }

    h6 {
      font-weight: 500;
      font-size: 1.1em;
    }
  }
  .rap-chart {
    margin: 0px;

    .apexcharts-xaxistooltip {
      border-radius: 5px;

      * {
        color: #444;
      }
    }
  }
`

/**
 * A radial apexcharts card.
 * @param {any} apexChartSeries apexcharts series prop
 * @param {string} title card display title
 */

const RadialCard: React.FC<RadialCardComponent> = ({
  apexChartSeries,
  title,
  ...props
}) => {
  const theme = useTheme()
  const [themeMode] = useThemeMode()
  const refs = useRef<HTMLDivElement | any>()
  const [width, setWidth] = useState<number>()

  const state: any = {
    options: {
      chart: {
        type: "radialBar",
        toolbar: {
          show: false,
        },
        height: 230,
        animations: {
          enabled: true,
          easing: "easein",
          speed: 1200,
          animateGradually: {
            enabled: true,
            delay: 500,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 850,
          },
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "85%",
            background: "transparent",
            image: undefined,
          },
          track: {
            background: "#38ef7d19",
            strokeWidth: "100%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: false,
            },
          },

          dataLabels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              formatter: function (val: any) {
                return parseInt(val) + "%"
              },
              color: rgba(theme[themeMode].textColor, 0.9),
              fontSize: "40px",
              fontFamily: "inherit",
              fontWeight: 500,
              show: true,
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#11998e"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
          colorStops: [],
        },
      },
      colors: ["#38ef7d"],
      stroke: {
        lineCap: "round",
      },
    },
  }

  const resizeChart = useCallback(() => {
    const DOMNode = refs.current
    if (DOMNode) {
      const width = DOMNode.getBoundingClientRect().width
      setWidth(width)
    }
  }, [refs])

  useEffect(() => {
    resizeChart()
    window.addEventListener("resize", resizeChart)

    return () => {
      window.removeEventListener("resize", resizeChart)
    }
  }, [resizeChart])

  return (
    <CardContainer
      lgCol="3"
      mdCol="4"
      xsCol="12"
      textColor={theme[themeMode].textColor}
      background={theme[themeMode].background}
      style={{ overflow: "hidden" }}
      {...props}
    >
      <h5>{title}</h5>
      <div
        ref={refs}
        style={{
          width: "100%",
          borderBottom: "1px solid " + rgba(theme[themeMode].textColor, 0.15),
        }}
      >
        <Chart
          className="rap-chart"
          options={state.options}
          series={apexChartSeries}
          type="radialBar"
          width={width}
          height={230}
        />
      </div>
      <FlexRow align="space" className="det">
        <FlexColumn gap="5px">
          <p>Completed</p>
          <h6>12644</h6>
        </FlexColumn>
        <FlexColumn gap="5px">
          <p>Pending</p>
          <h6>7214</h6>
        </FlexColumn>
      </FlexRow>
    </CardContainer>
  )
}
export default RadialCard
