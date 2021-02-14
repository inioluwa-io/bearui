import { useCallback } from "react"
import { useLocation, useHistory } from "react-router-dom"
import useAuthProvider from "./useAuthProvider"

export type Login = (params: any, pathName?: string) => Promise<any>

export const defaultAuthParams = {
  loginUrl: "/login",
  afterLoginUrl: "/",
}

const useLogin = (): Login => {
  const authProvider = useAuthProvider()
  const location = useLocation()
  const locationState = location.state as any
  const history = useHistory()
  const nextPathName = locationState && locationState.nextPathname

  const loginWithProvider = useCallback(
    (params: any, pathname: string = defaultAuthParams.afterLoginUrl) =>
      authProvider.login(params).then((res: any) => {
        history.push(nextPathName || pathname)
        return res
      }),
    [history, nextPathName, location]
  )

  const loginWithoutProvider = useCallback(
    (_, __) => {
      history.push(defaultAuthParams.afterLoginUrl)
      return Promise.resolve()
    },
    [history]
  )

  return authProvider ? loginWithProvider : loginWithoutProvider
}
export default useLogin
