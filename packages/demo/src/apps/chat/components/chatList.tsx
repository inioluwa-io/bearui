import { FlexColumn, FlexRow, Avatar } from "@bearui/ui"
import { truncate } from "lodash"
import React, { HTMLAttributes } from "react"
import styled from "styled-components"
import { UserContact } from "../types"

type ChatListComponent = {
  list?: UserContact[]
  showMessage?: boolean
  setSelectedChat?: any
  selectedChat?: string | number | undefined
  clickCallback?: () => void
} & HTMLAttributes<HTMLDivElement>

const ChatListContainer: any = styled(FlexColumn)`
  overflow: hidden;
  .container {
    overflow-y: auto;
  }

  .chat-item {
    padding: 9px 15px;
    width: calc(100% - 30px);
    transition: background 0.25s ease;
    cursor: pointer;

    &:hover,
    &.active {
      background: rgba(15, 15, 15, 0.2);
    }
  }
`
const ChatList: React.FC<ChatListComponent> = ({
  list,
  showMessage = true,
  setSelectedChat,
  selectedChat,
  clickCallback,
  ...props
}) => {
  const getDay = (timeStamp: number) => {
    const date = new Date(timeStamp)
    const dateArray = date.toDateString().split(" ")
    return dateArray[2] + " " + dateArray[1]
  }
  return (
    <ChatListContainer gap="0px" {...props}>
      <FlexColumn gap="0px" className="container">
        {list?.map((contact, idx: number) => {
          const lastMessage = contact.messages[0]
          let statusColor: string = "success"

          switch (contact.status) {
            case 2: {
              statusColor = "success"
              break
            }
            case 1: {
              statusColor = "warning"
              break
            }
            case 0: {
              statusColor = "danger"
              break
            }
            default: {
              statusColor = "success"
              break
            }
          }
          return (
            <div
              className={
                selectedChat === contact.id ? "active chat-item" : "chat-item"
              }
              key={idx}
            >
              <FlexRow
                align="space"
                onClick={() => {
                  setSelectedChat(contact.id)
                  clickCallback && clickCallback()
                }}
                style={{ flexWrap: "nowrap" }}
              >
                <div>
                  <FlexRow
                    align="left"
                    gap="10px"
                    style={{ flexWrap: "nowrap" }}
                  >
                    <Avatar
                      badgeColor="warning"
                      withStatus
                      statusColor={statusColor}
                      src={contact.img}
                    />
                    <FlexColumn
                      style={{ width: "auto", flexWrap: "nowrap" }}
                      gap="3px"
                    >
                      <p style={{ fontWeight: 500 }}>
                        {truncate(contact?.name, { length: 25 })}
                      </p>
                      {showMessage && lastMessage?.content && (
                        <p style={{ fontSize: "13px" }}>
                          {truncate(lastMessage?.content, { length: 25 })}
                        </p>
                      )}
                    </FlexColumn>
                  </FlexRow>
                </div>
                {showMessage && lastMessage && (
                  <p style={{ fontSize: "12px" }}>{getDay(lastMessage.time)}</p>
                )}
              </FlexRow>
            </div>
          )
        })}
      </FlexColumn>
    </ChatListContainer>
  )
}
export default ChatList
