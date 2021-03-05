import { useSelector, useDispatch } from "react-redux"
import { NotifyProps } from "../types"
import { ADD_NOTIFICATION, REMOVE_TMP_NOTIFICATION } from "../redux/types"
import { useCallback } from "react"

type NotificationProviderProps = (props: NotifyProps) => void

export type UseNotificationProps = (
  delay?: number
) => [NotifyProps[], NotificationProviderProps]

/**
 * Handle notification queue.
 *
 * @param {number} delay timeout delay to remove notification
 * @returns {array} An array with the notification queue and callback that accpets new notification type and removes it after delay timeout
 *
 *
 * The second element in return array accepts an object as an argument.
 *  - {
 *      avatarProps:string,
 *      content:string,
 *      time?:string,
 *    }
 *
 * @example
 * import { useNotification } from "react-admin-panel"
 * import {  mdiAlert } from "@mdi/js"
 *
 * const LoginButton = () => {
 *    const [notification, setNotification] = useNotification()
 *
 *    const handleLogin = () => {
 *        
      setNotification({
        avatarProps: { icon: mdiAlert, color: "danger" },
        content: <p>{e.message}</p>,
        time: "11:38pm",
      })
 *    }
 *
 *    return <Button onClick = {handleLogin}></Button>
 * }
 */

const useNotification: any = (delay = 3500) => {
  const notificationProvider = useCallback<() => NotifyProps[]>(() => {
    return useSelector((state: any) => state.notificationReducer.notification)
  }, [])
  const dispatch = useDispatch()

  const addToNotificationProvider: NotificationProviderProps = useCallback(
    props => {
      dispatch({ type: ADD_NOTIFICATION, payload: props })
      setTimeout(() => {
        dispatch({ type: REMOVE_TMP_NOTIFICATION })
      }, delay)
    },
    [dispatch]
  )
  return [notificationProvider, addToNotificationProvider]
}

export default useNotification
