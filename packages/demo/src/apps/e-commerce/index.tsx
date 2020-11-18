import React from "react"
import { Route, RouteComponentProps, Switch, withRouter } from "react-router"
import ProductList from "./productList"

const Ecommerce: React.FC<RouteComponentProps> = ({ match, ...props }) => {
  const path: string = match?.path

  return (
    <Switch>
      <Route
        exact
        path={path + "/product-list"}
        component={(props: any) => <ProductList {...props} />}
      />
    </Switch>
  )
}
withRouter(Ecommerce)

export { Ecommerce }
