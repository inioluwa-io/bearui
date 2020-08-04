import {
  ButtonHTMLAttributes,
  Ref,
  Dispatch,
  SetStateAction,
  LinkHTMLAttributes,
} from "react"

export type ButtonStyle = {
  corners?: "rounded" | "box"
  textColor?: string
  background?: string
  gradient?: boolean
  outline?: boolean
  iconRight?: boolean
  icon?: string
  borderColor?: string
  iconColor?: string
  iconOnly?: boolean
  glow?: boolean
  hoverColor?: string
  size?: "xs" | "sm" | "md" | "lg"
}

export interface ButtonProps extends ButtonStyle, ButtonHTMLAttributes<any> {}

export type AppleSocialButton = {
  color: "dark" | "white"
  corners?: "rounded" | "box"
} & SocialButtonProps
export interface SocialButtonProps extends ButtonHTMLAttributes<any> {
  size?: "xs" | "sm" | "md" | "lg"
  iconOnly?: boolean
  text: string
  onClick: () => any
}
export interface LinkButtonProps extends ButtonStyle, LinkHTMLAttributes<any> {
  id?: string
  hoverColor?: string
  to: string
}

export type AvatarProps = {
  size?: string
  color?: string
  textColor?: string
  withBadge?: boolean
  badgeText?: string
  badgeColor?: string
  icon?: string
  src?: string
  text?: string
  alt?: string
}

export type NotifyProps = {
  text: string
  title: string
  icon?: string
  iconColor?: string
}
export type NotifyWrapper = {
  time: number
  idx: number
  close: () => any
} & NotifyProps

export type NotificationProps = {
  data: NotifyProps[]
  time?: number
}

export interface SwitchProps {
  id?: string
  active: boolean
  disabled?: boolean
  color?: string
  offText?: string
  onText?: string
  onClick: (param: boolean) => any
}

export type InputProps = {
  id: string
  label?: string
  placeholder?: string
  disabled?: boolean
  icon?: string
  iconRight?: boolean
  iconBorder?: boolean
  color?: string
  onError: () => any
  type?: "email" | "text" | "password"
  validation?: "success" | "danger" | "warning"
  size?: "sm" | "md" | "lg"
  onChange: (value: string) => any
}

export type SupportedProps = (arr: any[], value: any) => boolean

// Theme types
export type RapUIThemeColorsProps = {
  primary: string
  success: string
  info: string
  warning: string
  danger: string
  transparent: string
  white: string
  dark: string
}
export type RapUIThemeModeProps = {
  background: string
  cardbackground: string
}
export type RapUITheme = {
  colors: RapUIThemeColorsProps
  darkmode: RapUIThemeModeProps
  lightmode: RapUIThemeModeProps
}
export type RapUIThemeMode = "lightmode" | "darkmode"

export type ThemeMode = [
  RapUIThemeMode,
  Dispatch<SetStateAction<RapUIThemeMode>>
]
// end theme types
