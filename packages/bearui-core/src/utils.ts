import { useState, useEffect } from "react"
import { env } from "process"

export const formatDataProviderSuccessMessage = (prop: any) => {
  switch (prop) {
    case "getOne":
      return "Successfully fetched data"
    default:
      "Successfull"
  }
}
export const formatDataProviderFailedMessage = (prop: any) => {
  switch (prop) {
    case "getOne":
      return "Could not fetched data"
    default:
      "Failed"
  }
}

export function useTimeout(delay = 0) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let timer = setTimeout(() => {
      setReady(true)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [delay])

  return ready
}

export const isProdEnv = (): boolean => process.env.NODE_ENV === "production"
