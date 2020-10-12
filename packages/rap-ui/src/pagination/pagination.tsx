import React, { useEffect, useState, useCallback } from "react"
import { PagnitionComponent } from "../types"
import styled from "styled-components"
import { FlexRow } from "../layout"
import Icon from "@mdi/react"
import { useTheme, useThemeMode } from "../theme"
import { getColorFromTheme } from "../util"
import * as mdi from "@mdi/js"

const PaginationContainer: any = styled.div`
  font-size: initial;
`

const ControlButton: any = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  background: ${(props: any) => props.backgroundColor};
  width: 31px;
  height: 31px;
  border-radius: 50%;
  transition: background 0.35s ease;

  &:hover:not(.disabled) {
    background: ${(props: any) => props.color};
  }

  &:not(.disabled) {
    cursor: pointer;
  }
`
const PagesContainer: any = styled.div`
  font-size: initial;
  display: flex;
  height: 31px;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 0 2px;
  background: ${(props: any) => props.backgroundColor};
  border-radius: 30px;
`

const PageButton: any = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  transition: background 0.35s ease;
  background: transparent;
  cursor: pointer;

  &:first-child {
    margin-left: -2px;
  }

  &:last-child {
    margin-right: -2px;
  }

  &.active {
    background: ${(props: any) => props.color};
    font-weight: 500;
    font-size: 15px;
    color: #ffffff;
  }
`

const Pagination: React.FC<PagnitionComponent> = ({
  perPage = 5,
  documentLength,
  onPageGoto,
  color = "primary",
  max = 9,
  prevIcon = "mdiChevronLeft",
  nextIcon = "mdiChevronRight",
  ...props
}) => {
  if (typeof documentLength !== "number") {
    Error(
      `Expected documentLenght to be a number but ${typeof documentLength} given.`
    )
  }
  const [currentPage, setCurrentPage] = useState<number>(1)
  let totalPages = Math.floor(documentLength / perPage)
  if (documentLength % perPage) {
    totalPages += 1
  }
  const theme = useTheme()
  const [themeMode] = useThemeMode()
  let textColor = themeMode === "darkmode" ? "#f4f4f4" : "#444444"
  let themeColor = getColorFromTheme(color, theme)
  let backgroundColor =
    themeMode === "darkmode" ? "rgba(255,255,255,.15)" : "rgba(0,0,0,.07)"

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
    [documentLength, perPage]
  )

  useEffect(() => {
    gotoPage(1)
  }, [gotoPage, documentLength])

  const handleNext = () => {
    if (currentPage < totalPages) {
      gotoPage(currentPage + 1)
    }
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      gotoPage(currentPage - 1)
    }
  }

  const createPages = useCallback(
    (length: number): number[] => {
      let pages = []
      if (max < 5 || !(max % 2)) {
        max = 9
      }

      if (length < max) {
        for (let i = 1; i <= length; i++) {
          pages.push(i)
        }
      } else {
        let mid = Math.floor(max / 2)
        if (currentPage > mid) {
          let difference = mid - 2
          let secondMid = length + mid - max
          if (currentPage < secondMid) {
            pages.push(1)
            pages.push("...")
            for (
              let i = currentPage - difference;
              i <= difference + currentPage;
              i++
            ) {
              pages.push(i)
            }
            if (max > 3) {
              pages.push("...")
            }
            pages.push(length)
          } else {
            pages.push(1)
            pages.push("...")
            for (let i = secondMid - difference; i <= length; i++) {
              pages.push(i)
            }
          }
        } else {
          for (let i = 1; i < max + 1; i++) {
            if (i === max - 1) {
              pages.push("..")
            } else if (i === max) {
              pages.push(length)
            } else {
              pages.push(i)
            }
          }
        }
      }
      return pages
    },
    [currentPage, max]
  )

  const pages = createPages(totalPages)

  return (
    <PaginationContainer {...props}>
      <FlexRow align="left" gap="12px">
        <ControlButton
          onClick={handlePrev}
          color={themeColor}
          backgroundColor={backgroundColor}
          className={currentPage === 1 ? "disabled" : ""}
        >
          <Icon path={mdi[prevIcon]} color={textColor} size={0.75} />
        </ControlButton>
        {!!pages.length && (
          <PagesContainer backgroundColor={backgroundColor}>
            {pages.map((page: number, idx: number) => (
              <PageButton
                key={idx}
                backgroundColor={backgroundColor}
                color={themeColor}
                onClick={() => {
                  if (typeof page === "number") {
                    gotoPage(+page)
                  }
                }}
                className={currentPage === +page ? "active" : ""}
              >
                {page}
              </PageButton>
            ))}
          </PagesContainer>
        )}
        <ControlButton
          onClick={handleNext}
          color={themeColor}
          className={currentPage === totalPages ? "disabled" : ""}
          backgroundColor={backgroundColor}
        >
          <Icon path={mdi[nextIcon]} color={textColor} size={0.75} />
        </ControlButton>
      </FlexRow>
    </PaginationContainer>
  )
}
export default Pagination
