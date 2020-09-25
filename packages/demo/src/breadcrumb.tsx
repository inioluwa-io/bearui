import React from "react"
import {
  FlexRow,
  Card,
  Breadcrumb,
  Container,
  Grid,
  Tabs,
  FlexColumn,
} from "@rap/ui"

const BreadcrumbPage: React.FC<any> = () => {
  return (
    <FlexRow style={{ minHeight: "100vh" }} yPosition="top">
      <Container>
        <Grid xsCol="12">
          <FlexRow gap="7px" yPosition="top" xPosition="left">
            <p>Breadcrumb:</p>
            <Breadcrumb
              seperator="mdiChevronDoubleRight"
              item={[
                { name: "Home", to: "/" },
                { name: "Datatable", to: "#datatable" },
                { name: "Breadcrumb", to: "" },
              ]}
            />
          </FlexRow>
        </Grid>
        <Card size="xs" smCol="7">
          <Tabs
            color="warning"
            align="fixed"
            list={[
              {
                title: "Success",
                content: (
                  <Container>
                    <Tabs
                      color="warning"
                      align="right"
                      position="left"
                      list={[
                        {
                          title: "Success",
                          content: (
                            <p>
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Accusantium similique nobis odit
                              qui eos laborum natus at quibusdam, laudantium
                              ipsum quod optio veniam minima pariatur quidem
                              praesentium dolor nostrum magni!
                            </p>
                          ),
                          color: "success",
                        },
                        { title: "Info", content: <p>f</p>, color: "info" },
                        {
                          title: "Danger",
                          content: (
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Qui corporis magni architecto
                              neque, recusandae a sapiente accusantium quae
                              vitae modi ea suscipit tempora delectus quo sunt?
                              Autem, quas. Molestias, rerum.
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Qui corporis magni architecto neque, recusandae a sapiente
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
        <Card size="xs" mdCol = "5" smCol="12">
          <Tabs
            color="warning"
            align="fixed"
            list={[
              {
                title: "Success",
                content: (
                  <Container>
                    <Tabs
                      color="warning"
                      align="right"
                      position="left"
                      list={[
                        {
                          title: "Success",
                          content: (
                            <p>
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Accusantium similique nobis odit
                              qui eos laborum natus at quibusdam, laudantium
                              ipsum quod optio veniam minima pariatur quidem
                              praesentium dolor nostrum magni!
                            </p>
                          ),
                          color: "success",
                        },
                        { title: "Info", content: <p>f</p>, color: "info" },
                        {
                          title: "Danger",
                          content: (
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Qui corporis magni architecto
                              neque, recusandae a sapiente accusantium quae
                              vitae modi ea suscipit tempora delectus quo sunt?
                              Autem, quas. Molestias, rerum.
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Qui corporis magni architecto neque, recusandae a sapiente
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
    </FlexRow>
  )
}
export default BreadcrumbPage
