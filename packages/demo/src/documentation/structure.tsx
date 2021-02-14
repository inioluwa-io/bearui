import {
  FlexRow,
  Container,
  Card,
  FlexColumn,
  getColorFromTheme,
  useTheme,
} from "@bearui/ui"
import { mdiFolder } from "@mdi/js"
import Icon from "@mdi/react"
import React from "react"
import styled from "styled-components"

const DocumentationContainer: any = styled(Container)`
  .title {
    font-weight: 600;
  }
  h1 {
    font-size: 0.83em;
  }
  p,
  li {
    font-size: 15px;
    line-height: 1.5rem;
  }
  .description {
  }
  li {
    &:not(:last-child) {
      margin-bottom: 10px;
    }

    display: block;
    ul {
      margin-top: 15px;
      margin-left: 20px;
    }
  }
`
const srcData = [
  {
    title: "apps",
    description: "contains all application components",
  },
  {
    title: "assets",
    description: "contains web resource like images, videos, etc...",
  },
  {
    title: "cards",
    description:
      "contains all card components which includes analytics and statistics cards.",
  },
  {
    title: "components",
    description:
      "contains descriptive pages of each UI components the are imported from the bearui-ui package.",
  },
  {
    title: "configs",
    description:
      "contains bearui configuration settings, such as theme and navigation.",
  },
  {
    title: "dashboards",
    description:
      "contains dashboard demos, such as crypto and default dashboard.",
  },
  {
    title: "forms",
    description: "contains pre-built forms layout.",
  },
  {
    title: "layouts",
    description:
      "contains descriptive pages for layout components, such as flexRow, flexColumn, and grid.",
  },
  {
    title: "pages",
    description:
      "contains already made pages, such as login, register, 404, 500, user profile and more.",
  },
  {
    title: "widgets",
    description: "contains all widgets components.",
  },
]

const DocStructure: React.FC = () => {
  const theme = useTheme()
  return (
    <DocumentationContainer>
      <Card withBackground={false} xsCol="12">
        <FlexRow gap="10px" position="center" align="left">
          <h3 style={{ borderRight: "1px solid #999", paddingRight: "12px" }}>
            Documentation
          </h3>
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h1>Structure</h1>
        <p className="description">
          <strong>BearUI</strong> uses lerna and yarn workspace to local share
          packages and components.
        </p>

        <FlexColumn gap="10px">
          <h5>Core libraries used</h5>
          <ul>
            <li>
              <FlexRow>
                <Icon
                  path={mdiFolder}
                  color={getColorFromTheme("primary", theme)}
                  size={1}
                />
                <p className="title">Packages</p>
              </FlexRow>
              <ul>
                <li>
                  <FlexRow position="top">
                    <Icon
                      path={mdiFolder}
                      color={getColorFromTheme("primary", theme)}
                      size={1}
                    />
                    <div>
                      <FlexColumn gap="10px">
                        <p className="title">bearui-ui</p>
                        <p>
                          Contains all UI Components used throughout the
                          template.
                        </p>
                      </FlexColumn>
                    </div>
                  </FlexRow>
                </li>
                <li>
                  <FlexRow>
                    <Icon
                      path={mdiFolder}
                      color={getColorFromTheme("primary", theme)}
                      size={1}
                    />
                    <p className="title">Demo</p>
                  </FlexRow>
                  <ul>
                    <li>
                      <FlexRow>
                        <Icon
                          path={mdiFolder}
                          color={getColorFromTheme("primary", theme)}
                          size={1}
                        />
                        <p className="title">Public</p>
                      </FlexRow>
                    </li>
                    <li>
                      <FlexRow>
                        <Icon
                          path={mdiFolder}
                          color={getColorFromTheme("primary", theme)}
                          size={1}
                        />
                        <p className="title">Src</p>
                      </FlexRow>
                      <ul>
                        {srcData.map((item, idx) => (
                          <li key={idx}>
                            <FlexRow position="top">
                              <Icon
                                path={mdiFolder}
                                color={getColorFromTheme("primary", theme)}
                                size={1}
                              />
                              <div>
                                <FlexColumn gap="10px">
                                  <p className="title">{item.title}</p>
                                  <p>{item.description}</p>
                                </FlexColumn>
                              </div>
                            </FlexRow>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </FlexColumn>
      </Card>
    </DocumentationContainer>
  )
}

export default DocStructure
