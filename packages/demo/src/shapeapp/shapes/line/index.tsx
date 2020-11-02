import React, { Component } from "react"
import { getContext } from "../../svg"
import { IShape } from "../../types"

type LineComponent = {}

type LineAttr = {
  id: string
  attr: SVGLineElement
}

type LineState = {
  ctx?: SVGElement | null | undefined
  paths: LineAttr[] | []
}

export default class line extends Component<LineComponent> implements IShape {
  constructor(props: LineComponent) {
    super(props)

    this.state = {
      ctx: getContext(),
      paths: [],
    }
    this.renderSaved()
  }

  state: LineState

  draw(
    attr: any = {
      "stroke-width": "1",
      stroke: "#000000",
    }
  ) {
    const { ctx, paths } = this.state
    const path = document.createElementNS("http://www.w3.org/2000/svg", "line")

    for (let k in attr) {
      path.setAttribute(k, attr[k])
    }
    const lineId = "line" + (paths?.length + 1)
    path.id = lineId
    const tmpAttr = { ...attr }

    const tmp = [...paths]
    tmp.push({ id: lineId, attr: tmpAttr })

    ctx?.appendChild(path)
    this.state = { ...this.state, paths: tmp }

    this.save()
  }

  save() {
    const { paths } = this.state
    const JSONString = JSON.stringify(paths)

    window.localStorage.setItem("line", JSONString)
  }

  clearSaved() {
    window.localStorage.removeItem("line")
  }

  getSaved() {
    const rect = window.localStorage.getItem("line")
    if (rect) {
      return JSON.parse(rect)
    }
    return []
  }

  renderSaved() {
    const savedRect = this.getSaved()

    // console.log(savedRect)
    savedRect.forEach((rect: LineAttr) => {
      this.draw(rect.attr)
    })
  }
  render() {
    return <></>
  }
}
