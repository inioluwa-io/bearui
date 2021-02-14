import React from "react"
import Card from "../card/card"
import FlexRow from "../layout/flexRow"
import { LoaderComponent, RapUITheme } from "../types"
import Icon from "@mdi/react"
import { mdiLoading } from "@mdi/js"
import { useThemeMode, useTheme } from "../theme"
import { darken, rgba } from "polished"
import styled, { StyledComponent } from "styled-components"
import { getColorFromTheme } from "../util"

const BeatDiv: StyledComponent<"div", any, { iconSize: number }> = styled.div`
  display: flex;
  justify-content: center;
  width: ${(props: any) => props.iconSize * 24}px;
  height: ${(props: any) => props.iconSize * 24}px;
  align-items: center;
  position: relative;

  .bar {
    width: ${(props: any) => props.iconSize * 2 + "px"};
    border-radius:3px;
    background: ${(props: any) => props.color};
    height: ${(props: any) => props.iconSize * 20 + "px"};
    animation: pulse${(props: any) =>
      ("" + props.iconSize).replaceAll(
        ".",
        "ra"
      )} 0.25s alternate cubic-bezier(0, 0.3, 1, 0.61) infinite

    &:not(:last-child) {
      margin-right: ${(props: any) => props.iconSize * 4 + "px"};
    }
    &:nth-child(2n - 1) {
      animation: pulseInverse${(props: any) =>
        ("" + props.iconSize).replaceAll(
          ".",
          "ra"
        )} 0.25s alternate cubic-bezier(0, 0.3, 1, 0.61) infinite;
    }
  }
  @keyframes pulse${(props: any) =>
    ("" + props.iconSize).replaceAll(".", "ra")} {
    from {
      height: ${(props: any) => (props.iconSize * 20) / 2.5 + "px"};
    }
    to {
      height: ${(props: any) => props.iconSize * 20 + "px"};
    }
  }
  @keyframes pulseInverse${(props: any) =>
    ("" + props.iconSize).replaceAll(".", "ra")} {
    from {
      height: ${(props: any) => props.iconSize * 20 + "px"};
    }
    to {
      height: ${(props: any) => (props.iconSize * 20) / 2.5 + "px"};
    }
  }
`

const BeatAnimation: React.FC<any> = ({ color, iconSize }) => {
  return (
    <BeatDiv iconSize={iconSize} color={color}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </BeatDiv>
  )
}

const LoaderContainer: StyledComponent<
  "div",
  any,
  { padding: string }
> = styled.div`
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

const LoaderElement: StyledComponent<"div", any, any> = styled.div`
  width: ${(props: any) => props.loaderwidth};
  height: ${(props: any) => props.loaderheight};
  position: fixed;
  z-index: 991;
  left: 0;
  top: 0;

  .loader {
    position: sticky;
    width: ${(props: any) => props.loaderwidth};
    height: ${(props: any) => props.loaderheight};
    background: ${(props: any) => props.withBackground && props.background};
    left: 0;
    top: 0;
    z-index: 999;
  }
  @media (max-width: 441px) {
    .rap-card {
      margin: 0;
      width: fit-content;
      border-radius: 10px;
      box-shadow: 0 0 25px -18px #292929;
    }
  }
`

const Loader: React.FC<LoaderComponent> = ({
  type = "pulse",
  customIcon,
  iconSize = 1,
  width = "100%",
  height = "100%",
  color = "",
  withBackground = false,
  size = "5px",
  ...props
}) => {
  const [themeMode] = useThemeMode()
  const theme: RapUITheme = useTheme()

  let iconColor = themeMode === "lightmode" ? "#444" : "#fff"
  if (!!color.length) {
    iconColor = getColorFromTheme(color, theme)
  }
  const getAnimation = (): any => {
    switch (type) {
      case "spinner": {
        return <Icon path={mdiLoading} color={iconColor} size={iconSize}></Icon>
      }
      case "pulse": {
        return <BeatAnimation color={iconColor} iconSize={iconSize} />
      }
      default:
        throw new Error(
          `${type} is not a supported icon type. Try passing your own 'customIcon' or use a supported type`
        )
    }
  }
  return (
    <LoaderElement
      loaderwidth={width}
      loaderheight={height}
      withBackground={withBackground}
      {...props}
      background={rgba(darken(0.5, theme[themeMode].background), 0.6)}
    >
      <FlexRow className="loader" center>
        <Card size="sm" withBackground={withBackground}>
          <LoaderContainer padding={size}>
            {customIcon || getAnimation()}
          </LoaderContainer>
        </Card>
      </FlexRow>
    </LoaderElement>
  )
}
export default Loader
