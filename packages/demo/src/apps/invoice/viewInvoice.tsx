import React, { useEffect, useState } from "react"
import {
  Container,
  Card,
  Input,
  LinkButton,
  FlexColumn,
  FlexRow,
  useThemeMode,
  useTheme,
  Button,
  Loader,
} from "@bearui/ui"
import { withRouter } from "react-router-dom"
import { getOneInvoice } from "./util"
import { InvoiceData } from "./types"
import Icon from "@mdi/react"
import { mdiChevronLeft, mdiEmailOutline, mdiPhone } from "@mdi/js"
import "./style.css"
import styled from "styled-components"

const ProductTable: any = styled.table`
  border: 2px solid rgba(0, 0, 0, 0.13);
  border-collapse: collapse;
  padding: 0 15px;
  overflow: hidden;

  th {
    font-size: 13px;
    font-family: inherit;
    font-weight: 500;
    background: rgba(0, 0, 0, 0.13);
    text-transform: uppercase;
    padding: 12px;

    &:first-child {
      padding-right: 10vw;
    }
  }
  td {
    font-size: 14px;
    padding: 12px;
    font-family: inherit;
  }
`

const ProductTotal: any = styled.table`
  outline: 2px solid rgba(0, 0, 0, 0.13);
  border-collapse: collapse;
  min-width: 300px;
  margin: 0 15px;

  th {
    font-size: 13px;
    font-weight: 500;
    font-family: inherit;
    text-transform: uppercase;
    padding: 12px;

    &:first-child {
      padding-right: 10vw;
    }
  }
  td {
    font-size: 14px;
    font-family: inherit;
    padding: 12px;
  }
`

const ViewInvoice: React.FC<any> = ({ match }) => {
  const invoice_no: string = match.params.id
  const [invoiceDetails, setInvoiceDetails] = useState<InvoiceData>()

  useEffect(() => {
    getOneInvoice(invoice_no).then(data => {
      setInvoiceDetails(data)
    })
  }, [invoice_no])

  const [themeMode] = useThemeMode()
  const [theme] = useTheme()

  if (!invoiceDetails) return <Loader />

  const renderStatus = (id: number) => {
    switch (id) {
      case 0: {
        return "Pending"
      }
      case 1: {
        return "Shipped"
      }
      case 2: {
        return "Delivered"
      }
      case 3: {
        return "Canceled"
      }
      default: {
        return "Pending"
      }
    }
  }

  return (
    <Container>
      <Card xsCol="12" withBackground={false}>
        <LinkButton
          to="./"
          background={theme[themeMode].cardbackground}
          iconOnly="true"
          iconColor={themeMode === "lightmode" ? "#444444" : "#f4f4f4"}
          icon={mdiChevronLeft}
        ></LinkButton>
      </Card>
      <Card xsCol="12" size="sm" withBackground={true} gap="80px">
        <FlexRow align="space" position="top" id="invoice-heading">
          <div>
            <FlexRow gap="10px" position="top">
              <Input
                id="send-email"
                placeholder="Email"
                color="primary"
                onInputChange={() => {}}
                type="email"
              />
              <Button>Send Invoice</Button>
            </FlexRow>
          </div>
          <div>
            <FlexRow align="right">
              <Button
                icon={mdiEmailOutline}
                onClick={() => {
                  window.print()
                }}
              >
                Print
              </Button>
            </FlexRow>
          </div>
        </FlexRow>
        <div id="invoice" style={{ width: "100%" }}>
          <FlexColumn gap="50px">
            <FlexRow align="right" position="top">
              <h1 style={{ fontWeight: 500, fontSize: "2.5rem" }}>Invoice</h1>
            </FlexRow>

            {/* Order header */}
            <FlexColumn className="order-info">
              <FlexRow align="space" position="top">
                <FlexColumn align="left" gap="7px">
                  <h6 style={{ fontWeight: 500 }}>INVOICE NO.</h6>
                  <p>#{invoiceDetails?.invoice_no}</p>
                </FlexColumn>
                <FlexColumn align="right" gap="7px">
                  <h6 style={{ fontWeight: 500 }}>INVOICE DATE.</h6>
                  <p>
                    {invoiceDetails?.date &&
                      new Date(invoiceDetails?.date).toDateString()}
                  </p>
                </FlexColumn>
              </FlexRow>
              <FlexColumn align="right" gap="7px">
                <h6 style={{ fontWeight: 500 }}>ORDER STATUS.</h6>
                <p>{renderStatus(invoiceDetails?.status)}</p>
              </FlexColumn>
            </FlexColumn>
            {/* Order header end */}

            {/* Address */}
            <FlexRow align="space" position="top">
              <FlexColumn className="recipent" gap="10px">
                <h5 style={{ fontWeight: 500 }}>
                  {invoiceDetails?.recipient.name}
                </h5>
                <address>{invoiceDetails?.recipient?.address}</address>

                <FlexRow gap="7px">
                  <Icon path={mdiEmailOutline} size={0.75} />
                  <p>{invoiceDetails?.recipient?.email}</p>
                </FlexRow>
                <FlexRow gap="7px">
                  <Icon path={mdiPhone} size={0.75} />
                  <p>{invoiceDetails?.recipient?.phone}</p>
                </FlexRow>
              </FlexColumn>
              <FlexColumn className="recipent" align="right" gap="10px">
                <h5 style={{ fontWeight: 500 }}>
                  {invoiceDetails?.biller.name}
                </h5>
                <address>{invoiceDetails?.biller?.address}</address>

                <FlexRow gap="7px" align="right">
                  <Icon path={mdiEmailOutline} size={0.75} />
                  <p>{invoiceDetails?.biller?.email}</p>
                </FlexRow>
                <FlexRow gap="7px" align="right">
                  <Icon path={mdiPhone} size={0.75} />
                  <p>{invoiceDetails?.biller?.phone}</p>
                </FlexRow>
              </FlexColumn>
            </FlexRow>

            <FlexColumn>
              {/* Products */}
              <FlexRow align="stretch" id="prod-dtl">
                <ProductTable>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoiceDetails?.products.map((product, idx: number) => (
                      <tr key={idx}>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>${product.price}</td>
                        <td>${product.price * product.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </ProductTable>
              </FlexRow>
              <FlexRow align="right">
                <ProductTotal>
                  <thead>
                    <tr>{/*  */}</tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Subtotal</th>
                      <td>$ {invoiceDetails?.subTotal}</td>
                    </tr>
                    <tr>
                      <th>Discount</th>
                      <td>$ {invoiceDetails?.discount}</td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <td>$ {invoiceDetails?.total}</td>
                    </tr>
                  </tbody>
                </ProductTotal>
              </FlexRow>
            </FlexColumn>
          </FlexColumn>
        </div>
      </Card>
    </Container>
  )
}
export default withRouter(ViewInvoice)
