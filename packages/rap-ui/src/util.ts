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
