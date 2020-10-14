export type Filters = {
  completed: boolean
  important: boolean
  starred: boolean
  trashed: boolean
}

export type TodoList = {
  id: number
  name: string
  description: string
  labels?: number[]
} & Filters

export const TodoLists: TodoList[] = [
  {
    id: 0,
    name: "First Todo Ever 😁",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ducimus ratione qui consequatur perspiciatis voluptatum vel sapiente cumque.",
    labels: [0, 2, 3],
    completed: true,
    important: true,
    starred: false,
    trashed: false,
  },
  {
    id: 1,
    name: "Sort out health benefits 💉",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ducimus ratione qui consequatur perspiciatis voluptatum vel sapiente cumque.",
    labels: [1, 3, 2],
    completed: false,
    important: false,
    starred: true,
    trashed: true,
  },
  {
    id: 2,
    name: "Meeting with developers in Africa 🧔🏿🧔",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ducimus ratione qui consequatur perspiciatis voluptatum vel sapiente cumque.",
    labels: [2, 0],
    completed: false,
    important: true,
    starred: true,
    trashed: false,
  },
  {
    id: 3,
    name: "More things Todo with the team 🖥",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ducimus ratione qui consequatur perspiciatis voluptatum vel sapiente cumque.",
    labels: [1, 0, 2],
    completed: false,
    important: true,
    starred: true,
    trashed: false,
  },
  {
    id: 4,
    name: "More things Todo with the team 🖥",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ducimus ratione qui consequatur perspiciatis voluptatum vel sapiente cumque.",
    labels: [2, 1, 0],
    completed: false,
    important: true,
    starred: false,
    trashed: false,
  },
  {
    id: 5,
    name: "More things Todo with the team 🖥",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ducimus ratione qui consequatur perspiciatis voluptatum vel sapiente cumque.",
    labels: [0, 1],
    completed: false,
    important: true,
    starred: false,
    trashed: false,
  },
]
