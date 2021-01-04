import React, { useEffect } from "react"
import { FlexRow, Card, Breadcrumb, Container, Select } from "@rap/ui"
import Icon from "@mdi/react"
import { mdiHomeOutline } from "@mdi/js"

const SelectPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Container>
      <Card withBackground={false}>
        <FlexRow gap="10px" position="center" align="left">
          <h3 style={{ borderRight: "1px solid #999", paddingRight: "12px" }}>
            Select
          </h3>
          <Breadcrumb
            item={[
              { name: <Icon path={mdiHomeOutline} size={0.85} />, to: "/" },
              { name: "Components", to: "/" },
              { name: "Select", to: "" },
            ]}
          />
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Default</h5>
        <p>
          To add a Select use the component <code>Select</code>
        </p>
        <Select id="select-1" options={["Option 1", "Option 2", "Option 3"]} />
      </Card>
      <Card xsCol="12">
        <h5>Placeholder</h5>
        <p>
          To set the placeholder, set the <code>placeholder</code> prop.
        </p>
        <FlexRow>
          <Select
            size="sm"
            id="ianbt"
            placeholder="Choose an option"
            options={["Option 1", "Option 2", "Option 3"]}
          />
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Default Selected</h5>
        <p>
          To set the default checked, set the <code>defaultSelected</code> prop
          to option value.
        </p>
        <FlexRow>
          <Select
            size="sm"
            id="inbt"
            defaultSelected="Option 1"
            placeholder="Choose an option"
            options={["Option 1", "Option 2", "Option 3"]}
          />
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Size</h5>
        <p>
          To change size set the <code>size</code> prop. Select supports{" "}
          <code>sm</code>, <code>md</code>, <code>lg</code>. Default is{" "}
          <code>sm</code>
        </p>
        <FlexRow>
          <Select
            size="sm"
            id="inbt"
            defaultSelected="Option 1"
            options={["Option 1", "Option 2", "Option 3"]}
          />
          <Select
            size="md"
            id="igtn"
            defaultSelected="Option 1"
            options={["Option 1", "Option 2", "Option 3"]}
          />
          <Select
            size="lg"
            id="sfin"
            defaultSelected="Option 1"
            options={["Option 1", "Option 2", "Option 3"]}
          />
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Color</h5>
        <p>
          To change the color, set the <code>color</code> prop to theme color /
          HEX / RGB colors
        </p>
        <FlexRow>
          <Select
            id="intjkf"
            color="primary"
            defaultSelected="Option 1"
            options={["Option 1", "Option 2", "Option 3"]}
          />
          <Select
            id="isgponfgd"
            color="success"
            defaultSelected="Option 1"
            options={["Option 1", "Option 2", "Option 3"]}
          />
          <Select
            id="irwgoibn"
            color="info"
            defaultSelected="Option 1"
            options={["Option 1", "Option 2", "Option 3"]}
          />
          <Select
            size="sm"
            id="iaerbjkn"
            color="warning"
            defaultSelected="Option 1"
            options={["Option 1", "Option 2", "Option 3"]}
          />
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Label</h5>
        <p>
          To add a Label set <code>label</code> prop.
        </p>
        <FlexRow>
          <Select
            id="ifknf"
            label="Primary Select"
            color="primary"
            defaultSelected="Option 1"
            options={["Option 1", "Option 2", "Option 3"]}
          />
          <Select
            id="infgsrd"
            color="success"
            label="Success Select"
            defaultSelected="Option 1"
            options={["Option 1", "Option 2", "Option 3"]}
          />
          <Select
            id="irbsopfn"
            color="info"
            label="Info Select"
            defaultSelected="Option 1"
            options={["Option 1", "Option 2", "Option 3"]}
          />
          <Select
            size="sm"
            id="iasropjlen"
            color="warning"
            label="Warning Select"
            defaultSelected="Option 1"
            options={["Option 1", "Option 2", "Option 3"]}
          />
        </FlexRow>
      </Card>
    </Container>
  )
}
export default SelectPage
