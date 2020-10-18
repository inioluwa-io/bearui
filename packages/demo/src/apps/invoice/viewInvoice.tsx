import React from "react"
import {
  Container,
  Card,
  Progress,
  DataList,
  Chip,
  Avatar,
  Breadcrumb,
  FlexRow,
  Grid,
  Button,
} from "@rap/ui"
import img from "./dp1.jpg"
import img1 from "./brooks-leibee-562087-unsplash.jpg"
import { mdiHomeOutline } from "@mdi/js"
import Icon from "@mdi/react"

const Invoice: React.FC<any> = () => {
  return (
    <Container>
      <Grid xsCol="12">
        <Card withBackground={false}>
          <FlexRow gap="10px" position="center" align="left">
            <h3>Invoice</h3>
          </FlexRow>
        </Card>
        <Card xsCol="12" withBackground={false}>
          <DataList
            onRowSelect={(data: any[]) => {
              // console.log(data)
            }}
            menu={
              <>
                <Button icon="mdiPlus">Add New</Button>
              </>
            }
            defaultSortIndex={1}
            uniqueIdentifier="_id"
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
                selector: "number",
                onRender: (data: any) => {
                  return "f"
                },
              },
              {
                selector: "status",
                onRender: (data: any) => {
                  if (data.status === 0) {
                    return <Chip color="warning">Pending</Chip>
                  } else if (data.status === 1) {
                    return <Chip color="info">Shipped</Chip>
                  } else if (data.status === 2) {
                    return <Chip color="success">Delivered</Chip>
                  } else if (data.status === 3) {
                    return <Chip color="warning">Canceled</Chip>
                  } else {
                    return <Chip color="warning">Pending</Chip>
                  }
                },
              },
            ]}
            columns={[
              { name: "NO.", selector: "number" },
              { name: "Date", selector: "date" },
              { name: "Bill From", selector: "bill_from" },
              { name: "Bill To", selector: "bill_to" },
              { name: "Total Cost", selector: "total_cost" },
              { name: "Status", selector: "status" },
            ]}
            document={[
              {
                _id: 1,
                number: 1244,
                date: "18 Oct 2020",
                bill_from: "Avengers Inc.",
                bill_to: "Planet Earth",
                total_cost: "$83000",
                status: 2,
              },
              {
                _id: 2,
                number: 1245,
                date: "19 Oct 2020",
                bill_from: "Avengers Inc.",
                bill_to: "Azgard",
                total_cost: "$3000",
                status: 1,
              },
              {
                _id: 3,
                number: 1246,
                date: "20 Oct 2020",
                bill_from: "Avengers Inc.",
                bill_to: "America",
                total_cost: "$23000",
                status: 1,
              },
            ]}
          ></DataList>
        </Card>
      </Grid>
    </Container>
  )
}
export default Invoice
