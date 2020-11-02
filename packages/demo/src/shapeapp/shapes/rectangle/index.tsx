import React, { Component } from "react"
import { getContext } from "../../svg"
import { IShape } from "../../types"

type RectangleComponent = {}

type RectAttribute = {
  id: string
  attr: any
}

type RectangleState = {
  ctx?: SVGElement | null | undefined
  paths: RectAttribute[] | []
}

export default class Rectangle
  extends Component<RectangleComponent>
  implements IShape {
  constructor(props: RectangleComponent) {
    super(props)

    this.state = {
      ctx: getContext(),
      paths: [],
    }
    this.renderSaved()
  }

  state: RectangleState

  draw(
    attr: any = {
      fill: "none",
      "stroke-width": "1px",
      stroke: "#000000",
    }
  ) {
    const { ctx, paths } = this.state
    const path = document.createElementNS("http://www.w3.org/2000/svg", "rect")

    const x = Math.random() * 90 + "%"
    const y = Math.random() * 90 + "%"

    path.setAttribute("x", attr.x || x)
    path.setAttribute("y", attr.y || y)

    path.setAttribute("width", "" + 100 * +attr.length)
    path.setAttribute("height", "" + 50 * +attr.length)

    for (let k in attr) {
      if (k !== "width" && k !== "height") {
        path.setAttribute(k, attr[k])
      }
    }
    const rectId = "rect" + (paths?.length + 1)
    path.id = rectId
    const tmpAttr = {...attr}


    tmpAttr.x = attr.x || x
    tmpAttr.y = attr.y || y

    const tmp = [...paths]
    tmp.push({ id: rectId, attr: tmpAttr })

    ctx?.appendChild(path)
    this.state = { ...this.state, paths: tmp }

    this.save()
  }

  save() {
    const { paths } = this.state
    const JSONString = JSON.stringify(paths)

    window.localStorage.setItem("rect", JSONString)
  }

  clearSaved() {
    window.localStorage.removeItem("rect")
  }

  getSaved() {
    const rect = window.localStorage.getItem("rect")
    if (rect) {
      return JSON.parse(rect)
    }
    return []
  }

  renderSaved() {
    const savedRect = this.getSaved()

    // console.log(savedRect)
    savedRect.forEach((rect: RectAttribute) => {
      this.draw(rect.attr)
    })
  }

  render() {
    return <></>
  }
}
