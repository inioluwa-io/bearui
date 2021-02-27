import React from "react"
import {
  Card,
  Container,
  FlexColumn,
  FlexRow,
  LinkButton,
  Switch,
} from "@bearui/ui"
import styled from "styled-components"

const FAQContainer: any = styled(Container)`
  .heading {
    h3,
    p {
      text-align: center;
    }
  }
  .plan-switch {
    font-weight: 500;
  }
  .plans {
    @media (min-width: 768px) {
      margin-top: 50px;
    }
    strong {
      font-size: 2.5rem;
    }
    li {
      margin-left: 20px;
      list-style-type: circle;
      margin-bottom: 15px;
      font-size: 15px;
    }

    .plan-card {
      &:nth-child(2) {
        @media (min-width: 768px) {
          transform: translateY(-40px);
        }
        p,
        li {
          color: #fff;
        }
      }
    }
  }
`

const FAQ: React.FC = () => {
  return (
    <FAQContainer>
      <Card xsCol="12" withBackground={false}>
        <FlexRow align="center" className="heading">
          <FlexColumn align="center" gap="40px">
            <FlexColumn align="center" gap="10px">
              <h3>FAQ</h3>
              <p>
                We have several powerful plans to showcase your business and get
                discovered. Everything you need.
              </p>
            </FlexColumn>
            <FlexRow align="center" className="plan-switch">
              <p>Bill Monthly</p>
              <Switch color="primary" active={true} />
              <p>Bill Annually</p>
            </FlexRow>
          </FlexColumn>
        </FlexRow>
      </Card>
      <Card xsCol="12" withBackground={false} className="plans">
        <FlexRow align="center" position="top">
          <Card lgCol="3" mdCol="4" xsCol="12" className="plan-card">
            <h4>Basic</h4>
            <ul>
              <li>Upload video with HD Resolution</li>
              <li>Attachment and Post Scheduling</li>
              <li>Set your rates</li>
              <li>Advanced Statistics</li>
            </ul>
            <p>
              <sup>$</sup> <strong>0</strong> /<sub>month</sub>
            </p>
            <FlexRow align="stretch">
              <LinkButton to="#" background="success">
                Current Plan
              </LinkButton>
            </FlexRow>
          </Card>
          <Card
            textColor="#fff"
            lgCol="3"
            mdCol="4"
            xsCol="12"
            background="primary"
            className="plan-card"
          >
            <h4>Pro</h4>
            <ul>
              <li>Upload video with HD Resolution</li>
              <li>Attachment and Post Scheduling</li>
              <li>Set your rates</li>
              <li>Advanced Statistics</li>
            </ul>
            <p>
              <sup>$</sup> <strong>35</strong> /<sub>month</sub>
            </p>
            <FlexRow align="stretch">
              <LinkButton background="white" to="#" textColor="#222">
                Try 1 month
              </LinkButton>
            </FlexRow>
          </Card>
          <Card lgCol="3" mdCol="4" xsCol="12" className="plan-card">
            <h4>Premium</h4>
            <ul>
              <li>Upload video with HD Resolution</li>
              <li>Attachment and Post Scheduling</li>
              <li>Set your rates</li>
              <li>Advanced Statistics</li>
            </ul>
            <p>
              <sup>$</sup> <strong>70</strong> /<sub>month</sub>
            </p>
            <FlexRow align="stretch">
              <LinkButton to="#">Upgrade</LinkButton>
            </FlexRow>
          </Card>
        </FlexRow>
      </Card>
    </FAQContainer>
  )
}
export default FAQ
