import { products } from "./mock"
import { ProductProps } from "./types"

export type GetResult = Promise<() => ProductProps[]>
export type Get = () => GetResult

export const getProducts: Get = async () => {
  const data = await Promise.resolve(() => products)
  return data
}
