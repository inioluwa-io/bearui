import React from "react"
import "./App.css"
import { Avatar, Container, FlexRow, Card, LinkButton } from "@rap/ui"
import AdminPanel from "@rap/main"
import img from "./brooks-leibee-562087-unsplash.jpg"
import { TodosWidget } from "./apps"

const Home: React.FC<any> = () => {
  return (
    <Container>
      <TodosWidget appRoute = "/apps/todos" />
    </Container>
  )
}

export default Home
