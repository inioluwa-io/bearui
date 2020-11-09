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

export type ProgressCardComponent = {
  data: { title: string; percent: number; diff: number }[]
} & AnalyticsComponent
