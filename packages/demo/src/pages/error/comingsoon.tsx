import { Card, FlexColumn, FlexRow, Input, Button, useThemeMode } from "@bearui/ui"
import React from "react"
import styled from "styled-components"
import SVGComingSoon from "../../assets/comingsoon.svg"

const ComingSoonCard: any = styled(Card)`
  overflow: auto;
  max-width: 17em;

  #svgcomingsoon {
    transform: translate(20px, -30px);

    #bubble1,
    #bubble5 {
      opacity: 0;
      animation: float 5s ease-in-out infinite;
      animation-delay: 0.5s;
    }
    #bubble3,
    #bubble9 {
      opacity: 0;
      animation: float 5s ease-in-out infinite;
      animation-delay: 1s;
    }
    #bubble2,
    #bubble4 {
      opacity: 0;
      animation: float 5s ease-in-out infinite;
      animation-delay: 2s;
    }
    #bubble6,
    #bubble8 {
      opacity: 0;
      animation: float 5s ease-in-out infinite;
      animation-delay: 3s;
    }
    #bubble7,
    #bubble11 {
      opacity: 0;
      animation: float 5s ease-in-out infinite;
      animation-delay: 4s;
    }
    #bubble10 {
      opacity: 0;
      animation: float 5s ease-in-out infinite;
      animation-delay: 5s;
    }
  }

  @keyframes float {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    25% {
      opacity: 1;
    }
    50% {
      transform: translate(30px, -40px);
      opacity: 0;
    }

    100% {
      transform: translateY(0px);
      opacity: 0;
    }
  }

  @media (max-width: 441px) {
    max-width: fit-content;
    height: calc(100% - 61px);
    justify-content: center;
  }
`

const ComingSoonPage: React.FC = () => {
  const [themeMode] = useThemeMode()

  return (
    <FlexRow center style={{ height: "100%" }}>
      <ComingSoonCard
        size="md"
        align="center"
        gap="0px"
        textColor={themeMode === "lightmode" ? "#181125" : "#f4f4f4"}
      >
        <h1 style={{ fontSize: "1em", fontWeight: 500 }}>
          We are launching soon
        </h1>
        <SVGComingSoon id="svgcomingsoon" />
        <form style={{ width: "100%" }}>
          <FlexColumn gap="15px" align="stretch">
            <p style={{ textAlign: "left" }}>
              If you will like to be notified when app is live, Please subscribe
              to our mailing list
            </p>
            <FlexRow align="stretch">
              <Input onInputChange={() => {}} placeholder="Email" />
            </FlexRow>
            <Button>Subscribe</Button>
          </FlexColumn>
        </form>
      </ComingSoonCard>
    </FlexRow>
  )
}

export default ComingSoonPage
