export type ChatMessage = {
  id?: string
  time: number
  content: string
  user_id?: number | string
}

export type UserContact = {
  id: string
  img: string
  name: string
  status?: 0 | 1 | 2
  favourite?: boolean
  messages: ChatMessage[]
}
