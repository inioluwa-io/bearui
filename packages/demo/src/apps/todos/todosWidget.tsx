import React, { useEffect, useState } from "react"
import {
  Card,
  FlexColumn,
  Checkbox,
  LinkButton,
  useThemeMode,
} from "@bearui/ui"
import styled from "styled-components"
import { TodoList, TodoLists } from "./mock"
import { truncate } from "lodash"
import { themeConfig } from "../../configs"
import { rgba } from "polished"
import { Scrollbars } from "react-custom-scrollbars"

const TodosContainer: any = styled(Card)`
  // overflow: hidden;
  .add-tsk {
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    z-index: 9;
  }

  .todo {
    // animation: fadeInUp 0.25s ease;
    margin: 0 0px !important;
    // width: 100% !important;
    padding-top: 15px !important;
    padding-bottom: 15px !important;
    overflow: hidden;
    border: 1px solid transparent;
    transition: border 0.25s;

    &:not(:last-child) {
      margin-bottom: 15px !important;
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
    border: 1px solid ${rgba(themeConfig.colorPalette.colors.primary, 0.6)};
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
  // overflow: hidden;
  height: 56vh;
  // overflow-y: auto;
  * {
    ::-webkit-scrollbar-thumb {
      background: #aaaaaa55;
    }
  }

  @media (min-width: 768px) {
    width: calc(100% + 15px);
  }
`

const TodosWidget: React.FC<{ appRoute: string }> = ({
  appRoute,
  ...props
}) => {
  const [navClass, setNavClass] = useState<string>()
  const [todos, setTodos] = useState<TodoList[]>([])
  const [filterData, setFilterData] = useState<TodoList[]>(todos)
  const [themeMode] = useThemeMode()

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

  useEffect(() => {
    setFilterData(todos)
  }, [todos])

  useEffect(() => {
    const cacheTodos: string | null = window.localStorage.getItem("todo")
    let JSonCacheTodos = TodoLists
    if (cacheTodos) {
      JSonCacheTodos = JSON.parse(cacheTodos)
    }
    setTodos(JSonCacheTodos)
  }, [])

  return (
    <TodosContainer mdCol="4" smCol="12" size="xs" {...props}>
      <h5>Todos</h5>
      <TodosList panelTop={getPanelTop()}>
        <Scrollbars
          autoHideDuration={200}
          autoHide
          style={{ width: "100%", height: "100%" }}
        >
          {filterData
            .filter(todo => !todo.trashed)
            .map((todo, idx) => (
              <Card
                xsCol="12"
                withBackground={true}
                gap="10px"
                key={"todosWidget" + idx}
                background={themeConfig.colorPalette[themeMode].background}
                className={todo.completed ? "todo-complete todo" : "todo"}
                style={{ animationDelay: `${idx / 10}s` }}
              >
                <Checkbox
                  active={todo.completed}
                  id={`tod-wdgt-${todo.id}`}
                  onCheck={() => {
                    handleSetFilter("completed", todo.id, !todo.completed)
                  }}
                >
                  <p style={{ fontWeight: 500 }}>{todo.name}</p>
                </Checkbox>
                <p
                  className="truncate"
                  onClick={() => {
                    handleSetFilter("completed", todo.id, !todo.completed)
                  }}
                >
                  {truncate(todo.description, { length: 120 })}
                </p>
              </Card>
            ))}
        </Scrollbars>
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
