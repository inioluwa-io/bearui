import React from "react"
import "./App.css"
import { Avatar, FlexColumn, FlexRow, Card, LinkButton } from "rap-ui"
import AdminPanel from "react-admin-panel"
import img from "./brooks-leibee-562087-unsplash.jpg"
import { Link } from "react-router-dom"

const Home: React.FC<any> = () => {
  return (
    <FlexRow center style={{ width: "100%", height: "100vh" }}>
      <Card size="md">
        <p>{AdminPanel}</p>
        <FlexRow>
          <Avatar alt="avatar" text="LD" size="md" src={img} />
        </FlexRow>
        <FlexColumn gap="10px">
          <LinkButton gradient background="info" to="/login">
            login
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
