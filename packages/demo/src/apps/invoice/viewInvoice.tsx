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
} from "@rap/ui"
import { withRouter } from "react-router-dom"
import { getOneInvoice } from "./util"
import { InvoiceListProp } from "./mock"
import Icon from "@mdi/react"
import { mdiEmailOutline, mdiPhone } from "@mdi/js"
import "./style.css"


const ViewInvoice: React.FC<any> = ({ match }) => {
  const invoice_no: string = match.params.id
  const [invoiceDetails, setInvoiceDetails] = useState<InvoiceListProp>()

  useEffect(() => {
    getOneInvoice(invoice_no).then(data => {
      setInvoiceDetails(data)
    })
  }, [invoice_no])

  const [themeMode] = useThemeMode()
  const theme = useTheme()

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
          iconOnly
          iconColor={themeMode === "lightmode" ? "#444444" : "#f4f4f4"}
          icon="mdiChevronLeft"
        ></LinkButton>
      </Card>
      <Card xsCol="12" withBackground={true} gap="40px">
        <FlexRow align="space" position="top" id="invoice-heading">
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
          <FlexRow align="right">
            <Button
              icon="mdiFileOutline"
              onClick={() => {
                window.print()
              }}
            >
              Print
            </Button>
          </FlexRow>
        </FlexRow>
        <div id="invoice" style={{ width: "100%" }}>
          <FlexColumn gap="35px">
            <FlexRow align="right" position="top">
              <h1 style={{ fontWeight: 500, fontSize: "2.5rem" }}>Invoice</h1>
            </FlexRow>

            {/* Order header */}
            <FlexColumn className="order-info">
              <FlexRow align="space" position="top">
                <FlexColumn align="left" gap="7px">
                  <h6 style={{ fontWeight: 500 }}>INVOICE NO.</h6>
                  <p>#{invoiceDetails?.number}</p>
                </FlexColumn>
                <FlexColumn align="right" gap="7px">
                  <h6 style={{ fontWeight: 500 }}>INVOICE DATE.</h6>
                  <p>{invoiceDetails?.date}</p>
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
                <h5 style={{ fontWeight: 500 }}>{invoiceDetails?.recipient}</h5>
                <p>
                  <address>
                    Somewhere <br />
                    Somewhere <br />
                    Somewhere <br />
                    Somewhere
                  </address>
                </p>
                <FlexRow gap="7px">
                  <Icon path={mdiEmailOutline} size={0.75} />
                  <p>something@gmail.com</p>
                </FlexRow>
                <FlexRow gap="7px">
                  <Icon path={mdiPhone} size={0.75} />
                  <p>+2348 2389 4389</p>
                </FlexRow>
              </FlexColumn>
              <FlexColumn className="recipent" align="right" gap="10px">
                <h5 style={{ fontWeight: 500 }}>{invoiceDetails?.biller}</h5>
                <p>
                  <address>
                    Somewhere <br />
                    Somewhere <br />
                    Somewhere
                  </address>
                </p>
                <FlexRow gap="7px" align="right">
                  <Icon path={mdiEmailOutline} size={0.75} />
                  <p>something@gmail.com</p>
                </FlexRow>
                <FlexRow gap="7px" align="right">
                  <Icon path={mdiPhone} size={0.75} />
                  <p>+2348 2389 4389</p>
                </FlexRow>
              </FlexColumn>
            </FlexRow>
          </FlexColumn>
        </div>
      </Card>
    </Container>
  )
}
export default withRouter(ViewInvoice)
