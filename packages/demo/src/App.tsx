import React, { lazy, Suspense } from "react"
import "./App.css"
import {
  Loader,
  themeReducer,
  notificationReducer,
  sideBarReducer,
} from "@bearui/ui"
import { CoreAdminContext } from "ra-core"
import dataProvider from "./utils/dataProvider"
import authProvider from "./utils/authProvider"
import i18nProvider from "./utils/i18nProvider"
import { createBrowserHistory } from "history"
const history = createBrowserHistory()

const Routes = lazy(() =>
  import("./routes").then(module => ({
    default: module.default,
  }))
)

const App: React.FC = () => {
  return (
    <CoreAdminContext
      dataProvider={dataProvider}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
      customReducers={{ themeReducer, sideBarReducer, notificationReducer }}
      history={history}
    >
      <div className="App">
        <Suspense
          fallback={
            <div>
              <Loader
                width="100%"
                height="100%"
                type="spinner"
                withBackground={false}
                iconSize={1.5}
                style={{ position: "fixed" }}
              />
            </div>
          }
        >
          <Routes />
        </Suspense>
      </div>
    </CoreAdminContext>
  )
}

export default App
