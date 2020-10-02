import React from "react"
import "./App.css"
import { Avatar, FlexColumn, FlexRow, Card, LinkButton } from "@rap/ui"
import AdminPanel from "@rap/main"
import img from "./brooks-leibee-562087-unsplash.jpg"

const Home: React.FC<any> = () => {
  return (
    <FlexRow center style={{ minHeight: "calc(100vh - 20px)" }}>
      <Card size="md" align="center" lgCol="3" mdCol="4" xsCol="8">
        <p>{AdminPanel}</p>
        <FlexRow align="center">
          <Avatar alt="avatar" text="LD" size="md" src={img} />
        </FlexRow>
        <FlexColumn gap="10px">
          <LinkButton background="dark" to="/login2">
            login2
          </LinkButton>
          <LinkButton gradient background="danger" to="/login">
            login
          </LinkButton>
          <LinkButton gradient background="info" to="/interface">
            Interface
          </LinkButton>
          <LinkButton gradient background="success" to="/breadcrumb">
            Breadcrumb
          </LinkButton>
          <LinkButton gradient to="/datatable">
            Datatables
          </LinkButton>
          <LinkButton background="warning" gradient to="/tooltip">
            Tooltip
          </LinkButton>
          <LinkButton background="dark" gradient to="/dropdown">
            Dropdown
          </LinkButton>
          <LinkButton background="primary" gradient to="/collapse">
            Collapse
          </LinkButton>
          <LinkButton background="info" gradient to="/chip">
            Chip
          </LinkButton>
          <LinkButton background="danger" gradient to="/progress">
            Progress
          </LinkButton>
          <LinkButton background="warning" gradient to="/datalist">
            Data List
          </LinkButton>
        </FlexColumn>
      </Card>
    </FlexRow>
  )
}

export default Home
