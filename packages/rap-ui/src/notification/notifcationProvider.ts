import { useContext } from "react"
import { NotifyProps } from "../types"
import { NotificationContext } from "./notificationContext"

/**
 * Get the authProvider stored in the context
 */
const useNotificationProvider = (): any => useContext(NotificationContext)
export default useNotificationProvider
