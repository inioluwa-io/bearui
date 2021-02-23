import {
  mdiAccountGroup,
  mdiCalendar,
  mdiCheckDecagram,
  mdiImage,
  mdiMovie,
  mdiTimeline,
  mdiTextBox,
  mdiClipboardEdit,
  mdiDotsHorizontal,
  mdiEmoticon,
  mdiMenu,
  mdiAccountPlus,
  mdiShare,
} from "@mdi/js"
import Icon from "@mdi/react"
import {
  Avatar,
  Card,
  Container,
  FlexColumn,
  FlexRow,
  useTheme,
  useThemeMode,
  Grid,
  LinkButton,
  TextArea,
  Chip,
  Button,
  Input,
  Dropdown,
} from "@bearui/ui"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import pht2 from "../../assets/brooks-leibee-562087-unsplash.jpg"
import pht1 from "../../assets/avocado_minimalism_pink_120543_3840x2400.jpg"
import pht3 from "../../assets/chris-lawton-5IHz5WhosQE-unsplash.jpg"
import pht4 from "../../assets/pht4.png"
import pht5 from "../../assets/download.jpeg"
import { rgba } from "polished"

const ImgContainer: any = styled.div`
  width: 100%;
  position: relative;
  border-radius: 22px;
  background: transparent;
  display: flex;
  align-items: center;
  padding-bottom: 100%;
  justify-content: center;
  overflow: hidden;

  img {
    position: absolute;
    min-width: 100%;
    max-width: 120%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    min-height: 100%;
  }
`

const PhotosContainer: any = styled(Card)`
  #photos-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    grid-gap: 10px;
  }
`

const UserProfileContainer: any = styled(Container)`
  #mobile-nav {
    position: sticky;
    top: calc(${(props: any) => props.panelTop});
    z-index: 99;

    button {
      border: none;
      outline: none;
      background: transparent;
      display: flex;
      cursor: pointer;
    }
  }
  @media (min-width: 768px) {
    .desktop {
      display: flex;
    }
    .mobile {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: flex;
    }
  }

  #left-panel {
    position: sticky;
    top: ${(props: any) => props.panelTop};
    z-index: 99;
  }

  @media (max-width: 1200px) and (min-width: 769px) {
    #left-panel {
      overflow: hidden;
      top: unset;

      > .rap-card {
        flex-direction: row;
        grid-gap: 20px;
        align-items: center;
      }

      #user-info {
        width: fit-content;

        #usr-pic {
          width: 45px !important;
          height: 45px !important;
          margin: 0;
        }

        #usr-dtl {
          display: none;
        }
      }

      #panel-link {
        display: flex;
        margin: 0;

        grid-template-columns: unset;
        a {
          flex-direction: row;
          //   height: 52px;

          .link-icon {
            // flex-direction: row;

            > div {
              width: 29px;
              height: 29px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1200px) and (min-width: 992px) {
    #panel-link {
      display: flex;
      margin: 0;

      grid-template-columns: unset;
      a {
        flex-direction: row;
        height: 52px;

        .link-icon {
          flex-direction: row;

          > div {
            width: 29px;
            height: 29px;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    #left-panel {
      position: fixed;
      transition: width 0.25s, opacity 0.15s;
      overflow: hidden;
      width: 0;
      top: calc(${(props: any) => props.panelTop} - 10px);

      > .rap-card {
        height: calc(100vh - ${(props: any) => props.panelTop} - 50px);
      }

      &.active {
        width: 20rem;
        transition: width 0.25s, opacity 0.35s;
      }
    }
  }

  @media (max-width: 441px) {
    #left-panel,
    #mobile-nav {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      top: calc(
        ${(props: any) => props.panelTop} -
          ${(props: any) => (props.panelTop === "80px" ? "20px" : "0px")}
      );
    }
    #left-panel {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
      > .rap-card {
        height: calc(100vh - ${(props: any) => props.panelTop} - 20px);
      }

      &.active {
        width: 19rem;
        transition: width 0.25s, opacity 0.35s;
      }
    }
  }

  #user-info {
    margin-top: 15px;

    .label {
      color: ${(props: any) => rgba(props.textColor, 0.5)};
    }
  }
`

const AppIcon: any = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: ${(props: any) => props.size};
  height: ${(props: any) => props.size};
  background: ${(props: any) => props.background};
  border-radius: 38px;

  svg {
    position: absolute;
  }
`

const PanelContainer: any = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  grid-gap: 10px;
  margin-top: 15px;

  a {
    width: 100%;
    border-radius: 20px;
    height: 90px;
    text-decoration: none;
    position: relative;
    background: ${(props: any) => props.background};

    > div {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      grid-gap: 10px;

      p {
        font-size: 13px;
      }
    }
  }
`

const PhotosPanel: React.FC = () => {
  return (
    <PhotosContainer xsCol="12">
      <h6 style={{ fontWeight: 500 }}>Latest Photos</h6>
      <div id="photos-container">
        <ImgContainer>
          <img src={pht1} alt="" />
        </ImgContainer>
        <ImgContainer>
          <img src={pht5} alt="" />
        </ImgContainer>
        <ImgContainer>
          <img src={pht3} alt="" />
        </ImgContainer>
        <ImgContainer>
          <img src={pht4} alt="" />
        </ImgContainer>
      </div>
      <FlexRow align="stretch">
        <LinkButton to="#" transparent="true">
          Show all
        </LinkButton>
      </FlexRow>
    </PhotosContainer>
  )
}

const SuggestedPanel: React.FC = () => {
  const SuggestedProfile: React.FC = () => {
    return (
      <FlexRow
        align="space"
        position="top"
        gap="7px"
        style={{ flexWrap: "nowrap" }}
      >
        <FlexRow gap="10px" align="space" style={{ flexWrap: "nowrap" }}>
          <Avatar size="xs" src={pht1} alt="userimg" />
          <FlexColumn gap="3px">
            <p style={{ fontWeight: 500, fontSize: "13px" }}>Tony Stark</p>
            <p style={{ fontSize: "11px" }}>5 Mutual Friends</p>
          </FlexColumn>
        </FlexRow>
        <Button
          style={{ padding: "7px" }}
          icon={mdiAccountPlus}
          corners="rounded"
          outline
          iconOnly
        ></Button>
      </FlexRow>
    )
  }
  return (
    <PhotosContainer xsCol="12">
      <h6 style={{ fontWeight: 500 }}>Suggestions</h6>
      {[1, 2, 3, 4, 5].map((item, idx: number) => (
        <SuggestedProfile key={idx} />
      ))}
      <FlexColumn align="stretch">
        <Button transparent>Show all</Button>
      </FlexColumn>
    </PhotosContainer>
  )
}

const PostFeedContainer: any = styled(Card)`
  #post-attch {
    .white-bkg {
      background: #fff;
      border-radius: 20px;
    }
  }
`

const PostFeed: React.FC = () => {
  const [theme] = useTheme()

  return (
    <PostFeedContainer xsCol="12">
      <FlexRow gap="10px">
        <AppIcon background={rgba(theme.colors.info, 0.15)} size="28px">
          <Icon path={mdiClipboardEdit} size={0.7} color={theme.colors.info} />
        </AppIcon>
        <p>Create post</p>
      </FlexRow>
      <FlexRow align="stretch">
        <TextArea
          id="post"
          onInputChange={() => {}}
          placeholder={"What's on your mind?"}
        />
      </FlexRow>
      <FlexRow align="space">
        <div>
          <FlexRow gap="15px" id="post-attch">
            <Chip>
              <FlexRow gap="7px">
                <Icon path={mdiImage} size={0.8} color={theme.colors.success} />
                <div>Photos</div>
              </FlexRow>
            </Chip>
            <Chip>
              <FlexRow gap="7px">
                <Icon path={mdiMovie} size={0.8} color={theme.colors.info} />
                <div>Video</div>
              </FlexRow>
            </Chip>
            <Chip>
              <FlexRow gap="7px">
                <Icon
                  className="white-bkg"
                  path={mdiEmoticon}
                  size={0.8}
                  color="#fcef31"
                />
                <div>Feeling/Activity</div>
              </FlexRow>
            </Chip>
          </FlexRow>
        </div>
        <div>
          <Button icon={mdiShare} iconOnly size="sm" corners="rounded">
            Share
          </Button>
        </div>
      </FlexRow>
    </PostFeedContainer>
  )
}

const SinglePostContainer: any = styled(Card)`
  .post-text {
    a {
      text-decoration: none;
    }

    p {
      line-height: 1.6rem;
    }
  }
  .post-photo {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
    grid-gap: 7px;
  }
`

const SinglePost: React.FC = () => {
  const [theme] = useTheme()

  const Photos: React.FC = () => {
    return (
      <div className="post-photo">
        <ImgContainer>
          <img src={pht4} alt="" />
        </ImgContainer>
        <ImgContainer>
          <img src={pht3} alt="" />
        </ImgContainer>
        <ImgContainer>
          <img src={pht2} alt="" />
        </ImgContainer>
      </div>
    )
  }

  const Comment: React.FC = () => {
    return (
      <FlexRow className="post-comment" gap="10px">
        <Input
          style={{ flex: 1 }}
          onInputChange={() => {}}
          size="sm"
          placeholder="Add comment"
          corners="rounded"
        />
        <Button icon={mdiShare} size="sm" corners="rounded">
          Share
        </Button>
      </FlexRow>
    )
  }

  return (
    <SinglePostContainer xsCol="12">
      {/* Header */}
      <FlexRow align="space" position="top">
        <div>
          <FlexRow gap="10px" align="space">
            <Avatar size="xs" src={pht1} alt="userimg" />
            <FlexColumn gap="3px">
              <p style={{ fontWeight: 500 }}>Tony Stark</p>
              <p style={{ fontSize: "11px" }}>5 hours ago</p>
            </FlexColumn>
          </FlexRow>
        </div>
        <Dropdown list={["Report", "Block"]} showIcon={false} listener="click">
          <Icon path={mdiDotsHorizontal} size={0.7} />
        </Dropdown>
      </FlexRow>

      {/* Content */}
      <FlexRow align="stretch" className="post-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat odio
          quas illum doloremque odit nihil, nesciunt harum debitis quasi
          eligendi..{" "}
          <a href="/#" style={{ color: theme.colors.info }}>
            See more
          </a>
        </p>
      </FlexRow>
      <Photos />
      <Comment />
    </SinglePostContainer>
  )
}

const LinksPanel: React.FC = () => {
  const [theme] = useTheme()
  const [themeMode] = useThemeMode()

  return (
    <Card xsCol="12">
      <FlexRow align="center" id="user-info">
        <FlexColumn align="center" gap="20px">
          <Avatar id="usr-pic" size="100px" src={pht2} alt="userimg" />
          <FlexColumn id="usr-dtl" align="center" gap="5px">
            <FlexRow gap="10px">
              <h6 style={{ fontWeight: 500 }}>Captain Steve Rogers</h6>
              <Icon
                path={mdiCheckDecagram}
                size={0.75}
                color={theme.colors.info}
              />
            </FlexRow>
            <p className="label">First Avenger</p>
          </FlexColumn>
        </FlexColumn>
      </FlexRow>
      <PanelContainer background={theme[themeMode].background} id="panel-link">
        <Link to="#">
          <div className="link-icon">
            <AppIcon background={theme.colors.warning} size="38px">
              <Icon path={mdiTimeline} size={0.75} color="#ffffff" />
            </AppIcon>
            <p>Timeline</p>
          </div>
        </Link>
        <Link to="#">
          <div className="link-icon">
            <AppIcon background={theme.colors.primary} size="38px">
              <Icon path={mdiTextBox} size={0.75} color="#ffffff" />
            </AppIcon>
            <p>About</p>
          </div>
        </Link>
        <Link to="#">
          <div className="link-icon">
            <AppIcon background={theme.colors.info} size="38px">
              <Icon path={mdiMovie} size={0.75} color="#ffffff" />
            </AppIcon>
            <p>Videos</p>
          </div>
        </Link>
        <Link to="#">
          <div className="link-icon">
            <AppIcon background={theme.colors.success} size="38px">
              <Icon path={mdiImage} size={0.75} color="#ffffff" />
            </AppIcon>
            <p>Photos</p>
          </div>
        </Link>
        <Link to="#">
          <div className="link-icon">
            <AppIcon background={theme.colors.primary} size="38px">
              <Icon path={mdiAccountGroup} size={0.75} color="#ffffff" />
            </AppIcon>
            <p>Friends</p>
          </div>
        </Link>
        <Link to="#">
          <div className="link-icon">
            <AppIcon background={theme.colors.danger} size="38px">
              <Icon path={mdiCalendar} size={0.75} color="#ffffff" />
            </AppIcon>
            <p>Events</p>
          </div>
        </Link>
      </PanelContainer>
    </Card>
  )
}

const UserProfilePage = () => {
  const [themeMode] = useThemeMode()
  const textColor: string = themeMode === "lightmode" ? "#444444" : "#f4f4f4"

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
        return ` 15px`
    }
  }
  return (
    <UserProfileContainer textColor={textColor} panelTop={getPanelTop()}>
      <Card xsCol="12" className="mobile" id="mobile-nav" align="right">
        <button
          onClick={() => {
            document.querySelector("#left-panel")?.classList.toggle("active")
          }}
        >
          <Icon path={mdiMenu} size={1} />
        </button>
      </Card>
      <Grid lgCol="3" mdCol="12" id="left-panel">
        <LinksPanel />
      </Grid>
      <Grid lgCol="6" mdCol="8" xsCol="12">
        <PostFeed />
        {[1, 2, 4].map((item, idx: number) => (
          <SinglePost key={idx} />
        ))}
      </Grid>
      <Grid lgCol="3" mdCol="4" xsCol="12">
        <PhotosPanel />
        <SuggestedPanel />
      </Grid>
    </UserProfileContainer>
  )
}
export default UserProfilePage
