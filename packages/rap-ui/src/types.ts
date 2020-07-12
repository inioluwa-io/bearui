import { ButtonHTMLAttributes } from "react"

export type ButtonStyle = {
  corners?: "rounded" | "box"
  textColor?: string
  background?: string
  gradient?: boolean
  outline?: boolean
  iconRight?: boolean
  icon?: string
  borderColor?: string
  iconOnly?: boolean
  glow?: boolean
  size?: "xs" | "sm" | "md" | "lg"
}

export interface ButtonProps extends ButtonStyle, ButtonHTMLAttributes<any> {
  id?: string
  hoverColor?: string
}

export type AvatarProps = {
  size?: string
  color?:string
  textColor?:string
  withBadge?:boolean
  badgeText?:string
  badgeColor?:string
  icon?:string
  src?:string
  text?:string
  alt?:string
}
