import React from "react"
import { Switch, Route } from "react-router-dom"
import "./App.css"
import Login from "./login"
import Home from "./home"
import Table from "./table"
import BreadcrumbPage from "./breadcrumb"
import TooltipPage from "./tooltip"
import Login2 from "./login2"
import DropdownPage from "./dropdown"
import CollapsePage from "./collapse"
import ChipPage from "./chips"
import DataListPage from "./datalist"
import LayoutComponent from "./layout"
import {
  AvatarPage,
  ButtonPage,
  CheckboxPage,
  ProgressPage,
  InputPage,
  LoaderPage,
  ModalPage,
  TabPage,
  SwitchPage,
  PaginationPage,
} from "./components"
import { Todos } from "./apps"

const App: React.FC<any> = ({ ...props }) => {
  return (
    <div className="App">
      <Switch>
        <LayoutComponent>
          <Route
            exact
            path="/"
            component={(props: any) => <Home {...props} />}
          />
          <Route
            path="/login"
            component={(props: any) => <Login {...props} />}
          />
          <Route
            path="/login2"
            component={(props: any) => <Login2 {...props} />}
          />
          <Route
            path="/apps/todos"
            component={(props: any) => <Todos {...props} />}
          />
          <Route
            path="/components/avatar"
            component={(props: any) => <AvatarPage {...props} />}
          />
          <Route
            path="/components/button"
            component={(props: any) => <ButtonPage {...props} />}
          />
          <Route
            path="/components/breadcrumb"
            component={(props: any) => <BreadcrumbPage {...props} />}
          />
          <Route
            path="/components/checkbox"
            component={(props: any) => <CheckboxPage {...props} />}
          />
          <Route
            path="/components/chip"
            component={(props: any) => <ChipPage {...props} />}
          />
          <Route
            path="/components/collapse"
            component={(props: any) => <CollapsePage {...props} />}
          />
          <Route
            path="/components/datalist"
            component={(props: any) => <DataListPage {...props} />}
          />
          <Route
            path="/components/datatable"
            component={(props: any) => <Table {...props} />}
          />
          <Route
            path="/components/dropdown"
            component={(props: any) => <DropdownPage {...props} />}
          />
          <Route
            path="/components/input"
            component={(props: any) => <InputPage {...props} />}
          />
          <Route
            path="/components/loader"
            component={(props: any) => <LoaderPage {...props} />}
          />
          <Route
            path="/components/modal"
            component={(props: any) => <ModalPage {...props} />}
          />
          <Route
            path="/components/pagination"
            component={(props: any) => <PaginationPage {...props} />}
          />
          <Route
            path="/components/progress"
            component={(props: any) => <ProgressPage {...props} />}
          />
          <Route
            path="/components/switch"
            component={(props: any) => <SwitchPage {...props} />}
          />
          <Route
            path="/components/tab"
            component={(props: any) => <TabPage {...props} />}
          />
          <Route
            path="/components/tooltip"
            component={(props: any) => <TooltipPage {...props} />}
          />
        </LayoutComponent>
      </Switch>
    </div>
  )
}

export default App
