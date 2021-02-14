import { Button, Card, Checkbox, FlexColumn, FlexRow, Input } from "@bearui/ui"
import React from "react"

const VerticalForm: React.FC = () => {
  return (
    <>
      <Card xsCol="12" mdCol="6" gap="25px">
        <h5>Vertical Form</h5>
        <FlexColumn>
          <FlexRow align="stretch">
            <Input
              onInputChange={() => {}}
              color="primary"
              id="fullnamev1"
              label="Fullname"
            />
          </FlexRow>
          <FlexRow align="stretch">
            <Input
              onInputChange={() => {}}
              type="email"
              color="primary"
              id="emailv1"
              label="Email"
            />
          </FlexRow>
          <FlexRow align="stretch">
            <Input
              onInputChange={() => {}}
              color="primary"
              id="mobilev1"
              label="Mobile"
            />
          </FlexRow>
          <FlexRow align="stretch">
            <Input
              onInputChange={() => {}}
              type="password"
              color="primary"
              id="passwordv1"
              label="Password"
            />
          </FlexRow>
        </FlexColumn>

        <Checkbox id="ver-check-1">
          <p style={{ fontWeight: 500 }}>Remember Me</p>
        </Checkbox>

        <Button>Submit</Button>
      </Card>

      {/* With Icon */}
      <Card xsCol="12" mdCol="6" gap="25px">
        <h5>Vertical Form</h5>
        <FlexColumn>
          <FlexRow align="stretch">
            <Input
              onInputChange={() => {}}
              icon="mdiAccount"
              color="primary"
              id="fullnamev2"
              label="Fullname"
            />
          </FlexRow>
          <FlexRow align="stretch">
            <Input
              onInputChange={() => {}}
              type="email"
              icon="mdiEmailOutline"
              color="primary"
              id="emailv2"
              label="Email"
            />
          </FlexRow>
          <FlexRow align="stretch">
            <Input
              onInputChange={() => {}}
              icon="mdiPhone"
              color="primary"
              id="mobilev2"
              label="Mobile"
            />
          </FlexRow>
          <FlexRow align="stretch">
            <Input
              onInputChange={() => {}}
              icon="mdiLock"
              type="password"
              color="primary"
              id="passwordv2"
              label="Password"
            />
          </FlexRow>
        </FlexColumn>
        <Checkbox id="ver-check-2">
          <p style={{ fontWeight: 500 }}>Remember Me</p>
        </Checkbox>

        <Button>Submit</Button>
      </Card>
    </>
  )
}

export default VerticalForm
