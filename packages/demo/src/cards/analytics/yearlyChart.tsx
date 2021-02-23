import { Card, useTheme, useThemeMode } from "@bearui/ui"
import React, { useRef, useEffect, useCallback, useState } from "react"
import { YearlyChartCardComponent } from "../types"
import styled from "styled-components"
import { rgba } from "polished"
import Chart from "react-apexcharts"

const CardContainer: any = styled(Card)`
  h5 {
    // font-weight: 600;
  }

  .apexcharts-tooltip {
    background: ${(props: any) => props.background} !important;
    color: ${(props: any) => props.textColor};
    border: none !important;
    padding: 3px;
    font-family: inherit;
  }
  .rap-chart > div {
    margin: 0px;
    // width: calc(100% + 0px);

    .apexcharts-xaxistooltip {
      border-radius: 5px;

      * {
        color: #444;
      }
    }

    .apexcharts-inner {
      // transform: translate(10px, 32px);
    }
  }
`

/**
 * A single smooth line apexcharts card.
 * @param {any} apexChartSeries apexcharts series prop
 * @param {string} title card display title
 */

const YearlyChartCard: React.FC<YearlyChartCardComponent> = ({
  apexChartSeries,
  title,
  ...props
}) => {
  const [theme] = useTheme()
  const [themeMode] = useThemeMode()
  const refs = useRef<HTMLDivElement | any>()
  const [width, setWidth] = useState<number>()

  const state: any = {
    options: {
      chart: {
        type: "line",
        toolbar: {
          show: false,
        },
        height: 280,
        zoom: {
          enabled: false,
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 20,
          left: 0,
          blur: 6,
          color: "#000",
          opacity: 0.15,
        },
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
      dataLabels: {
        enabled: false,
      },
      grid: { show: true, borderColor: rgba(theme[themeMode].textColor, 0.15) },
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
      markers: {
        size: 4,
        colors: ["#FFA41B"],
        strokeColors: "#f4f4f4",
        strokeWidth: 2,
        hover: {
          size: 7,
        },
      },
      xaxis: {
        show: true,
        tooltip: {
          enabled: true,
          style: {
            fontSize: "13px",
            fontFamily: "inherit",
          },
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: true,
          style: {
            colors: theme[themeMode].textColor,
            fontSize: "13px",
            fontFamily: "inherit",
            fontWeight: 400,
            cssClass: "apexcharts-xaxis-label",
          },
        },
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          colorStops: [
            {
              offset: 0,
              color: "#FEAC5E",
              opacity: 1,
            },
            {
              offset: 30,
              color: "#C779D0",
              opacity: 1,
            },
            {
              offset: 100,
              color: "#4BC0C8",
              opacity: 1,
            },
          ],
        },
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
      lgCol="9"
      mdCol="8"
      xsCol="12"
      textColor={theme[themeMode].textColor}
      style={{ paddingBottom: "0px", overflow: "hidden" }}
      {...props}
    >
      <h5>{title}</h5>
      <div ref={refs} style={{ width: "100%" }} className="rap-chart">
        <Chart
          options={state.options}
          series={apexChartSeries}
          type="line"
          width={width}
          height={280}
        />
      </div>
    </CardContainer>
  )
}
export default YearlyChartCard
