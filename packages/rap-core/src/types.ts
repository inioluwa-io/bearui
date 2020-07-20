import { Dispatch, SetStateAction } from "react"

export type AuthProvider = {
  login?: (params: any) => Promise<any>
  logout?: (params: any) => Promise<any>
}

export type NotifyProps = {
  text: string
  title: string
  icon?: string
  iconColor?: string
}

export type NotificationQueue = (params: NotifyProps) => any

export type NotificationContextProvider = [NotifyProps[], Function]

export type CrudRequest = "create" | "delete" | "update" | "read"

export type Identifier = string | number
export interface Record {
  id: Identifier
  [key: string]: any
}

// DataProvider props

export type DataProviderProps = {
  getOne: (resource: string, params: getOneParams) => Promise<GetOneResult>
}
export interface getOneParams {
  id: Record
}
export interface GetOneResult {
  data: Record
}
