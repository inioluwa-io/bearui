import React, { useState } from "react"
import {
  Card,
  useTheme,
  useThemeMode,
  FlexColumn,
  FlexRow,
  Tabs,
  Button,
  Select,
  Input,
} from "@bearui/ui"
import styled from "styled-components"
import Icon from "@mdi/react"
import { mdiBitcoin, mdiEthereum, mdiMagnify } from "@mdi/js"
import { themeConfig } from "../../configs"

type CryptoWidget = {}

const CardContainer: any = styled(Card)`
  h6 {
    font-size: 15px;
  }
  #crypto-currency-section {
    input {
      display: none;

      &:checked + label {
        border: 1px solid ${themeConfig.colorPalette.colors.primary};
      }
    }
  }

  .tab-container {
    margin-bottom: 0;
  }
`

const CryptoButton: any = styled.label`
  outline: none;
  padding: 12px 20px;
  border: 1px solid #88888888;
  background: transparent;
  border-radius: 7px;
  position: relative;
  font-size: 13px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.25s, border 0.25s ease;

  &:active {
    background: #99999922;
  }

  svg {
    margin-right: 7px;
  }
`

const CryptoWidget: React.FC = ({ ...props }) => {
  const [theme] = useTheme()
  const [themeMode] = useThemeMode()
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <CardContainer
      mdCol="4"
      smCol="12"
      size="xs"
      textColor={theme[themeMode].textColor}
      {...props}
    >
      <Tabs
        onTabClick={(key: number) => {
          setTabIndex(key)
        }}
        list={[
          { title: "Buy", content: "" },
          { title: "Sell", content: "" },
        ]}
      />
      <FlexColumn gap="10px">
        <h6 className="h5">Cryptocurrency</h6>
        <FlexRow gap="10px" id="crypto-currency-section">
          <input type="radio" defaultChecked name="crypto-currency" id="btc" />
          <CryptoButton htmlFor="btc">
            <Icon size={0.75} path={mdiBitcoin} color={theme.colors.warning} />
            Bitcoin
          </CryptoButton>
          <input type="radio" name="crypto-currency" id="eth" />
          <CryptoButton htmlFor="eth">
            <Icon size={0.75} path={mdiEthereum} color={theme.colors.primary} />
            Ethereum
          </CryptoButton>
        </FlexRow>
      </FlexColumn>
      <FlexColumn gap="10px">
        <h6 className="h5">
          {tabIndex === 0 ? "Payment Method" : "Get Pain In"}
        </h6>
        <FlexRow gap="10px" id="payment-method-section" align="stretch">
          <Select
            size="md"
            color="primary"
            placeholder="All Payment Methods"
            options={["Bank transfer"]}
          />
        </FlexRow>
      </FlexColumn>
      <FlexColumn gap="10px">
        <h6 className="h5">{tabIndex === 0 ? "You Pay" : "You Get"}</h6>
        <FlexRow gap="10px" id="payment-method-section" align="stretch">
          <Input
            placeholder="Any Amount"
            onInputChange={() => {}}
            size="md"
            color="primary"
          />
        </FlexRow>
      </FlexColumn>
      <FlexRow align="stretch">
        <Button corners = "box" size="md" icon={mdiMagnify}>
          Find Offers
        </Button>
      </FlexRow>
    </CardContainer>
  )
}

export default CryptoWidget
