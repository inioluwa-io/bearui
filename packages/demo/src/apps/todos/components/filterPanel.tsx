import {
  mdiBuffer,
  mdiInformation,
  mdiStar,
  mdiCheck,
  mdiDelete,
} from "@mdi/js"
import Icon from "@mdi/react"
import { FlexColumn, FlexRow } from "@bearui/ui"
import React, { Dispatch, SetStateAction } from "react"
import { Filter } from "../types"

const FilterPanel: React.FC<{
  selectedFilter: Filter | ""
  setSelectedFilter: Dispatch<SetStateAction<Filter | "">>
}> = ({ setSelectedFilter, selectedFilter }) => {
  return (
    <div className="dsk-filter">
      <FlexColumn>
        <h5>Filters</h5>
        <button
          onClick={() => {
            setSelectedFilter("")
          }}
          className={selectedFilter === "" ? "active flt" : "flt"}
        >
          <FlexRow gap="10px">
            <Icon path={mdiBuffer} size={1} />
            <span>All</span>
          </FlexRow>
        </button>
        <button
          onClick={() => {
            setSelectedFilter("important")
          }}
          className={selectedFilter === "important" ? "active flt" : "flt"}
        >
          <FlexRow gap="10px">
            <Icon path={mdiInformation} size={0.9} />
            <span>Important</span>
          </FlexRow>
        </button>
        <button
          onClick={() => {
            setSelectedFilter("starred")
          }}
          className={selectedFilter === "starred" ? "active flt" : "flt"}
        >
          <FlexRow gap="10px">
            <Icon path={mdiStar} size={0.9} />
            <span>Starred</span>
          </FlexRow>
        </button>
        <button
          onClick={() => {
            setSelectedFilter("completed")
          }}
          className={selectedFilter === "completed" ? "active flt" : "flt"}
        >
          <FlexRow gap="10px">
            <Icon path={mdiCheck} size={0.9} />
            <span>Completed</span>
          </FlexRow>
        </button>
        <button
          onClick={() => {
            setSelectedFilter("trashed")
          }}
          className={selectedFilter === "trashed" ? "active flt" : "flt"}
        >
          <FlexRow gap="10px">
            <Icon path={mdiDelete} size={0.9} />
            <span>Trashed</span>
          </FlexRow>
        </button>
      </FlexColumn>
    </div>
  )
}

export default FilterPanel
