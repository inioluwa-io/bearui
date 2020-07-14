import React, { createContext, useState } from "react"
import { NotifyProps } from "../types"

const defaultProvider: any = {}

export const NotificationContext: any = createContext(defaultProvider)

const NotificationProvider: React.FC<any> = ({ children }) => {
  const [notificationQueue, setNotificationQueue]:any = useState<NotifyProps[]>([])

  return (
    <NotificationContext.Provider
      value={[notificationQueue, setNotificationQueue ]}
    >
      {children}
    </NotificationContext.Provider>
  )
}

// const provider:any = NotificationContext.Provider
// provider.value = { notificationQueue, setNotificationQueue }
// console.log(provider)
export default NotificationProvider
