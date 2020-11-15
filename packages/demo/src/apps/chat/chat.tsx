import React, { useRef, useState } from "react"
import {
  Card,
  Container,
  Grid,
  useTheme,
  useThemeMode,
  FlexColumn,
  Button,
  FlexRow,
  Input,
  Avatar,
  Dropdown,
} from "@rap/ui"
import styled from "styled-components"
import img from "../../brooks-leibee-562087-unsplash.jpg"
import { Icon } from "@mdi/react"
import {
  mdiBell,
  mdiAccountBox,
  mdiMessage,
  mdiMessageOutline,
  mdiBellOutline,
  mdiPhone,
  mdiPhoneOutline,
  mdiAccountBoxOutline,
  mdiDotsHorizontal,
} from "@mdi/js"
import { useEffect } from "react"
import _ from "lodash"

const ChatContainer: any = styled(Container)`
  border: 1px solid #aaaaaa44;
  overflow: hidden;
  position: relative;

  .inner-container {
    height: 80vh;
    flex-wrap: nowrap;
  }

  .panel-header {
    padding: 15px;
    width: calc(100% - 30px);
    border-bottom: 1px solid #aaaaaa44;
  }
`

const ChatListContainer: any = styled(FlexColumn)`
  overflow: hidden;
  .container {
    overflow-y: scroll;
  }

  .chat-item {
    padding: 8px 15px;
    width: calc(100% - 30px);
    transition: background 0.25s ease;
    cursor: pointer;

    &:hover {
      background: rgba(15, 15, 15, 0.4);
    }
  }
`

const TabButtonStyle: any = styled.button`
  background: transparent;
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  grid-gap: 3px;
  font-size: 9px;
  transition: color 0.25s ease;
  ${(props: any) => props.active && "color: " + props.color};

  svg path {
    transition: all 0.25s ease;
  }

  &:hover {
    color: ${(props: any) => props.color};

    svg path {
      fill: ${(props: any) => props.color} !important;
    }
  }
`

const Row: any = styled.div`
  height: 80vh;
  flex-wrap: nowrap;
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
`

const ContactContainer: any = styled(Grid)`
  .profile-det {
    padding: 0px;
    margin: 0;
    background: ${(props: any) => props.background};
    background: transparent;
    box-shadow: none;
  }

  background: ${(props: any) => props.cardBackground};
  height: 100%;
  flex-direction: column;
  border-right: 1px solid #aaaaaa44;
  flex-wrap: nowrap;
`

const MessagesContainer: any = styled(Grid)`
  height: 100%;
  flex-direction: column;
  flex-wrap: nowrap;

  .header {
    padding: 15px 20px;
    width: calc(100% - 40px);
    border-bottom: 1px solid #aaaaaa44;
  }
  .chatbubble-container {
    padding: 0px 25px;
    width: calc(100% - 45px);
    height: inherit;
    justify-content: flex-end;
    overflow: hidden;

    .chatbubble-inner-container {
      overflow-y: scroll;
      padding-right: 10px;
      flex-direction: column-reverse;
    }
  }
  .input-container {
    padding: 15px;
    width: calc(100% - 30px);
    input {
      background: ${(props: any) => props.cardBackground};
    }
    .button-groups {
      flex: none;
    }
  }
`

const ChatBubble: any = styled.div`
  padding: 10px;
  width: fit-content;
  max-width: calc(80% - 30px);
  border-radius: 7px;
  font-size: 14px;
  background: ${(props: any) => props.background};
  color: #ffffff;
`

const TabButton: React.FC<any> = ({
  active = false,
  children,
  type,
  color,
  onClick,
}) => {
  const renderIcon = () => {
    switch (type) {
      case "chat":
        return active ? (
          <Icon path={mdiMessage} size={0.85} color={color} />
        ) : (
          <Icon path={mdiMessageOutline} size={0.85} />
        )
      case "call":
        return active ? (
          <Icon path={mdiPhone} size={0.9} color={color} />
        ) : (
          <Icon path={mdiPhoneOutline} size={0.9} />
        )
      case "contact":
        return active ? (
          <Icon path={mdiAccountBox} size={0.9} color={color} />
        ) : (
          <Icon path={mdiAccountBoxOutline} size={0.9} />
        )
      case "notification":
        return active ? (
          <Icon path={mdiBell} size={0.9} color={color} />
        ) : (
          <Icon path={mdiBellOutline} size={0.9} />
        )
    }
  }
  return (
    <TabButtonStyle
      color={color}
      active={active}
      onClick={() => {
        onClick()
      }}
    >
      {renderIcon()}
      {children}
    </TabButtonStyle>
  )
}

type ChatMessage = {
  id?: string
  time: number
  content: string
  user_id?: number | string
}

type UserContact = {
  id: string
  img: string
  name: string
  messages: ChatMessage[]
}

type ChatListComponent = {
  list: UserContact[]
  showMessage?: boolean
}
const ChatList: React.FC<ChatListComponent> = ({
  list,
  showMessage = true,
}) => {
  const getDay = (timeStamp: number) => {
    const date = new Date(timeStamp)
    const dateArray = date.toDateString().split(" ")
    return dateArray[2] + " " + dateArray[1]
  }
  return (
    <ChatListContainer gap="0px">
      <FlexColumn gap="0px" className="container">
        {list.map((contact, idx: number) => {
          const lastMessage = contact.messages[0]
          return (
            <FlexRow align="space" className="chat-item" key={idx}>
              <FlexRow align="left" gap="10px">
                <Avatar badgeColor="warning" withStatus src={contact.img} />
                <FlexColumn style={{ width: "auto" }} gap="5px">
                  <p style={{ fontWeight: 500 }}>{contact.name}</p>
                  {showMessage && lastMessage.content && (
                    <p>{_.truncate(lastMessage.content, { length: 25 })}</p>
                  )}
                </FlexColumn>
              </FlexRow>
              {showMessage && <p>{getDay(lastMessage.time)}</p>}
            </FlexRow>
          )
        })}
      </FlexColumn>
    </ChatListContainer>
  )
}

const Chat: React.FC = () => {
  const theme = useTheme()
  const user_id = 1
  const [themeMode] = useThemeMode()
  const [activeTab, setActiveTab] = useState<number>(0)
  const [contact, setContact] = useState<UserContact[]>([
    {
      id: "1",
      name: "Bruce Banner",
      img: img,
      messages: [{ time: Date.now(), content: "", user_id: 0 }],
    },
    {
      id: "2",
      name: "Steve Rogers",
      img: img,
      messages: [{ time: Date.now(), content: "2d", user_id: 0 }],
    },
    {
      id: "3",
      name: "Bruce Banner",
      img: img,
      messages: [{ time: Date.now(), content: "", user_id: 0 }],
    },
    {
      id: "4",
      name: "Steve Rogers",
      img: img,
      messages: [
        {
          time: Date.now(),
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ullam vel sapiente optio quas enim eum, deserunt natus placeat corporis libero voluptas praesentium consequuntur, quia facere adipisci modi ratione in.",
          user_id: 0,
        },
        { time: Date.now(), content: "gfg3", user_id: 0 },
        {
          time: Date.now(),
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ullam vel sapiente optio quas enim eum, deserunt natus placeat corporis libero voluptas praesentium consequuntur, quia facere adipisci modi ratione in.",
          user_id: 0,
        },
        {
          time: Date.now(),
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ullam vel sapiente optio quas enim eum, deserunt natus placeat corporis libero voluptas praesentium consequuntur, quia facere adipisci modi ratione in.",
          user_id: 0,
        },
        { time: Date.now(), content: "frfd", user_id: 0 },
        { time: Date.now(), content: "vr53", user_id: 1 },
        {
          time: Date.now(),
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ullam vel sapiente optio quas enim eum, deserunt natus placeat corporis libero voluptas praesentium consequuntur, quia facere adipisci modi ratione in.",
          user_id: 0,
        },
        { time: Date.now(), content: "gfg3", user_id: 0 },
        {
          time: Date.now(),
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ullam vel sapiente optio quas enim eum, deserunt natus placeat corporis libero voluptas praesentium consequuntur, quia facere adipisci modi ratione in.",
          user_id: 0,
        },
        { time: Date.now(), content: "vjnkerjk", user_id: 0 },
        { time: Date.now(), content: "vjk40ik", user_id: 1 },
        { time: Date.now(), content: "q3o3p", user_id: 1 },
      ],
    },
    {
      id: "51",
      name: "Bruce Banner",
      img: img,
      messages: [{ time: Date.now(), content: "", user_id: 1 }],
    },
    {
      id: "6",
      name: "Steve Rogers",
      img: img,
      messages: [{ time: Date.now(), content: "2d", user_id: 1 }],
    },
    {
      id: "7",
      name: "Bruce Banner",
      img: img,
      messages: [{ time: Date.now(), content: "", user_id: 0 }],
    },
    {
      id: "8",
      name: "Steve Rogers",
      img: img,
      messages: [{ time: Date.now(), content: "2d", user_id: 0 }],
    },
  ])

  const [currMessage, setCurrMessage] = useState<string>("")
  const cardBackground = theme[themeMode].cardbackground
  const textColor = theme[themeMode].textColor
  const background = theme[themeMode].background

  const refs = useRef<HTMLDivElement>()
  useEffect(() => {
    const DOMNode = refs.current

    if (DOMNode) {
      const chatBubbleContainer = DOMNode?.querySelector(
        ".chatbubble-inner-container"
      )
      const height = chatBubbleContainer?.scrollHeight || 0
      chatBubbleContainer?.scrollTo(0, height)
    }
  }, [refs])

  const submitMessage = () => {
    if (currMessage.length) {
      const tmp: UserContact[] = [...contact]

      tmp[3].messages.unshift({
        time: Date.now(),
        content: currMessage,
        user_id,
      })
      setCurrMessage("")
      setContact(tmp)
    }
  }

  return (
    <ChatContainer cardBackground={cardBackground}>
      <Row className="inner-container" ref={refs}>
        <ContactContainer
          xsCol="4"
          background={background}
          cardBackground={cardBackground}
        >
          <FlexColumn gap="20px" className="panel-header">
            <FlexRow align="space" gap="10px">
              <FlexRow align="left" gap="10px">
                <Avatar badgeColor="warning" withStatus src={img} />
                <p style={{ fontWeight: 500 }}>Tony Stark</p>
              </FlexRow>
              <Dropdown
                showIcon={false}
                listener="click"
                list={["Setting", "Sign out"]}
              >
                <Icon path={mdiDotsHorizontal} size={0.85} />
              </Dropdown>
            </FlexRow>

            <FlexRow align="stretch">
              <Input
                color="primary"
                placeholder="People, groups &amp; messages"
                icon="mdiMagnify"
                size="xs"
                clearButton
                onInputChange={() => {}}
              />
            </FlexRow>
            <FlexRow align="stretch" gap="0px" className="action-tab">
              {["Chat", "Call", "Contact", "Notification"].map(
                (tab, idx: number) => (
                  <FlexRow align="center" key={idx}>
                    <TabButton
                      active={activeTab === idx}
                      type={tab.toLowerCase()}
                      color={theme.colors.primary}
                      onClick={() => {
                        setActiveTab(idx)
                      }}
                    >
                      {tab}s
                    </TabButton>
                  </FlexRow>
                )
              )}
            </FlexRow>
          </FlexColumn>
          <ChatList showMessage={true} list={contact} />
        </ContactContainer>
        <MessagesContainer xsCol="8" cardBackground={cardBackground}>
          <FlexRow align="space" className="header">
            <FlexColumn style={{ width: "auto" }}>
              <h5 style={{ fontWeight: 500 }}>Bruce banner</h5>
            </FlexColumn>
            <FlexRow style={{ width: "auto" }} gap="10px">
              <Button
                corners="rounded"
                iconOnly
                iconColor={textColor}
                icon="mdiVideoOutline"
                background={cardBackground}
              />
              <Button
                corners="rounded"
                iconOnly
                iconColor={textColor}
                icon="mdiPhone"
                background={cardBackground}
              />
              <Button
                corners="rounded"
                iconOnly
                transparent
                icon="mdiStarOutline"
                background={"warning"}
              />
            </FlexRow>
          </FlexRow>
          <FlexColumn gap="0px" className="chatbubble-container">
            <FlexColumn gap="5px" className="chatbubble-inner-container">
              {contact[3].messages.map((message, idx) => {
                const align = message.user_id === user_id ? "right" : "left"
                return (
                  <FlexRow key={idx} align={align}>
                    <ChatBubble background={theme.colors.primary}>
                      {message.content}
                    </ChatBubble>
                  </FlexRow>
                )
              })}
            </FlexColumn>
          </FlexColumn>
          <form
            onSubmit={e => {
              e.preventDefault()
              submitMessage()
            }}
          >
            <FlexRow align="stretch" className="input-container" gap="10px">
              <Input
                placeholder="Type a message"
                defaultValue={currMessage}
                onInputChange={(val: string) => {
                  setCurrMessage(val)
                }}
              />
              <FlexRow style={{ width: "auto" }} className="button-groups">
                {currMessage.length ? (
                  <Button
                    background="primary"
                    type="button"
                    onClick={() => {
                      submitMessage()
                    }}
                  >
                    Submit
                  </Button>
                ) : (
                  <Button
                    iconOnly
                    icon="mdiAttachment"
                    iconColor={textColor}
                    background={cardBackground}
                    type="button"
                  />
                )}
              </FlexRow>
            </FlexRow>
          </form>
        </MessagesContainer>
      </Row>
    </ChatContainer>
  )
}

export default Chat
