import React, { useEffect, useState, useCallback } from "react"
import {
  FlexRow,
  Input,
  Card,
  Container,
  Grid,
  FlexColumn,
  Checkbox,
  TextArea,
  Tooltip,
  Dropdown,
  Chip,
  Modal,
  Button,
  LinkButton,
} from "@rap/ui"
import styled from "styled-components"
import { TodoList, TodoLists } from "./mock"
import _ from "lodash"

const TodosContainer: any = styled(Card)`
  .add-tsk {
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    z-index: 9;
  }

  .todo {
    // animation: fadeInUp 0.25s ease;
    border-radius: 0;
    margin: 0 2px !important;
    width: 100% !important;
    padding-top: 15px !important;
    padding-bottom: 15px !important;

    &:not(:last-child) {
      border-bottom: 1px solid #eaeaea;
    }
  }

  @keyframes fadeInUp {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }

  .truncate {
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
  }

  p {
    cursor: pointer;
  }

  .todo-complete {
    p {
      text-decoration: line-through;
    }
  }

  @media (min-width: 768px) {
    .sc-str {
      flex: 1;
    }
    .desktop {
      display: block;
    }
    .mobile {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
  }

  @media (max-width: 441px) {
    #todos-label {
      top: unset;
    }
  }
`

const TodosList: any = styled.div`
  > div {
    margin: 0;
    width: 100%;
    white-space: nowrap;
  }
  outline: none;
  border: none;
  background: transparent;
  width: 100%;
  overflow: hidden;
  height: 60vh;
  overflow-y: auto;
  * {
    ::-webkit-scrollbar-thumb {
      background: #aaaaaa55;
    }
  }
`

const TodosWidget: React.FC<{ appRoute: string }> = ({
  appRoute,
  ...props
}) => {
  const [navClass, setNavClass] = useState<string>()
  const [searchValue, setSearchValue] = useState<string>("")
  const [openEditTaskModal, setOpenEditTaskModal] = useState<boolean>(false)
  const [todos, setTodos] = useState<TodoList[]>([])
  const [filterData, setFilterData] = useState<TodoList[]>(todos)
  const defaultTodo = {
    id: 0,
    name: "First Todo Ever 😁",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ducimus ratione qui consequatur perspiciatis voluptatum vel sapiente cumque.",
    labels: [0],
    completed: false,
    important: false,
    starred: false,
    trashed: false,
  }
  const [newTodo, setNewTodo] = useState<TodoList>(defaultTodo)

  const labels = [
    { name: "Frontend", color: "info" },
    { name: "Backend", color: "success" },
    { name: "Designer", color: "warning" },
    { name: "DevOps", color: "primary" },
  ]

  type Filter = "completed" | "starred" | "trashed" | "important"

  const handleSetFilter = (
    filter: Filter,
    idx: number,
    value: boolean
  ): void => {
    const prevState: TodoList[] = [...todos]
    for (let i = 0; i < prevState.length; i++) {
      if (prevState[i].id === idx) {
        prevState[i][filter] = value
        break
      }
    }
    setTodos(prevState)
    window.localStorage.setItem("todo", JSON.stringify(prevState))
  }

  useEffect(() => {
    const navClassName: string | undefined = Array.from(
      document.body.classList
    ).find((className: string) => className.startsWith("nav-"))

    if (navClassName) {
      setNavClass(navClassName)
    }
  }, [])

  const getPanelTop = (): string => {
    switch (navClass) {
      case "nav-floating":
        return `95px`
      case "nav-sticky":
        return ` 80px`
      case "nav-static":
        return ` 10px`
      default:
        return ` 95px`
    }
  }

  const checkSearch = useCallback(
    (todosItem: TodoList): boolean => {
      let found = false
      if (searchValue.length) {
        if (
          todosItem.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          todosItem.description
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        ) {
          found = true
        }
      } else {
        found = true
      }
      return found
    },
    [searchValue]
  )

  const searchTodo = useCallback(() => {
    const tmp = todos.filter((todo: any) => checkSearch(todo))
    setFilterData(tmp)
  }, [checkSearch, todos])

  useEffect(() => {
    searchTodo()
  }, [searchTodo])

  useEffect(() => {
    const cacheTodos: string | null = window.localStorage.getItem("todo")
    let JSonCacheTodos = TodoLists
    if (cacheTodos) {
      JSonCacheTodos = JSON.parse(cacheTodos)
    }
    setTodos(JSonCacheTodos)
  }, [])

  return (
    <TodosContainer mdCol="4" smCol="5" xsCol="12" size="xs" {...props}>
      <h4 style={{ fontWeight: 600 }}>Todos</h4>
      <TodosList panelTop={getPanelTop()}>
        <Container>
          {filterData
            .filter(todo => !todo.trashed)
            .map((todo, idx) => (
              <Card
                xsCol="12"
                withBackground={false}
                gap="10px"
                key={idx}
                className={todo.completed ? "todo-complete todo" : "todo"}
                style={{ animationDelay: `${idx / 10}s` }}
              >
                <Checkbox
                  active={todo.completed}
                  id={`tod-wdgt-${todo.id}`}
                  onClick={() => {
                    handleSetFilter("completed", todo.id, !todo.completed)
                  }}
                >
                  <p className="truncate" style={{ fontWeight: 500 }}>
                    {todo.name}
                  </p>
                </Checkbox>
                <p
                  className="truncate"
                  onClick={() => {
                    handleSetFilter("completed", todo.id, !todo.completed)
                  }}
                >
                  {_.truncate(todo.description, { length: 120 })}
                </p>
              </Card>
            ))}
        </Container>
      </TodosList>
      <FlexColumn align="stretch">
        <LinkButton to={appRoute} transparent="true">
          Open App
        </LinkButton>
      </FlexColumn>
    </TodosContainer>
  )
}
export default TodosWidget
