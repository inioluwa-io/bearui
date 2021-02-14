import React from "react"
import { FlexRow, Card, Breadcrumb, Container, TextArea } from "@bearui/ui"
import Icon from "@mdi/react"
import { mdiHomeOutline } from "@mdi/js"
import { useEffect } from "react"

const TextAreaPage: React.FC<{}> = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Container>
      <Card withBackground={false}>
        <FlexRow gap="10px" position="center" align="left">
          <h3 style={{ borderRight: "1px solid #999", paddingRight: "12px" }}>
            TextArea
          </h3>
          <Breadcrumb
            item={[
              { name: <Icon path={mdiHomeOutline} size={0.85} />, to: "/" },
              { name: "Components", to: "/" },
              { name: "TextArea", to: "" },
            ]}
          />
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Default</h5>
        <p>
          To add an TextArea use the component <code>TextArea</code>
        </p>
        <FlexRow>
          <TextArea
            id="ifln"
            onInputChange={() => {}}
            placeholder="Default TextArea"
          />
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Size</h5>
        <p>
          To change size set the <code>size</code> prop. TextArea supports{" "}
          <code>sm</code>, <code>md</code>, <code>lg</code>. Default is{" "}
          <code>sm</code>
        </p>
        <FlexRow>
          <TextArea
            size="sm"
            id="inbt"
            onInputChange={() => {}}
            placeholder="Size sm TextArea"
          />
          <TextArea
            size="md"
            id="igtn"
            onInputChange={() => {}}
            placeholder="Size md TextArea"
          />
          <TextArea
            size="lg"
            id="sfin"
            onInputChange={() => {}}
            placeholder="Size lg TextArea"
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
          <TextArea
            id="intjkf"
            color="primary"
            onInputChange={() => {}}
            placeholder="Primary TextArea"
          />
          <TextArea
            id="isgponfgd"
            color="success"
            onInputChange={() => {}}
            placeholder="Success TextArea"
          />
          <TextArea
            id="irwgoibn"
            color="info"
            onInputChange={() => {}}
            placeholder="Info TextArea"
          />
          <TextArea
            size="sm"
            id="iaerbjkn"
            color="warning"
            onInputChange={() => {}}
            placeholder="Warning TextArea"
          />
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Clear button</h5>
        <p>
          To show a button clear TextArea, set the <code>clearButton</code> prop to
          true.
        </p>
        <FlexRow>
          <TextArea
            clearButton
            id="irlbiuernf"
            color="primary"
            onInputChange={() => {}}
            placeholder="Primary TextArea"
          />
          <TextArea
            clearButton
            id="afkjnminfgd"
            color="success"
            onInputChange={() => {}}
            placeholder="Success TextArea"
          />
          <TextArea
            id="irbnwrgbilj"
            clearButton
            color="info"
            onInputChange={() => {}}
            placeholder="Info TextArea"
          />
          <TextArea
            size="sm"
            clearButton
            id="iaewliugbvn"
            color="warning"
            onInputChange={() => {}}
            placeholder="Warning TextArea"
          />
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Label</h5>
        <p>
          To add a Label set <code>label</code> prop.
        </p>
        <FlexRow>
          <TextArea
            id="ifknf"
            label="Primary TextArea"
            color="primary"
            onInputChange={() => {}}
          />
          <TextArea
            id="infgsrd"
            color="success"
            label="Success TextArea"
            onInputChange={() => {}}
          />
          <TextArea
            id="irbsopfn"
            color="info"
            label="Info TextArea"
            onInputChange={() => {}}
          />
          <TextArea
            size="sm"
            id="iasropjlen"
            color="warning"
            label="Warning TextArea"
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
          <TextArea
            id="infornrfuoil"
            icon="mdiEmailOutline"
            color="primary"
            onInputChange={() => {}}
            placeholder="Enter email"
          />
          <TextArea
            id="afkbjinfgd"
            type="password"
            icon="mdiLock"
            color="success"
            onInputChange={() => {}}
            placeholder="Enter password"
          />
          <TextArea
            id="qkjflirbn"
            type="text"
            icon="mdiAccount"
            color="info"
            onInputChange={() => {}}
            placeholder="Enter fullname"
          />
          <TextArea
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
          <TextArea
            id="sgljjbwninf"
            iconRight
            icon="mdiEmailOutline"
            color="primary"
            onInputChange={() => {}}
            placeholder="Enter email"
          />
          <TextArea
            id="slfbjeinfgd"
            iconRight
            type="password"
            icon="mdiLock"
            color="success"
            onInputChange={() => {}}
            placeholder="Enter password"
          />
          <TextArea
            id="priuebkirbn"
            iconRight
            type="text"
            icon="mdiAccount"
            color="info"
            onInputChange={() => {}}
            placeholder="Enter fullname"
          />
          <TextArea
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
          To validate the TextArea value, set the <code>validate</code> prop to{" "}
          <code>alpha</code> / <code>number</code> / <code>email</code>.
        </p>
        <FlexRow position="top">
          <TextArea
            id="wiorhifinf"
            validate="alpha"
            type="email"
            color="primary"
            onInputChange={() => {}}
            placeholder="Alpha validation"
          />
          <TextArea
            id="zdkjflinfgd"
            validate="number"
            color="success"
            onInputChange={() => {}}
            placeholder="Number validation"
          />
          <TextArea
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
          <TextArea
            id="vkjermfinf"
            validate="alpha"
            type="text"
            color="primary"
            onInputChange={() => {}}
            placeholder="Alpha validation"
            successMessage="Valid alphabet format"
            errorMessage="Please type in only alphabets"
          />
          <TextArea
            id="aflplkjinfgd"
            validate="number"
            color="info"
            onInputChange={() => {}}
            placeholder="Number validation"
            successMessage="Valid number format"
            errorMessage="Please type in only numbers"
          />
          <TextArea
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
    </Container>
  )
}
export default TextAreaPage
