import { Card, useTheme, useThemeMode } from "@rap/ui"
import React, { useRef, useEffect, useCallback, useState } from "react"
import { PieCardComponent } from "../types"
import styled from "styled-components"
import Chart from "react-apexcharts"

const CardContainer: any = styled(Card)`
  overflow: hidden;
  height: 75vh;

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
  .rap-chart {
    margin: 0px;

    .apexcharts-tooltip-series-group {
      padding: 6px 11px !important;
    }
    .apexcharts-tooltip {
      padding: 0;
      background: transparent !important;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);

      .apexcharts-tooltip-text-label,
      .apexcharts-tooltip-text-value {
        color: #f4f4f4;
      }
    }
    .apexcharts-legend {
      flex-direction: column !important;
      transform: translateY(10px);

      .apexcharts-legend-series {
        padding: 3px 0;
        width: calc(100% - 5px);
      }
    }

    .apexcharts-xaxistooltip {
      border-radius: 5px;

      * {
        color: #444;
      }
    }
  }
`

/**
 * A Pie apexcharts card.
 * @param {any} apexChartSeries apexcharts series prop
 * @param {string} title card display title
 * @param {array} labels apexChart labels
 * @param {string} apexChartOptions apexcharts series options
 */

const PieCard: React.FC<PieCardComponent> = ({
  apexChartSeries,
  title,
  apexChartOptions = {},
  labels = undefined,
  ...props
}) => {
  const theme = useTheme()
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
        pie: {
          startAngle: 30,
          expandOnClick: true,
          offsetX: 0,
          offsetY: 0,
          customScale: 1,
          dataLabels: {
            offset: 0,
            minAngleToShowLabel: 10,
          },
        },
      },
      tooltip: {
        x: {
          show: false,
        },
        style: {
          fontSize: "13px",
          colors: ["#fff"],
          fontFamily: "inherit",
        },
      },
      stroke: {
        colors: [theme[themeMode].cardbackground],
        width: 5,
      },
      dataLabels: {
        enabled: false,
      },
      colors: [
        theme.colors.warning,
        theme.colors.success,
        theme.colors.info,
        theme.colors.danger,
        theme.colors.primary,
        "#12c2e9",
        "#c471ed",
        "#f64f59",
        "#FFBF00",
        "#2274A5",
        "#c471ed",
        "#12c2e9",
      ],
      legend: {
        show: true,
        position: "bottom",
        horizontalAlign: "left",
        floating: false,
        fontSize: "14px",
        fontFamily: "inherit",
        fontWeight: 400,
        formatter: function (seriesName: string, opts: any) {
          return [seriesName, " - ", opts.w.globals.series[opts.seriesIndex]]
        },
        inverseOrder: false,
        width: undefined,
        height: undefined,
        tooltipHoverFormatter: undefined,
        offsetX: -45,
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
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          shadeIntensity: 0.025,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 0.8,
          stops: [0, 100],
          colorStops: [],
        },
      },
      chart: {
        type: "pie",
        stacked: true,
        toolbar: {
          show: false,
        },
        height: 450,
        zoom: {
          enabled: false,
        },
        animations: {
          enabled: true,
          easing: "easein",
          speed: 300,
          animateGradually: {
            enabled: true,
            delay: 100,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 250,
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

  if (labels !== undefined) {
    state.options.labels = labels
  }
  Object.assign(state.options, apexChartOptions)

  return (
    <CardContainer
      mdCol="4"
      smCol="12"
      textColor={theme[themeMode].textColor}
      background={theme[themeMode].background}
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
          height={450}
        />
      </div>
    </CardContainer>
  )
}
export default PieCard
