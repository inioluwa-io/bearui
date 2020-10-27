import { invoiceData } from "./mock"
import { InvoiceData } from "./types"

export type GetOneResult = Promise<() => InvoiceData | undefined>
export type GetOne = (id: string) => GetOneResult

export const getOneInvoice: GetOne = async id => {
  const data = await Promise.resolve(() =>
    invoiceData.find(item => item.invoice_no === id)
  )
  return data
}
