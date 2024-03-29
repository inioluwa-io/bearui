import {
  Card,
  FlexColumn,
  getColorFromTheme,
  useTheme,
  useThemeMode,
} from "@bearui/ui"
import React, {
  useRef,
  useEffect,
  useCallback,
  useState,
} from "react"
import { StatisticsComponent } from "../types"
import Icon from "@mdi/react"
import styled from "styled-components"
import { rgba, darken } from "polished"
import Chart from "react-apexcharts"

const CardContainer: any = styled(Card)`
  h5 {
    font-size: 14px;
    color: ${(props: any) => rgba(props.textColor, 0.75)};
    font-weight: 400;
  }
  p {
    font-size: 1em;
    font-weight: 700;
  }

  .icon {
    padding: 9px;
    border-radius: 11px;
    background: linear-gradient(
      135deg,
      ${(props: any) => props.color + ", " + darken(0.075, props.color)}
    );
  }
  .apexcharts-tooltip {
    background: ${(props: any) => props.tooltipBackground} !important;
    color: ${(props: any) => props.textColor};
    border: none !important;
    padding: 3px;
    font-family: inherit;
  }
  .rap-chart > div:nth-child(2) {
    margin: -30px -34px;
    width: calc(100% + 68px);

    .apexcharts-inner {
      transform: translate(10px, 32px);
    }
  }
`

/**
 * Compact statistics card.
 * @param {any} apexChartSeries apexcharts series prop
 * @param {string} title card display title
 * @param {string} value card display value
 * @param {string} color card accent color
 * @param {string} icon mdi icon name
 */

const CompactCard: React.FC<StatisticsComponent> = ({
  apexChartSeries,
  title,
  value,
  color,
  icon,
}) => {
  const [theme] = useTheme()
  const [themeMode] = useThemeMode()
  color = getColorFromTheme(color, theme)
  const refs = useRef<HTMLDivElement | any>()
  const [width, setWidth] = useState<number>()

  const state: any = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        height: 350,
        type: "area",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: { show: false },
      tooltip: {
        x: {
          show: false,
        },
        style: {
          fontSize: "13px",
          fontFamily: "inherit",
        },
      },
      yaxis: {
        show: false,
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        show: false,
        tooltip: {
          enabled: false,
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      colors: [color],
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: true,
          opacityFrom: 0.5,
          opacityTo: 0.3,
          stops: [0, 70, 100],
          colorStops: [],
        },
      },
    },
  }
  const resizeChart = useCallback(() => {
    const DOMNode = refs.current
    if (DOMNode) {
      const width = DOMNode.getBoundingClientRect().width + 66
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

  if (!apexChartSeries) {
    return (
      <CardContainer
        lgCol="2"
        gap="15px"
        color={color}
        textColor={theme[themeMode].textColor}
        mdCol="4"
        smCol="4"
        xsCol="6"
        align="center"
      >
        <Icon className="icon" path={icon} color="#ffffff" size={0.9} />
        <FlexColumn gap="3px" align="center">
          <h5>{title}</h5>
          <p>{value}</p>
        </FlexColumn>
      </CardContainer>
    )
  } else {
    return (
      <CardContainer
        lgCol="3"
        color={color}
        textColor={theme[themeMode].textColor}
        tooltipBackground={theme[themeMode].background}
        smCol="6"
        xsCol="12"
        style={{ paddingBottom: "0px", overflow: "hidden" }}
      >
        <div ref={refs} style={{ width: "100%" }} className="rap-chart">
          <FlexColumn align="center" gap="20px" style={{ width: "100%" }}>
            <Icon className="icon" path={icon} color="#ffffff" size={0.9} />
            <FlexColumn gap="5px" align="center" style={{ width: "100%" }}>
              <h5>{title}</h5>
              <p>{value}</p>
            </FlexColumn>
          </FlexColumn>
          <Chart
            options={state.options}
            series={apexChartSeries}
            type="area"
            width={width}
            height={100}
          />
        </div>
      </CardContainer>
    )
  }
}
export default CompactCard
