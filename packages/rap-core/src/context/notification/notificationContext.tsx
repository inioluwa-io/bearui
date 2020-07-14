import React, { createContext, useState } from "react"
import { NotifyProps, NotificationContextProvider, NotificationQueue } from "../../types"

export const NotificationContext = createContext<
  NotificationContextProvider | []
>([])

const NotificationProvider: React.FC<{}> = ({ children }) => {
  const [notificationQueue, setNotificationQueue] = useState<NotifyProps[]>([])

  const addNotification:NotificationQueue  = (notification) => {
    setNotificationQueue([...notificationQueue, notification])
  }

  return (
    <NotificationContext.Provider value={[notificationQueue, setNotificationQueue]}>
      {children}
    </NotificationContext.Provider>
  )
}
export default NotificationProvider
