import React, { createContext, useState } from "react"
import { DataProviderProps, Record } from "../types"

export const defaultDataProvider = {
  getOne: async (
    resource: string,
    endPoint: string,
    params: Record,
  ) => {
    try {
      const res = await fetch(endPoint + resource, { method: "GET" })
      const json = await res.json()
      return { data: json }
    } catch (e) {
      console.warn(e)
    }
  },
}

export const DataProviderContext = createContext<DataProviderProps>(null)

const DataProvider: React.FC<{ value: DataProviderProps }> = ({
  value,
  children,
}) => {
  const [dataProvider] = useState<DataProviderProps>(
    value || defaultDataProvider
  )

  return (
    <DataProviderContext.Provider value={dataProvider}>
      {children}
    </DataProviderContext.Provider>
  )
}
export default DataProvider
