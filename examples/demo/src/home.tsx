import React from "react"
import "./App.css"
import { Avatar, Column, Row, Card, LinkButton } from "rap-ui"
import AdminPanel from "react-admin-panel"
import img from "./brooks-leibee-562087-unsplash.jpg"
import { Link } from "react-router-dom"

const Home: React.FC<any> = () => {
  return (
    <Card size="md">
      <Column>
        <p>{AdminPanel}</p>
        <Row>
          <Avatar alt="avatar" text="LD" size="md" src={img} />
        </Row>
        <LinkButton gradient background="info" to="/login">
          login
        </LinkButton>
      </Column>
    </Card>
  )
}

export default Home
