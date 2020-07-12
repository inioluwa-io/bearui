import { ButtonHTMLAttributes } from "react"

export type ButtonStyle = {
  corners?: "rounded" | "box"
  textColor?: string
  background?: string
  gradient?: boolean
  border?: boolean
  iconRight?: boolean
  icon:string 
  borderColor?: string
  iconOnly:boolean
  float?:boolean
  size?: "xs" | "sm" | "md" | "lg"
}

export interface ButtonProps extends ButtonStyle, ButtonHTMLAttributes<any> {
  id?: string
  hoverColor?: string
}
