import React, { useState, useEffect, useCallback } from "react"
import styled, { StyledComponent } from "styled-components"
import { DatatableColumns, DatatableRule, DataListComponent } from "../types"
import { useTheme, useThemeMode } from "../theme"
import { mdiArrowUp, mdiDotsHorizontal } from "@mdi/js"
import Icon from "@mdi/react"
import { rgba, darken } from "polished"
import { FlexColumn, FlexRow } from "../layout"
import { Input } from "../input"
import { Button } from "../button"
import { Dropdown } from "../dropdown"
import { Pagination } from "../pagination"
import { PaginationIndexes } from "../types"
import { Checkbox } from "../checkbox"

type TableBodyStyle = {
  background: string
  cardBackground: string
  primaryColor: string
}

const Table: StyledComponent<"table", any, any> = styled.table`
  font-size: 14px;
  border-spacing: 0 1.3rem;
  border-collapse: separate;
  width: calc(100% - 4px);
  padding: 2px;
  white-space: nowrap;
  padding-top: ${(props: any) => props.paddingTop * 25}px;

  .dl-opt {
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 50%;
    transition: all 0.25s;

    &:hover,
    &:focus {
      background: rgba(0, 0, 0, 0.25);
    }

    button {
      width: 100%;
    }
  }
`

// const CheckBox: StyledComponent<"input", any> = styled.input`
//   cursor: pointer;
// `

const DataListOption: StyledComponent<"label", any> = styled.label`
  cursor: pointer;
  background: transparent;
  outline: none;
  border: none;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
`

const DataListFilter: StyledComponent<"div", any, any> = styled.div`
  #datalist-search {
    background: ${(props: any) => props.background};
    box-shadow: 0 0 25px -20px #242424;
  }

  #datalist-view {
    font-size: 14px;
    background: ${(props: any) => props.background};
    box-shadow: 0 0 25px -20px #242424;
    border: 1px solid transparent;

    .dp-trgt {
      padding: 9.5px 12px;
    }

    &:focus,
    &:hover {
      border: 1px solid ${(props: any) => props.primaryColor};
    }
  }
`

const TableHead: StyledComponent<"thead", any> = styled.thead`
  position: relative;
  tr.select {
    .sc-checkbox {
      opacity: 1;
    }
    &.selected .sc-checkbox {
      display: block;
    }
    th {
      position: relative;

      &:first-child {
        padding-left: 35px;
      }
    }
  }
  th {
    padding: 15px 20px;
    padding-right: 15px;
    text-align: left;
    font-size: 12px;
    position: relative;

    :not(.select-box) svg {
      opacity: 0;
      transition: all 0.35s;
      position: absolute;
      top: 50%;
      transform-origin: top;
      transform: translateY(-50%);
    }

    &.rap-asc,
    &.rap-desc {
      svg {
        opacity: 1;
      }
    }

    &.rap-asc {
      svg {
        transform: rotate(0deg) translateY(-50%);
      }
    }
    &.rap-desc {
      svg {
        transform: rotate(180deg) translateY(-50%);
      }
    }

    button:not(.sc-checkbox) {
      background: transparent;
      text-transform: uppercase;
      outline: none;
      border: none;
      font-size: inherit;
      letter-spacing: 0.8px;
      cursor: pointer;
      font-weight: inherit;
      font-family: inherit;
      position: relative;
    }
  }
`
const TableBody: StyledComponent<"tbody", any, TableBodyStyle> = styled.tbody`
  tr {
    text-align: left;
    cursor: pointer;
    transition: all 0.35s ease;
    position: relative;
    border-radius: 0.3rem;
    background: ${(props: any) => props.cardBackground};
    box-shadow: 0 0 25px -20px #242424;

    &:hover {
      box-shadow: 0 0 1px 1px ${(props: any) => props.primaryColor};
      transition: all 0.2s ease;
    }

    &.selected {
      box-shadow: 0 0 1px 1px ${(props: any) => rgba(props.primaryColor, 0.5)} !important;
      background: ${(props: any) => rgba(props.primaryColor, 0.1)};
      transform: unset !important;
      td {
        color: ${(props: any) => props.primaryColor};
        p {
          color: ${(props: any) => props.primaryColor};
        }
      }
    }

    &:hover .rap-checkbox,
    &.selected .rap-checkbox {
      opacity: 1;
    }

    &.select {
      td {
        &:first-child {
          padding-left: 35px;
        }

        .rap-checkbox {
          display: block;
        }
      }
    }

    td {
      text-align: left;
      padding: 17px 20px;
      padding-right: 15px;
      position: relative;
      vertical-align: middle;
      border: 0;

      &:first-child {
        border-top-left-radius: 0.3rem;
        border-bottom-left-radius: 0.3rem;
        border-left: 1px solid transparent;
      }

      &:last-child {
        border-top-right-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;
        border-right: 1px solid transparent;
      }
    }
  }
`
const DataList: React.FC<DataListComponent> = ({
  document,
  columns,
  actionList = [
    {
      color: "primary",
      text: "Edit",
      onClick: value => {
        console.log(value)
      },
    },
    {
      color: "danger",
      text: "Delete",
      onClick: value => {
        console.log(value)
      },
    },
  ],
  uniqueIdentifier = "id",
  renderRule = [],
  defaultSortIndex = 1,
  onRowSelect,
  ...props
}) => {
  const theme = useTheme()
  const [themeMode] = useThemeMode()
  const background: string = theme[themeMode].cardbackground
  const [selected, setSelected] = useState<Map<number | string, boolean>>(
    new Map()
  )
  const check = true
  const [selectAll, setSelectAll] = useState<boolean>(false)
  const [selectedRowsData, setSelectedRowsData] = useState<any[]>([])
  const [searchValue, setSearchValue] = useState<string>("")

  const sortDocumentASC = (selector: string, unsortedData: any[]): any[] => {
    const merge = (left, right) => {
      let resultArray = [],
        leftIndex = 0,
        rightIndex = 0
      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex][selector] < right[rightIndex][selector]) {
          resultArray.push(left[leftIndex])
          leftIndex++
        } else {
          resultArray.push(right[rightIndex])
          rightIndex++
        }
      }

      return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex))
    }

    const mergeSort = (unsortedData: any[]): any[] => {
      if (unsortedData.length <= 1) {
        return unsortedData
      }

      const middle = Math.floor(unsortedData.length / 2)

      const left = unsortedData.slice(0, middle)
      const right = unsortedData.slice(middle)

      return merge(mergeSort(left), mergeSort(right))
    }
    return mergeSort(unsortedData)
  }
  const [data, setData] = useState<any[]>(
    sortDocumentASC(columns[defaultSortIndex].selector, document)
  )
  const [filteredData, setfilteredData] = useState<any[]>(document)
  const [viewLength, setViewLength] = useState<number>(5)
  const [toggleSortIndex, setToggleSortIndex] = useState<number>(
    defaultSortIndex
  )
  const textColor: string = themeMode === "darkmode" ? "#f4f4f4" : "#444444"
  const [paginationIndexes, setPaginationIndexes] = useState<PaginationIndexes>(
    { startIndex: 0, endIndex: data.length }
  )
  const primaryColor: any = theme.colors.primary

  const throwErr = (message: string) => {
    throw new Error(`${message}`)
  }

  const sortDocumentDESC = (selector: string, unsortedData: any[]): any[] => {
    return sortDocumentASC(selector, unsortedData).reverse()
  }

  const toggleCheck = (idx: number | string): Map<number | string, boolean> => {
    return setCheck(idx, !selected.get(idx))
  }

  const setCheck = (
    idx: number | string,
    value: boolean
  ): Map<number | string, boolean> => {
    let prevState: Map<number | string, boolean> = new Map(selected)
    prevState.set(idx, value)
    // deselect all if check is false
    if (!!!prevState.get(idx)) {
      setSelectAll(false)
    } else {
      if (prevState.size === data.length) {
        // find if a value is false then deselectAll else select all
        const checkedValues: boolean[] = Array.from(prevState.values())
        setSelectAll(!checkedValues.includes(false))
      }
    }
    setSelected(prevState)
    onRowSelect(getSelectorRowData(prevState))
    return prevState
  }

  const toggleSelectAll = useCallback(() => {
    let prevState: Map<number | string, boolean> = new Map(selected)
    // selecte all

    if (!selectAll) {
      filteredData.forEach(itemData => {
        prevState.set(itemData[uniqueIdentifier], true)
      })
      setSelected(prevState)
      onRowSelect(getSelectorRowData(prevState))
      setSelectAll(true)
    }
    // deselect all
    else {
      prevState.clear()
      setSelected(prevState)
      onRowSelect(getSelectorRowData(prevState))
      setSelectAll(false)
    }
  }, [selected, paginationIndexes])

  const toggleSort = (e: any, selector: any, idx: number) => {
    setToggleSortIndex(idx)

    if (e.target.parentElement.classList.contains("rap-asc")) {
      setfilteredData(sortDocumentDESC(selector, filteredData))
      e.target.parentElement.classList.remove("rap-asc")
      e.target.parentElement.classList.add("rap-desc")
    } else {
      setfilteredData(sortDocumentASC(selector, filteredData))
      e.target.parentElement.classList.remove("rap-desc")
      e.target.parentElement.classList.add("rap-asc")
    }
  }

  const getSelectorRenderRule = (selector: string): DatatableRule => {
    return renderRule.find(item => item.selector === selector)
  }

  const renderColumnData = (selector: string, data: any) => {
    if (!renderRule) return data[selector]
    const selectorRule: DatatableRule = getSelectorRenderRule(selector)

    if (selectorRule) {
      return selectorRule.onRender(data)
    } else {
      return data[selector]
    }
  }

  const getSelectorRowData = (mapData: Map<number | string, boolean>): any => {
    const mapToArr: [string | number, boolean][] = Array.from(mapData)
    let selectedRows = []
    for (let i = 0; i < mapToArr.length; i++) {
      // get the id from map converted to array
      const rowMapIdx: string | number = mapToArr[i][0]
      const rowMapData: boolean = mapToArr[i][1]
      if (rowMapData) {
        // find match of id in sorted data and push to array
        selectedRows.push(
          data.find((rowData: any) => +rowData[uniqueIdentifier] === +rowMapIdx)
        )
      }
    }
    setSelectedRowsData(selectedRows)
    return selectedRows
  }

  const checkSearch = useCallback(
    (dataItem): boolean => {
      let tempData = []
      let found = false
      if (searchValue.length) {
        for (let i = 0; i < columns.length; i++) {
          // if text is found return true
          if (found) {
            tempData.push(dataItem)
            return true
          }
          const dataItemContent = dataItem[columns[i].selector]
          if (typeof dataItemContent !== "string") {
            return false
          }
          found = dataItemContent
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        }
        return false
      }
      tempData.push(dataItem)
      return true
    },
    [searchValue]
  )

  const arrayLikeMap = useCallback(
    (arr, map: Map<number | string, boolean>): boolean => {
      const mapToArr: any[] = Array.from(map)

      let similar = true
      if (arr.length === arr.length && arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
          const valueExists = mapToArr.find(
            item => item[0] === arr[i][uniqueIdentifier]
          )
          if (valueExists === undefined || !valueExists) {
            return false
          }
        }
      } else {
        similar = false
      }
      return similar
    },
    [filteredData]
  )

  const handleFilterData = useCallback(() => {
    const tmp = data.filter((dataItem: any) => checkSearch(dataItem))
    console.log(tmp)
    setfilteredData(tmp)
    if (selectAll && !arrayLikeMap(tmp, selected)) {
      setSelectAll(false)
    } else if (!selectAll && arrayLikeMap(tmp, selected)) {
      setSelectAll(true)
    }
    getSelectorRowData(selected)
  }, [checkSearch])

  useEffect(() => {
    setData(sortDocumentASC(columns[defaultSortIndex].selector, data))
    handleFilterData()
  }, [handleFilterData])

  return (
    <FlexColumn style={{ width: "100%" }} {...props}>
      <FlexColumn>
        <DataListFilter
          background={theme[themeMode].cardbackground}
          primaryColor={primaryColor}
        >
          <FlexRow align="right" position="center">
            <Dropdown
              id="datalist-view"
              listener="click"
              list={[
                <DataListOption
                  onClick={() => {
                    setViewLength(5)
                  }}
                >
                  5
                </DataListOption>,
                <DataListOption
                  onClick={() => {
                    setViewLength(10)
                  }}
                >
                  10
                </DataListOption>,
                <DataListOption
                  onClick={() => {
                    setViewLength(15)
                  }}
                >
                  15
                </DataListOption>,
                <DataListOption
                  onClick={() => {
                    setViewLength(20)
                  }}
                >
                  20
                </DataListOption>,
              ]}
            >
              1- {viewLength} of {document.length}
            </Dropdown>
            <Input
              icon="mdiMagnify"
              type="text"
              clearButton
              id="datalist-search"
              onInputChange={value => {
                setSearchValue(value)
              }}
              placeholder="Search"
              color="primary"
            />
          </FlexRow>
        </DataListFilter>

        {/* When row selected show actions for all */}
        <FlexRow align="stretch">
          <p>fj</p>
          {!!selectedRowsData.length && (
            <FlexRow style={{ width: "fit-content" }}>
              {actionList.map((actionItem, idx: number) => (
                <Button
                  key={idx}
                  background={actionItem.color}
                  onClick={() => {
                    actionItem.onClick(selectedRowsData)
                  }}
                >
                  {actionItem.text}
                </Button>
              ))}
            </FlexRow>
          )}
        </FlexRow>
      </FlexColumn>
      <div
        style={{ overflow: "hidden", width: "100%", overflowX: "auto" }}
        {...props}
      >
        <Table paddingTop={actionList.length}>
          <TableHead id="rap-t-hd">
            <tr
              className={
                check ? (selected.size ? "select selected" : "select") : ""
              }
            >
              <th className="select-box">
                {check && (
                  <Checkbox
                    active={selectAll}
                    onClick={() => {
                      toggleSelectAll()
                    }}
                  />
                )}
              </th>

              {columns.map((item: DatatableColumns, idx: number) => (
                <th
                  key={idx}
                  className={idx === +toggleSortIndex ? "rap-asc" : ""}
                >
                  {item.name && item.selector ? (
                    <>
                      <button
                        onClick={e => {
                          toggleSort(e, item.selector, idx)
                        }}
                      >
                        {item.name}
                      </button>
                      <Icon
                        path={mdiArrowUp}
                        color={themeMode === "lightmode" ? "#222" : "#ffffff"}
                        size={0.55}
                      />
                    </>
                  ) : (
                    throwErr(
                      `Columns must have properties 'name' and 'selector' in array of objects`
                    )
                  )}
                </th>
              ))}
              {!!actionList.length && <th>ACTION</th>}
            </tr>
          </TableHead>
          <TableBody
            background={darken(0.075, background)}
            cardBackground={background}
            primaryColor={primaryColor}
          >
            {filteredData
              .slice(paginationIndexes.startIndex, paginationIndexes.endIndex)
              .map((dataItem: any, idx: number) => {
                return (
                  <tr
                    key={data.length - idx}
                    className={
                      check
                        ? selected.get(dataItem[uniqueIdentifier])
                          ? "select selected"
                          : "select"
                        : ""
                    }
                  >
                    <td
                      style={{ fontSize: "12px" }}
                      onClick={(e: any) => {
                        if (
                          e.target.parentElement[uniqueIdentifier] !==
                          "rap-cb-" + idx
                        ) {
                          toggleCheck(dataItem[uniqueIdentifier])
                        }
                      }}
                    >
                      {check && (
                        <Checkbox
                          id={"rap-cb-" + idx}
                          active={!!selected.get(dataItem[uniqueIdentifier])}
                          onClick={() => {
                            toggleCheck(dataItem[uniqueIdentifier])
                          }}
                        />
                      )}
                    </td>
                    {columns.map((column: any, idx: number) => (
                      <td
                        key={idx}
                        onClick={(e: any) => {
                          if (
                            e.target.parentElement[uniqueIdentifier] !==
                            "rap-cb-" + idx
                          ) {
                            toggleCheck(dataItem[uniqueIdentifier])
                            // onRowSelect(selectedRowsData)
                          }
                        }}
                      >
                        {renderColumnData(column.selector, dataItem)}
                      </td>
                    ))}
                    {!!actionList.length && (
                      <td>
                        <Dropdown
                          className="dl-opt"
                          listener="click"
                          showIcon={false}
                          list={actionList.map((actionItem, idx: number) => (
                            <Button
                              size="sm"
                              key={idx}
                              background={actionItem.color}
                              onClick={() => {
                                actionItem.onClick(dataItem)
                              }}
                            >
                              {actionItem.text}
                            </Button>
                          ))}
                        >
                          <Icon
                            path={mdiDotsHorizontal}
                            size={0.85}
                            color={textColor}
                          />
                        </Dropdown>
                      </td>
                    )}
                  </tr>
                )
              })}
          </TableBody>
        </Table>
      </div>
      <FlexRow align="right">
        <Pagination
          perPage={viewLength}
          documentLength={filteredData.length}
          onPageGoto={(startIndex, endIndex) => {
            setPaginationIndexes({ startIndex, endIndex })
          }}
        />
      </FlexRow>
    </FlexColumn>
  )
}
export default DataList
