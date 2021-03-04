import { FlexRow, Container, Card, FlexColumn } from "@bearui/ui"
import React from "react"
import styled from "styled-components"

const DocumentationContainer: any = styled(Container)`
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
    display: block;
  }
`

const DocTemplate: React.FC = () => {
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
        <h1>Template</h1>
        <p className="description">
          <strong>BearUI</strong> comes with a customizable theme layout for
          your project.
        </p>

        <FlexColumn gap="10px">
          <h5>Configure Theme</h5>
          <p className="description">
            change the theme setup from{" "}
            <code>packages/demo/src/configs/appConfig.ts</code>
          </p>

          <pre>
            <code>
              {`import { NavbarPosition, RapUIThemeMode, RapUITheme } from "@rap/ui"

type ThemeConfigProps = {
  navbarPosition: NavbarPosition
  currentTheme: RapUIThemeMode
  colorPalette: RapUITheme
  restEndPoint: string
  availableLanguages: any
}

const themeConfig: ThemeConfigProps = {
  navbarPosition: "sticky",
  currentTheme: "lightmode",
  restEndPoint: "http://localhost:5000",
  availableLanguages: {
    en: "English",
    fr: "Français",
  },
  colorPalette: {
    colors: {
      primary: "rgb(115,103,240)",
      success: "rgb(40,199,111)",
      info: "rgb(45, 136, 255)",
      warning: "rgb(255,159,67)",
      danger: "rgb(234,84,85)",
      transparent: "rgba(255,255,255,0)",
      white: "#ffffff",
      dark: "rgb(30,30,30)",
    },
    darkmode: {
      background: "#282c34",
      cardbackground: "#3E4451",
      textColor: "#f4f4f4",
    },
    lightmode: {
      background: "#e7e7e7",
      cardbackground: "#fdfdfd",
      textColor: "#444444",
    },
  },
}

export default themeConfig
`}
            </code>
          </pre>
        </FlexColumn>
      </Card>
    </DocumentationContainer>
  )
}

export default DocTemplate
