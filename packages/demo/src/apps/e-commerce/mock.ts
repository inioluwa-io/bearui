import { ProductProps } from "./types"
import bag from "../../assets/ecommerce/bags.jpg"
import bag2 from "../../assets/ecommerce/string bag.jpg"
import boots from "../../assets/ecommerce/boots.jpg"
import headphones from "../../assets/ecommerce/headphones.jpg"
import hoodie from "../../assets/ecommerce/hoodie.jpg"
import iphonmini12 from "../../assets/ecommerce/iphon12mini.jpg"
import keyboard from "../../assets/ecommerce/keyboard.jpg"
import kyrie from "../../assets/ecommerce/kyrie.jpg"
import shorts from "../../assets/ecommerce/shorts.jpg"
import speaker from "../../assets/ecommerce/speaker.jpg"
import watch from "../../assets/ecommerce/watch.jpg"

export const products: ProductProps[] = [
  {
    _id: "d2h292u200",
    name: "Comfortable Bag Pack",
    img: bag,
    category: "bag",
    price: 40,
    status: 1,
    stock: 31,
  },
  {
    _id: "1348944",
    name: "Comfortable Draw Bag Pack",
    img: bag2,
    category: "bag",
    price: 20,
    status: 0,
    stock: 0,
  },
  {
    _id: "38f348944",
    name: "Underarmour Boots",
    img: boots,
    category: "shoes",
    price: 113,
    status: 1,
    stock: 21,
  },
  {
    _id: "28i24j9hui",
    name: "Skullcandy headphones",
    img: headphones,
    category: "electronics",
    price: 73,
    status: 2,
    stock: 210,
  },
  {
    _id: "wjn49u4ikf",
    name: "Nice fit Hoodie",
    img: hoodie,
    category: "clothing",
    price: 26,
    status: 2,
    stock: 21,
  },
  {
    _id: "fkjb8f834ui",
    name: "iPhone 12 mini - Black, 64gb",
    img: iphonmini12,
    category: "electronics",
    price: 799,
    status: 2,
    stock: 531,
  },
  {
    _id: "fnpuhu084209jz",
    name: "Keyboard",
    img: keyboard,
    category: "electronics",
    price: 39,
    status: 2,
    stock: 417,
  },
  {
    _id: "f2niugnjizi3i3",
    name: "Watch",
    img: watch,
    category: "accessories",
    price: 25,
    status: 1,
    stock: 25,
  },
  {
    _id: "nio35h94tgnjkzio",
    name: "Kyrie 6",
    img: kyrie,
    category: "shoes",
    price: 65,
    status: 1,
    stock: 17,
  },
  {
    _id: "839hg3nvmc9zk",
    name: "Womens shorts",
    img: shorts,
    category: "clothing",
    price: 15,
    status: 0,
    stock: 0,
  },
  {
    _id: "ziu393j3iu17i",
    name: "Soundcore mini speaker",
    img: speaker,
    category: "electronics",
    price: 75,
    status: 0,
    stock: 0,
  },
]
