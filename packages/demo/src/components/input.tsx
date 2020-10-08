import React from "react"
import {
  FlexRow,
  Card,
  Breadcrumb,
  Container,
  Grid,
  Input,
} from "@rap/ui"
import Icon from "@mdi/react"
import { mdiHomeOutline } from "@mdi/js"
import { useEffect } from "react"

const InputPage: React.FC<{}> = () => {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  return (
    <Container>
      <Grid xsCol="12">
        <Card withBackground={false}>
          <FlexRow gap="10px" position="center" align="left">
            <h3 style={{ borderRight: "1px solid #999", paddingRight: "12px" }}>
              Input
            </h3>
            <Breadcrumb
              seperator="mdiChevronDoubleRight"
              item={[
                { name: <Icon path={mdiHomeOutline} size={0.85} />, to: "/" },
                { name: "Components", to: "/" },
                { name: "Input", to: "" },
              ]}
            />
          </FlexRow>
        </Card>
        <Card xsCol="12">
          <h5>Default</h5>
          <p>
            To add an Input use the component <code>Input</code>
          </p>
          <FlexRow>
            <Input
              id="ifln"
              onInputChange={() => {}}
              placeholder="Default Input"
            />
          </FlexRow>
        </Card>
        <Card xsCol="12">
          <h5>Size</h5>
          <p>
            To change size set the <code>size</code> prop. Input supports{" "}
            <code>sm</code>, <code>md</code>, <code>lg</code>. Default is{" "}
            <code>sm</code>
          </p>
          <FlexRow>
            <Input
              size="sm"
              id="inbt"
              onInputChange={() => {}}
              placeholder="Size sm Input"
            />
            <Input
              size="md"
              id="igtn"
              onInputChange={() => {}}
              placeholder="Size md Input"
            />
            <Input
              size="lg"
              id="sfin"
              onInputChange={() => {}}
              placeholder="Size lg Input"
            />
          </FlexRow>
        </Card>
        <Card xsCol="12">
          <h5>Color</h5>
          <p>
            To change the color, set the <code>color</code> prop to theme color
            / HEX / RGB colors
          </p>
          <FlexRow>
            <Input
              id="intjkf"
              color="primary"
              onInputChange={() => {}}
              placeholder="Primary Input"
            />
            <Input
              id="isgponfgd"
              color="success"
              onInputChange={() => {}}
              placeholder="Success Input"
            />
            <Input
              id="irwgoibn"
              color="info"
              onInputChange={() => {}}
              placeholder="Info Input"
            />
            <Input
              size="sm"
              id="iaerbjkn"
              color="warning"
              onInputChange={() => {}}
              placeholder="Warning Input"
            />
          </FlexRow>
        </Card>
        <Card xsCol="12">
          <h5>Clear button</h5>
          <p>
            To show a button clear input, set the <code>clearButton</code> prop
            to true.
          </p>
          <FlexRow>
            <Input
              clearButton
              id="irlbiuernf"
              color="primary"
              onInputChange={() => {}}
              placeholder="Primary Input"
            />
            <Input
              clearButton
              id="afkjnminfgd"
              color="success"
              onInputChange={() => {}}
              placeholder="Success Input"
            />
            <Input
              id="irbnwrgbilj"
              clearButton
              color="info"
              onInputChange={() => {}}
              placeholder="Info Input"
            />
            <Input
              size="sm"
              clearButton
              id="iaewliugbvn"
              color="warning"
              onInputChange={() => {}}
              placeholder="Warning Input"
            />
          </FlexRow>
        </Card>
        <Card xsCol="12">
          <h5>Label</h5>
          <p>
            To add a Label set <code>label</code> prop.
          </p>
          <FlexRow>
            <Input
              id="ifknf"
              label="Primary input"
              color="primary"
              onInputChange={() => {}}
            />
            <Input
              id="infgsrd"
              color="success"
              label="Success input"
              onInputChange={() => {}}
            />
            <Input
              id="irbsopfn"
              color="info"
              label="Info input"
              onInputChange={() => {}}
            />
            <Input
              size="sm"
              id="iasropjlen"
              color="warning"
              label="Warning input"
              onInputChange={() => {}}
            />
          </FlexRow>
        </Card>
        <Card xsCol="12">
          <h5>Icon</h5>
          <p>
            To add an Icon set the <code>icon</code> prop to name of Icon. This
            uses mdi Icons, check{" "}
            <a href="https://" target="_blank" rel="noopener noreferrer">
              mdi documentation
            </a>
          </p>
          <FlexRow>
            <Input
              id="infornrfuoil"
              icon="mdiEmailOutline"
              color="primary"
              onInputChange={() => {}}
              placeholder="Enter email"
            />
            <Input
              id="afkbjinfgd"
              type="password"
              icon="mdiLock"
              color="success"
              onInputChange={() => {}}
              placeholder="Enter password"
            />
            <Input
              id="qkjflirbn"
              type="text"
              icon="mdiAccount"
              color="info"
              onInputChange={() => {}}
              placeholder="Enter fullname"
            />
            <Input
              size="sm"
              id="zfinrpeiaen"
              type="number"
              icon="mdiNumeric"
              color="warning"
              onInputChange={() => {}}
              placeholder="Enter age"
            />
          </FlexRow>
        </Card>
        <Card xsCol="12">
          <h5>Icon right</h5>
          <p>
            To move Icon to the right set <code>iconRight</code> prop to true.
          </p>
          <FlexRow>
            <Input
              id="sgljjbwninf"
              iconRight
              icon="mdiEmailOutline"
              color="primary"
              onInputChange={() => {}}
              placeholder="Enter email"
            />
            <Input
              id="slfbjeinfgd"
              iconRight
              type="password"
              icon="mdiLock"
              color="success"
              onInputChange={() => {}}
              placeholder="Enter password"
            />
            <Input
              id="priuebkirbn"
              iconRight
              type="text"
              icon="mdiAccount"
              color="info"
              onInputChange={() => {}}
              placeholder="Enter fullname"
            />
            <Input
              iconRight
              id="mvnrjkliaen"
              type="number"
              icon="mdiNumeric"
              color="warning"
              onInputChange={() => {}}
              placeholder="Enter age"
            />
          </FlexRow>
        </Card>
        <Card xsCol="12">
          <h5>Validate</h5>
          <p>
            To validate the input value, set the <code>validate</code> prop to{" "}
            <code>alpha</code> / <code>number</code> / <code>email</code>.
          </p>
          <FlexRow position="top">
            <Input
              id="wiorhifinf"
              validate="alpha"
              type="email"
              color="primary"
              onInputChange={() => {}}
              placeholder="Alpha validation"
            />
            <Input
              id="zdkjflinfgd"
              validate="number"
              color="success"
              onInputChange={() => {}}
              placeholder="Number validation"
            />
            <Input
              id="poiurhnirbn"
              validate="email"
              color="info"
              onInputChange={() => {}}
              placeholder="Email validation"
            />
          </FlexRow>
        </Card>
        <Card xsCol="12">
          <h5>Set Success and Error messages</h5>
          <p>
            You can change the success message and error message, set the{" "}
            <code>successMessage</code> or <code>errorMessage</code>.
          </p>
          <FlexRow position="top">
            <Input
              id="vkjermfinf"
              validate="alpha"
              type="text"
              color="primary"
              onInputChange={() => {}}
              placeholder="Alpha validation"
              successMessage="Valid alphabet format"
              errorMessage="Please type in only alphabets"
            />
            <Input
              id="aflplkjinfgd"
              validate="number"
              color="info"
              onInputChange={() => {}}
              placeholder="Number validation"
              successMessage="Valid number format"
              errorMessage="Please type in only numbers"
            />
            <Input
              id="qroimirbn"
              validate="email"
              color="warning"
              onInputChange={() => {}}
              placeholder="Email validation"
              successMessage="Valid email format"
              errorMessage="Please type in email format"
            />
          </FlexRow>
        </Card>
      </Grid>
    </Container>
  )
}
export default InputPage
