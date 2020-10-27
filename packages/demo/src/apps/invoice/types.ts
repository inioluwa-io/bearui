export type UserData = {
  name: string
  address: string
  email: string
  phone: string
}

export type ProductData = {
  name: string
  description: string
  price: number
  quantity: number
}

export type InvoiceData = {
  _id: number
  invoice_no: string
  status: 0 | 1 | 2 | 3
  recipient: UserData
  date?: number
  biller: UserData
  products: ProductData[]
  discount: number
  subTotal: number
  total: number
}
