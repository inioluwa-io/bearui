import { ButtonHTMLAttributes } from "react";

export type ButtonStyle = {
  styleType?: 1 | 2
  size: "xs" | "sm" | "md" | "lg"
}

export interface ButtonProps extends ButtonStyle, ButtonHTMLAttributes<any> {
  id?:string
  hoverColor?: string
} 
