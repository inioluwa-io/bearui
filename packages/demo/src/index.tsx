import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { DataProvider, AuthContext } from "@rap/core"
import { store } from "@rap/ui"

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
        <AuthContext.Provider
          value={{
            login: async (data: any) => {
              try {
                if (data.username === "login") return Promise.resolve()
                return Promise.reject()
              } catch (e) {
                console.warn(e)
              }
            },
          }}
        >
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
serviceWorker.unregister()
