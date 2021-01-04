import React, { useState, cloneElement,useEffect, ReactElement } from "react"
import styled from "styled-components"
import { FlexRow } from "../layout"
import { RadioGroupComponent, RadioComponent } from "../types"

const RadioGroupContainer = styled(FlexRow)``

const RadioGroup: React.FC<RadioGroupComponent> = ({
  children,
  defaultSelected,
  onChecked,
  ...props
}) => {
  const childrenNodes = Array.from(children as ReactElement<RadioComponent>[])
  const [checkedIndex, setCheckedIndex] = useState<number>(0)

  useEffect(() => {
    if (defaultSelected) {
      const index = childrenNodes.findIndex(
        child => child.props.value === defaultSelected
      )
      setCheckedIndex(index)
    }
  }, [defaultSelected])
  
  const getInitialCheckedIndex = (children: ReactElement[]): number => {
    let checkedIndex

    if (defaultSelected) {
      return children.findIndex(child => child.props.value === defaultSelected)
    }

    for (let i = 0; i < children.length; i++) {
      if (!children[i].props.disabled) {
        checkedIndex = i
        break
      }
    }

    return checkedIndex
  }

  const getCheckedIndex = (value): number => {
    const index = childrenNodes.findIndex(child => child.props.value === value)

    if (index === undefined) {
      return -1
    } else {
      if (index > -1 && !childrenNodes[index].props.disabled) {
        return index
      } else {
        return getInitialCheckedIndex(childrenNodes)
      }
    }
  }

  const handleOnCheck = value => {
    const index = getCheckedIndex(value)
    const child = childrenNodes[index]
    setCheckedIndex(index)
    onChecked && onChecked(child.props.value)
  }
  const renderChild = (child, idx: number, checked: boolean): any => {
    return cloneElement(child, {
      key: idx,
      checked,
      last: childrenNodes.length - 1,
      onCheck: handleOnCheck,
      ...child.props,
    })
  }

  return (
    <RadioGroupContainer {...props}>
      {childrenNodes?.map((child, idx: number) =>
        renderChild(child, idx, idx === checkedIndex)
      )}
    </RadioGroupContainer>
  )
}

export default RadioGroup
