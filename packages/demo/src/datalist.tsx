import React from "react"
import {
  Container,
  FlexColumn,
  Card,
  Progress,
  Datatable,
  DataList,
  Chip,
  Avatar,
  Breadcrumb,
  FlexRow,
  Grid,
} from "@rap/ui"
import img from "./dp1.jpg"
import img1 from "./brooks-leibee-562087-unsplash.jpg"
import { mdiHomeOutline } from "@mdi/js"
import Icon from "@mdi/react"

const DataListPage: React.FC<any> = ({ ...props }) => {
  return (
    <FlexColumn style={{ minHeight: "100vh" }}>
      <Container>
        <Grid mdCol="3" smCol="1" xsCol="12"></Grid>
        <Grid mdCol="9" smCol="11" xsCol="12">
          <Card withBackground={false}>
            <FlexRow gap="10px" position="center" align="left">
              <h3
                style={{ borderRight: "1px solid #999", paddingRight: "12px" }}
              >
                Data List
              </h3>
              <Breadcrumb
                seperator="mdiChevronDoubleRight"
                item={[
                  { name: <Icon path={mdiHomeOutline} size={0.85} />, to: "/" },
                  { name: "Data List", to: "" },
                ]}
              />
            </FlexRow>
          </Card>
          <Card xsCol="12" withBackground={false}>
            <DataList
              onRowClick={(data: any) => {
                // console.log(data)
              }}
              onRowSelect={(data: any) => {
                // console.log(data)
              }}
              defaultSortIndex={1}
              uniqueIdentifier = "id"
              actionList={[
                {
                  color: "primary",
                  text: "Edit",
                  onClick: value => {
                    console.log(value)
                  },
                },
                {
                  color: "danger",
                  text: "Delete",
                  onClick: value => {
                    console.log(value)
                  },
                },
              ]}
              renderRule={[
                {
                  selector: "img",
                  onRender: (data: any) => (
                    <Avatar
                      badgeColor="warning"
                      withBadge
                      badgeText={data.id}
                      size="xs"
                      src={data.img}
                    />
                  ),
                },
              ]}
              columns={[
                { name: " ", selector: "img" },
                { name: "Firstname", selector: "user" },
                { name: "Popularity", selector: "popularity" },
                { name: "Status", selector: "price" },
                { name: "Age", selector: "age" },
              ]}
              document={[
                {
                  id: 1,
                  user: "Iniolwa Sogelola",
                  age: "fema",
                  img: img,
                  price: <Chip color="warning">Pending</Chip>,
                  popularity: <Progress percent={63} />,
                  phone: "0983fkfkfk8",
                },
                {
                  id: 2,
                  user: "Wema Bank",
                  age: "femaa",
                  img: img1,
                  price: <Chip color="success">Delivered</Chip>,
                  popularity: <Progress percent={95} />,
                  phone: "098ks938",
                },
                {
                  id: 3,
                  user: "Alingo Dangote",
                  age: "femad",
                  img: img,
                  price: <Chip color="danger">Canceled</Chip>,
                  popularity: <Progress color="danger" percent={29} />,
                  phone: "098d38",
                },
                {
                  id: 4,
                  user: "Keve Oghenekeve",
                  age: "femas",
                  img: img1,
                  price: <Chip color="success">Delivered</Chip>,
                  popularity: <Progress color="info" percent={63} />,
                  phone: "0983238",
                },
                {
                  id: 5,
                  user: "James Bond",
                  age: "12",
                  img: img,
                  price: <Chip color="warning">Pending</Chip>,
                  popularity: <Progress color="success" percent={13} />,
                  phone: "0983248",
                },
                {
                  id: 6,
                  user: "Lucas Scott",
                  age: "femfva",
                  img: img1,
                  price: <Chip color="danger">Canceled</Chip>,
                  popularity: <Progress color="warning" percent={39} />,
                  phone: "0984i38",
                },
              ]}
            ></DataList>
          </Card>
        </Grid>
      </Container>
    </FlexColumn>
  )
}
export default DataListPage
