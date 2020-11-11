import React from "react"
import "./App.css"
import {
  Container,
  Card,
  Avatar,
  Chip,
  Datatable,
  Progress,
  Button,
  FlexColumn,
  LinkButton,
} from "@rap/ui"
import { TodosWidget } from "./apps"
import {
  SplitCard,
  ProgressCard,
  YearlyChartCard,
  RadialCard,
  ColumnCard,
} from "./cards"
import { Link } from "react-router-dom"
import img from "./dp1.jpg"
import img1 from "./brooks-leibee-562087-unsplash.jpg"

const Home: React.FC<any> = () => {
  return (
    <Container>
      <Card withBackground={false} xsCol="12">
        <h3>Hello Mr Stark!</h3>
      </Card>
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
      <RadialCard title="Order Fulfillment" apexChartSeries={[75]} />
      <YearlyChartCard
        title="Yearly Sales"
        apexChartSeries={[
          {
            name: "Sales",
            data: [35, 50, 30, 45, 25, 50, 35, 50, 30, 45, 25, 50],
          },
        ]}
      />
      <ColumnCard
        title="Some title"
        apexChartSeries={[
          {
            name: "Product A",
            data: [44, 50, 30, 45, 25, 50, 35, 50, 30, 45, 25, 50],
          },
          {
            name: "Product B",
            data: [50, 30, 45, 25, 50, 35, 50, 30, 45, 25, 50, 27],
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
      <Card xsCol="12">
        <h5>Dispatched Orders</h5>
        <Datatable
          showControls={false}
          onRowSelect={(data: any[]) => {
            // console.log(data)
          }}
          defaultSortIndex={0}
          uniqueIdentifier="_id"
          columns={[
            { name: "Order No.", selector: "order_no" },
            { name: "Status", selector: "status" },
            { name: "Location", selector: "location" },
            { name: "Distance", selector: "popularity" },
            { name: "Order Date", selector: "order_date" },
            { name: "EST. Delivery Date", selector: "delivery_date" },
          ]}
          document={[
            {
              _id: 1,
              order_no: "#12444",
              location: "Belivard, Krypton",
              order_date: "8/11/2019",
              img: img,
              status: (
                <Chip transparent color="warning">
                  Pending
                </Chip>
              ),
              popularity: (
                <FlexColumn gap="7px">
                  130km
                  <Progress percent={15} color="warning" />
                </FlexColumn>
              ),
              delivery_date: "18/11/2019",
            },
            {
              _id: 2,
              order_no: "#12445",
              location: "Belivard, Krypton",
              order_date: "8/11/2019",
              img: img1,
              status: (
                <Chip transparent color="success">
                  Shipped
                </Chip>
              ),
              popularity: (
                <FlexColumn gap="7px">
                  105km
                  <Progress percent={37} color="success" />
                </FlexColumn>
              ),
              delivery_date: "18/11/2019",
            },
            {
              _id: 3,
              order_no: "#12446",
              location: "Belivard, Krypton",
              order_date: "8/11/2019",
              img: img,
              status: (
                <Chip transparent color="danger">
                  Canceled
                </Chip>
              ),
              popularity: (
                <FlexColumn gap="7px">
                  98km
                  <Progress percent={58} color="danger" />
                </FlexColumn>
              ),
              delivery_date: "18/11/2019",
            },
            {
              _id: 4,
              order_no: "#12447",
              location: "Belivard, Krypton",
              order_date: "8/11/2019",
              img: img1,
              status: (
                <Chip transparent color="success">
                  Shipped
                </Chip>
              ),
              popularity: (
                <FlexColumn gap="7px">
                  87km
                  <Progress percent={95} color="success" />
                </FlexColumn>
              ),
              delivery_date: "18/11/2019",
            },
          ]}
        ></Datatable>
        <FlexColumn align="stretch">
          <LinkButton to="#" transparent="true">
            Show All
          </LinkButton>
        </FlexColumn>
      </Card>
    </Container>
  )
}

export default Home
