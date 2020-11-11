export type StatisticsComponent = {
  icon: string
  color: string
  title: string
  value: string
  apexChartSeries?: any
}

export type AnalyticsComponent = {
  title: string
}

export type ProgressCardData = {
  title: string
  percent: number
  diff: number
}[]

export type ProgressCardComponent = {
  data: ProgressCardData
} & AnalyticsComponent

export type YearlyChartCardComponent = {
  title: string
  apexChartSeries?: any
  apexChartOptions?: any
}
export type RadialCardComponent = YearlyChartCardComponent
export type ColumnCardComponent = YearlyChartCardComponent
