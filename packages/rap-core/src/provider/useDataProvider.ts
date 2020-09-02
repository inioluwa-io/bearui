import { useMemo, useContext } from "react"
import { DataProviderContext } from "../context"
import { useDispatch } from "react-redux"
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_END,
  FETCH_FAILED,
} from "../redux/types"
import { useNotification } from "."
import {
  formatDataProviderSuccessMessage,
  formatDataProviderFailedMessage,
} from "../utils"
import { defaultDataProvider } from "../context/dataProviderContext"
import { DataProviderProps } from "../types"

/**
 * A hook for getting dataProvider
 *
 * This execute http call from the dataProvider then dispatches it to redux
 * store. It is a proxy object that behaves like the real
 * dataProvider but tracks the loading state and dispatches it to the redux store
 *
 * @returns this returns a promise
 *
 * @example
 *
 * import React, { useState } from "react"
 * import { useDataProvider } from "react-admin-panel"
 *
 * const UserList = () => {
 *      const [users, setUsers] = useState([])
 *      const dataProvider = useDataProvider()
 *      useEffect(()=>{
 *          dataProvider.getOne('user', { filter: { status: 'pending' }})
 *            .then(({ data }) => setPosts(data));
 *      },[])
 *
 *      return <React.Frgament>
 *          {users.map((user, key) => <userList user={user} key={key} />)}
 *      <React.Fragment/>
 * }
 */

const useDataProvider = (): DataProviderProps => {
  const dispatch = useDispatch()
  const [_, addNotification] = useNotification()
  const dataProvider = useContext(DataProviderContext) || defaultDataProvider

  const dataProviderProxy = useMemo(() => {
    return new Proxy(dataProvider, {
      get: (target, name) => {
        const type: string = name.toString()
        if (typeof name === "symbol") {
          return
        }
        if (!(name in target))
          throw new Error(`${name} does not exist on dataProvider`)

        return (resource: string, endPoint: string, params: any) => {
          if (typeof dataProvider[type] !== "function") {
            throw new Error(`Invalid dataProvider function: ${type}`)
          }
          return runQuery({
            dispatch,
            addNotification,
            dataProvider,
            params,
            resource,
            endPoint,
            type,
          })
        }
      },
    })
  }, [dataProvider, dispatch, addNotification])
  return dataProviderProxy
}

// Performs the API call and sets dispatch type FETCH_START, FETCH_SUCCESS and FETCH_FAILURE
const runQuery = async ({
  dispatch,
  addNotification,
  dataProvider,
  resource,
  endPoint,
  params,
  type,
}) => {
  dispatch({ type: FETCH_START })
  try {
    const resp = await dataProvider[type](resource, endPoint, params)
    console.log(dataProvider[type])
    console.log(resp)
    if (process.env.NODE_ENV !== "production") {
      if (!resp) {
        throw new Error(
          `dataProvider returned an empty response for '${type}'.`
        )
      }
      if (!resp.hasOwnProperty("data")) {
        throw new Error(
          `The response to '${type}' must have a 'data' key, but the received response does not have a 'data' key.`
        )
      }
      let finalResource = resource.toString()
      if (finalResource.startsWith("/")) {
        finalResource = finalResource.slice(1)
      }
      if (finalResource.endsWith("/")) {
        finalResource = finalResource.slice(0, finalResource.length - 1)
      }

      dispatch({ type: FETCH_SUCCESS, payload: { [finalResource]: resp } })
      const message = formatDataProviderSuccessMessage(type)

      // add notification for update, create, and delete operations
      if (type !== "getOne") {
        addNotification({
          title: "Data Provider",
          text: message,
          icon: "mdiCheck",
          iconColor: "success",
        })
      }
      dispatch({ type: FETCH_END })
      return resp
    }
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(error)
    }
    dispatch({ type: FETCH_FAILED })
    const message = formatDataProviderFailedMessage(type)
    addNotification({
      title: "Data Provider",
      text: message,
      icon: "mdiAlert",
      iconColor: "danger",
    })
  }
}

export default useDataProvider
