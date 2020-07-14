import React, { useEffect } from "react"
import { NotifyWrapper } from "../types"
import styled from "styled-components"

const Notification: any = styled.div``

const NotificationWrapper: React.FC<NotifyWrapper> = ({
  text,
  time,
  idx,
  title,
  icon,
  close,
  children,
}) => {
  useEffect(() => {
    setTimeout(() => {
      close()
    }, time)
  }, [time])

  return (
    <Notification>
      <h2>{title}</h2>
      <p>{text}</p>
    </Notification>
  )
}
export default NotificationWrapper
