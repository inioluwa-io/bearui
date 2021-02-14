import { useCallback } from "react"
import { useLocation, useHistory } from "react-router-dom"
import useAuthProvider from "./useAuthProvider"

/**
 * Log the user out and redirect them to another route(default - login route)
 * @param {Object} params Parameters to pass to the authProvider
 * @param {string} redirectTo Pathname to redirect to after successful log out
 * 
 * @returns {Promise} AuthProvider response
 */
export type Logout = (params: any, redirectTo?: string) => Promise<any>

export const defaultAuthParams = {
  loginUrl: "/login",
  afterLoginUrl: "/",
}

const useLogout = (): Logout => {
  const authProvider = useAuthProvider()
  const location = useLocation()
  const locationState = location.state as any
  const history = useHistory()
  const nextPathName = locationState && locationState.nextPathname

  const logoutWithProvider = useCallback(
    (params: any, pathname: string = defaultAuthParams.afterLoginUrl) =>
      authProvider.login(params).then((res: any) => {
        history.push(nextPathName || pathname)
        return res
      }),
    [history, nextPathName, location]
  )

  const logoutWithoutProvider = useCallback(
    (_, __) => {
      history.push(defaultAuthParams.afterLoginUrl)
      return Promise.resolve()
    },
    [history]
  )

  return authProvider ? logoutWithProvider : logoutWithoutProvider
}
export default useLogout
