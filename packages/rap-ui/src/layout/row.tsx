import React from "react"
import styled from "styled-components"

const RowContainer: any = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;

  > .rap-card {
    margin: 10px;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  @media (max-width: 441px) {
    margin: 0;

    > .rap-card {
      margin: 0.5px 0;
    }
  }
`

const Row: React.FC = ({ children }) => {
  return <RowContainer className="row">{children}</RowContainer>
}

export default Row
