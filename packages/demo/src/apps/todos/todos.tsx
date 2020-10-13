import React, { useEffect, useState } from "react"
import {
  FlexRow,
  Input,
  Card,
  Container,
  Grid,
  FlexColumn,
  Checkbox,
  Chip,
  Button,
} from "@rap/ui"
import styled from "styled-components"
import _ from "lodash"

const TodosContainer: any = styled.div`
  .truncate {
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
  }
  .dsk-pnl {
    position: sticky;
    ${(props: any) => props.panelTop}
  }
  @media (min-width: 768px) {
    .sc-str {
      flex: 1;
    }
  }
`

const Todos: React.FC<any> = () => {
  const [navClass, setNavClass] = useState<string>()

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
        return `
        top: 95px;`
      case "nav-sticky":
        return `
        top: 80px;`
      case "nav-static":
        return `
        top: 10px;`
      default:
        return `
        top: 95px;`
    }
  }

  return (
    <TodosContainer panelTop={getPanelTop()}>
      <Container>
        <Grid mdCol="4" lgCol="3" xsCol="12" className="dsk-pnl">
          <Card xsCol="12" gap="15px">
            <FlexRow align="right" position="top">
              <Input
                icon="mdiMagnify"
                type="text"
                id="todos-search"
                clearButton
                className="sc-str"
                onInputChange={value => {}}
                placeholder="Search"
                color="primary"
              />
            </FlexRow>
            <FlexColumn align="stretch">
              <Button icon="mdiPlus">Add Task</Button>
            </FlexColumn>
          </Card>
        </Grid>
        <Grid mdCol="8" lgCol="9" xsCol="12">
          <Card xsCol="12">
            <FlexColumn gap="10px">
              <FlexRow align="stretch">
                <FlexRow gap="10px">
                  <div>
                    <Checkbox id="todo-1">
                      <p style={{ fontWeight: 500 }}>
                        First Todo Ever
                        <span role="img" aria-label="smile">
                          😁
                        </span>
                      </p>
                    </Checkbox>
                  </div>
                  <Chip color="primary" transparent>
                    Frontend
                  </Chip>
                  <Chip color="success" transparent>
                    Backend
                  </Chip>
                </FlexRow>
                <Button></Button>
              </FlexRow>
              <p className="truncate">
                {_.truncate(
                  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ducimus ratione qui consequatur perspiciatis voluptatum vel sapiente cumque, itaque illo repellendus mollitia vitae, dicta impedit fugiat asperiores excepturi? Obcaecati, eveniet!`,
                  { length: 100 }
                )}
              </p>
            </FlexColumn>
          </Card>
          <Card xsCol="12">
            <FlexColumn gap="10px">
              <FlexRow align="stretch">
                <FlexRow gap="10px">
                  <div>
                    <Checkbox id="todo-2">
                      <p style={{ fontWeight: 500 }}>
                        First Todo Ever
                        <span role="img" aria-label="smile">
                          😁
                        </span>
                      </p>
                    </Checkbox>
                  </div>
                  <Chip color="info" transparent>
                    DevOps
                  </Chip>
                  <Chip color="warning" transparent>
                    Designer
                  </Chip>
                </FlexRow>
              </FlexRow>
              <p className="truncate">
                {_.truncate(
                  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ducimus ratione qui consequatur perspiciatis voluptatum vel sapiente cumque, itaque illo repellendus mollitia vitae, dicta impedit fugiat asperiores excepturi? Obcaecati, eveniet!`,
                  { length: 100 }
                )}
              </p>
            </FlexColumn>
          </Card>
        </Grid>
      </Container>
    </TodosContainer>
  )
}
export default Todos
