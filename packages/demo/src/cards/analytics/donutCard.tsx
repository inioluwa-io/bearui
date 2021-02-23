import { Card, useTheme, useThemeMode } from "@bearui/ui"
import React, { useRef, useEffect, useCallback, useState } from "react"
import { DonutCardComponent } from "../types"
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
  .rap-chart {
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
 * A bar card.
 * @param {any} apexChartSeries apexcharts series prop
 * @param {string} title card display title
 * @param {string} value card display value
 * @param {string} color card accent color
 * @param {string} icon mdi icon name
 */

const DonutCard: React.FC<DonutCardComponent> = ({
  apexChartSeries,
  title,
  apexChartOptions = {},
  ...props
}) => {
  const [theme] = useTheme()
  const [themeMode] = useThemeMode()
  const refs = useRef<HTMLDivElement | any>()
  const [width, setWidth] = useState<number>()

  const state: any = {
    options: {
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "15%",
        },
      },
      tooltip: {
        x: {
          show: false,
        },
        style: {
          fontSize: "13px",
          fontFamily: "inherit",
        },
      },
      dataLabels: {
        enabled: false,
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
      grid: { show: true, borderColor: rgba(theme[themeMode].textColor, 0.15) },
      xaxis: {
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
        axisBorder: {
          show: false,
        },
        axisTicks: {
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
      },
      colors: [theme.colors.success, theme.colors.primary],
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "left",
        floating: false,
        fontSize: "14px",
        fontFamily: "inherit",
        fontWeight: 400,
        formatter: undefined,
        inverseOrder: false,
        width: undefined,
        height: undefined,
        tooltipHoverFormatter: undefined,
        offsetX: -35,
        offsetY: 0,
        labels: {
          colors: theme[themeMode].textColor,
          useSeriesColors: false,
        },
        markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: "#fff",
          fillColors: undefined,
          radius: 12,
          offsetX: 0,
          offsetY: 0,
        },
        itemMargin: {
          horizontal: 15,
          vertical: 0,
        },
      },
      fill: {
        opacity: 1,
      },
      chart: {
        type: "bar",
        stacked: true,
        toolbar: {
          show: false,
        },
        height: 280,
        zoom: {
          enabled: false,
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

  Object.assign(state.options, apexChartOptions)

  return (
    <CardContainer
      mdCol="8"
      xsCol="12"
      textColor={theme[themeMode].textColor}
      style={{ paddingBottom: "0px", overflow: "hidden" }}
      {...props}
    >
      <h5>{title}</h5>
      <div ref={refs} style={{ width: "100%" }}>
        <Chart
          className="rap-chart"
          options={state.options}
          series={apexChartSeries}
          type="pie"
          width={width}
          height={280}
        />
      </div>
    </CardContainer>
  )
}
export default DonutCard
