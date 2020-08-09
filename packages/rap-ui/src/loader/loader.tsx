import React from "react"
import Card from "../card/card"
import FlexRow from "../display/flexRow"
import { LoaderComponent, RapUITheme } from "../types"
import Icon from "@mdi/react"
import { mdiLoading } from "@mdi/js"
import { useThemeMode, useTheme } from "../theme"
import { darken, rgba } from "polished"
import styled, { StyledComponent } from "styled-components"

const LoaderContainer: StyledComponent<"div", any> = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props: any) => props.padding};

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  svg {
    animation: spin 0.45s linear infinite;
  }
`

const Loader: React.FC<LoaderComponent> = ({
  type = "spinner",
  customIcon,
  iconSize = 1,
  width = "100%",
  height = "100vh",
  size = "5px",
}) => {
  const [themeMode] = useThemeMode()
  const theme: RapUITheme = useTheme()

  const getIconPath = (): string => {
    switch (type) {
      case "spinner": {
        return mdiLoading
      }
      default:
        throw new Error(
          `${type} is not a supported icon type. Try passing your own 'customIcon' or use a supported type`
        )
    }
  }
  return (
    <FlexRow
      center
      style={{
        width,
        height,
        position: "fixed",
        background: rgba(darken(0.5, theme[themeMode].background), 0.6),
        top: 0,
        left: 0,
        zIndex: 991,
      }}
    >
      <Card size="sm">
        <LoaderContainer padding={size}>
          {customIcon || (
            <Icon
              path={getIconPath()}
              color={themeMode === "lightmode" ? "#444" : "#fff"}
              size={iconSize}
            ></Icon>
          )}
        </LoaderContainer>
      </Card>
    </FlexRow>
  )
}
export default Loader
