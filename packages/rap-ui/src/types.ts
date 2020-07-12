import { ButtonHTMLAttributes } from "react"

export type ButtonStyle = {
  corners?: "rounded" | "box"
  textColor?: string
  background?: string
  gradient?: boolean
  border?: boolean
  icon:string
  borderColor?: string
  float?:boolean
  size?: "xs" | "sm" | "md" | "lg"
}

export interface ButtonProps extends ButtonStyle, ButtonHTMLAttributes<any> {
  id?: string
  hoverColor?: string
}
