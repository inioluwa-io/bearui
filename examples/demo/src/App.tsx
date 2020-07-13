import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { Button, Avatar } from "rap-ui"
import AdminPanel from "react-admin-panel"
import img from "./brooks-leibee-562087-unsplash.jpg"

const App: React.FC<any> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{AdminPanel}</p>
        <Avatar
          alt="avatar"
          text="LD"
          size="sm"
          withBadge
          badgeColor="warning"
          badgeText="10"
        />
        <br />
        <Button id="name" background="primary" glow gradient size={"lg"}>
          Search
        </Button>
        <br />
        <Button id="name" background="info" glow gradient size={"md"}>
          Search
        </Button>
      </header>
    </div>
  )
}

export default App
