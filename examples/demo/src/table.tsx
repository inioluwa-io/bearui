import React from "react"
import { FlexRow, Card, Datatable } from "rap-ui"

const Table: React.FC<any> = ({ ...props }) => {
  return (
    <FlexRow style={{ minHeight: "100vh" }}>
      <FlexRow center>
        <Card size="md">
          <Datatable
            striped
            check
            heading={[" ", "Name", "age", "addr"]}
            columns={[
              { name: "Firstname", selector: "user" },
              { name: "Age", selector: "age" },
              { name: "Phone", selector: "phone" },
              { name: "Addre", selector: "addr" },
              { name: "Addre", selector: "addr" },
              { name: "Addre", selector: "addr" },
            ]}
            document={[
              {
                id: 1,
                user: "iniolwa sogelola",
                age: "fema",
                addr: "djd",
                phone: "0983fkfkfk8",
              },
              {
                id: 2,
                user: "wema",
                age: "femaa",
                addr: "djd",
                phone: "098ks938",
              },
              {
                id: 3,
                user: "alingo",
                age: "femad",
                addr: "djd",
                phone: "098d38",
              },
              {
                id: 4,
                user: "keve",
                age: "femas",
                addr: "djd",
                phone: "0983238",
              },
              {
                id: 5,
                user: "james",
                age: "femav",
                addr: "djd",
                phone: "0983248",
              },
              {
                id: 6,
                user: "lucas",
                age: "femfva",
                addr: "djd",
                phone: "0984i38",
              },
            ]}
          ></Datatable>
        </Card>
      </FlexRow>
    </FlexRow>
  )
}
export default Table
