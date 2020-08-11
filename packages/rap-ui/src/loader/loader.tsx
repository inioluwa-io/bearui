import React from "react"
import Card from "../card/card"
import FlexRow from "../layout/flexRow"
import { LoaderComponent, RapUITheme } from "../types"
import Icon from "@mdi/react"
import { mdiLoading } from "@mdi/js"
import { useThemeMode, useTheme } from "../theme"
import { darken, rgba } from "polished"
import styled, { StyledComponent } from "styled-components"

const BeatDiv: StyledComponent<"div", any, { size: number }> = styled.div`
  display: flex;
  justify-content: center;
  transform:scale3d(${(props: any) =>
    props.size + "," + props.size + "," + props.size});
  width: ${(props: any) => props.size * 24}px;
  height: ${(props: any) => props.size * 24}px;
  align-items:center;
  position:relative;

  .bar {
    width: 2px;
    background:${(props: any) => props.color}
    height: 20px;
    animation: pulse 0.35s alternate cubic-bezier(0, 0.3, 1, 0.61) infinite

    &:not(:last-child){
      margin-right: 4px;
    }
    &:nth-child(2n - 1){
      animation: pulseInverse 0.35s alternate cubic-bezier(0, 0.3, 1, 0.61) infinite;
    }
  }
  @keyframes pulse {
    from {
      height:9px;
    }
    to {
      height:20px;
    }
  }
  @keyframes pulseInverse {
    from {
      height:20px;
    }
    to {
      height:9px;
    }
  }
`

const BeatAnimation: React.FC<any> = ({ themeMode, size }) => {
  return (
    <BeatDiv size={size} color={themeMode === "lightmode" ? "#444" : "#fff"}>
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

const Loader: React.FC<LoaderComponent> = ({
  type = "pulse",
  customIcon,
  iconSize = 1,
  width = "100%",
  height = "100vh",
  size = "5px",
}) => {
  const [themeMode] = useThemeMode()
  const theme: RapUITheme = useTheme()

  const getAnimation = (): any => {
    switch (type) {
      case "spinner": {
        return (
          <Icon
            path={mdiLoading}
            color={themeMode === "lightmode" ? "#444" : "#fff"}
            size={iconSize}
          ></Icon>
        )
      }
      case "pulse": {
        return <BeatAnimation themeMode={themeMode} size={iconSize} />
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
          {customIcon || getAnimation()}
        </LoaderContainer>
      </Card>
    </FlexRow>
  )
}
export default Loader
