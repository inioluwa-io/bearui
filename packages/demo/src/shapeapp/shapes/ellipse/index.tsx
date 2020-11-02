import React, { Component } from "react"
import { getContext } from "../../svg"
import { IShape } from "../../types"

type EllipseComponent = {}

type EllipseAttr = {
  id: string
  attr: any
}

type EllipseState = {
  ctx?: SVGElement | null | undefined
  paths: EllipseAttr[] | []
}

export default class Ellipse
  extends Component<EllipseComponent>
  implements IShape {
  constructor(props: EllipseComponent) {
    super(props)

    this.state = {
      ctx: getContext(),
      paths: [],
    }
    this.renderSaved()
  }

  state: EllipseState

  draw(
    attr: any = {
      fill: "none",
      rx: "50",
      ry: "20",
      "stroke-width": "1",
      stroke: "#000000",
    }
  ) {
    const { ctx, paths } = this.state
    const path = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "ellipse"
    ) as SVGEllipseElement

    const cx = Math.random() * 90 + "%"
    const cy = Math.random() * 90 + "%"

    path.setAttribute("cx", attr.cx || cx)
    path.setAttribute("cy", attr.cy || cy)

    for (let k in attr) {
      path.setAttribute(k, attr[k])
    }
    const ellipseId = "ellipse" + (paths?.length + 1)
    path.id = ellipseId
    const tmpAttr = { ...attr }

    tmpAttr.cx = attr.cx || cx
    tmpAttr.cy = attr.cy || cy

    const tmp = [...paths]
    tmp.push({ id: ellipseId, attr: tmpAttr })

    ctx?.appendChild(path)

    this.state = { ...this.state, paths: tmp }

    this.save()
  }

  save() {
    const { paths } = this.state
    const JSONString = JSON.stringify(paths)

    window.localStorage.setItem("ellipse", JSONString)
  }

  clearSaved() {
    window.localStorage.removeItem("ellipse")
  }

  getSaved() {
    const rect = window.localStorage.getItem("ellipse")
    if (rect) {
      return JSON.parse(rect)
    }
    return []
  }

  renderSaved() {
    const savedRect = this.getSaved()

    // console.log(savedRect)
    savedRect.forEach((rect: EllipseAttr) => {
      this.draw(rect.attr)
    })
  }
  render() {
    return <></>
  }
}
