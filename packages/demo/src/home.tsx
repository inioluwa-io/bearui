import React from "react"
import "./App.css"
import { Container, Row } from "@rap/ui"
import { TodosWidget } from "./apps"
import { SplitCard, ProgressCard } from "./cards"

const Home: React.FC<any> = () => {
  return (
    <Container>
      <SplitCard
        icon="mdiAccountGroupOutline"
        title="Total Users"
        color="primary"
        value="61k"
        apexChartSeries={[
          {
            name: "series-1",
            data: [35, 50, 30, 45, 25, 50],
          },
        ]}
      />
      <SplitCard
        icon="mdiCurrencyUsd"
        title="Total Sales"
        color="success"
        value="104k"
        apexChartSeries={[
          {
            name: "series-1",
            data: [35, 50, 30, 45, 25, 50],
          },
        ]}
      />
      <SplitCard
        icon="mdiCartOutline"
        title="Total Orders"
        color="warning"
        value="73k"
        apexChartSeries={[
          {
            name: "series-1",
            data: [35, 50, 30, 45, 25, 50],
          },
        ]}
      />
      <ProgressCard
        title="Platform Analysis"
        data={[
          { title: "iPhone", percent: 65, diff: +20 },
          { title: "Android", percent: 28, diff: -20 },
          { title: "Windows", percent: 13, diff: -10 },
          { title: "Mac", percent: 81, diff: +50 },
        ]}
      />
      <TodosWidget appRoute="/apps/todos" />
    </Container>
  )
}

export default Home
