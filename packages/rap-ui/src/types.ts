import { ButtonHTMLAttributes } from "react";

export type ButtonStyle = {
  corners?: "rounded" | "box"
  size: "xs" | "sm" | "md" | "lg"
}

export interface ButtonProps extends ButtonStyle, ButtonHTMLAttributes<any> {
  id?:string
  hoverColor?: string
} 
