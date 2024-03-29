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
  id?: Identifier
  [key: string]: any
}

// Redux store state props
export type StoreState = {
  notificationReducer: { notification: NotifyProps[] }
  resourceReducer: { resource: ResourceState }
}
// end

// DataProvider props
export type DataProviderProps = {
  getOne?: (resource: string, params?: Record) => Promise<any>
  getMany?: (resource: string, params?: Record) => Promise<any>
  getList?: (resource: string, params?: Record) => Promise<any>
  create?: (resource: string, params?: Record) => Promise<any>
  update?: (resource: string, params?: Record) => Promise<any>
  updateMany?: (resource: string, params?: Record) => Promise<any>
  delete?: (resource: string, params?: Record) => Promise<any>
  deleteMany?: (resource: string, params?: Record) => Promise<any>
}
export interface getOneParams {
  id: Record
}
export interface GetOneResult {
  data: Record
}
export interface GetResult {
  data: Record
}

export type ResourceState = {
  [key: string]: GetResult
}
//end

// QueryStore props
export type QueryStoreProps = () => {
  getAll: (
    resource: string
  ) => {
    [key: string]: any
  }
  getOne: (
    resource: string,
    params: Record
  ) => {
    [key: string]: any
  }
}
// end
