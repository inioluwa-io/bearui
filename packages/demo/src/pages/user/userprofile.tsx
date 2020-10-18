import React, { useState, useEffect } from "react"
import {
  Breadcrumb,
  Card,
  Container,
  Avatar,
  FlexRow,
  Grid,
  FlexColumn,
  Button,
  LinkButton,
  InstagramButton,
  FacebookButton,
  GithubButton,
  Tooltip,
  SlackButton,
  TwitterButton,
} from "@rap/ui"
import { mdiHomeOutline } from "@mdi/js"
import Icon from "@mdi/react"
import img from "../../brooks-leibee-562087-unsplash.jpg"
import styled from "styled-components"

const UserProfileContainer: any = styled(Container)`
  .grid-2 {
    display: grid;
    grid-template-columns: 120px 1fr;

    .title {
      font-weight: 700;
      width: 100px;
    }
    p {
      height: 35px;
    }
  }
  @media (min-width: 768px) {
    .account {
      position: sticky;
      top: ${(props: any) => props.panelTop};
    }
  }
`

const UserProfilePage = () => {
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
    <UserProfileContainer panelTop={getPanelTop()}>
      <Card withBackground={false} xsCol="12">
        <FlexRow gap="7px" position="center" align="left">
          <h3 style={{ borderRight: "1px solid #999", paddingRight: "12px" }}>
            Profile
          </h3>
          <Breadcrumb
            seperator="/"
            item={[
              { name: <Icon path={mdiHomeOutline} size={0.85} />, to: "/" },
              { name: "User", to: "/user" },
              { name: "Profile", to: "" },
            ]}
          />
        </FlexRow>
      </Card>
      <Grid xsCol="12">
        <Card xsCol="12" lgCol="4" mdCol="5" gap="30px" className="account">
          {/* <h5>Account</h5> */}
          <br/>
          <FlexRow align="center">
            <Avatar alt="avatar" size="150px" withStatus text="LD" src={img} />
          </FlexRow>
          <FlexRow align="center">
            <Tooltip text="Instagram">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <InstagramButton
                  onClick={() => {}}
                  transparent
                  iconOnly
                  size="md"
                />
              </a>
            </Tooltip>
            <Tooltip text="Facebook">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FacebookButton
                  onClick={() => {}}
                  transparent
                  iconOnly
                  size="md"
                />
              </a>
            </Tooltip>
            <Tooltip text="Slack">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <SlackButton
                  onClick={() => {}}
                  transparent
                  iconOnly
                  size="md"
                />
              </a>
            </Tooltip>
            <Tooltip text="Twitter">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <TwitterButton
                  onClick={() => {}}
                  transparent
                  iconOnly
                  size="md"
                />
              </a>
            </Tooltip>
            <Tooltip text="Github">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <GithubButton
                  onClick={() => {}}
                  transparent
                  iconOnly
                  size="md"
                />
              </a>
            </Tooltip>
          </FlexRow>
          <FlexColumn>
            <div className="grid-2">
              <div className="pnl-title">
                <p className="title">Username</p>
                <p className="title">Name</p>
                <p className="title">Email</p>
                <p className="title">Role</p>
                <p className="title">Company</p>
              </div>
              <div className="pnl-dtl">
                <p>femad</p>
                <p>Alingo Dangote</p>
                <p>fema@gmail.com</p>
                <p>admin</p>
                <p>Accorn Technologies Ltd</p>
              </div>
            </div>
            <FlexRow align="stretch">
              <LinkButton to ="/user/edit" icon="mdiAccountEdit">Edit</LinkButton>
              <Button icon="mdiDelete" background="danger" transparent>
                Delete
              </Button>
            </FlexRow>
          </FlexColumn>
        </Card>
        <Grid lgCol="8" mdCol="7" xsCol="12">
          <Card xsCol="12" gap="30px">
            <h5>Information</h5>
            <FlexColumn>
              <div className="grid-2">
                <div className="pnl-title">
                  <p className="title">Birth Date</p>
                  <p className="title">Mobile</p>
                  <p className="title">Website</p>
                  <p className="title">Address</p>
                  <p className="title">Languages</p>
                  <p className="title">Gender</p>
                </div>
                <div className="pnl-dtl">
                  <p>15 April 1996</p>
                  <p>+23481573947</p>
                  <p>https://www.fema.com</p>
                  <p>12, Pascal Avenue, Lagos City.</p>
                  <p>English</p>
                  <p>Male</p>
                </div>
              </div>
            </FlexColumn>
          </Card>
          <Card xsCol="12" gap="30px">
            <h5>Social Links</h5>
            <FlexColumn>
              <div className="grid-2">
                <div className="pnl-title">
                  <p className="title">Slack</p>
                  <p className="title">Facebook</p>
                  <p className="title">Instagram</p>
                  <p className="title">Twitter</p>
                  <p className="title">GitHub</p>
                </div>
                <div className="pnl-dtl">
                  <p>15 April 1996</p>
                  <p>+23481573947</p>
                  <p>fema@gmail.com</p>
                  <p>English</p>
                  <p>English</p>
                </div>
              </div>
            </FlexColumn>
          </Card>
        </Grid>
      </Grid>
    </UserProfileContainer>
  )
}
export default UserProfilePage
