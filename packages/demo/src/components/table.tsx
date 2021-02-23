import React from "react"
import {
  Container,
  Card,
  Progress,
  Grid,
  Datatable,
  FlexRow,
  Avatar,
  Chip,
  Breadcrumb,
} from "@bearui/ui"
import img from "../assets/dp1.jpg"
import img1 from "../assets/brooks-leibee-562087-unsplash.jpg"
import { mdiHomeOutline } from "@mdi/js"
import Icon from "@mdi/react"
import { Link } from "react-router-dom"

const Table: React.FC<any> = ({ ...props }) => {
  return (
    <Container>
      <Grid xsCol="12">
        <Card withBackground={false}>
          <FlexRow gap="10px" position="center" align="left">
            <h3 style={{ borderRight: "1px solid #999", paddingRight: "12px" }}>
              Datatable
            </h3>
            <Breadcrumb
              separator="mdiChevronDoubleRight"
              item={[
                { name: <Icon path={mdiHomeOutline} size={0.85} />, to: "/" },
                { name: "Components", to: "/" },
                { name: "Datatable", to: "" },
              ]}
            />
          </FlexRow>
        </Card>
        <Card xsCol="12">
          <Datatable
            onCellSelect={data => {
              console.log(data)
            }}
            check
            defaultSortIndex={1}
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
              {
                selector: "user",
                onRender: (data: any) => (
                  <Link to={"/user/"+data.id}>{data.user}</Link>
                ),
              },
            ]}
            columns={[
              { name: " ", selector: "img" },
              { name: "Firstname", selector: "user" },
              { name: "Username", selector: "age" },
              { name: "Email", selector: "email" },
              { name: "Email", selector: "email" },
              { name: "status", selector: "price" },
              { name: "Phone", selector: "phone" },
            ]}
            document={[
              {
                id: 1,
                user: "Iniolwa Sogelola",
                age: "fema",
                email: "fema@gmail.com",
                img: img,
                price: <Chip color="warning">Pending</Chip>,
                popularity: <Progress percent={63} />,
                phone: "0983fkfkfk8",
              },
              {
                id: 2,
                user: "Wema Bank",
                age: "femaa",
                email: "fema@gmail.com",
                img: img1,
                price: <Chip color="success">Delivered</Chip>,
                popularity: <Progress percent={95} />,
                phone: "098ks938",
              },
              {
                id: 3,
                user: "Alingo Dangote",
                age: "femad",
                email: "fema@gmail.com",
                img: img,
                price: <Chip color="danger">Canceled</Chip>,
                popularity: <Progress color="danger" percent={29} />,
                phone: "098d38",
              },
              {
                id: 4,
                user: "Keve Oghenekeve",
                age: "femas",
                email: "fema@gmail.com",
                img: img1,
                price: <Chip color="success">Delivered</Chip>,
                popularity: <Progress color="info" percent={63} />,
                phone: "0983238",
              },
              {
                id: 5,
                user: "James Bond",
                age: "jamieex22",
                email: "jamieex22@gmail.com",
                img: img,
                price: <Chip color="warning">Pending</Chip>,
                popularity: <Progress color="success" percent={13} />,
                phone: "0983248",
              },
              {
                id: 6,
                user: "Lucas Scott",
                age: "femfva",
                email: "femfva@gmail.com",
                img: img1,
                price: <Chip color="danger">Canceled</Chip>,
                popularity: <Progress color="warning" percent={39} />,
                phone: "0984i38",
              },
              {
                id: 7,
                user: "Iniolwa Sogelola",
                age: "fema",
                email: "fema@gmail.com",
                img: img,
                price: <Chip color="warning">Pending</Chip>,
                popularity: <Progress percent={63} />,
                phone: "0983fkfkfk8",
              },
              {
                id: 8,
                user: "Wema Bank",
                age: "femaa",
                email: "fema@gmail.com",
                img: img1,
                price: <Chip color="success">Delivered</Chip>,
                popularity: <Progress percent={95} />,
                phone: "098ks938",
              },
              {
                id: 9,
                user: "Alingo Dangote",
                age: "femad",
                email: "fema@gmail.com",
                img: img,
                price: <Chip color="danger">Canceled</Chip>,
                popularity: <Progress color="danger" percent={29} />,
                phone: "098d38",
              },
              {
                id: 10,
                user: "Keve Oghenekeve",
                age: "femas",
                email: "fema@gmail.com",
                img: img1,
                price: <Chip color="success">Delivered</Chip>,
                popularity: <Progress color="info" percent={63} />,
                phone: "0983238",
              },
              {
                id: 11,
                user: "James Bond",
                age: "jamieex22",
                email: "jamieex22@gmail.com",
                img: img,
                price: <Chip color="warning">Pending</Chip>,
                popularity: <Progress color="success" percent={13} />,
                phone: "0983248",
              },
              {
                id: 12,
                user: "Lucas Scott",
                age: "femfva",
                email: "femfva@gmail.com",
                img: img1,
                price: <Chip color="danger">Canceled</Chip>,
                popularity: <Progress color="warning" percent={39} />,
                phone: "0984i38",
              },
              {
                id: 13,
                user: "Wema Bank",
                age: "femaa",
                email: "fema@gmail.com",
                img: img1,
                price: <Chip color="success">Delivered</Chip>,
                popularity: <Progress percent={95} />,
                phone: "098ks938",
              },
              {
                id: 14,
                user: "Alingo Dangote",
                age: "femad",
                email: "fema@gmail.com",
                img: img,
                price: <Chip color="danger">Canceled</Chip>,
                popularity: <Progress color="danger" percent={29} />,
                phone: "098d38",
              },
              {
                id: 15,
                user: "Keve Oghenekeve",
                age: "femas",
                email: "fema@gmail.com",
                img: img1,
                price: <Chip color="success">Delivered</Chip>,
                popularity: <Progress color="info" percent={63} />,
                phone: "0983238",
              },
              {
                id: 16,
                user: "James Bond",
                age: "jamieex22",
                email: "jamieex22@gmail.com",
                img: img,
                price: <Chip color="warning">Pending</Chip>,
                popularity: <Progress color="success" percent={13} />,
                phone: "0983248",
              },
              {
                id: 17,
                user: "Lucas Scott",
                age: "femfva",
                email: "femfva@gmail.com",
                img: img1,
                price: <Chip color="danger">Canceled</Chip>,
                popularity: <Progress color="warning" percent={39} />,
                phone: "0984i38",
              },
            ]}
          ></Datatable>
        </Card>
      </Grid>
    </Container>
  )
}
export default Table
