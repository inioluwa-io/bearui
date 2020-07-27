import React from "react"
import { Switch, Route } from "react-router-dom"
import "./App.css"
import Login from "./login"
import { useTheme, useThemeMode } from "rap-ui"
import Home from "./home"

const App: React.FC<any> = () => {
  const [themeMode] = useThemeMode()
  const theme = useTheme()
  return (
    <div className="App">
      <header
        className="App-header"
        style={{ background: theme[themeMode].background }}
      >
        <Switch>
          <Route
            exact
            path="/"
            component={(props: any) => <Home {...props} />}
          />
          <Route
            path="/login"
            component={(props: any) => <Login {...props} />}
          />
        </Switch>
      </header>
    </div>
  )
}

export default App
