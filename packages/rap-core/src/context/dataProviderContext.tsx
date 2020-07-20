import React, { createContext, useState } from "react"
import { DataProviderProps } from "../types"

export const defaultDataProvider = {
  getOne: () => Promise.resolve({ data: null }),
}

export const DataProviderContext = createContext<DataProviderProps>(null)

const DataProvider: React.FC<{}> = ({ children }) => {
  const [dataProvider] = useState<DataProviderProps>(defaultDataProvider)

  return (
    <DataProviderContext.Provider value={dataProvider}>
      {children}
    </DataProviderContext.Provider>
  )
}
export default DataProvider
