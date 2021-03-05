import React, { useState, useEffect } from "react"
import { Route, Redirect, RouteProps } from "react-router-dom"
import { useCheckAuth } from "ra-core"

const AuthRoute: React.FC<{ component: React.FC<any> } & RouteProps> = ({
  component: Component,
  ...props
}) => {
  const checkAuth = useCheckAuth()
  const [authenticated, setAuthenticated] = useState(true) // optimistic auth
  useEffect(() => {
    checkAuth({}, false)
      .then(() => setAuthenticated(true))
      .catch(() => setAuthenticated(false))
  }, [])
  return (
    <Route
      {...props}
      render={props =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/pages/login" />
        )
      }
    ></Route>
  )
}
export default AuthRoute
