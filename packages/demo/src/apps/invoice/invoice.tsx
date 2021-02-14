import React, { useState } from "react"
import { Container, Card, DataList, Chip, Button, LinkButton } from "@bearui/ui"
import { invoiceData } from "./mock"
import { InvoiceData } from "./types"
import { AddInvoiceModal, EditInvoiceModal } from "./invoiceModal"

const Invoice: React.FC<any> = () => {
  const defaultInvoice: InvoiceData = {
    _id: Math.floor(Math.random() * 1024780),
    date: Date.now(),
    invoice_no: "",
    status: 0,
    recipient: { name: "", address: "", email: "", phone: "" },
    biller: { name: "", address: "", email: "", phone: "" },
    products: [{ name: "", description: "", price: 0, quantity: 1 }],
    discount: 0,
    subTotal: 0,
    total: 0,
  }
  const [invoiceList, setInvoiceList] = useState<InvoiceData[]>(invoiceData)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [openEditModal, setOpenEditModal] = useState<boolean>(false)
  const [newInvoice, setNewInvoice] = useState<InvoiceData>(defaultInvoice)

  const removeProduct = (idx: number): void => {
    const tmp: InvoiceData = { ...newInvoice }
    tmp.products.splice(idx, 1)

    setNewInvoice({ ...newInvoice, products: tmp.products })
    calculateTotal()
  }

  const addProduct = (): void => {
    const tmp: InvoiceData = { ...newInvoice }
    tmp.products.push({ name: "", description: "", price: 0, quantity: 1 })

    setNewInvoice({ ...newInvoice, products: tmp.products })
    calculateTotal()
  }

  const calculateTotal = (): void => {
    let subTotal: number = 0
    const tmp = { ...newInvoice }

    for (let i = 0; i < tmp.products.length; i++) {
      let currProduct = tmp.products[i]
      subTotal += +currProduct.price * +currProduct.quantity
    }
    const total = subTotal - tmp.discount
    tmp.subTotal = subTotal
    tmp.total = total

    setNewInvoice(tmp)
  }

  const resetNewInvoice = (): void => {
    setNewInvoice(defaultInvoice)
  }

  const editInvoice = (): void => {
    const tmp = [...invoiceList]

    for (let i = 0; i < tmp.length; i++) {
      if (tmp[i]._id === newInvoice?._id) {
        tmp[i] = newInvoice
      }
    }
    setInvoiceList(tmp)
    resetNewInvoice()
  }

  const updateNewInvoice = (data: InvoiceData): void => {
    setNewInvoice(data)
  }

  const updateInvoice = (): void => {
    setInvoiceList([...invoiceList, newInvoice])
  }

  return (
    <Container>
      <Card xsCol="12" withBackground={false}>
        <DataList
          onRowSelect={(data: any[]) => {
            // console.log(data)
          }}
          menu={
            <>
              <Button
                onClick={() => {
                  resetNewInvoice()
                  setOpenModal(true)
                }}
                icon="mdiPlus"
              >
                Add New
              </Button>
            </>
          }
          defaultSortIndex={1}
          uniqueIdentifier="_id"
          actionList={[
            {
              color: "primary",
              text: "Edit",
              onClick: (value: InvoiceData) => {
                setOpenEditModal(true)
                updateNewInvoice(value)
              },
            },
            {
              color: "danger",
              text: "Delete",
              onClick: (value: any) => {
                const tmp = invoiceList.filter(invoice => invoice !== value)
                setInvoiceList(tmp)
              },
            },
          ]}
          renderRule={[
            {
              selector: "number",
              onRender: (data: any) => {
                return "#" + data.invoice_no
              },
            },
            {
              selector: "biller",
              onRender: (data: any) => {
                return data.biller.name
              },
            },
            {
              selector: "recipient",
              onRender: (data: any) => {
                return data.recipient.name
              },
            },
            {
              selector: "total_cost",
              onRender: (data: any) => {
                return "$" + data.total
              },
            },
            {
              selector: "view",
              onRender: (data: any) => {
                return (
                  <LinkButton
                    background="info"
                    to={"/apps/invoice/" + data.invoice_no}
                  >
                    View
                  </LinkButton>
                )
              },
            },
            {
              selector: "status",
              onRender: (data: any) => {
                if (data.status === 0) {
                  return <Chip color="warning">Pending</Chip>
                } else if (data.status === 1) {
                  return <Chip color="info">Shipped</Chip>
                } else if (data.status === 2) {
                  return <Chip color="success">Delivered</Chip>
                } else if (data.status === 3) {
                  return <Chip color="danger">Canceled</Chip>
                } else {
                  return <Chip color="warning">Pending</Chip>
                }
              },
            },
          ]}
          columns={[
            { name: "NO.", selector: "number" },
            { name: "Biller", selector: "biller" },
            { name: "Recipient", selector: "recipient" },
            { name: "Total Cost", selector: "total_cost" },
            { name: "Status", selector: "status" },
            { name: "View", selector: "view" },
          ]}
          document={invoiceList}
        ></DataList>
      </Card>
      <AddInvoiceModal
        newInvoice={newInvoice}
        openModal={openModal}
        setOpenModal={setOpenModal}
        onSubmit={updateInvoice}
        addProduct={addProduct}
        calculateTotal={calculateTotal}
        removeProduct={removeProduct}
        setNewInvoice={setNewInvoice}
      />
      <EditInvoiceModal
        newInvoice={newInvoice}
        openModal={openEditModal}
        setOpenModal={setOpenEditModal}
        onSubmit={editInvoice}
        addProduct={addProduct}
        calculateTotal={calculateTotal}
        removeProduct={removeProduct}
        setNewInvoice={setNewInvoice}
      />
    </Container>
  )
}
export default Invoice
