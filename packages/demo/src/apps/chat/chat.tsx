import React, { useRef, useState, useCallback, useEffect } from "react"
import {
  Container,
  Grid,
  useTheme,
  useThemeMode,
  FlexColumn,
  Button,
  FlexRow,
  Input,
  Modal,
  Avatar,
  Dropdown,
  Tooltip,
} from "@bearui/ui"
import styled from "styled-components"
import img from "../../assets/img4.jpg"
import { Icon } from "@mdi/react"
import { mdiAttachment, mdiChevronLeft, mdiDotsHorizontal, mdiMagnify, mdiPhone, mdiPin, mdiVideoOutline } from "@mdi/js"
import { mockUserContact } from "./mock"
import { UserContact } from "./types"
import TabButton from "./components/tabButton"
import ChatList from "./components/chatList"

const ChatContainer: any = styled(Container)`
  border: 1px solid #aaaaaa44;
  overflow: hidden;
  position: relative;

  @media (max-width: 441px) {
    width: calc(100% - 2px);
  }

  .inner-container {
    height: calc(100vh - (32px + ${(props: any) => props.panelTop}));
    flex-wrap: nowrap;

    @media (max-width: 768px) {
      height: calc(100vh - (12px + ${(props: any) => props.panelTop}));
    }

    @media (max-width: 441px) {
      border: none;
      height: calc(100vh - (2px + ${(props: any) => props.panelTop}));
    }
  }

  .panel-header {
    padding: 15px;
    width: calc(100% - 30px);
    border-bottom: 1px solid #aaaaaa44;
  }

  .mod {
    .modal-container {
      > div:nth-child(2) {
        padding: 20px;
      }

      .modal-contact-inner {
        height: 38vh;

        @media (max-width: 441px) {
          height: 60vh;
        }
      }
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
  @media (max-width: 768px) {
    display: ${(props: any) => (!isNaN(props.selectedChat) ? "none" : "flex")};
    position: absolute;
  }

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

const ConversationContainer: any = styled(Grid)`
  height: 100%;
  flex-direction: column;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    display: ${(props: any) => (!isNaN(props.selectedChat) ? "flex" : "none")};
    position: absolute;
  }

  #back-btn {
    @media (min-width: 768px) {
      display: none;
    }
  }

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
      overflow-y: auto;
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
  padding: 12px;
  width: fit-content;
  max-width: calc(60% - 24px);
  border-radius: 14px;
  font-size: 14px;
  background: ${(props: any) => props.background};
  ${(props: any) =>
    props.align === "left"
      ? "color: #ffffff;border-top-left-radius:0px"
      : "border-top-right-radius:0px"};
`

const BlankConversation: any = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Chat: React.FC = () => {
  const theme = useTheme()
  const user_id = 1
  const [themeMode] = useThemeMode()
  const [activeTab, setActiveTab] = useState<number>(0)
  const [selectedChat, setSelectedChat] = useState<
    number | string | undefined
  >()
  const [contacts, setContacts] = useState<UserContact[]>(mockUserContact)

  const [chats, setChats] = useState<UserContact[] | undefined>()
  const [openModal, setOpenModal] = useState<boolean>(false)

  const [currMessage, setCurrMessage] = useState<string>("")
  const cardBackground = theme[themeMode].cardbackground
  const textColor = theme[themeMode].textColor
  const background = theme[themeMode].background

  const [navClass, setNavClass] = useState<string>()
  const [chatSearchInput, setChatSearchInput] = useState<string>("")
  const [contactSearchInput, setContactSearchInput] = useState<string>("")

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

  const getChatsFromContact = useCallback((): UserContact[] => {
    return contacts?.filter(
      contact =>
        contact.messages.length &&
        contact.name.toLowerCase().includes(chatSearchInput.toLowerCase())
    )
  }, [contacts, chatSearchInput])

  const getSearchedContact = useCallback((): UserContact[] => {
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(contactSearchInput.toLowerCase())
    )
  }, [contactSearchInput, contacts])

  // set chat on render
  useEffect(() => {
    let current = true

    if (current) {
      const tmpChats = getChatsFromContact()
      setChats(tmpChats)
    }
    return () => {
      current = false
    }
  }, [getChatsFromContact])

  // send message
  const submitMessage = () => {
    if (currMessage.length) {
      const tmp: UserContact[] = [...contacts]
      const tmpChatIndex = contacts?.findIndex(
        chat => chat.id === selectedChat
      ) as number

      const tmpChat = contacts?.find(
        chat => chat.id === selectedChat
      ) as UserContact

      tmpChat.messages.unshift({
        time: Date.now(),
        content: currMessage,
        user_id,
      })

      tmp.splice(tmpChatIndex, 1)
      tmp.unshift(tmpChat)
      setCurrMessage("")
      setContacts(tmp)
      setActiveTab(0)
    }
  }

  const renderContactList = () => {
    switch (activeTab) {
      case 0:
        return (
          <ChatList
            showMessage={true}
            list={chats}
            setSelectedChat={setSelectedChat}
            selectedChat={selectedChat}
          />
        )
      case 1:
        return (
          <ChatList
            showMessage={false}
            list={contacts}
            setSelectedChat={setSelectedChat}
            selectedChat={selectedChat}
          />
        )
      case 2:
        return (
          <ChatList
            showMessage={false}
            list={contacts}
            setSelectedChat={setSelectedChat}
            selectedChat={selectedChat}
          />
        )
      default:
        return (
          <ChatList
            showMessage={true}
            list={chats}
            setSelectedChat={setSelectedChat}
            selectedChat={selectedChat}
          />
        )
    }
  }

  const getChat = (): UserContact => {
    return contacts?.find(chat => chat.id === selectedChat) as UserContact
  }

  const pinChat = () => {
    const tmp = [...contacts]
    const tmpChat = tmp?.find(chat => chat.id === selectedChat) as UserContact

    tmpChat.favourite = !!!tmpChat.favourite
    setContacts(tmp)
  }

  useEffect(() => {
    const navClassName: string | undefined = Array.from(
      document.body.classList
    ).find((className: string) => className.startsWith("nav-"))

    if (navClassName) {
      setNavClass(navClassName)
    }
  }, [])

  const getPanelTop = useCallback((): string => {
    switch (navClass) {
      case "nav-floating":
        return `95px`
      case "nav-sticky":
        return ` 65px`
      case "nav-static":
        return ` 0px`
      default:
        return ` 95px`
    }
  }, [navClass])

  return (
    <ChatContainer cardBackground={cardBackground} panelTop={getPanelTop()}>
      <Row className="inner-container" ref={refs}>
        <ContactContainer
          lgCol="4"
          smCol="12"
          id="chat-contact-panel"
          background={background}
          cardBackground={cardBackground}
          selectedChat={selectedChat}
        >
          <FlexColumn gap="20px" className="panel-header">
            <FlexRow align="space" gap="10px">
              <div>
                <FlexRow align="left" gap="10px">
                  <Avatar badgeColor="warning" withStatus src={img} />
                  <p style={{ fontWeight: 500 }}>Tony Stark</p>
                </FlexRow>
              </div>
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
                id="search-chat"
                color="primary"
                placeholder="People, groups &amp; messages"
                icon={mdiMagnify}
                size="xs"
                clearButton
                onInputChange={(val: string) => {
                  activeTab !== 0 && setActiveTab(0)
                  setChatSearchInput(val)
                }}
              />
            </FlexRow>
            <FlexRow align="stretch" gap="0px" className="action-tab">
              {["Chat", "Call", "Contact", "Notification"].map(
                (tab, idx: number) => (
                  <div key={idx}>
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
                  </div>
                )
              )}
            </FlexRow>
          </FlexColumn>
          {renderContactList()}
        </ContactContainer>
        <ConversationContainer
          lgCol="8"
          id="conversation-panel"
          smCol="12"
          cardBackground={cardBackground}
          selectedChat={selectedChat}
        >
          {selectedChat ? (
            <>
              <div className="header">
                <FlexRow align="space">
                  <div>
                    <FlexRow style={{ width: "auto" }} gap="0px">
                      <Button
                        icon={mdiChevronLeft}
                        iconOnly
                        id="back-btn"
                        background="transparent"
                        iconColor={theme[themeMode].textColor}
                        onClick={() => {
                          setSelectedChat(undefined)
                        }}
                      />

                      <h5 style={{ fontWeight: 500 }}>{getChat().name}</h5>
                    </FlexRow>
                  </div>
                  <div>
                    <FlexRow style={{ width: "auto" }} gap="10px">
                      <Tooltip text="Video Call" position="bottom" delay="0.5s">
                        <Button
                          corners="rounded"
                          iconOnly
                          iconColor={textColor}
                          icon={mdiVideoOutline}
                          background={cardBackground}
                        />
                      </Tooltip>

                      <Tooltip text="Audio Call" position="bottom" delay="0.5s">
                        <Button
                          corners="rounded"
                          iconOnly
                          iconColor={textColor}
                          icon={mdiPhone}
                          background={cardBackground}
                        />
                      </Tooltip>

                      <Tooltip text="Pin Chat" position="bottom" delay="0.5s">
                        <Button
                          corners="rounded"
                          iconOnly
                          transparent={!getChat().favourite}
                          onClick={pinChat}
                          icon={mdiPin}
                          background={"warning"}
                        />
                      </Tooltip>
                    </FlexRow>
                  </div>
                </FlexRow>
              </div>
              <FlexColumn gap="0px" className="chatbubble-container">
                <FlexColumn gap="5px" className="chatbubble-inner-container">
                  {getChat().messages?.map((message: any, idx: number) => {
                    const align = message.user_id === user_id ? "right" : "left"
                    const showAvatar =
                      (getChat().messages[idx + 1]?.user_id === user_id &&
                        align === "left") ||
                      (getChat().messages.length - 1 === idx &&
                        align === "left")
                    const spaceUp =
                      getChat().messages[idx + 1]?.user_id !== message.user_id
                    return (
                      <div key={idx}>
                        <FlexRow
                          align={align}
                          position="top"
                          gap="10px"
                          style={{ marginTop: spaceUp ? "30px" : "0px" }}
                        >
                          {showAvatar ? (
                            <Avatar src={getChat().img} size="sm" />
                          ) : (
                            <div style={{ width: "38px" }}></div>
                          )}
                          <ChatBubble
                            align={align}
                            background={
                              align === "left"
                                ? theme.colors.primary
                                : cardBackground
                            }
                          >
                            {message.content}
                          </ChatBubble>
                        </FlexRow>
                      </div>
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
                  <div className="button-groups">
                    <FlexRow style={{ width: "auto" }}>
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
                          icon={mdiAttachment}
                          iconColor={textColor}
                          background={cardBackground}
                          type="button"
                        />
                      )}
                    </FlexRow>
                  </div>
                </FlexRow>
              </form>
            </>
          ) : (
            <BlankConversation>
              <FlexColumn align="center">
                <span style={{ fontSize: "1.3em", fontWeight: 700 }}>
                  Welcome, Tony
                </span>
                <Avatar src={img} size="110px" />
                <Button
                  gradient
                  onClick={() => {
                    setOpenModal(true)
                  }}
                >
                  Start Conversation
                </Button>
                <p style={{ width: "80%", textAlign: "center" }}>
                  Search for someone to chat with or go to Contacts.
                </p>
              </FlexColumn>
            </BlankConversation>
          )}
        </ConversationContainer>
      </Row>
      <Modal
        className="mod"
        title="New Chat"
        onClose={() => {
          setOpenModal(false)
        }}
        active={openModal}
      >
        <FlexRow align="stretch">
          <Input
            id="search-contact"
            icon={mdiMagnify}
            placeholder="Search"
            onInputChange={(val: string) => {
              setContactSearchInput(val)
            }}
            size="md"
          />
        </FlexRow>
        <FlexColumn gap="10px">
          <p style={{ fontWeight: 500 }}>Contacts</p>
          <ChatList
            className="modal-contact-inner"
            showMessage={false}
            list={getSearchedContact()}
            setSelectedChat={setSelectedChat}
            selectedChat={selectedChat}
            clickCallback={() => {
              setOpenModal(false)
            }}
          />
        </FlexColumn>
      </Modal>
    </ChatContainer>
  )
}

export default Chat
