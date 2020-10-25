import React from "react"
import { Switch, Route } from "react-router-dom"
import "./App.css"
import Home from "./home"
import Table from "./table"
import BreadcrumbPage from "./breadcrumb"
import TooltipPage from "./tooltip"
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
  ListPage,
  PaginationPage,
} from "./components"
import {
  UserViewPage,
  UserEditPage,
  UserProfilePage,
  SocialLoginPage,
  RegisterPage,
  LoginPage,
} from "./pages"
import { Invoice, Todos, ViewInvoice } from "./apps"

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/pages/:path?">
          <LayoutComponent withBar={false}>
            <Switch>
              <Route
                path="/pages/login"
                component={(props: any) => <LoginPage {...props} />}
              />
              <Route
                path="/pages/sociallogin"
                component={(props: any) => <SocialLoginPage {...props} />}
              />
              <Route
                path="/pages/register"
                component={(props: any) => <RegisterPage {...props} />}
              />
            </Switch>
          </LayoutComponent>
        </Route>

        <Route>
          <LayoutComponent>
            <Switch>
              <Route
                exact
                path="/"
                component={(props: any) => <Home {...props} />}
              />
              <Route
                exact
                path="/apps/invoice"
                component={(props: any) => <Invoice {...props} />}
              />
              <Route
                exact
                path="/apps/invoice/:id"
                render={(props: any) => <ViewInvoice {...props} />}
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
                path="/components/list"
                component={(props: any) => <ListPage {...props} />}
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
              <Route
                path="/user/view"
                component={(props: any) => <UserViewPage {...props} />}
              />
              <Route
                path="/user/Profile"
                component={(props: any) => <UserProfilePage {...props} />}
              />
              <Route
                path="/user/edit"
                component={(props: any) => <UserEditPage {...props} />}
              />
              <Route
                exact
                path="*"
                component={(props: any) => <>Not found</>}
              />
            </Switch>
          </LayoutComponent>
        </Route>

        <Route>
          <Switch>
            <Route exact path="*" component={(props: any) => <>Not found</>} />
          </Switch>
        </Route>
      </Switch>
    </div>
  )
}

export default App
