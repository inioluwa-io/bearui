import React from "react"
import Icon from "@mdi/react"
import { mdiFolder, mdiImage, mdiMusic, mdiPlay } from "@mdi/js"
import { getColorFromTheme } from "@bearui/ui"
import { themeConfig } from "../../../configs"

export type supportedIconType = "video" | "music" | "document" | "image"

const RenderIcon: React.FC<{ type: supportedIconType }> = ({ type }) => {
  switch (type) {
    case "video": {
      return (
        <Icon
          path={mdiPlay}
          size={0.9}
          color="#ffffff"
          style={{
            padding: "9px",
            borderRadius: "11px",
            background: getColorFromTheme("danger", themeConfig.colorPalette),
          }}
        />
      )
    }
    case "music": {
      return (
        <Icon
          path={mdiMusic}
          size={0.9}
          color="#ffffff"
          style={{
            padding: "9px",
            borderRadius: "11px",
            background: getColorFromTheme("warning", themeConfig.colorPalette),
          }}
        />
      )
    }
    case "image": {
      return (
        <Icon
          path={mdiImage}
          size={0.9}
          color="#ffffff"
          style={{
            padding: "9px",
            borderRadius: "11px",
            background: getColorFromTheme("success", themeConfig.colorPalette),
          }}
        />
      )
    }
    case "document": {
      return (
        <Icon
          path={mdiFolder}
          size={0.9}
          color="#ffffff"
          style={{
            padding: "9px",
            borderRadius: "11px",
            background: getColorFromTheme("primary", themeConfig.colorPalette),
          }}
        />
      )
    }
    default: {
      throw new Error("File type not supported")
    }
  }
}
export default RenderIcon
