import { AuthProvider } from "ra-core"

const authProvider: AuthProvider = {
  login: ({ username }) => {
    localStorage.setItem("username", username)
    return Promise.resolve()
  },
  logout: () => {
    localStorage.removeItem("username")
    return Promise.resolve()
  },
  checkAuth: () => {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject()
  },
  checkError: () => Promise.resolve(),
  getPermissions: () => Promise.reject("Unknown method"),
  getIdentity: () =>
    Promise.resolve({
      id: "user",
      fullName: "Jane Doe",
    }),
}

export default authProvider
