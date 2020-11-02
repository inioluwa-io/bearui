import {
  Button,
  Card,
  Checkbox,
  FlexColumn,
  FlexRow,
  Grid,
  Input,
} from "@rap/ui"
import React from "react"

const HorizontalForm: React.FC = () => {
  return (
    <>
      <Card xsCol="12" mdCol="6" gap="25px">
        <h5>Horizontal Form</h5>
        <FlexColumn>
          <FlexRow gap="0px">
            <Grid xsCol="4">
              <span style={{ fontSize: "14px" }}>Full Name</span>
            </Grid>
            <Grid xsCol="8">
              <FlexRow align="stretch">
                <Input
                  onInputChange={() => {}}
                  color="primary"
                  id="fullnameh1"
                />
              </FlexRow>
            </Grid>
          </FlexRow>

          <FlexRow gap="0px">
            <Grid xsCol="4">
              <span style={{ fontSize: "14px" }}>Email</span>
            </Grid>
            <Grid xsCol="8">
              <FlexRow align="stretch">
                <Input
                  onInputChange={() => {}}
                  type="email"
                  color="primary"
                  id="emailh1"
                />
              </FlexRow>
            </Grid>
          </FlexRow>

          <FlexRow gap="0px">
            <Grid xsCol="4">
              <span style={{ fontSize: "14px" }}>Mobile</span>
            </Grid>
            <Grid xsCol="8">
              <FlexRow align="stretch">
                <Input onInputChange={() => {}} color="primary" id="mobileh1" />
              </FlexRow>
            </Grid>
          </FlexRow>

          <FlexRow gap="0px">
            <Grid xsCol="4">
              <span style={{ fontSize: "14px" }}>Password</span>
            </Grid>
            <Grid xsCol="8">
              <FlexRow align="stretch">
                <Input
                  onInputChange={() => {}}
                  type="password"
                  color="primary"
                  id="passwordh1"
                />
              </FlexRow>
            </Grid>
          </FlexRow>
        </FlexColumn>
        <FlexRow gap="0px">
          <Grid xsCol="4" />

          <Grid xsCol="8">
            <FlexColumn align="left">
              <Checkbox id="hor-check-1">
                <p style={{ fontWeight: 500 }}>Remember Me</p>
              </Checkbox>

              <Button>Submit</Button>
            </FlexColumn>
          </Grid>
        </FlexRow>
      </Card>

      {/* with Icon */}
      <Card xsCol="12" mdCol="6" gap="25px">
        <h5>Horizontal Form</h5>
        <FlexColumn>
          <FlexRow gap="0px">
            <Grid xsCol="4">
              <span style={{ fontSize: "14px" }}>Full Name</span>
            </Grid>
            <Grid xsCol="8">
              <FlexRow align="stretch">
                <Input
                  onInputChange={() => {}}
                  icon="mdiAccount"
                  color="primary"
                  id="fullnameh2"
                />
              </FlexRow>
            </Grid>
          </FlexRow>

          <FlexRow gap="0px">
            <Grid xsCol="4">
              <span style={{ fontSize: "14px" }}>Email</span>
            </Grid>
            <Grid xsCol="8">
              <FlexRow align="stretch">
                <Input
                  onInputChange={() => {}}
                  type="email"
                  icon="mdiEmailOutline"
                  color="primary"
                  id="emailh2"
                />
              </FlexRow>
            </Grid>
          </FlexRow>

          <FlexRow gap="0px">
            <Grid xsCol="4">
              <span style={{ fontSize: "14px" }}>Mobile</span>
            </Grid>
            <Grid xsCol="8">
              <FlexRow align="stretch">
                <Input
                  onInputChange={() => {}}
                  icon="mdiPhone"
                  color="primary"
                  id="mobileh2"
                />
              </FlexRow>
            </Grid>
          </FlexRow>

          <FlexRow gap="0px">
            <Grid xsCol="4">
              <span style={{ fontSize: "14px" }}>Password</span>
            </Grid>
            <Grid xsCol="8">
              <FlexRow align="stretch">
                <Input
                  onInputChange={() => {}}
                  icon="mdiLock"
                  type="password"
                  color="primary"
                  id="passwordh2"
                />
              </FlexRow>
            </Grid>
          </FlexRow>
        </FlexColumn>

        <FlexRow gap="0px">
          <Grid xsCol="4" />

          <Grid xsCol="8">
            <FlexColumn align="left">
              <Checkbox id="hor-check-2">
                <p style={{ fontWeight: 500 }}>Remember Me</p>
              </Checkbox>

              <Button>Submit</Button>
            </FlexColumn>
          </Grid>
        </FlexRow>
      </Card>
    </>
  )
}

export default HorizontalForm
