import {
  RapUITheme,
  FlexColumn,
  FlexRow,
  Button,
  REMOVE_NOTIFICATION,
  Row,
  Grid,
  Avatar,
  LinkButton,
  AvatarProps,
} from "@bearui/ui"
import React from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"

type NotificationPanelMessage = {
  avatarProps: AvatarProps
  content: any
  time: string
  id?: string
}

const NotificationPanelContainer: any = styled.div`
  width: 17.2rem;
  .heading {
    h5 {
      font-size: 17px;
    }
  }
  li {
    padding-left: 0;
    padding-right: 0;
    width: 100%;
  }
  span {
    font-size: 13px;
  }
`

const NotificationPanel: React.FC<{
  theme: RapUITheme
  messages: NotificationPanelMessage[]
}> = ({ theme, messages }) => {
  const dispatch = useDispatch()

  return (
    <NotificationPanelContainer theme={theme}>
      <FlexColumn>
        <FlexRow className="heading" align="space">
          <h5>Notification</h5>
          {messages.length > 0 && (
            <Button
              size="xs"
              corners="rounded"
              onClick={() => {
                dispatch({ type: REMOVE_NOTIFICATION })
              }}
            >
              Clear
            </Button>
          )}
        </FlexRow>
        {messages.length > 0 ? (
          <ul>
            {messages.map((message, idx) => {
              const { avatarProps, content, time, id } = message

              return (
                <li key={id || `${idx}-notify-${time}`}>
                  <Row>
                    <Grid xsCol="2">
                      <Avatar {...avatarProps} />
                    </Grid>
                    <Grid xsCol="7">{content}</Grid>
                    <Grid xsCol="3">
                      <FlexRow align="right">
                        <span>{time}</span>
                      </FlexRow>
                    </Grid>
                  </Row>
                </li>
              )
            })}
          </ul>
        ) : (
          <p>You have no new notifications</p>
        )}
        <FlexRow align="stretch">
          <LinkButton to="#">View all notifications</LinkButton>
        </FlexRow>
      </FlexColumn>
    </NotificationPanelContainer>
  )
}
export default NotificationPanel
