import {
  Modal,
  Button,
  FlexColumn,
  FlexRow,
  Input,
  Select,
  TextArea,
} from "@rap/ui"
import React, { Dispatch } from "react"
import styled from "styled-components"
import { InvoiceData } from "./types"

const ModalInvoiceComponent: any = styled(FlexColumn)`
  @media (max-width: 441px) {
    .row > * {
      flex: auto;
    }
  }
`
type InvoiceModalComponent = {
  setNewInvoice: Dispatch<React.SetStateAction<InvoiceData>>
  newInvoice: InvoiceData
  setOpenModal: Dispatch<React.SetStateAction<boolean>>
  openModal: boolean
  onSubmit: () => void
  addProduct: () => void
  calculateTotal: () => void
  removeProduct: (idx: number) => void
}

export const AddInvoiceModal: React.FC<InvoiceModalComponent> = ({
  setNewInvoice,
  newInvoice,
  openModal,
  setOpenModal,
  onSubmit,
  calculateTotal,
  removeProduct,
  addProduct,
}) => {
  return (
    <Modal
      active={openModal}
      onClose={() => {
        setOpenModal(false)
      }}
      title="Add Invoice"
      submitButton={
        <Button
          onClick={() => {
            onSubmit()
            setOpenModal(false)
            document.body.style.overflowY = "auto"
          }}
        >
          Submit
        </Button>
      }
    >
      <ModalInvoiceComponent id="invoice-component" gap="40px">
        <FlexColumn gap="calc(20px / 1.5)">
          <FlexRow align="left" className="row">
            <Input
              id="invoice-no"
              color="primary"
              label="Invoice number"
              placeholder="Example; #1245"
              onInputChange={value => {
                setNewInvoice({ ...newInvoice, invoice_no: value })
              }}
            />
          </FlexRow>
          <FlexRow align="left" className="row">
            <Select
              id="status"
              color="primary"
              label="Status"
              defaultSelected="Shipped"
              options={["Shipped", "Delivered", "Canceled", "Pending"]}
              placeholder="Example; #1245"
              onSelect={(value: any) => {
                // const index: 0 | 1 | 2 | 3 = label.indexOf("label")
                setNewInvoice({ ...newInvoice, status: 1 })
              }}
            />
          </FlexRow>
        </FlexColumn>

        {/* Recipient Information */}
        <FlexColumn>
          <h6 style={{ fontWeight: 500 }}>Recipient Information</h6>

          <FlexColumn gap="calc(20px / 1.5)">
            <FlexRow align="stretch" position="top" className="row">
              <Input
                id="recipient-name"
                color="primary"
                placeholder="Recipient Name"
                onInputChange={value => {
                  const tmp = { ...newInvoice }
                  tmp.recipient.name = value
                  setNewInvoice(tmp)
                }}
              />
              <Input
                id="recipient-phone"
                color="primary"
                placeholder="Recipient Phone"
                onInputChange={value => {
                  const tmp = { ...newInvoice }
                  tmp.recipient.phone = value
                  setNewInvoice(tmp)
                }}
              />
            </FlexRow>
            <FlexRow align="stretch" position="top" className="row">
              <Input
                id="recipient-email"
                color="primary"
                type="email"
                validate="email"
                placeholder="Recipient Email"
                onInputChange={value => {
                  const tmp = { ...newInvoice }
                  tmp.recipient.email = value
                  setNewInvoice(tmp)
                }}
              />
              <TextArea
                id="recipient-addr"
                color="primary"
                placeholder="Recipient Address"
                onInputChange={value => {
                  const tmp = { ...newInvoice }
                  tmp.recipient.address = value
                  setNewInvoice(tmp)
                }}
              />
            </FlexRow>
          </FlexColumn>
        </FlexColumn>

        {/* Biller Information */}
        <FlexColumn>
          <h6 style={{ fontWeight: 500 }}>Biller Information</h6>

          <FlexColumn gap="calc(20px / 1.5)">
            <FlexRow align="stretch" position="top" className="row">
              <Input
                id="biller-name"
                color="primary"
                placeholder="Biller Name"
                onInputChange={value => {
                  const tmp = { ...newInvoice }
                  tmp.biller.name = value
                  setNewInvoice(tmp)
                }}
              />
              <Input
                id="biller-phone"
                color="primary"
                placeholder="Biller Phone"
                onInputChange={value => {
                  const tmp = { ...newInvoice }
                  tmp.biller.phone = value
                  setNewInvoice(tmp)
                }}
              />
            </FlexRow>
            <FlexRow align="stretch" position="top" className="row">
              <Input
                id="biller-email"
                color="primary"
                type="email"
                validate="email"
                placeholder="Biller Email"
                onInputChange={value => {
                  const tmp = { ...newInvoice }
                  tmp.biller.email = value
                  setNewInvoice(tmp)
                }}
              />
              <TextArea
                id="biller-addr"
                color="primary"
                placeholder="Biller Address"
                onInputChange={value => {
                  const tmp = { ...newInvoice }
                  tmp.biller.address = value
                  setNewInvoice(tmp)
                }}
              />
            </FlexRow>
          </FlexColumn>
        </FlexColumn>

        {/* Products Information */}
        <FlexColumn>
          <h6 style={{ fontWeight: 500 }}>Products Information</h6>
          {newInvoice.products.map((product: any, idx: number) => (
            <FlexColumn gap="calc(20px / 1.5)" key={idx}>
              <p style={{ fontWeight: 500 }}>Product {idx + 1}:</p>
              <FlexRow align="stretch" position="top" className="row">
                <Input
                  id={"product-name" + idx}
                  // label="Product Name"
                  color="primary"
                  placeholder="Product Name"
                  onInputChange={value => {
                    const tmp = { ...newInvoice }
                    tmp.products[idx].name = value
                    setNewInvoice(tmp)
                  }}
                />
                <Input
                  id={"product-quantity" + idx}
                  // label="Product Quantity"
                  color="primary"
                  validate="number"
                  placeholder="Product Quantity"
                  onInputChange={value => {
                    const tmp = { ...newInvoice }
                    tmp.products[idx].quantity = +value
                    setNewInvoice(tmp)
                    calculateTotal()
                  }}
                />
                <Input
                  id={"product-price" + idx}
                  // label="Product Price"
                  color="primary"
                  validate="number"
                  placeholder="Product Price"
                  onInputChange={value => {
                    const tmp = { ...newInvoice }
                    tmp.products[idx].price = +value
                    setNewInvoice(tmp)
                    calculateTotal()
                  }}
                />
              </FlexRow>
              <FlexRow align="stretch" position="top" className="row">
                <TextArea
                  id={"product-desc" + idx}
                  // label="Product Description"
                  color="primary"
                  placeholder="Product Description"
                  onInputChange={value => {
                    const tmp = { ...newInvoice }
                    tmp.products[idx].description = value
                    setNewInvoice(tmp)
                  }}
                />
              </FlexRow>
              {idx > 0 && (
                <FlexRow align="center">
                  <Button
                    background="danger"
                    icon="mdiDelete"
                    outline
                    onClick={() => {
                      removeProduct(idx)
                    }}
                  >
                    Remove Product
                  </Button>
                </FlexRow>
              )}
            </FlexColumn>
          ))}
          <Button
            onClick={() => {
              addProduct()
            }}
          >
            Add more
          </Button>
        </FlexColumn>

        {/* Price Information */}
        <FlexColumn>
          <h6 style={{ fontWeight: 500 }}>Pricing Information</h6>

          <FlexColumn>
            <FlexRow className="row">
              <FlexRow gap="10px">
                <p style={{ fontWeight: 500 }}>SubTotal:</p>
                <p> ${newInvoice.subTotal}</p>
              </FlexRow>
            </FlexRow>
            <FlexRow className="row">
              <Input
                id="discount"
                color="primary"
                validate="number"
                label="Discount"
                placeholder="0.00"
                onInputChange={value => {
                  const tmp = { ...newInvoice }
                  tmp.total = tmp.subTotal - +value
                  tmp.discount = +value
                  setNewInvoice(tmp)
                }}
              />
            </FlexRow>
            <FlexRow className="row">
              <FlexRow gap="10px">
                <p style={{ fontWeight: 500 }}>Total:</p>
                <p> ${newInvoice.total}</p>
              </FlexRow>
            </FlexRow>
          </FlexColumn>
        </FlexColumn>
      </ModalInvoiceComponent>
    </Modal>
  )
}

export const EditInvoiceModal: React.FC<InvoiceModalComponent> = ({
  setNewInvoice,
  newInvoice,
  openModal,
  setOpenModal,
  onSubmit,
  calculateTotal,
  removeProduct,
  addProduct,
}) => {
  const options = ["Pending", "Shipped", "Delivered", "Canceled"]

  return (
    <Modal
      active={openModal}
      onClose={() => {
        setOpenModal(false)
      }}
      title="Edit Invoice"
      submitButton={
        <Button
          onClick={() => {
            onSubmit()
            setOpenModal(false)
            document.body.style.overflowY = "auto"
          }}
        >
          Submit
        </Button>
      }
    >
      <ModalInvoiceComponent id="invoice-component" gap="40px">
        <FlexColumn gap="calc(20px / 1.5)">
          <FlexRow align="left" className="row">
            <Input
              id="invoice-no"
              color="primary"
              label="Invoice number"
              defaultValue={newInvoice.invoice_no}
              placeholder="Example; #1245"
              onInputChange={value => {
                setNewInvoice({ ...newInvoice, invoice_no: value })
              }}
            />
          </FlexRow>
          <FlexRow align="left" className="row">
            <Select
              id="status"
              color="primary"
              label="Status"
              defaultSelected={options[newInvoice.status]}
              options={options}
              placeholder="Example; #1245"
              onSelect={(value: any) => {
                // const index: 0 | 1 | 2 | 3 = label.indexOf("label")
                setNewInvoice({ ...newInvoice, status: 1 })
              }}
            />
          </FlexRow>
        </FlexColumn>

        {/* Recipient Information */}
        <FlexColumn>
          <h6 style={{ fontWeight: 500 }}>Recipient Information</h6>

          <FlexColumn gap="calc(20px / 1.5)">
            <FlexRow align="stretch" position="top" className="row">
              <Input
                id="recipient-name"
                color="primary"
                placeholder="Recipient Name"
                defaultValue={newInvoice.recipient.name}
                onInputChange={value => {
                  const tmp = { ...newInvoice }
                  tmp.recipient.name = value
                  setNewInvoice(tmp)
                }}
              />
              <Input
                id="recipient-phone"
                color="primary"
                placeholder="Recipient Phone"
                defaultValue={newInvoice.recipient.phone}
                onInputChange={value => {
                  const tmp = { ...newInvoice }
                  tmp.recipient.phone = value
                  setNewInvoice(tmp)
                }}
              />
            </FlexRow>
            <FlexRow align="stretch" position="top" className="row">
              <Input
                id="recipient-email"
                color="primary"
                type="email"
                validate="email"
                placeholder="Recipient Email"
                defaultValue={newInvoice.recipient.email}
                onInputChange={value => {
                  const tmp = { ...newInvoice }
                  tmp.recipient.email = value
                  setNewInvoice(tmp)
                }}
              />
              <TextArea
                id="recipient-addr"
                color="primary"
                placeholder="Recipient Address"
                defaultValue={newInvoice.recipient.address}
                onInputChange={value => {
                  const tmp = { ...newInvoice }
                  tmp.recipient.address = value
                  setNewInvoice(tmp)
                }}
              />
            </FlexRow>
          </FlexColumn>
        </FlexColumn>

        {/* Biller Information */}
        <FlexColumn>
          <h6 style={{ fontWeight: 500 }}>Biller Information</h6>

          <FlexColumn gap="calc(20px / 1.5)">
            <FlexRow align="stretch" position="top" className="row">
              <Input
                id="biller-name"
                color="primary"
                placeholder="Biller Name"
                defaultValue={newInvoice.biller.name}
                onInputChange={value => {
                  const tmp = { ...newInvoice }
                  tmp.biller.name = value
                  setNewInvoice(tmp)
                }}
              />
              <Input
                id="biller-phone"
                color="primary"
                placeholder="Biller Phone"
                defaultValue={newInvoice.biller.phone}
                onInputChange={value => {
                  const tmp = { ...newInvoice }
                  tmp.biller.phone = value
                  setNewInvoice(tmp)
                }}
              />
            </FlexRow>
            <FlexRow align="stretch" position="top" className="row">
              <Input
                id="biller-email"
                color="primary"
                type="email"
                validate="email"
                defaultValue={newInvoice.biller.email}
                placeholder="Biller Email"
                onInputChange={value => {
                  const tmp = { ...newInvoice }
                  tmp.biller.email = value
                  setNewInvoice(tmp)
                }}
              />
              <TextArea
                id="biller-addr"
                color="primary"
                placeholder="Biller Address"
                defaultValue={newInvoice.biller.address}
                onInputChange={value => {
                  const tmp = { ...newInvoice }
                  tmp.biller.address = value
                  setNewInvoice(tmp)
                }}
              />
            </FlexRow>
          </FlexColumn>
        </FlexColumn>

        {/* Products Information */}
        <FlexColumn>
          <h6 style={{ fontWeight: 500 }}>Products Information</h6>
          {newInvoice.products.map((product, idx: number) => (
            <FlexColumn gap="calc(20px / 1.5)" key={idx}>
              <p style={{ fontWeight: 500 }}>Product {idx + 1}:</p>
              <FlexRow align="stretch" position="top" className="row">
                <Input
                  id={"product-name" + idx}
                  // label="Product Name"
                  color="primary"
                  placeholder="Product Name"
                  defaultValue={product.name}
                  onInputChange={value => {
                    const tmp = { ...newInvoice }
                    tmp.products[idx].name = value
                    setNewInvoice(tmp)
                  }}
                />
                <Input
                  id={"product-quantity" + idx}
                  // label="Product Quantity"
                  color="primary"
                  validate="number"
                  placeholder="Product Quantity"
                  defaultValue={"" + product.quantity}
                  onInputChange={value => {
                    const tmp = { ...newInvoice }
                    tmp.products[idx].quantity = +value
                    setNewInvoice(tmp)
                    calculateTotal()
                  }}
                />
                <Input
                  id={"product-price" + idx}
                  // label="Product Price"
                  color="primary"
                  validate="number"
                  defaultValue={"" + product.price}
                  placeholder="Product Price"
                  onInputChange={value => {
                    const tmp = { ...newInvoice }
                    tmp.products[idx].price = +value
                    setNewInvoice(tmp)
                    calculateTotal()
                  }}
                />
              </FlexRow>
              <FlexRow align="stretch" position="top" className="row">
                <TextArea
                  id={"product-desc" + idx}
                  // label="Product Description"
                  defaultValue={product.description}
                  color="primary"
                  placeholder="Product Description"
                  onInputChange={value => {
                    const tmp = { ...newInvoice }
                    tmp.products[idx].description = value
                    setNewInvoice(tmp)
                  }}
                />
              </FlexRow>
              {idx > 0 && (
                <FlexRow align="center">
                  <Button
                    background="danger"
                    icon="mdiDelete"
                    outline
                    onClick={() => {
                      removeProduct(idx)
                    }}
                  >
                    Remove Product
                  </Button>
                </FlexRow>
              )}
            </FlexColumn>
          ))}
          <Button
            onClick={() => {
              addProduct()
            }}
          >
            Add more
          </Button>
        </FlexColumn>

        {/* Price Information */}
        <FlexColumn>
          <h6 style={{ fontWeight: 500 }}>Pricing Information</h6>

          <FlexColumn>
            <FlexRow className="row">
              <FlexRow gap="10px">
                <p style={{ fontWeight: 500 }}>SubTotal:</p>
                <p> ${newInvoice.subTotal}</p>
              </FlexRow>
            </FlexRow>
            <FlexRow className="row">
              <Input
                id="discount"
                color="primary"
                validate="number"
                label="Discount"
                placeholder="0.00"
                onInputChange={value => {
                  const tmp = { ...newInvoice }
                  tmp.total = tmp.subTotal - +value
                  tmp.discount = +value
                  setNewInvoice(tmp)
                }}
              />
            </FlexRow>
            <FlexRow className="row">
              <FlexRow gap="10px">
                <p style={{ fontWeight: 500 }}>Total:</p>
                <p> ${newInvoice.total}</p>
              </FlexRow>
            </FlexRow>
          </FlexColumn>
        </FlexColumn>
      </ModalInvoiceComponent>
    </Modal>
  )
}
