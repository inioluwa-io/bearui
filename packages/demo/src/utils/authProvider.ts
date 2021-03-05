import { AuthProvider } from "ra-core"
import appConfig from "../configs/appConfig"
import decode from "jwt-decode"

const { restEndPoint } = appConfig

type DecodeProps = {
  exp: number
  firstname: string
  lastname: string
}

const authProvider: AuthProvider = {
  login: ({ username, password }) => {
    return fetch(`${restEndPoint}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("userToken", data.token)
      })
      .catch(err => {
        throw new Error(err)
      })
  },
  logout: () => {
    localStorage.removeItem("userToken")
    return Promise.resolve()
  },
  checkAuth: () => {
    const token = localStorage.getItem("userToken")
    if (!token) return Promise.reject()

    try {
      const { exp } = decode<DecodeProps>(token)
      if (exp < new Date().getTime() / 1000) return Promise.reject()
    } catch (e) {
      return Promise.reject()
    }
    return Promise.resolve()
  },
  checkError: () => Promise.resolve(),
  getPermissions: () => Promise.reject("Unknown method"),
  getIdentity: () => {
    const token = localStorage.getItem("userToken")
    if (!token) return Promise.reject()

    try {
      const { firstname, lastname } = decode<DecodeProps>(token)
      return Promise.resolve({
        id: "user",
        fullName: firstname + " " + lastname,
      })
    } catch (e) {
      return Promise.reject()
    }
  },
}

export default authProvider
