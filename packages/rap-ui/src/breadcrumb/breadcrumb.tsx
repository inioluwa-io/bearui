import React from "react"
import { Link } from "react-router-dom"
import { BreadcrumbComponent, BreadcrumbItem } from "../types"
import styled, { StyledComponent } from "styled-components"
import { useTheme, useThemeMode } from "../theme"
import Icon from "@mdi/react"
import * as path from "@mdi/js"

const BreadcrumbDiv: StyledComponent<
  "ul",
  any,
  { color: string; textColor: string; seperatorColor: string }
> = styled.ul`
  display: flex;
  jusitfy-content: center;
  flex-wrap: wrap;

  li {
    display: flex;
    font-size: 16px;
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
      color: ${(props: any) => props.seperatorColor};
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
  seperator = "/",
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
  const seperatorColor: any = mode === "lightmode" ? "#222" : "#f4f4f4"
  return (
    <BreadcrumbDiv
      color={colors[color] || color}
      textColor={seperatorColor}
      seperatorColor={seperatorColor}
    >
      {item.map((list: BreadcrumbItem, idx: number) => (
        <li key={idx}>
          {idx < item.length - 1 ? (
            <>
              <Link to={list.to}>{list.name}</Link>{" "}
              <span>
                {seperator.length > 1 ? (
                  <Icon
                    path={path[seperator]}
                    size={0.7}
                    color={seperatorColor}
                  />
                ) : (
                  seperator
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
