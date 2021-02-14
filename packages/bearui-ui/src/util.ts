import { useTheme, useThemeMode } from "./theme"
import { SupportedProps } from "./types"

export const updateProps: Function = (value: any, props: any): any => {
  if (value && isObject(value)) {
    return (props = Object.assign(value, props))
  }
  throw new Error("value must be an object")
}

export const isObject: Function = (object: any): boolean =>
  typeof object === "object"

export const isSupported: SupportedProps = (arr, value) => arr.includes(value)

export const getColorFromTheme = (color: string, theme: any): string => {
  const supportedColors = [
    "primary",
    "secondary",
    "dark",
    "info",
    "warning",
    "danger",
    "success",
    "transparent",
    "white",
  ]

  let finalColor: string = color
  if (supportedColors.includes(color)) {
    finalColor = theme.colors[color]
  }
  return finalColor
}

export const isProdEnv = (): boolean => process.env.NODE_ENV === "production"
