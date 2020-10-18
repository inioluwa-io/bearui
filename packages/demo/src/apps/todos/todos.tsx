import React, {
  useEffect,
  useState,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react"
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
  useTheme,
  Chip,
  Modal,
  Button,
} from "@rap/ui"
import styled from "styled-components"
import { TodoList, TodoLists } from "./mock"
import _ from "lodash"
import Icon from "@mdi/react"
import {
  mdiAccountEdit,
  mdiBuffer,
  mdiCards,
  mdiCheck,
  mdiCheckOutline,
  mdiDelete,
  mdiFileEdit,
  mdiInformation,
  mdiStar,
  mdiStarOutline,
} from "@mdi/js"

const TodosContainer: any = styled.div`
  .add-tsk {
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    z-index: 9;
  }

  #todos-label {
    position: sticky;
    top: calc(${(props: any) => props.panelTop} + 10px);
    z-index: 99;

    button {
      padding: 7px 12px;
      span.text {
        font-size: 12px;
        font-weight: 500;
      }
    }
  }

  .todo {
    // animation: fadeInUp 0.25s ease;
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

  .dsk-pnl {
    position: sticky;
    top: ${(props: any) => props.panelTop};
    z-index: 99;

    .dsk-filter {
      padding: 10px 0;

      h5 {
        font-weight: 500;
        font-size: 18px;
      }

      .flt {
        cursor: pointer;
        outline: none;
        border: none;
        background: none;

        span {
          font-size: 15px;

          transition: color 0.25s;
        }

        svg path {
          transition: all 0.25s;
        }

        &.active {
          span {
            color: ${(props: any) => props.color};
          }
          svg path {
            fill: ${(props: any) => props.color} !important;
          }
        }
      }
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
  height: calc(100vh - (${(props: any) => props.panelTop} + 10px + 23px));
  overflow: hidden;
  overflow-y: auto;
  * {
    ::-webkit-scrollbar-thumb {
      background: #aaaaaa55;
    }
  }
`

type Filter = "completed" | "starred" | "trashed" | "important"

const FilterPanel: React.FC<{
  selectedFilter: Filter | ""
  setSelectedFilter: Dispatch<SetStateAction<Filter | "">>
}> = ({ setSelectedFilter, selectedFilter }) => {
  return (
    <div className="dsk-filter">
      <FlexColumn>
        <h5>Filters</h5>
        <button
          onClick={() => {
            setSelectedFilter("")
          }}
          className={selectedFilter === "" ? "active flt" : "flt"}
        >
          <FlexRow gap="10px">
            <Icon path={mdiBuffer} size={1} />
            <span>All</span>
          </FlexRow>
        </button>
        <button
          onClick={() => {
            setSelectedFilter("important")
          }}
          className={selectedFilter === "important" ? "active flt" : "flt"}
        >
          <FlexRow gap="10px">
            <Icon path={mdiInformation} size={0.9} />
            <span>Important</span>
          </FlexRow>
        </button>
        <button
          onClick={() => {
            setSelectedFilter("starred")
          }}
          className={selectedFilter === "starred" ? "active flt" : "flt"}
        >
          <FlexRow gap="10px">
            <Icon path={mdiStar} size={0.9} />
            <span>Starred</span>
          </FlexRow>
        </button>
        <button
          onClick={() => {
            setSelectedFilter("completed")
          }}
          className={selectedFilter === "completed" ? "active flt" : "flt"}
        >
          <FlexRow gap="10px">
            <Icon path={mdiCheck} size={0.9} />
            <span>Completed</span>
          </FlexRow>
        </button>
        <button
          onClick={() => {
            setSelectedFilter("trashed")
          }}
          className={selectedFilter === "trashed" ? "active flt" : "flt"}
        >
          <FlexRow gap="10px">
            <Icon path={mdiDelete} size={0.9} />
            <span>Trashed</span>
          </FlexRow>
        </button>
      </FlexColumn>
    </div>
  )
}

const Todos: React.FC<any> = () => {
  const [navClass, setNavClass] = useState<string>()
  const [searchValue, setSearchValue] = useState<string>("")
  const [openAddTaskModal, setOpenAddTaskModal] = useState<boolean>(false)
  const [openEditTaskModal, setOpenEditTaskModal] = useState<boolean>(false)
  const [todos, setTodos] = useState<TodoList[]>([])
  const [filterData, setFilterData] = useState<TodoList[]>(todos)
  const [selectedFilter, setSelectedFilter] = useState<Filter | "">("")

  const theme = useTheme()

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

  const checkFilter = useCallback(
    (todosItem: TodoList): boolean => {
      if (selectedFilter === "") {
        return true && !todosItem.trashed
      } else {
        if (selectedFilter !== "trashed") {
          console.log(todosItem[selectedFilter] && !todosItem.trashed)
          return todosItem[selectedFilter] && !todosItem.trashed
        }
        return todosItem[selectedFilter]
      }
    },
    [selectedFilter]
  )

  const searchTodo = useCallback(() => {
    const tmp = todos.filter(
      (todo: any) => checkSearch(todo) && checkFilter(todo)
    )
    setFilterData(tmp)
  }, [checkSearch, todos, checkFilter])

  const addNewTask = (): void => {
    const tmp: TodoList[] = [...todos]
    const tmpNewTodo = newTodo
    tmpNewTodo.id = todos.length + 1
    tmp.unshift(tmpNewTodo)
    setTodos(tmp)
    setOpenAddTaskModal(false)
    setNewTodo(defaultTodo)
    window.localStorage.setItem("todo", JSON.stringify(tmp))
  }

  const editTask = (): void => {
    const tmp: TodoList[] = [...todos]

    for (let i = 0; i < tmp.length; i++) {
      if (tmp[i].id === newTodo?.id) {
        tmp[i] = newTodo
      }
    }
    setTodos(tmp)
    setOpenEditTaskModal(false)
    setNewTodo(defaultTodo)
    window.localStorage.setItem("todo", JSON.stringify(tmp))
  }

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
    <TodosContainer panelTop={getPanelTop()} color={theme.colors.primary}>
      <Container>
        <Grid mdCol="4" lgCol="3" xsCol="12" className="dsk-pnl desktop">
          <Card xsCol="12" gap="15px">
            <FlexRow align="right" position="top">
              <Input
                icon="mdiMagnify"
                type="text"
                id="todos-search"
                clearButton
                className="sc-str"
                onInputChange={value => {
                  setSearchValue(value)
                }}
                placeholder="Search"
                color="primary"
              />
            </FlexRow>
            <FlexColumn align="stretch">
              <Button
                icon="mdiPlus"
                onClick={() => {
                  setOpenAddTaskModal(true)
                }}
              >
                Add Task
              </Button>
              <FilterPanel
                setSelectedFilter={setSelectedFilter}
                selectedFilter={selectedFilter}
              />
            </FlexColumn>
          </Card>
        </Grid>
        <Grid mdCol="8" lgCol="9" xsCol="12">
          <TodosList panelTop={getPanelTop()}>
            <Container>
              {filterData.map((todo, idx) => (
                <Card
                  xsCol="12"
                  key={idx}
                  className={todo.completed ? "todo-complete todo" : "todo"}
                  style={{ animationDelay: `${idx / 10}s` }}
                >
                  <FlexColumn gap="10px">
                    <FlexRow gap="0px" position="top">
                      <Grid smCol="9" xsCol="12">
                        <FlexRow
                          gap="10px"
                          onClick={() => {
                            setNewTodo(todo)
                            setOpenEditTaskModal(true)
                          }}
                        >
                          <div>
                            <Checkbox
                              active={todo.completed}
                              onCheck={() => {
                                handleSetFilter(
                                  "completed",
                                  todo.id,
                                  !todo.completed
                                )
                              }}
                            >
                              <p style={{ fontWeight: 500 }}>{todo.name}</p>
                            </Checkbox>
                          </div>
                          {todo.labels?.map((label, idx: number) => (
                            <React.Fragment key={idx}>
                              {labels[label] && (
                                <Chip
                                  color={labels[label].color.toLowerCase()}
                                  transparent
                                >
                                  {labels[label].name}
                                </Chip>
                              )}
                            </React.Fragment>
                          ))}
                        </FlexRow>
                      </Grid>
                      <Grid smCol="3" xsCol="12">
                        <FlexRow gap="10px" align="right">
                          <Tooltip text="Important" position="bottom">
                            <Button
                              transparent={!todo.important}
                              iconOnly
                              background={
                                todo.important ? "success" : "rgba(0,0,0,.2)"
                              }
                              icon="mdiInformation"
                              size="xs"
                              onClick={() => {
                                handleSetFilter(
                                  "important",
                                  todo.id,
                                  !todo.important
                                )
                              }}
                            ></Button>
                          </Tooltip>
                          <Tooltip text="Starred" position="bottom">
                            <Button
                              transparent={!todo.starred}
                              iconOnly
                              background={
                                todo.starred ? "warning" : "rgba(0,0,0,.2)"
                              }
                              onClick={() => {
                                handleSetFilter(
                                  "starred",
                                  todo.id,
                                  !todo.starred
                                )
                              }}
                              icon="mdiStar"
                              size="xs"
                            ></Button>
                          </Tooltip>
                          <Button
                            iconOnly
                            background="danger"
                            icon="mdiDelete"
                            onClick={() => {
                              handleSetFilter("trashed", todo.id, true)
                            }}
                            size="xs"
                          ></Button>
                        </FlexRow>
                      </Grid>
                    </FlexRow>
                    <p
                      className="truncate"
                      onClick={() => {
                        setNewTodo(todo)
                        setOpenEditTaskModal(true)
                      }}
                    >
                      {_.truncate(todo.description, { length: 120 })}
                    </p>
                  </FlexColumn>
                </Card>
              ))}
            </Container>
          </TodosList>
        </Grid>
      </Container>
      <Button
        className="add-tsk mobile"
        glow
        iconOnly
        icon="mdiPlus"
        size="lg"
        onClick={() => {
          setOpenAddTaskModal(true)
        }}
      ></Button>

      {/* Add new task */}
      <Modal
        active={openAddTaskModal}
        onClose={() => {
          setOpenAddTaskModal(false)
        }}
        color="primary"
        title="Add Task"
        submitButton={
          <Button
            disabled={!newTodo.name.length}
            onClick={() => {
              addNewTask()
            }}
          >
            Submit
          </Button>
        }
      >
        <FlexColumn>
          <FlexRow align="right" position="top" gap="10px">
            <Tooltip text="Important" position="bottom">
              <Button
                transparent={!newTodo.important}
                iconOnly
                background={newTodo.important ? "success" : "rgba(0,0,0,.2)"}
                icon="mdiInformation"
                size="xs"
                onClick={() => {
                  setNewTodo({ ...newTodo, important: !newTodo.important })
                }}
              ></Button>
            </Tooltip>
            <Tooltip text="Starred" position="bottom">
              <Button
                transparent={!newTodo.starred}
                iconOnly
                background={newTodo.starred ? "warning" : "rgba(0,0,0,.2)"}
                onClick={() => {
                  setNewTodo({ ...newTodo, starred: !newTodo.starred })
                }}
                icon="mdiStar"
                size="xs"
              ></Button>
            </Tooltip>
            <Dropdown
              listener="click"
              list={labels.map((label, idx: number) => (
                <Checkbox
                  key={idx}
                  id={`ad-tsk${idx}`}
                  color={label.color}
                  active={newTodo.labels?.includes(idx)}
                  onCheck={(value: boolean) => {
                    const tmp = newTodo
                    const setLabels = new Set(tmp.labels)

                    if (value) {
                      setLabels.add(idx)
                    } else {
                      setLabels.delete(idx)
                    }
                    setNewTodo({ ...newTodo, labels: [...setLabels] })
                  }}
                >
                  <p style={{ fontWeight: 500 }}>{label.name}</p>
                </Checkbox>
              ))}
            >
              <Button
                iconOnly
                background="primary"
                icon="mdiTag"
                size="xs"
              ></Button>
            </Dropdown>
          </FlexRow>
          <FlexRow align="left" position="top">
            <Input
              id="add-name"
              color="primary"
              label="Title"
              placeholder="What do you to do?"
              onInputChange={(value: string) => {
                setNewTodo({ ...newTodo, name: value })
              }}
              style={{ width: "100%" }}
            />
          </FlexRow>
          <FlexRow align="right" position="top">
            <TextArea
              id="add-descripton"
              color="primary"
              label="Description"
              placeholder="Say more..."
              onInputChange={(value: string) => {
                setNewTodo({ ...newTodo, description: value })
              }}
              style={{ width: "100%" }}
            />
          </FlexRow>
        </FlexColumn>
      </Modal>

      {/* Edit Todo */}
      <Modal
        active={openEditTaskModal}
        onClose={() => {
          setOpenEditTaskModal(false)
        }}
        color="primary"
        title="Edit Task"
        submitButton={
          <Button
            disabled={!newTodo.name.length}
            onClick={() => {
              editTask()
            }}
          >
            Submit
          </Button>
        }
      >
        <FlexColumn>
          <FlexRow align="stretch" position="top">
            <Checkbox
              active={newTodo?.completed}
              onCheck={() => {
                setNewTodo({ ...newTodo, completed: !newTodo?.completed })
              }}
            ></Checkbox>
            <FlexRow align="right" position="top" gap="10px">
              <Tooltip text="Important" position="bottom">
                <Button
                  transparent={!newTodo?.important}
                  iconOnly
                  background={newTodo?.important ? "success" : "rgba(0,0,0,.2)"}
                  icon="mdiInformation"
                  size="xs"
                  onClick={() => {
                    setNewTodo({ ...newTodo, important: !newTodo?.important })
                  }}
                ></Button>
              </Tooltip>
              <Tooltip text="Starred" position="bottom">
                <Button
                  transparent={!newTodo?.starred}
                  iconOnly
                  background={newTodo?.starred ? "warning" : "rgba(0,0,0,.2)"}
                  onClick={() => {
                    setNewTodo({ ...newTodo, starred: !newTodo?.starred })
                  }}
                  icon="mdiStar"
                  size="xs"
                ></Button>
              </Tooltip>
              <Dropdown
                listener="click"
                list={labels.map((label, idx: number) => (
                  <Checkbox
                    key={idx}
                    id={`ad-tsk${idx}`}
                    color={label.color}
                    active={newTodo?.labels?.includes(idx)}
                    onCheck={(value: boolean) => {
                      const tmp = newTodo
                      const setLabels = new Set(tmp?.labels)

                      if (value) {
                        setLabels.add(idx)
                      } else {
                        setLabels.delete(idx)
                      }
                      setNewTodo({ ...newTodo, labels: [...setLabels] })
                    }}
                  >
                    <p style={{ fontWeight: 500 }}>{label.name}</p>
                  </Checkbox>
                ))}
              >
                <Button
                  iconOnly
                  background="primary"
                  icon="mdiTag"
                  size="xs"
                ></Button>
              </Dropdown>
            </FlexRow>
          </FlexRow>
          <FlexRow align="right" position="top">
            <Input
              id="add-name"
              color="primary"
              label="Title"
              defaultValue={newTodo?.name}
              placeholder="What do you to do?"
              onInputChange={(value: string) => {
                setNewTodo({ ...newTodo, name: value })
              }}
              style={{ width: "100%" }}
            />
          </FlexRow>
          <FlexRow align="right" position="top">
            <TextArea
              id="add-descripton"
              color="primary"
              label="Description"
              defaultValue={newTodo?.description}
              placeholder="Say more..."
              onInputChange={(value: string) => {
                setNewTodo({ ...newTodo, description: value })
              }}
              style={{ width: "100%" }}
            />
          </FlexRow>
        </FlexColumn>
      </Modal>
    </TodosContainer>
  )
}
export default Todos
