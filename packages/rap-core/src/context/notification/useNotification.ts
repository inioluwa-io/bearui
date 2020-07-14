import { useContext } from "react"
import {  NotificationContextProvider } from "../../types"
import { NotificationContext } from "./notificationContext"

/**
 * Get the useNotification stored in the context
 */
const useNotification = (): NotificationContextProvider | [] =>
  useContext(NotificationContext)
export default useNotification
