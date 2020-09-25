import React from "react"
import "./App.css"
import { Avatar, FlexColumn, FlexRow, Card, LinkButton } from "@rap/ui"
import AdminPanel from "@rap/main"
import img from "./brooks-leibee-562087-unsplash.jpg"

const Home: React.FC<any> = () => {
  return (
    <FlexRow center style={{ height: "100vh" }}>
      <Card size="md">
        <p>{AdminPanel}</p>
        <FlexRow>
          <Avatar alt="avatar" text="LD" size="md" src={img} />
        </FlexRow>
        <FlexColumn gap="10px">
          <LinkButton gradient background="info" to="/login">
            login
          </LinkButton>
          <LinkButton gradient background="success" to="/breadcrumb">
            Breadcrumb
          </LinkButton>
          <LinkButton gradient to="/datatable">
            Datatables
          </LinkButton>
        </FlexColumn>
      </Card>
    </FlexRow>
  )
}

export default Home
