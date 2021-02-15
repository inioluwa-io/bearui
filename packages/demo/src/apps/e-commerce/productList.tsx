import React, { ImgHTMLAttributes, useEffect, useState } from "react"
import {
  Breadcrumb,
  Card,
  Loader,
  DataList,
  Container,
  FlexRow,
  Chip,
  LinkButton,
} from "@bearui/ui"
import { mdiHomeOutline, mdiPlus } from "@mdi/js"
import Icon from "@mdi/react"
import { ProductProps } from "./types"
import { getProducts } from "./utli"
import styled from "styled-components"
import { useHistory } from "react-router-dom"

const ImageContainer: any = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;

  img {
    position: asbolute;
    max-width: 90%;
    max-height: 90%;
  }
`

const Image: React.FC<ImgHTMLAttributes<HTMLImageElement>> = ({
  className,
  alt,
  ...props
}) => {
  return (
    <ImageContainer {...className}>
      <img {...props} alt={alt} />
    </ImageContainer>
  )
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  //   minimumFractionDigits: 0,
  //   maximumFractionDigits: 0,
})

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<ProductProps[]>()

  useEffect(() => {
    getProducts().then(resp => {
      setProducts(resp)
    })
  }, [])

  const deleteProduct = (value: ProductProps[]) => {
    if (products) {
      const tmp = products?.filter(product => !value.includes(product))

      setProducts(tmp)
    }
  }
  const history = useHistory()

  if (!products) return <Loader />
  return (
    <Container>
      <Card withBackground={false}>
        <FlexRow gap="10px" position="center" align="left">
          <h3 style={{ borderRight: "1px solid #999", paddingRight: "12px" }}>
            Product List
          </h3>
          <Breadcrumb
            item={[
              { name: <Icon path={mdiHomeOutline} size={0.85} />, to: "/" },
              { name: "Apps", to: "#" },
              { name: "eCommerce", to: "#" },
              { name: "Product List", to: "" },
            ]}
          />
        </FlexRow>
      </Card>
      <Card xsCol="12" withBackground={false}>
        <DataList
          onRowSelect={(data: any[]) => {
            // console.log(data)
          }}
          menuActionList={[
            {
              color: "danger",
              text: "Delete",
              onClick: deleteProduct,
            },
          ]}
          actionList={[
            {
              text: "Edit Product",
              onClick: (value: ProductProps[]) => {
                import("lodash").then(lodash => {
                  history.push(
                    `edit-product/${lodash.kebabCase(value[0].name)}/`
                  )
                })
              },
            },
            {
              text: "Delete",
              onClick: deleteProduct,
            },
          ]}
          menu={
            <FlexRow>
              <LinkButton to="add-product/" icon={mdiPlus}>
                Add Product
              </LinkButton>
            </FlexRow>
          }
          defaultSortIndex={2}
          uniqueIdentifier="_id"
          renderRule={[
            {
              selector: "price",
              onRender: (data: ProductProps) => {
                return formatter.format(data.price)
              },
            },
            {
              selector: "image",
              onRender: (data: ProductProps) => {
                return <Image src={data.img} alt={data.name} />
              },
            },
            {
              selector: "status",
              onRender: (data: ProductProps) => {
                if (data.status === 0) {
                  return <Chip color="danger">Out of Stock</Chip>
                } else if (data.status === 1) {
                  return <Chip color="warning">Limited</Chip>
                } else if (data.status === 2) {
                  return <Chip color="success">In Stock</Chip>
                } else {
                  return <Chip color="danger">Out of Stock</Chip>
                }
              },
            },
          ]}
          columns={[
            { name: "Image", selector: "image" },
            { name: "Name", selector: "name" },
            { name: "Category", selector: "category" },
            { name: "Price", selector: "price" },
            { name: "Stock", selector: "stock" },
            { name: "Status", selector: "status" },
          ]}
          document={products}
        />
      </Card>
    </Container>
  )
}

export default ProductList
