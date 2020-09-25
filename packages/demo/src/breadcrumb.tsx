import React from "react"
import { FlexRow, Card, Breadcrumb } from "@rap/ui"

const BreadcrumbPage: React.FC<any> = ({ ...props }) => {
  return (
    <FlexRow style={{ minHeight: "100vh" }}>
      <FlexRow center>
        <Card size="xs">
          <FlexRow gap="7px" yPosition="center">
            <p>Breadcrumb:</p>
            <Breadcrumb
              seperator="mdiChevronDoubleRight"
              item={[
                { name: "Home", to: "/" },
                { name: "Mens", to: "/datatable" },
                { name: "Breadcrumb", to: "/datatable" },
              ]}
            />
          </FlexRow>
        </Card>
      </FlexRow>
    </FlexRow>
  )
}
export default BreadcrumbPage
