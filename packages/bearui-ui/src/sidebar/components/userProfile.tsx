import React, { useCallback, useEffect, useState } from "react"
import styled from "styled-components"
import { FlexRow, FlexColumn } from "../../layout"
import { useThemeMode, useCollapseSideBar, useHideSideBar } from "../../theme"
import { Avatar } from "../../avatar"
import { Button } from "../../button"
import { PopUp } from "../../popUp"

const UserProfileContainer: any = styled.div`
  padding: 10px;
  h6 {
    font-weight: 500;
  }
`

const MobileUserProfileContainer: any = styled(FlexRow)`
  button {
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
  }
  display: none;
`

type UserProfileProps = {
  avatarImg?: string
  avatarText?: string
  fullName?: string
  role?: string
  pageWidth: number
  onEditProfile?: () => void
  onSignOut?: () => void
}

const UserProfile: React.FC<UserProfileProps> = ({
  avatarImg,
  avatarText,
  fullName,
  role,
  pageWidth,
  onEditProfile,
  onSignOut,
}) => {
  const [themeMode] = useThemeMode()
  const [showMobilePopUp, setShowMobilePopUp] = useState(false)

  useEffect(() => {
    if (pageWidth <= 1200) {
      setShowMobilePopUp(false)
    }
  }, [pageWidth])

  return (
    <>
      <MobileUserProfileContainer className="mobile-usr-profile" align="center">
        {(avatarText || avatarImg) && (
          <button
            onClick={() => {
              setShowMobilePopUp(true)
            }}
          >
            <Avatar
              text={avatarText}
              src={avatarImg}
              size="xs"
              className="usr-avatar"
            />
          </button>
        )}
      </MobileUserProfileContainer>
      <UserProfileContainer className="usr-profile">
        <FlexColumn align="center">
          {(avatarText || avatarImg) && (
            <Avatar
              text={avatarText}
              src={avatarImg}
              size="lg"
              className="usr-avatar"
            />
          )}
          <FlexColumn gap="5px">
            {fullName && <h6>{fullName}</h6>}
            {role && (
              <p
                className="label"
                style={{
                  color:
                    themeMode === "darkmode"
                      ? "rgba(244,244,244,0.5)"
                      : "rgba(68,68,68,0.5)",
                }}
              >
                {role}
              </p>
            )}
          </FlexColumn>
          <FlexRow align="center">
            <Button
              onClick={() => {
                if (onEditProfile) {
                  if (typeof onEditProfile !== "function") {
                    throw new Error(
                      `onEditProfile requires a function but ${typeof onEditProfile} given`
                    )
                  }
                  onEditProfile()
                }
              }}
              size="xs"
              corners="rounded"
            >
              Edit Profile
            </Button>
            <Button
              onClick={() => {
                if (onSignOut) {
                  if (typeof onSignOut !== "function") {
                    throw new Error(
                      `onSignOut requires a function but ${typeof onSignOut} given`
                    )
                  }
                  onSignOut()
                }
              }}
              size="xs"
              background="danger"
              outline
              corners="rounded"
            >
              Sign out
            </Button>
          </FlexRow>
        </FlexColumn>
      </UserProfileContainer>
      <PopUp
        active={showMobilePopUp}
        onClose={() => {
          setShowMobilePopUp(false)
        }}
      >
        <UserProfileContainer>
          <FlexColumn align="center">
            {(avatarText || avatarImg) && (
              <Avatar
                text={avatarText}
                src={avatarImg}
                size="lg"
                className="usr-avatar"
              />
            )}
            <FlexColumn gap="5px">
              {fullName && <h6>{fullName}</h6>}
              {role && (
                <p
                  className="label"
                  style={{
                    color:
                      themeMode === "darkmode"
                        ? "rgba(244,244,244,0.5)"
                        : "rgba(68,68,68,0.5)",
                  }}
                >
                  {role}
                </p>
              )}
            </FlexColumn>
            <FlexRow align="center">
              <Button
                onClick={() => {
                  if (onEditProfile) {
                    if (typeof onEditProfile !== "function") {
                      throw new Error(
                        `onEditProfile requires a function but ${typeof onEditProfile} given`
                      )
                    }
                    onEditProfile
                  }
                }}
                size="xs"
                corners="rounded"
              >
                Edit Profile
              </Button>
              <Button
                onClick={() => {
                  if (onSignOut) {
                    if (typeof onSignOut !== "function") {
                      throw new Error(
                        `onSignOut requires a function but ${typeof onSignOut} given`
                      )
                    }
                    onSignOut
                  }
                }}
                size="xs"
                background="danger"
                outline
                corners="rounded"
              >
                Sign out
              </Button>
            </FlexRow>
          </FlexColumn>
        </UserProfileContainer>
      </PopUp>
    </>
  )
}
export default UserProfile
