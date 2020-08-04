import { useSelector } from "react-redux"
import { StoreState, ResourceState, QueryStoreProps, Record } from "../types"
import { useMemo } from "react"
import { isProdEnv } from "../utils"

/**
 * This should query data from resources in the redux store
 *
 * @returns an object of functions to query data from store
 *
 * @example
 *
 * import { useQueryStore } from "react-admin-panel"
 *
 * const UserList = () => {
 *    const queryStore = useQueryStore()
 *    const users = queryStore.getAll("users")
 *
 *    return <ul>{users.map((item,idx)=><li key = {idx}>{item}</li>)} </ul>
 * }
 */

const useQueryStore: QueryStoreProps = () => {
  const resourceProvider: ResourceState = useSelector(
    (state: StoreState) => state.resourceReducer.resource
  )

  const useQueryStore = useMemo(() => {
    return {
      getAll: (resource: string) => {
        if (!resourceProvider[resource]) return
        return resourceProvider[resource].data
      },
      getOne: (resource: string, params: Record) => {
        // get keys from params and compare values with original resource
        const isMatch = (item, params: Record): boolean => {
          const keys = Object.keys(params)

          for (let i = 0; i < keys.length; i++) {
            // recursive function if key is an object
            if (typeof params[keys[i]] === "object") {
              return isMatch(item[keys[i]], params[keys[i]])
            }
            if (item[keys[i]] !== params[keys[i]]) {
              return false
            }
          }
          return true
        }
        if (!resourceProvider[resource]) return

        let finalResource = resourceProvider[resource].data
        finalResource = finalResource.find((item: any) => isMatch(item, params))

        if (!finalResource) {
          if (!isProdEnv()) {
            console.warn(`No match for params provided in resource ${resource}`)
          }
        }
        return finalResource
      },
    }
  }, [resourceProvider])
  return useQueryStore
}
export default useQueryStore
