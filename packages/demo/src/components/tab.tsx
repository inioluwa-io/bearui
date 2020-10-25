import React from "react"
import { FlexRow, Card, Breadcrumb, Container, Tabs } from "@rap/ui"
import Icon from "@mdi/react"
import { mdiHomeOutline } from "@mdi/js"

const TabPage: React.FC<any> = () => {
  return (
    <Container>
      <Card withBackground={false}>
        <FlexRow gap="7px" position="center" align="left">
          <h3 style={{ borderRight: "1px solid #999", paddingRight: "12px" }}>
            Tabs
          </h3>
          <Breadcrumb
            seperator="mdiChevronDoubleRight"
            item={[
              { name: <Icon path={mdiHomeOutline} size={0.85} />, to: "/" },
              { name: "Components", to: "/" },
              { name: "Tabs", to: "" },
            ]}
          />
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Default</h5>
        <p>
          To change size of a Button set the <code>size</code> prop. Avatar
          supports <code>xs</code>, <code>sm</code>, <code>md</code>,{" "}
          <code>lg</code>. Default is <code>sm</code>
        </p>
        <Tabs
          list={[
            {
              title: "Success",
              content: (
                <p>
                  Qui corporis magni architecto neque, recusandae a sapiente
                  accusantium quae vitae modi ea suscipit tempora delectus quo
                  sunt? Autem, quas. Molestias, rerum.
                </p>
              ),
            },
            {
              title: "Info",
              content: (
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing
                  accusantium quae vitae modi ea suscipit tempora delectus quo
                  sunt? Autem, quas. Molestias, rerum.
                </p>
              ),
            },
            {
              title: "Danger",
              content: (
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
                  corporis magni architecto neque, recusandae a sapiente
                  accusantium quae vitae modi ea suscipit tempora delectus quo
                  sunt? Autem, quas. Molestias, rerum.
                </p>
              ),
            },
            {
              title: "Warning",
              content: (
                <p>
                  Lorem ipsum dolor, sit amet recusandae a sapiente accusantium
                  quae vitae modi ea suscipit tempora delectus quo sunt? Autem,
                  quas. Molestias, rerum.
                </p>
              ),
            },
          ]}
        />
      </Card>
      <Card xsCol="12">
        <Tabs
          color="warning"
          align="center"
          list={[
            {
              title: "Success",
              content: (
                <Container>
                  <Tabs
                    color="warning"
                    position="left"
                    list={[
                      {
                        title: "Success",
                        content: (
                          <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Accusantium similique nobis odit qui eos
                            laborum natus at quibusdam, laudantium ipsum quod
                            optio veniam minima pariatur quidem praesentium
                            dolor nostrum magni!
                          </p>
                        ),
                        color: "success",
                      },
                      { title: "Info", content: <p>f</p>, color: "info" },
                      {
                        title: "Danger",
                        content: (
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Qui corporis magni architecto neque,
                            recusandae a sapiente accusantium quae vitae modi ea
                            suscipit tempora delectus quo sunt? Autem, quas.
                            Molestias, rerum.
                          </p>
                        ),
                        color: "danger",
                      },
                      {
                        title: "Warning",
                        content: <p>ffmh</p>,
                        color: "warning",
                      },
                    ]}
                  />
                </Container>
              ),
              color: "success",
            },
            { title: "Info", content: <p>f</p>, color: "info" },
            {
              title: "Danger",
              content: (
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
                  corporis magni architecto neque, recusandae a sapiente
                  accusantium quae vitae modi ea suscipit tempora delectus quo
                  sunt? Autem, quas. Molestias, rerum.
                </p>
              ),
              color: "danger",
            },
            {
              title: "Warning",
              content: <p>ffmh</p>,
              color: "warning",
            },
          ]}
        />
      </Card>
    </Container>
  )
}
export default TabPage
