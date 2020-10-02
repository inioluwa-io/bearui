import React, { useEffect, useState, useCallback } from "react"
import { PagnitionComponent } from "../types"

const Pagination: React.FC<PagnitionComponent> = ({
  perPage = 5,
  documentLength,
  onPageGoto,
  ...props
}) => {
  if (typeof documentLength !== "number") {
    Error(
      `Expected documentLenght to be a number but ${typeof documentLength} given.`
    )
  }
  const [currentPage, setCurrentPage] = useState<number>(1)

  const gotoPage = useCallback(
    (page: number): void => {
      let startIndex: number = perPage * (page - 1)
      let endIndex: number = startIndex + perPage
      if (endIndex > documentLength) {
        endIndex = documentLength
      }
      if (startIndex > documentLength) {
        let remainder = documentLength % perPage
        startIndex = documentLength - remainder
        endIndex = documentLength
      }
      onPageGoto(startIndex, endIndex)
      setCurrentPage(page)
    },
    [documentLength, perPage, onPageGoto]
  )

  useEffect(() => {
    gotoPage(1)
  }, [perPage])

  return <></>
}
export default Pagination
