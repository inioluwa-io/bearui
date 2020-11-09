import { Container, Row } from "@rap/ui"
import React from "react"
import CompactCard from "./compactCard"
import SplitCard from "./splitCard"

const StatisticsCards: React.FC = () => {
  return (
    <Container>
      <CompactCard
        icon="mdiCalendarOutline"
        title="Events"
        color="warning"
        value="13"
      />
      <CompactCard
        icon="mdiHeartOutline"
        title="Likes"
        color="danger"
        value="11k"
      />
      <CompactCard
        icon="mdiChatOutline"
        title="Comments"
        color="info"
        value="23k"
      />
      <CompactCard
        icon="mdiCloudUpload"
        title="Uploads"
        color="success"
        value="118"
      />
      <CompactCard
        icon="mdiEyeOutline"
        title="Views"
        color="primary"
        value="18k"
      />
      <CompactCard
        icon="mdiCloudDownload"
        title="Downloads"
        color="info"
        value="118"
      />

      <Row>
        <SplitCard
          icon="mdiAccountGroupOutline"
          title="Total Users"
          color="primary"
          value="123k"
        />
        <SplitCard
          icon="mdiCurrencyUsd"
          title="Total Sales"
          color="success"
          value="123k"
        />
        <SplitCard
          icon="mdiCartOutline"
          title="Total Orders"
          color="warning"
          value="23k"
        />
        <SplitCard
          icon="mdiTruckOutline"
          title="Total Returns"
          color="danger"
          value="118"
        />
      </Row>

      <CompactCard
        icon="mdiAccountGroupOutline"
        title="Total Users"
        color="primary"
        value="123k"
        apexChartSeries={[
          {
            name: "Users",
            data: [55, 50, 30, 45, 25, 50],
          },
        ]}
      />
      <CompactCard
        icon="mdiCurrencyUsd"
        title="Total Sales"
        color="success"
        value="123k"
        apexChartSeries={[
          {
            name: "Sales",
            data: [35, 10, 70, 20, 65, 20],
          },
        ]}
      />
      <CompactCard
        icon="mdiCartOutline"
        title="Total Orders"
        color="warning"
        value="23k"
        apexChartSeries={[
          {
            name: "Orders",
            data: [25, 50, 15, 45, 5, 50],
          },
        ]}
      />
      <CompactCard
        icon="mdiTruckOutline"
        title="Total Returns"
        color="danger"
        value="118"
        apexChartSeries={[
          {
            name: "Returns",
            data: [35, 50, 30, 45, 25, 50],
          },
        ]}
      />

      <SplitCard
        icon="mdiAccountGroupOutline"
        title="Total Users"
        color="primary"
        value="123k"
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
        value="123k"
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
        value="23k"
        apexChartSeries={[
          {
            name: "series-1",
            data: [35, 50, 30, 45, 25, 50],
          },
        ]}
      />
    </Container>
  )
}
export default StatisticsCards
export { CompactCard, SplitCard }
