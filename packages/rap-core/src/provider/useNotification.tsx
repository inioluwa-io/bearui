import { useSelector, useDispatch } from "react-redux"
import { NotifyProps } from "../types"
import { REMOVE_NOTIFICATION, ADD_NOTIFICATION } from "../redux/types"

type NotificationProviderProps = (props: NotifyProps) => void

/**
 * Handle notification queue.
 *
 * @param {number} delay timeout delay to remove notification
 * @returns {array} An array with the notification queue and callback that accpets new notification type and removes it after delay timeout
 *
 * @example
 *
 * The second element in return array accepts an object as an argument.
 *  - {
 *      title:string,
 *      text:string,
 *      icon?:string,
 *    }
 *
 * import { useNotification } from "react-admin-panel"
 *
 * const LoginButton = () => {
 *    const [notification, addNotification] = useNotification()
 *
 *    const handleLogin = () => {
 *        addNotification({title:"Title", "text":"some text"})
 *    }
 *
 *    return <Button onClick = {handleLogin}></Button>
 * }
 */

export type UseNotificationProps = (
  delay: number
) => (NotifyProps[] | NotificationProviderProps)[]

const useNotification: UseNotificationProps = (delay = 2500) => {
  const notificationProvider: NotifyProps[] = useSelector(
    (state: any) => state.notificationReducer.notification
  )
  
  const dispatch = useDispatch()

  const addToNotificationProvider: NotificationProviderProps = props => {
    dispatch({ type: ADD_NOTIFICATION, payload: props })
    setTimeout(() => {
      dispatch({ type: REMOVE_NOTIFICATION })
    }, delay)
  }
  return [notificationProvider, addToNotificationProvider]
}

export default useNotification
