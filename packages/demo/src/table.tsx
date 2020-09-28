import React from "react"
import { Container, FlexColumn, Card, Datatable, Avatar } from "@rap/ui"
import img from "./dp1.jpg"
import img1 from "./brooks-leibee-562087-unsplash.jpg"

const Table: React.FC<any> = ({ ...props }) => {
  return (
    <FlexColumn style={{ minHeight: "100vh" }}>
      <Container>
        <Card size="md" xsCol="12">
          <Datatable
            onRowClick={data => {
              console.log(data)
            }}
            onRowSelect={(data: any) => {
              console.log(data)
            }}
            check
            striped
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
            ]}
            columns={[
              { name: " ", selector: "img" },
              { name: "Firstname", selector: "user" },
              { name: "Age", selector: "age" },
              { name: "Phone", selector: "phone" },
            ]}
            document={[
              {
                id: 1,
                user: "iniolwa sogelola",
                age: "fema",
                img: img,
                phone: "0983fkfkfk8",
              },
              {
                id: 2,
                user: "wema",
                age: "femaa",
                img: img1,
                phone: "098ks938",
              },
              {
                id: 3,
                user: "alingo",
                age: "femad",
                img: img,
                phone: "098d38",
              },
              {
                id: 4,
                user: "keve",
                age: "femas",
                img: img1,
                phone: "0983238",
              },
              {
                id: 5,
                user: "james",
                age: "12",
                img: img,
                phone: "0983248",
              },
              {
                id: 6,
                user: "lucas",
                age: "femfva",
                img: img1,
                phone: "0984i38",
              },
            ]}
          ></Datatable>
        </Card>
      </Container>
    </FlexColumn>
  )
}
export default Table
