import React from "react"
import "./App.css"
import { Container } from "@rap/ui"
import { TodosWidget } from "./apps"

const Home: React.FC<any> = () => {
  return (
    <Container>
      <TodosWidget appRoute = "/apps/todos" />
    </Container>
  )
}

export default Home
