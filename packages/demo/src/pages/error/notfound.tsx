import { Card, FlexColumn, FlexRow, LinkButton, useThemeMode } from "@rap/ui"
import React from "react"
import styled from "styled-components"
import Image4SVG40404 from "../../assets/404.svg"

const NotFoundCard: any = styled(Card)`
  overflow: auto;
  #svg404 {
    #cloud4,
    #cloud2 {
      animation: move 3.5s ease-in-out infinite alternate;
      // animation-delay: 1s;
    }
    // #cloud2 {
    //   animation: move 3.5s ease-in-out infinite alternate;
    // }
    #cloud1,
    #cloud3,
    #cloud5 {
      animation: moveInverse 3.5s ease-in-out infinite alternate;
      // animation-delay: 0.5s;
    }
    // #cloud5 {
    //   animation: moveInverse 3.5s ease-in-out infinite alternate;
    //   // animation-delay: 1.5s;
    // }
    // #cloud3 {
    //   animation: moveInverse 3.5s ease-in-out infinite alternate;
    //   // animation-delay: 2.5s;
    // }
    #Layer_3 {
      #glow1 {
        animation: 1.55s blink .65s ease-in-out infinite alternate;
        opacity: 0;
      }
      #glow2 {
        animation: blink 1.55s ease-in-out infinite alternate;
        opacity: 0;
      }
    }
    #text {
      transform: translateY(-40px);
      path {
        fill: ${(props: any) => props.textColor};
      }
    }
  }

  @keyframes blink {
    from {
      opacity: 0.5;
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes move {
    from {
      transform: translateX(0px);
    }

    100% {
      transform: translateX(200px);
    }
  }

  @keyframes moveInverse {
    from {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-130px);
    }
  }

  @media (max-width: 441px) {
    height: calc(100% - 61px);
    justify-content: center;
  }
`

const NotFoundPage: React.FC = () => {
  const [themeMode] = useThemeMode()

  return (
    <FlexRow center style={{ height: "100%" }}>
      <NotFoundCard
        size="md"
        align="center"
        gap="0px"
        textColor={themeMode === "lightmode" ? "#181125" : "#f4f4f4"}
      >
        <Image4SVG40404 id="svg404" />
        <FlexColumn gap="30px" align="center">
          <p>This planet does not exist!</p>
          <LinkButton gradient="true" to="/">
            BACK HOME
          </LinkButton>
        </FlexColumn>
      </NotFoundCard>
    </FlexRow>
  )
}

export default NotFoundPage
