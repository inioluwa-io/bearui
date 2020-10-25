import { InvoiceListProp, invoiceData } from "./mock"

export type GetOneResult = Promise<() => InvoiceListProp | undefined>
export type GetOne = (id: string) => GetOneResult

export const getOneInvoice: GetOne = async id => {
  const data = await Promise.resolve(() =>
    invoiceData.find(item => item.number === +id)
  )
  return data
}
