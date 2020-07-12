import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { Button } from "rap-ui"
import AdminPanel from "react-admin-panel"

const App: React.FC<any> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{AdminPanel}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netflix
        </a>
        {
          <Button
            id="name"
            icon = "mdiMagnify"
            gradient
            background="primary"
            size={"sm"}
          >
            Search
          </Button>
        }
      </header>
    </div>
  )
}

export default App
