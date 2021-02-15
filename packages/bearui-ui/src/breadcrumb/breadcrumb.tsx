import React from "react"
import { Link } from "react-router-dom"
import { BreadcrumbComponent, BreadcrumbItem } from "../types"
import styled, { StyledComponent } from "styled-components"
import { useTheme, useThemeMode } from "../theme"
import Icon from "@mdi/react"

const BreadcrumbDiv: StyledComponent<
  "ul",
  any,
  { color: string; textColor: string; separatorColor: string }
> = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  li {
    display: flex;
    font-size: 14px;
    align-items: flex-end;


    a {
      text-decoration: none;
      color: ${(props: any) => props.color};
      display: flex;
      justify-content: center;
      align-items: center;

      svg path {
        fill: ${(props: any) => props.color} !important;
      }

      &:not(:first-child) {
      }
    }

    span {
      margin: 0 7px;
      color: ${(props: any) => props.separatorColor};
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        margin: 0 -4px;
      }
    }
    &:last-child {
      color: ${(props: any) => props.textColor};
    }
  }
`

const Breadcrumb: React.FC<BreadcrumbComponent> = ({
  item,
  color = "primary",
  separator = "/",
}) => {
  if (!(item instanceof Array)) {
    throw new Error(`Required item to be an array but got ${typeof item}`)
  }
  if (!item.length) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("Item is required")
    }
  }
  const { colors } = useTheme()
  const [mode] = useThemeMode()
  if (color === "dark") {
    color = mode === "lightmode" ? "#222" : "#f4f4f4"
  }
  const separatorColor: any = mode === "lightmode" ? "#222" : "#f4f4f4"
  return (
    <BreadcrumbDiv
      color={colors[color] || color}
      textColor={separatorColor}
      separatorColor={separatorColor}
    >
      {item.map((list: BreadcrumbItem, idx: number) => (
        <li key={idx}>
          {idx < item.length - 1 ? (
            <>
              <Link to={list.to}>{list.name}</Link>{" "}
              <span>
                {separator.length > 1 ? (
                  <Icon
                    path={separator}
                    size={0.7}
                    color={separatorColor}
                  />
                ) : (
                  separator
                )}
              </span>
            </>
          ) : (
            list.name
          )}
        </li>
      ))}
    </BreadcrumbDiv>
  )
}
export default Breadcrumb
