import { InvoiceData } from "./types"

export const invoiceData: InvoiceData[] = [
  {
    _id: 3,
    invoice_no: "1246",
    date: 1603789288059,
    biller: { name: "Avengers Inc.", address: "", email: "", phone: "" },
    recipient: { name: "America", address: "", email: "", phone: "" },
    total: 23000,
    status: 0,
    discount: 0,
    subTotal: 23000,
    products: [
      {
        name: "Blackpanther chase",
        description:
          "After misleading events and unnecessary force, we are suing the country for using unnecessary force on our agents. #EndPoliceBrutality",
        price: 23000,
        quantity: 1,
      },
    ],
  },
  {
    _id: 4,
    invoice_no: "1247",
    date: 1623785288059,
    biller: { name: "Avengers Inc.", address: "", email: "", phone: "" },
    recipient: { name: "America", address: "", email: "", phone: "" },
    total: 23000,
    products: [
      {
        name: "Blackpanther chase",
        description:
          "After misleading events and unnecessary force, we are suing the country for using unnecessary force on our agents. #EndPoliceBrutality",
        price: 23000,
        quantity: 1,
      },
    ],
    status: 3,
    discount: 0,
    subTotal: 23000,
  },
  {
    _id: 1,
    invoice_no: "1244",
    date: 1123785288059,
    biller: { name: "Avengers Inc.", address: "", email: "", phone: "" },
    recipient: { name: "Planet Earth", address: "", email: "", phone: "" },
    total: 83000,
    products: [
      {
        name: "Saved Newyork",
        description:
          "We saved the entire city from aliens and it almost caused the life of Tony.",
        price: 83000,
        quantity: 1,
      },
    ],
    status: 2,
    discount: 0,
    subTotal: 83000,
  },
  {
    _id: 2,
    invoice_no: "1245",
    date: 1603789288059,
    biller: { name: "Avengers Inc.", address: "", email: "", phone: "" },
    recipient: { name: "Azgard", address: "", email: "", phone: "" },
    total: 3000,
    products: [
      {
        name: "Defeat Loki",
        description:
          "Loki was finally defeated no thanks to Azgardians so you have to pay up",
        price: 3000,
        quantity: 1,
      },
    ],
    status: 1,
    discount: 0,
    subTotal: 3000,
  },
]
