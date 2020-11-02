import React, { Component } from "react"
import { getContext } from "../../svg"
import { IShape } from "../../types"

type CircleComponent = {}

type CirlceAttr = {
  id: string
  attr: any
}

type CircleState = {
  ctx?: SVGElement | null | undefined
  paths: CirlceAttr[] | []
}

export default class Circle
  extends Component<CircleComponent>
  implements IShape {
  constructor(props: CircleComponent) {
    super(props)

    this.state = {
      ctx: getContext(),
      paths: [],
    }
    this.renderSaved()
  }

  state: CircleState

  draw(
    attr: any = {
      fill: "none",
      r: "30",
      "stroke-width": "1",
      stroke: "#000000",
      cx: Math.random() * 90 + "%",
      cy: Math.random() * 90 + "%",
    }
  ) {
    const { ctx, paths } = this.state
    const path = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    )
    const cx = Math.random() * 90 + "%"
    const cy = Math.random() * 90 + "%"

    path.setAttribute("cx", attr.cx || cx)
    path.setAttribute("cy", attr.cy || cy)

    for (let k in attr) {
      if (k !== "cx" && k !== "cy") {
        path.setAttribute(k, attr[k])
      }
    }
    const circleId = "circle" + (paths?.length + 1)
    path.id = circleId
    const tmpAttr = { ...attr }

    tmpAttr.cx = attr.cx || cx
    tmpAttr.cy = attr.cy || cy

    const tmp = [...paths]
    tmp.push({ id: circleId, attr: tmpAttr })

    ctx?.appendChild(path)
    this.state = { ...this.state, paths: tmp }

    this.save()
  }

  save() {
    const { paths } = this.state
    const JSONString = JSON.stringify(paths)

    window.localStorage.setItem("circle", JSONString)
  }

  clearSaved() {
    window.localStorage.removeItem("circle")
  }

  getSaved() {
    const rect = window.localStorage.getItem("circle")
    if (rect) {
      return JSON.parse(rect)
    }
    return []
  }

  renderSaved() {
    const savedRect = this.getSaved()

    // console.log(savedRect)
    savedRect.forEach((rect: CirlceAttr) => {
      this.draw(rect.attr)
    })
  }
  render() {
    return <></>
  }
}
