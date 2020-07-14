import React, { useState, useEffect } from "react"
import { NotificationProps, NotifyProps } from "../types"
import NotificationWrapper from "./notificationWrapper"
import styled, { StyledInterface } from "styled-components"

const NotificationContainer: any = styled.div`
  position: relative;
`
const NotificationDiv: any = styled.div`
  position: fixed;
  top: 0;
`

const Notification: React.FC<NotificationProps> = ({ data, time = 2000 }) => {
  const [notify, setNotify] = useState<NotifyProps[]>(data)

  useEffect(() => {
    setNotify(data)
  }, [data])

  return (
    <NotificationDiv>
      <NotificationContainer>
        {notify.map((props: NotifyProps, idx: number) => {
          return (
            <NotificationWrapper
              text={props.text}
              time={time}
              title={props.title}
              key={idx}
              idx={idx}
              close={() => {
                const notificationQueue = [...data]
                notificationQueue.splice(idx, 1)
                setNotify(notificationQueue)
                console.log(notificationQueue)
              }}
            />
          )
        })}
      </NotificationContainer>
    </NotificationDiv>
  )
}
export default Notification
