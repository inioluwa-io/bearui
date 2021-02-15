import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { DataProvider, AuthContext } from "@bearui/core"
import { store } from "@bearui/ui"

const defaultDataProvider = {
  getOne: async (resource: string, endPoint?: string, params?: any) => {
    try {
      const res = await fetch(endPoint + resource, { method: "GET" })
      const json = await res.json()
      return { data: json }
    } catch (e) {
      console.warn(e)
    }
  },
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <DataProvider value={defaultDataProvider}>
        <AuthContext.Provider>
          <App />
        </AuthContext.Provider>
      </DataProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
