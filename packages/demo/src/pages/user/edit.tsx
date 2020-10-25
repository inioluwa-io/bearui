import React, { useState, useEffect } from "react"
import {
  Breadcrumb,
  Card,
  Container,
  Avatar,
  FlexRow,
  Chip,
  FlexColumn,
  Button,
  Select,
  Tabs,
  Input,
} from "@rap/ui"
import {
  mdiAccountOutline,
  mdiHomeOutline,
  mdiInformationOutline,
  mdiShareVariantOutline,
} from "@mdi/js"
import Icon from "@mdi/react"
import img from "../../brooks-leibee-562087-unsplash.jpg"
import styled from "styled-components"

const EditProfileContainer: any = styled(Container)`
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    .title {
      font-weight: 700;
      width: 100px;
    }
    p {
      height: 35px;
    }
  }
`

const AccountTab: React.FC<unknown> = () => {
  return (
    <FlexColumn gap="20px">
      <FlexRow align="left">
        <h5>Alingo Dangote</h5>
      </FlexRow>
      <FlexRow align="left">
        <Avatar alt="avatar" size="150px" text="LD" src={img} />
      </FlexRow>
      <FlexRow align="left">
        <Button>Change Avatar</Button>
        <Button background="danger" transparent>
          Remove Avatar
        </Button>
      </FlexRow>
      <FlexColumn gap="40px">
        <div className="grid-2">
          <FlexRow align="stretch">
            <Input
              id="username"
              label="Username"
              color="primary"
              defaultValue="femad"
              onInputChange={val => {}}
            />
          </FlexRow>
          <FlexRow align="stretch">
            <Input
              id="email"
              type="email"
              label="Email"
              color="primary"
              defaultValue="fema@gmail.com"
              onInputChange={val => {}}
            />
          </FlexRow>
          <FlexRow align="stretch">
            <Input
              id="fullname"
              label="Name"
              color="primary"
              defaultValue="Alingo Dangote"
              onInputChange={val => {}}
            />
          </FlexRow>
          <FlexRow align="stretch">
            <Input
              id="role"
              label="Role"
              color="primary"
              defaultValue="Accorn Technologies Ltd"
              onInputChange={val => {}}
            />
          </FlexRow>
          <FlexRow align="stretch">
            <Input
              id="company"
              label="Company"
              color="primary"
              defaultValue="Accorn Technologies Ltd"
              onInputChange={val => {}}
            />
          </FlexRow>
        </div>
        <FlexRow align="left">
          <Button>Save Changes</Button>
        </FlexRow>
      </FlexColumn>
    </FlexColumn>
  )
}

const InformationTab: React.FC<unknown> = () => {
  return (
    <FlexColumn gap="20px">
      <FlexColumn gap="40px">
        <div className="grid-2">
          <FlexRow align="stretch">
            <Input
              id="Birth Date"
              label="Birth Date"
              type="date"
              defaultValue="1993-08-12"
              color="primary"
              onInputChange={val => {}}
            />
          </FlexRow>
          <FlexRow align="stretch">
            <Input
              id="mobile"
              label="Mobile"
              defaultValue="+23481573947"
              color="primary"
              onInputChange={val => {}}
            />
          </FlexRow>
          <FlexRow align="stretch">
            <Select
              color="primary"
              label="Gender"
              placeholder="Choose Gender"
              id="gender"
              defaultSelected="Male"
              options={["Male", "Female"]}
            />
          </FlexRow>
          <FlexRow align="stretch">
            <Input
              id="website"
              label="Website"
              color="primary"
              defaultValue="https://www.fema.com"
              onInputChange={val => {}}
            />
          </FlexRow>
          <FlexRow align="stretch">
            <Chip
              itemsPlaceholder="Add language"
              closable={true}
              onItemUpdate={(value: string[]) => {}}
              items={["English", "Yoruba", "Japanese"]}
              autoSuggestion={[
                "English",
                "Yoruba",
                "Japanese",
                "Spanish",
                "French",
              ]}
              onInputChange={(value: string) => {}}
            >
              React
            </Chip>
          </FlexRow>
          <FlexRow align="stretch">
            <Input
              id="address"
              label="Address"
              color="primary"
              defaultValue="12, Pascal Avenue, Lagos City."
              onInputChange={val => {}}
            />
          </FlexRow>
        </div>
        <FlexRow align="left">
          <Button>Save Changes</Button>
        </FlexRow>
      </FlexColumn>
    </FlexColumn>
  )
}

const SocialTab: React.FC<unknown> = () => {
  return (
    <FlexColumn gap="20px">
      <FlexColumn gap="40px">
        <div className="grid-2">
          <FlexRow align="stretch">
            <Input
              id="slack"
              label="Slack"
              defaultValue="femad"
              color="primary"
              onInputChange={val => {}}
            />
          </FlexRow>
          <FlexRow align="stretch">
            <Input
              id="facebook"
              label="Facebook"
              defaultValue="femad"
              color="primary"
              onInputChange={val => {}}
            />
          </FlexRow>
          <FlexRow align="stretch">
            <Input
              id="instagram"
              label="Instagram"
              color="primary"
              defaultValue="femad"
              onInputChange={val => {}}
            />
          </FlexRow>
          <FlexRow align="stretch">
            <Input
              id="twitter"
              label="Twitter"
              color="primary"
              defaultValue="femad"
              onInputChange={val => {}}
            />
          </FlexRow>
          <FlexRow align="stretch">
            <Input
              id="github"
              label="Github"
              color="primary"
              defaultValue="femad"
              onInputChange={val => {}}
            />
          </FlexRow>
        </div>
        <FlexRow align="left">
          <Button>Save Changes</Button>
        </FlexRow>
      </FlexColumn>
    </FlexColumn>
  )
}

const UserEditPage = () => {
  const [navClass, setNavClass] = useState<string>()
  useEffect(() => {
    const navClassName: string | undefined = Array.from(
      document.body.classList
    ).find((className: string) => className.startsWith("nav-"))

    if (navClassName) {
      setNavClass(navClassName)
    }
  }, [])

  const getPanelTop = (): string => {
    switch (navClass) {
      case "nav-floating":
        return `95px`
      case "nav-sticky":
        return ` 80px`
      case "nav-static":
        return ` 10px`
      default:
        return ` 95px`
    }
  }
  return (
    <EditProfileContainer panelTop={getPanelTop()}>
      <Card withBackground={false} xsCol="12">
        <FlexRow gap="7px" position="center" align="left">
          <h3 style={{ borderRight: "1px solid #999", paddingRight: "12px" }}>
            Edit
          </h3>
          <Breadcrumb
            seperator="/"
            item={[
              { name: <Icon path={mdiHomeOutline} size={0.85} />, to: "/" },
              { name: "User", to: "/user" },
              { name: "Edit", to: "" },
            ]}
          />
        </FlexRow>
      </Card>
      <Card xsCol="12" className="account">
        {/* <h5>Account</h5> */}
        <Tabs
          list={[
            {
              title: (
                <FlexRow gap="7px">
                  <Icon path={mdiAccountOutline} size={0.75} /> <p> Account</p>
                </FlexRow>
              ),
              content: <AccountTab />,
            },
            {
              title: (
                <FlexRow gap="7px">
                  <Icon path={mdiInformationOutline} size={0.75} />{" "}
                  <p> Information</p>
                </FlexRow>
              ),
              content: <InformationTab />,
            },
            {
              title: (
                <FlexRow gap="7px">
                  <Icon path={mdiShareVariantOutline} size={0.75} />{" "}
                  <p> Social</p>
                </FlexRow>
              ),
              content: <SocialTab />,
            },
          ]}
        />
      </Card>
    </EditProfileContainer>
  )
}
export default UserEditPage
