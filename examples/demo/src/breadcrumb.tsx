import React from "react"
import { FlexRow, Card, Breadcrumb } from "rap-ui"

const BreadcrumbPage: React.FC<any> = ({ ...props }) => {
  return (
    <FlexRow style={{ minHeight: "100vh" }}>
      <FlexRow center>
        <Card size="xs">
          <FlexRow gap="7px" yPosition="center">
            <p>Breadcrumb:</p>
            <Breadcrumb
              seperator=">"
              item={[
                { name: "HOME", to: "/" },
                { name: "MENS", to: "/datatable" },
                { name: "BREADCRUMB", to: "/datatable" },
              ]}
            />
          </FlexRow>
        </Card>
      </FlexRow>
    </FlexRow>
  )
}
export default BreadcrumbPage
