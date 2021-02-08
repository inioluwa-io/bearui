import React, { lazy, Suspense } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import "./App.css"
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
  CheckboxPage,
  ProgressPage,
  InputPage,
  LoaderPage,
  ModalPage,
  TabPage,
  SwitchPage,
  ListPage,
  PaginationPage,
  SelectPage,
  TextAreaPage,
} from "./components"
import {
  UserViewPage,
  UserEditPage,
  UserProfilePage,
  SocialLoginPage,
  RegisterPage,
  LoginPage,
  NotFoundPage,
  ComingSoonPage,
} from "./pages"
import FormsLayoutPage from "./forms"
import { GridPage, FlexRowPage, FlexColumnPage } from "./layouts"
import ColorsPage from "./colors"
import Documentation from "./documentation"
import StatisticsCards from "./cards/statistics"
import { Loader } from "@rap/ui"

// Code splitting
const Default = lazy(() =>
  import("./dashboard").then(module => ({
    default: module.Default,
  }))
)

const Crypto = lazy(() =>
  import("./dashboard").then(module => ({
    default: module.Crypto,
  }))
)

const ButtonPage = lazy(() =>
  import("./components").then(module => ({
    default: module.ButtonPage,
  }))
)

const Invoice = lazy(() =>
  import("./apps").then(module => ({
    default: module.Invoice,
  }))
)

const Todos = lazy(() =>
  import("./apps").then(module => ({
    default: module.Todos,
  }))
)

const Chat = lazy(() =>
  import("./apps").then(module => ({
    default: module.Chat,
  }))
)

const ViewInvoice = lazy(() =>
  import("./apps").then(module => ({
    default: module.ViewInvoice,
  }))
)

const Ecommerce = lazy(() =>
  import("./apps").then(module => ({
    default: module.Ecommerce,
  }))
)

const App: React.FC = () => {
  return (
    <div className="App">
      <Suspense
        fallback={
          <div>
            <Loader
              width="100%"
              height="100%"
              type="spinner"
              iconSize={1.5}
              style={{ position: "fixed" }}
            />
          </div>
        }
      >
        <Switch>
          <Route path="/documentation/:path?">
            <LayoutComponent withBar={false}>
              <Switch>
                <Route
                  path="/documentation"
                  component={(props: any) => <Documentation {...props} />}
                />
              </Switch>
            </LayoutComponent>
          </Route>

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
                <Route
                  path="/pages/notfound"
                  component={(props: any) => <NotFoundPage {...props} />}
                />
                <Route
                  path="/pages/comingsoon"
                  component={(props: any) => <ComingSoonPage {...props} />}
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
                  render={(props: any) => <Redirect to="/dashboard/default" />}
                />
                <Route
                  exact
                  path="/dashboard/default"
                  component={(props: any) => <Default {...props} />}
                />
                <Route
                  exact
                  path="/dashboard/crypto"
                  component={(props: any) => <Crypto {...props} />}
                />
                <Route
                  exact
                  path="/apps/invoice"
                  component={(props: any) => <Invoice {...props} />}
                />
                <Route
                  exact
                  path="/apps/chat"
                  component={(props: any) => <Chat {...props} />}
                />
                <Route
                  path="/apps/ecommerce"
                  component={(props: any) => <Ecommerce {...props} />}
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
                  path="/colors"
                  component={(props: any) => <ColorsPage {...props} />}
                />
                <Route
                  path="/components/avatar"
                  component={(props: any) => <AvatarPage {...props} />}
                />
                <Route
                  path="/card/statistics"
                  component={(props: any) => <StatisticsCards {...props} />}
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
                  path="/components/tab"
                  component={(props: any) => <TabPage {...props} />}
                />
                <Route
                  path="/components/tooltip"
                  component={(props: any) => <TooltipPage {...props} />}
                />
                <Route
                  path="/layouts/grid"
                  component={(props: any) => <GridPage {...props} />}
                />
                <Route
                  path="/layouts/flexrow"
                  component={(props: any) => <FlexRowPage {...props} />}
                />
                <Route
                  path="/layouts/flexcolumn"
                  component={(props: any) => <FlexColumnPage {...props} />}
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
                  path="/form-layouts"
                  component={(props: any) => <FormsLayoutPage {...props} />}
                />
                <Route
                  path="/formelement/checkbox"
                  component={(props: any) => <CheckboxPage {...props} />}
                />
                <Route
                  path="/formelement/select"
                  component={(props: any) => <SelectPage {...props} />}
                />
                <Route
                  path="/formelement/switch"
                  component={(props: any) => <SwitchPage {...props} />}
                />
                <Route
                  path="/formelement/textarea"
                  component={(props: any) => <TextAreaPage {...props} />}
                />
                <Route
                  path="/formelement/input"
                  component={(props: any) => <InputPage {...props} />}
                />
                <Route
                  exact
                  path="*"
                  component={(props: any) => <NotFoundPage />}
                />
              </Switch>
            </LayoutComponent>
          </Route>

          <Route>
            <Switch>
              <Route
                exact
                path="*"
                component={(props: any) => <NotFoundPage />}
              />
            </Switch>
          </Route>
        </Switch>
      </Suspense>
    </div>
  )
}

export default App
