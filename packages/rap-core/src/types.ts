import { Dispatch, SetStateAction } from "react"

export type AuthProvider = {
  login?: (params: any) => Promise<any>
  logout?: (params: any) => Promise<any>
}
export type NotifyProps = {
  text: string
  title: string
  icon?: string
}

export type NotificationQueue = (params:NotifyProps) => any

export type NotificationContextProvider = [NotifyProps[], Function]
