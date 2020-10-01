import React from "react"
import {
  FlexRow,
  Card,
  Breadcrumb,
  Container,
  Grid,
  Collapse,
  FlexColumn,
} from "@rap/ui"
import Icon from "@mdi/react"
import { mdiHomeOutline } from "@mdi/js"

const CollapsePage: React.FC<any> = () => {
  return (
    <FlexColumn style={{ minHeight: "100vh" }}>
      <Container>
        <Grid mdCol="3" smCol="1" xsCol="12"></Grid>
        <Grid mdCol="9" smCol="11" xsCol="12">
          <Card withBackground={false}>
            <FlexRow gap="10px" yPosition="center" xPosition="left">
              <h3
                style={{ borderRight: "1px solid #999", paddingRight: "12px" }}
              >
                Collapse
              </h3>
              <Breadcrumb
                seperator="mdiChevronDoubleRight"
                item={[
                  { name: <Icon path={mdiHomeOutline} size={0.85} />, to: "/" },
                  { name: "Collapse", to: "" },
                ]}
              />
            </FlexRow>
          </Card>
          <Card xsCol="12">
            <h5>Default</h5>
            <p>
              To add a Collapse use the component <code>Collapse</code>
            </p>
            <FlexRow>
              <Collapse
                items={[
                  {
                    label: "Collapse Item 1",
                    content: (
                      <>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque rhoncus eros tortor, non fringilla
                          lectus cursus et. Fusce vel nisi ante. Aliquam sit
                          amet lectus pharetra, luctus mi sed, aliquet felis.
                          Mauris a tortor viverra, ornare tellus in, consectetur
                          leo.Etiam nec nunc nec nisl luctus tincidunt efficitur
                          vitae elit.
                        </p>
                      </>
                    ),
                  },
                  {
                    label: "Collapse Item 2",
                    content: (
                      <>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque rhoncus eros tortor, non fringilla
                          lectus cursus et. Fusce vel nisi ante. Aliquam sit
                          amet lectus pharetra, luctus mi sed, aliquet felis.
                          Mauris a tortor viverra, ornare tellus in, consectetur
                          leo.Etiam nec nunc nec nisl luctus tincidunt efficitur
                          vitae elit.
                        </p>
                      </>
                    ),
                    disabled: true,
                  },
                  {
                    label: "Collapse Item 3",
                    content: (
                      <>
                        <p>
                          Vestibulum iaculis nibh commodo neque ultrices
                          lobortis. Cras magna massa, pretium vitae mattis
                          varius, pharetra nec massa. Aliquam ac ex enim.
                          Quisque consequat dui libero, vel blandit lorem
                          porttitor sit amet. Vestibulum ante ipsum primis in
                          faucibus orci luctus et ultrices posuere cubilia
                          Curae; Nullam sed lobortis nisl, quis eleifend metus.
                        </p>
                      </>
                    ),
                  },
                ]}
              />
            </FlexRow>
          </Card>
          <Card xsCol="12">
            <h5>Accordion</h5>
            <p>
              You may need to show only one element at a time. Set{" "}
              <code>accordion</code> prop to <code>true</code>
            </p>
            <FlexRow>
              <Collapse
                accordion={true}
                items={[
                  {
                    label: "Collapse Item 1",
                    content: (
                      <>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque rhoncus eros tortor, non fringilla
                          lectus cursus et. Fusce vel nisi ante. Aliquam sit
                          amet lectus pharetra, luctus mi sed, aliquet felis.
                          Mauris a tortor viverra, ornare tellus in, consectetur
                          leo.Etiam nec nunc nec nisl luctus tincidunt efficitur
                          vitae elit.
                        </p>
                      </>
                    ),
                  },
                  {
                    label: "Collapse Item 2",
                    content: (
                      <>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque rhoncus eros tortor, non fringilla
                          lectus cursus et. Fusce vel nisi ante. Aliquam sit
                          amet lectus pharetra, luctus mi sed, aliquet felis.
                          Mauris a tortor viverra, ornare tellus in, consectetur
                          leo.Etiam nec nunc nec nisl luctus tincidunt efficitur
                          vitae elit.
                        </p>
                      </>
                    ),
                    disabled: true,
                  },
                  {
                    label: "Collapse Item 3",
                    content: (
                      <>
                        <p>
                          Vestibulum iaculis nibh commodo neque ultrices
                          lobortis. Cras magna massa, pretium vitae mattis
                          varius, pharetra nec massa. Aliquam ac ex enim.
                          Quisque consequat dui libero, vel blandit lorem
                          porttitor sit amet. Vestibulum ante ipsum primis in
                          faucibus orci luctus et ultrices posuere cubilia
                          Curae; Nullam sed lobortis nisl, quis eleifend metus.
                        </p>
                      </>
                    ),
                  },
                ]}
              />
            </FlexRow>
          </Card>
          <Card xsCol="12">
            <h5>Listener</h5>
            <p>
              Collapse supports 2 types of listeners. They are{" "}
              <code>hover</code> and <code>click</code>
            </p>
            <FlexRow>
              <Collapse
                accordion={true}
                listener="hover"
                items={[
                  {
                    label: "Hover Collapse Item 1",
                    content: (
                      <>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque rhoncus eros tortor, non fringilla
                          lectus cursus et. Fusce vel nisi ante. Aliquam sit
                          amet lectus pharetra, luctus mi sed, aliquet felis.
                          Mauris a tortor viverra, ornare tellus in, consectetur
                          leo.Etiam nec nunc nec nisl luctus tincidunt efficitur
                          vitae elit.
                        </p>
                      </>
                    ),
                  },
                  {
                    label: "Hover Collapse Item 2",
                    content: (
                      <>
                        <p>
                          Vestibulum iaculis nibh commodo neque ultrices
                          lobortis. Cras magna massa, pretium vitae mattis
                          varius, pharetra nec massa. Aliquam ac ex enim.
                          Quisque consequat dui libero, vel blandit lorem
                          porttitor sit amet. Vestibulum ante ipsum primis in
                          faucibus orci luctus et ultrices posuere cubilia
                          Curae; Nullam sed lobortis nisl, quis eleifend metus.
                        </p>
                      </>
                    ),
                    disabled: true,
                  },
                ]}
              />
            </FlexRow>
          </Card>
          <Card xsCol="12">
            <h5>Change Arrow Icon</h5>
            <p>
              You can customise the arrow on the component. They are{" "}
              <code>hover</code> and <code>click</code>
            </p>
            <FlexRow>
              <Collapse
                accordion={true}
                listener="hover"
                items={[
                  {
                    label: "Hover Collapse Item 1",
                    content: (
                      <>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque rhoncus eros tortor, non fringilla
                          lectus cursus et. Fusce vel nisi ante. Aliquam sit
                          amet lectus pharetra, luctus mi sed, aliquet felis.
                          Mauris a tortor viverra, ornare tellus in, consectetur
                          leo.Etiam nec nunc nec nisl luctus tincidunt efficitur
                          vitae elit.
                        </p>
                      </>
                    ),
                  },
                  {
                    label: "Hover Collapse Item 2",
                    content: (
                      <>
                        <p>
                          Vestibulum iaculis nibh commodo neque ultrices
                          lobortis. Cras magna massa, pretium vitae mattis
                          varius, pharetra nec massa. Aliquam ac ex enim.
                          Quisque consequat dui libero, vel blandit lorem
                          porttitor sit amet. Vestibulum ante ipsum primis in
                          faucibus orci luctus et ultrices posuere cubilia
                          Curae; Nullam sed lobortis nisl, quis eleifend metus.
                        </p>
                      </>
                    ),
                    disabled: true,
                  },
                ]}
              />
            </FlexRow>
          </Card>
        </Grid>
      </Container>
    </FlexColumn>
  )
}
export default CollapsePage
