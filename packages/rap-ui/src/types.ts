import {
  ButtonHTMLAttributes,
  Dispatch,
  SetStateAction,
  LinkHTMLAttributes,
  HTMLAttributes,
  ComponentType,
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

export interface ButtonProps extends ButtonStyle, ButtonHTMLAttributes<any> {
  loading?: boolean
  loadingIcon?: any
}

export type AppleSocialButton = {
  color?: "dark" | "white"
  corners?: "rounded" | "box"
} & SocialButtonProps

export type GoogleSocialButton = {
  color?: "red" | "white" | "blue"
  corners?: "rounded" | "box"
} & SocialButtonProps

export type FacebookSocialButton = {
  color?: "white" | "blue"
  corners?: "rounded" | "box"
} & SocialButtonProps
export interface SocialButtonProps extends ButtonHTMLAttributes<any> {
  size?: "xs" | "sm" | "md" | "lg"
  iconOnly?: boolean
  text?: string
  gradient?: boolean
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
  onInputChange?: (value: string) => any
} & HTMLAttributes<HTMLInputElement>

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

// modal props
export type ModalProps = {
  active: boolean
  title?: string
  onClose: () => any
} & HTMLAttributes<HTMLDivElement>
// end

// card props
export type CardProps = {
  size?: "md" | "sm" | "lg"
  gap?: string
  align?: "left" | "right" | "center"
  lgCol?: string
  mdCol?: string
  smCol?: string
  xsCol?: string
} & HTMLAttributes<HTMLDivElement>
// end

// modal props
export type ShimmerProps = {
  loading: boolean
  size?: "md" | "sm" | "lg"
  gap?: string
} & HTMLAttributes<HTMLDivElement>
// end

// display props

export type yPositionProps = "top" | "center" | "bottom"
export type xPositionProps = "left" | "center" | "right"

export type HTMLElement = {
  id?: string
  className?: string
} & HTMLAttributes<HTMLDivElement>

export type RowProps = {
  center?: boolean
  gap?: string
  xPosition?: xPositionProps
  yPosition?: yPositionProps
} & HTMLAttributes<HTMLDivElement>

export type FlexColumnProps = {
  align?: yPositionProps | "stretch"
  gap?: string
} & HTMLAttributes<HTMLDivElement>
// end

// datatable props

export type DatatableColumns = {
  name: string
  selector: string
}

export type DatatableRule = {
  selector: string
  onRender: (data: any) => string | ComponentType<any> | Element
}

export type DatatableComponent = {
  title?: string | HTMLAllCollection
  document: any[]
  striped?: boolean
  columns: DatatableColumns[]
  check?: boolean
  renderRule?: DatatableRule[]
  defaultSortIndex?: number
} & HTMLAttributes<HTMLDivElement>

// end

// loeader props
export type LoaderComponent = {
  type?: "spinner" | "pulse"
  customIcon?: any
  width?: string
  height?: string
  iconSize?: number
  size?: string
} & HTMLAttributes<HTMLDivElement>
// end
