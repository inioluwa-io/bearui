import React from "react"
import styled from "styled-components"

const FormControlContainer: any = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  ${(props: any) => props.isEmail && "margin-bottom:0 !important"}

  > div {
    width: 100% !important;
  }
`

const FormControl: React.FC<any> = ({ children }) => {
  return (
    <FormControlContainer isEmail={children.props.type === "email"}>
      {children}
    </FormControlContainer>
  )
}
export default FormControl
