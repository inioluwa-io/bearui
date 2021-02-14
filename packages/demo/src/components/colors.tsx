import { mdiHomeOutline } from "@mdi/js"
import Icon from "@mdi/react"
import {
  Container,
  Card,
  FlexRow,
  Breadcrumb,
  useTheme,
} from "@bearui/ui"
import React from "react"
import styled from "styled-components"

const ColorsPageContainer: any = styled(Container)`
  .card {
    border-radius: 10px;
    padding: 30px;

    &:not(.trans) p {
      color: #fff;
    }
  }
`

const ColorsPage: React.FC = () => {
  const theme = useTheme()
  return (
    <ColorsPageContainer>
      <Card withBackground={false}>
        <FlexRow gap="10px" position="center" align="left">
          <h3 style={{ borderRight: "1px solid #999", paddingRight: "12px" }}>
            Colors
          </h3>
          <Breadcrumb
            item={[
              { name: <Icon path={mdiHomeOutline} size={0.85} />, to: "/" },
              { name: "Colors", to: "" },
            ]}
          />
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Default Colors</h5>
        <FlexRow>
          <div className="card" style={{ background: theme.colors.primary }}>
            <p>Primary</p>
          </div>
          <div className="card" style={{ background: theme.colors.success }}>
            <p>Success</p>
          </div>
          <div className="card" style={{ background: theme.colors.info }}>
            <p>Info</p>
          </div>
          <div className="card" style={{ background: theme.colors.warning }}>
            <p>Warning</p>
          </div>
          <div className="card" style={{ background: theme.colors.danger }}>
            <p>Danger</p>
          </div>
          <div className="card" style={{ background: theme.colors.white }}>
            <p style={{ color: "#222" }}>White</p>
          </div>
          <div
            className="card trans"
            style={{ background: theme.colors.transparent }}
          >
            <p>Transparent</p>
          </div>
          <div className="card" style={{ background: theme.colors.dark }}>
            <p>Dark</p>
          </div>
        </FlexRow>
      </Card>

      <Card xsCol="12">
        <h5>Customize Theme Colors</h5>
        <p>
          Use the <code>ThemeProvider</code> api to customize the theme colors.
        </p>
        <pre>
          <code>
            {`const themeValue: RapUITheme = {
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
        },
        lightmode: {
            background: "#e7e7e7",
            cardbackground: "#fdfdfd",
        },
   }

   <ThemeProvider value = {themeValue}>
        <App/>
   </ThemeProvider>`}
          </code>
        </pre>
      </Card>
    </ColorsPageContainer>
  )
}
export default ColorsPage
