import React from "react"
import "./App.css"
import { Container } from "@rap/ui"
import { TodosWidget } from "./apps"
import { SplitCard, ProgressCard, YearlyChartCard } from "./cards"

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
            name: "Users",
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
            name: "Sales",
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
            name: "Orders",
            data: [35, 50, 30, 45, 25, 50],
          },
        ]}
      />
      <YearlyChartCard
        icon="mdiCurrencyUsd"
        title="Yearly Sales"
        color="success"
        value="104k"
        apexChartSeries={[
          {
            name: "Sales",
            data: [35, 50, 30, 45, 25, 50, 35, 50, 30, 45, 25, 50],
          },
        ]}
      />
      <TodosWidget appRoute="/apps/todos" />
      <ProgressCard
        title="Platform Analysis"
        data={[
          { title: "iPhone", percent: 65, diff: +20 },
          { title: "Android", percent: 28, diff: -20 },
          { title: "Windows", percent: 13, diff: -10 },
          { title: "Mac", percent: 81, diff: +50 },
        ]}
      />
    </Container>
  )
}

export default Home
