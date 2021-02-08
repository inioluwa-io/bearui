import React from "react"
import {
  Container,
  Card,
  Chip,
  Datatable,
  FlexColumn,
  LinkButton,
  Avatar,
} from "@rap/ui"
import {
  SplitCard,
  ProgressCard,
  ColumnCard,
} from "../cards"
import img from "../dp1.jpg"
import img1 from "../brooks-leibee-562087-unsplash.jpg"

const Crypto: React.FC<any> = () => {
  return (
    <Container>
      <Card withBackground={false} xsCol="12">
        <h3>Hello Mr Stark!</h3>
      </Card>
      <SplitCard
        icon="mdiBitcoin"
        title="Bitcoin"
        color="warning"
        value="$27,133"
        apexChartSeries={[
          {
            name: "Price",
            data: [35120, 25410, 31032, 24425, 20234, 27450],
          },
        ]}
      />
      <SplitCard
        icon="mdiLitecoin"
        title="Litecoin"
        color="info"
        value="$180"
        apexChartSeries={[
          {
            name: "Price",
            data: [35, 50, 30, 45, 25, 50],
          },
        ]}
      />
      <SplitCard
        icon="mdiEthereum"
        title="Ethereum"
        color="dark"
        value="$1923"
        apexChartSeries={[
          {
            name: "Price",
            data: [35, 50, 30, 45, 25, 50],
          },
        ]}
      />
      <ColumnCard
        title="Market Value"
        apexChartSeries={[
          {
            name: "Buy",
            data: [44, 50, 30, 45, 25, 50, 35, 50, 30, 45, 25, 50],
          },
          {
            name: "Sell",
            data: [50, 30, 45, 25, 50, 35, 50, 30, 45, 25, 50, 27],
          },
        ]}
      />
      <ProgressCard
        title="Market Sales"
        data={[
          { title: "BTC", percent: 55, diff: +20 },
          { title: "ETH", percent: 28, diff: -20 },
          { title: "LTC", percent: 17, diff: -10 },
        ]}
      />

      <Card xsCol="12">
        <h5>Active Orders</h5>
        <Datatable
          showControls={false}
          check={false}
          defaultSortIndex={0}
          uniqueIdentifier="_id"
          renderRule={[
            {
              selector: "img",
              onRender: (data: any) => <Avatar src={data.img} size="xs" />,
            },
          ]}
          columns={[
            { name: "Date", selector: "date" },
            { name: "Customers", selector: "img" },
            { name: "Type", selector: "type" },
            { name: "Price", selector: "price" },
            { name: "Status", selector: "status" },
          ]}
          document={[
            {
              _id: 1,
              price: "$21421.2",
              date: "8/11/2019",
              img,
              type: (
                <Chip transparent color="danger">
                  Sell
                </Chip>
              ),
              status: (
                <Chip transparent color="danger">
                  canceled
                </Chip>
              ),
            },
            {
              _id: 2,
              price: "$21421.2",
              date: "8/11/2019",
              img: img1,
              type: (
                <Chip transparent color="success">
                  Buy
                </Chip>
              ),
              status: (
                <Chip transparent color="success">
                  paid
                </Chip>
              ),
            },
            {
              _id: 3,
              price: "$21421.2",
              date: "8/11/2019",
              img,
              type: (
                <Chip transparent color="danger">
                  Sell
                </Chip>
              ),
              status: (
                <Chip transparent color="danger">
                  canceled
                </Chip>
              ),
            },
            {
              _id: 4,
              price: "$21421.2",
              date: "8/11/2019",
              img: img1,
              type: (
                <Chip transparent color="danger">
                  Sell
                </Chip>
              ),
              status: (
                <Chip transparent color="success">
                  paid
                </Chip>
              ),
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

export default Crypto
