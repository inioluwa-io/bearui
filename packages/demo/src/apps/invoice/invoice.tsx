import React, { useState } from "react"
import {
  Container,
  Card,
  DataList,
  Chip,
  Button,
  LinkButton,
  FlexColumn,
  Modal,
  Input,
  TextArea,
  FlexRow,
  Select,
} from "@rap/ui"
import { invoiceData, InvoiceListProp } from "./mock"
import styled from "styled-components"

const AddInvoiceComponent: any = styled(FlexColumn)`
  @media (max-width: 441px) {
    .row > * {
      flex: auto;
    }
  }
`

const Invoice: React.FC<any> = () => {
  const [invoiceList, setInvoiceList] = useState<InvoiceListProp[]>(invoiceData)
  const [openModal, setOpenModal] = useState<boolean>(false)

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
              onClick: (value: InvoiceListProp) => {
                console.log(value)
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
                return "#" + data.number
              },
            },
            {
              selector: "total_cost",
              onRender: (data: any) => {
                return "$" + data.total_cost
              },
            },
            {
              selector: "view",
              onRender: (data: any) => {
                return (
                  <LinkButton
                    background="info"
                    to={"/apps/invoice/" + data.number}
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
      <Modal
        active={openModal}
        onClose={() => {
          setOpenModal(false)
        }}
        title="Add Invoice"
        submitButton={
          <Button
            onClick={() => {
              // editTask()
            }}
          >
            Submit
          </Button>
        }
      >
        <AddInvoiceComponent id="invoice-component" gap="40px">
          <FlexColumn gap="calc(20px / 1.5)">
            <FlexRow align="left" className="row">
              <Input
                id="invoice-no"
                color="primary"
                label="Invoice number"
                placeholder="Example; #1245"
                onInputChange={() => {}}
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
                  onInputChange={() => {}}
                />
                <Input
                  id="recipient-phone"
                  color="primary"
                  placeholder="Recipient Phone"
                  onInputChange={() => {}}
                />
              </FlexRow>
              <FlexRow align="stretch" position="top" className="row">
                <Input
                  id="recipient-email"
                  color="primary"
                  type="email"
                  placeholder="Recipient Email"
                  onInputChange={() => {}}
                />
                <TextArea
                  id="recipient-addr"
                  color="primary"
                  placeholder="Recipient Address"
                  onInputChange={() => {}}
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
                  onInputChange={() => {}}
                />
                <Input
                  id="biller-phone"
                  color="primary"
                  placeholder="Biller Phone"
                  onInputChange={() => {}}
                />
              </FlexRow>
              <FlexRow align="stretch" position="top" className="row">
                <Input
                  id="biller-email"
                  color="primary"
                  type="email"
                  placeholder="Biller Email"
                  onInputChange={() => {}}
                />
                <TextArea
                  id="biller-addr"
                  color="primary"
                  placeholder="Biller Address"
                  onInputChange={() => {}}
                />
              </FlexRow>
            </FlexColumn>
          </FlexColumn>

          {/* Price Information */}
          <FlexColumn>
            <h6 style={{ fontWeight: 500 }}>Pricing Information</h6>

            <FlexColumn>
              <FlexRow className="row">
                <FlexRow gap="10px">
                  <p style={{ fontWeight: 500 }}>SubTotal:</p>
                  <p> $24,000</p>
                </FlexRow>
              </FlexRow>
              <FlexRow className="row">
                <Input
                  id="biller-name"
                  color="primary"
                  validate="number"
                  label="Discount"
                  placeholder="0.00"
                  onInputChange={() => {}}
                />
              </FlexRow>
              <FlexRow className="row">
                <FlexRow gap="10px">
                  <p style={{ fontWeight: 500 }}>Total:</p>
                  <p> $24,000</p>
                </FlexRow>
              </FlexRow>
            </FlexColumn>
          </FlexColumn>
        </AddInvoiceComponent>
      </Modal>
    </Container>
  )
}
export default Invoice
